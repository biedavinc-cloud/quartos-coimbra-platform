import { createClientFromRequest } from 'npm:@base44/sdk@0.8.54';

const API = 'https://api.github.com';
const DEFAULT_REPO = 'quartos-coimbra-platform';

const toBase64 = (text) => {
  const bytes = new TextEncoder().encode(String(text));
  let binary = '';
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
};

const gh = (path, token, init = {}) =>
  fetch(`${API}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'quartoscoimbra-superadmin',
      'Content-Type': 'application/json',
    },
    signal: AbortSignal.timeout(15000),
  });

export default async function (req) {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me().catch((e) => (e.status === 401 ? null : Promise.reject(e)));
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });
    if (user.role !== 'admin') return Response.json({ error: 'Forbidden' }, { status: 403 });

    const body = await req.json().catch(() => ({}));
    const repo = String(body.repo || DEFAULT_REPO).trim();
    const branch = String(body.branch || 'main').trim();
    const message = String(body.message || 'chore: update').slice(0, 200);
    const files = (Array.isArray(body.files) ? body.files : [])
      .filter((file) => file && file.path && typeof file.content === 'string')
      .slice(0, 40);

    if (files.length === 0) {
      return Response.json({ error: 'files[] é obrigatório' }, { status: 400 });
    }

    const { accessToken } = await base44.asServiceRole.connectors.getConnection('github');

    const accountRes = await gh('/user', accessToken);
    if (!accountRes.ok) return Response.json({ error: `GitHub ${accountRes.status}` }, { status: 502 });
    const account = await accountRes.json();
    const owner = String(body.owner || account.login).trim();

    const refRes = await gh(`/repos/${owner}/${repo}/git/ref/heads/${branch}`, accessToken);
    if (!refRes.ok) {
      const detail = await refRes.text();
      return Response.json({ error: `GitHub ${refRes.status}`, detail }, { status: 502 });
    }
    const parentSha = (await refRes.json()).object.sha;

    const commitRes = await gh(`/repos/${owner}/${repo}/git/commits/${parentSha}`, accessToken);
    if (!commitRes.ok) return Response.json({ error: `GitHub ${commitRes.status}` }, { status: 502 });
    const baseTree = (await commitRes.json()).tree.sha;

    const entries = [];
    for (const file of files) {
      const blobRes = await gh(`/repos/${owner}/${repo}/git/blobs`, accessToken, {
        method: 'POST',
        body: JSON.stringify({ content: toBase64(file.content), encoding: 'base64' }),
      });
      if (!blobRes.ok) {
        const detail = await blobRes.text();
        return Response.json({ error: `GitHub ${blobRes.status} sur ${file.path}`, detail }, { status: 502 });
      }
      entries.push({
        path: String(file.path).replace(/^\/+/, ''),
        mode: '100644',
        type: 'blob',
        sha: (await blobRes.json()).sha,
      });
    }

    const treeRes = await gh(`/repos/${owner}/${repo}/git/trees`, accessToken, {
      method: 'POST',
      body: JSON.stringify({ base_tree: baseTree, tree: entries }),
    });
    if (!treeRes.ok) return Response.json({ error: `GitHub ${treeRes.status}` }, { status: 502 });
    const tree = await treeRes.json();

    const newCommitRes = await gh(`/repos/${owner}/${repo}/git/commits`, accessToken, {
      method: 'POST',
      body: JSON.stringify({ message, tree: tree.sha, parents: [parentSha] }),
    });
    if (!newCommitRes.ok) return Response.json({ error: `GitHub ${newCommitRes.status}` }, { status: 502 });
    const newCommit = await newCommitRes.json();

    const updateRes = await gh(`/repos/${owner}/${repo}/git/refs/heads/${branch}`, accessToken, {
      method: 'PATCH',
      body: JSON.stringify({ sha: newCommit.sha, force: false }),
    });
    if (!updateRes.ok) return Response.json({ error: `GitHub ${updateRes.status}` }, { status: 502 });

    return Response.json({
      repo_url: `https://github.com/${owner}/${repo}`,
      branch,
      commit: newCommit.sha,
      message,
      files: entries.map((entry) => entry.path),
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}