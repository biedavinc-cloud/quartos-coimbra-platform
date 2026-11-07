import React, { useEffect, useState } from "react";
import { Check, ExternalLink, CreditCard } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { useLanguage } from "@/lib/i18n";
import { AFRICAN_PSPS } from "@/lib/africanPayments";
import { findCountry } from "@/lib/countries";

const flagList = (codes) =>
  codes
    .map((code) => findCountry(code))
    .filter(Boolean)
    .map((country) => country.flag)
    .join(" ");

export default function SuperAdminPayments() {
  const { t } = useLanguage();
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    base44.entities.PaymentProvider.list({ sort: "sort_order", limit: 50 })
      .then((page) => setProviders(page.items))
      .catch(() => setProviders([]))
      .finally(() => setLoading(false));
  }, []);

  const patch = async (provider, changes) => {
    setProviders((prev) => prev.map((item) => (item.id === provider.id ? { ...item, ...changes } : item)));
    await base44.entities.PaymentProvider.update(provider.id, changes);
  };

  if (loading) {
    return <div className="h-40 rounded-2xl bg-figma-accent animate-pulse" />;
  }

  if (providers.length === 0) {
    return (
      <div className="rounded-2xl bg-figma-accent border border-dashed border-black/15 p-10 text-center">
        <CreditCard size={22} className="mx-auto text-figma-text-1" />
        <p className="mt-3 text-figma-14 text-figma-text-1">{t("Nenhum prestador de pagamento configurado.")}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-figma-24 font-bold font-heading text-figma-secondary">{t("Integrações de pagamento")}</h2>
        <p className="text-figma-14 text-figma-text-1">
          {providers.filter((provider) => provider.enabled).length} / {providers.length} activas · {AFRICAN_PSPS.length} PSP africanos
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {providers.map((provider) => (
          <div key={provider.id} className="flex flex-col gap-3 rounded-2xl bg-figma-accent border border-black/10 p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-figma-secondary text-brand shrink-0">
                  <CreditCard size={18} />
                </span>
                <div>
                  <p className="text-figma-16 font-bold font-heading text-figma-secondary">{provider.name}</p>
                  <p className="text-figma-12 text-figma-text-1 leading-figma-17">{provider.tagline}</p>
                </div>
              </div>
              <button
                onClick={() => patch(provider, { enabled: !provider.enabled })}
                className={`flex items-center gap-1.5 py-1.5 px-3 rounded-full text-figma-12 font-semibold shrink-0 ${
                  provider.enabled ? "bg-green-100 text-green-800" : "bg-black/5 text-figma-text-1"
                }`}
              >
                {provider.enabled && <Check size={13} />}
                {provider.enabled ? t("Desativar") : t("Ativar")}
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-figma-12 text-figma-text-1">
              <span className="py-1 px-2 rounded-full bg-figma-muted">{flagList(String(provider.coverage || "").split(","))}</span>
              <span>{provider.currencies}</span>
              <span>· {provider.settlement}</span>
            </div>

            <div className="flex flex-col gap-1 rounded-xl bg-figma-muted p-3">
              <p className="text-figma-11 font-semibold uppercase tracking-[1px] text-figma-text-1">
                {t("Autenticação")} · <span className="text-figma-secondary">{provider.auth_model || "—"}</span>
              </p>
              <p className="text-figma-12 font-mono break-words text-figma-secondary">{provider.credential_keys || "—"}</p>
              <div className="flex flex-wrap gap-x-3 gap-y-1 text-figma-11 text-figma-text-1">
                {provider.fees_percent != null && <span>{provider.fees_percent}% {t("de frais")}</span>}
                {provider.refund_support && <span>· {t("Remboursement")}</span>}
                {provider.signature_header && <span>· {provider.signature_header}</span>}
                {provider.webhook_path && <span className="truncate">· {provider.webhook_path}</span>}
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              <label className="flex flex-col gap-1">
                <span className="text-figma-11 font-semibold uppercase tracking-[1px] text-figma-text-1">{t("Modo")}</span>
                <select
                  value={provider.mode || "test"}
                  onChange={(e) => patch(provider, { mode: e.target.value })}
                  className="py-2 px-3 rounded-[6px] bg-figma-accent border border-black/10 text-figma-14"
                >
                  <option value="test">{t("Teste")}</option>
                  <option value="live">{t("Produção")}</option>
                </select>
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-figma-11 font-semibold uppercase tracking-[1px] text-figma-text-1">{t("ID de comerciante")}</span>
                <input
                  defaultValue={provider.merchant_id || ""}
                  onBlur={(e) => e.target.value !== (provider.merchant_id || "") && patch(provider, { merchant_id: e.target.value })}
                  placeholder="merchant_xxx"
                  className="py-2 px-3 rounded-[6px] bg-figma-accent border border-black/10 text-figma-14"
                />
              </label>
            </div>

            {provider.docs_url && (
              <a
                href={provider.docs_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-figma-12 font-semibold text-brand-strong hover:underline"
              >
                {t("Documentação")} <ExternalLink size={12} />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}