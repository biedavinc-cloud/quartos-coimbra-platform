import React from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import SiteNavbar from "@/components/site/SiteNavbar";
import SiteFooter from "@/components/site/SiteFooter";
import { useLanguage } from "@/lib/i18n";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function MinhaConta() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-figma-accent w-full overflow-x-clip font-paragraph">
      <SiteNavbar overlay />

      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] lg:h-[100svh] lg:max-h-[900px] bg-figma-border flex flex-col">
        <div className="absolute inset-0 overflow-clip z-0">
          <img
            className="w-full h-full object-cover object-center"
            src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/69c0aee10_965c43c2c_1f0eee41eb2938563ea5e4b99d6cd6686dec1875.png"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.70)_0%,_rgba(0,0,0,0.50)_50%,_rgba(0,0,0,0.80)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(0,0,0,0.60)_0%,_rgba(0,0,0,0.00)_50%,_rgba(0,0,0,0.00)_100%)]" />
        </div>

        <div className="relative z-10 flex-grow flex flex-col justify-center w-full max-w-[1536px] mx-auto px-6 py-16 pt-24 lg:px-[clamp(19px,8.3vw,128px)]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-[800px]"
          >
            <motion.div variants={fadeInUp} className="mb-5">
              <p className="text-figma-12 font-semibold font-paragraph leading-figma-16 tracking-[2.4px] uppercase text-figma-text-2">
                {t("O mercado de quartos para estudantes em Coimbra")}
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="mb-7">
              <h1 className="text-[clamp(48px,5.73vw,88px)] font-bold font-heading leading-[0.9545] text-figma-accent">
                {t("Encontra o teu")} <br />
                <span className="text-[rgba(255,255,255,0.70)]">{t("quarto em Coimbra.")}</span>
              </h1>
            </motion.div>
            <motion.div variants={fadeInUp} className="mb-10">
              <p className="text-figma-18 font-normal font-paragraph leading-figma-29 text-figma-text-6 max-w-[576px]">
                {t("Liga-te a senhorios verificados. Quartos individuais, estúdios e apartamentos perto da Universidade de Coimbra.")}
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => navigate("/quartos")} className="py-3.5 px-7 bg-figma-accent rounded-[6px] hover:bg-opacity-90 transition-colors">
                <p className="text-figma-14 font-semibold font-paragraph leading-figma-20 text-center text-figma-border">
                  {t("Ver Quartos")}
                </p>
              </button>
              <button onClick={() => navigate("/conta")} className="py-3.5 px-7 rounded-[6px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.30)] hover:bg-[rgba(255,255,255,0.1)] transition-colors">
                <p className="text-figma-14 font-semibold font-paragraph leading-figma-20 text-center text-figma-accent">
                  {t("Anunciar Quarto")}
                </p>
              </button>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative z-10 w-full bg-figma-highlight border-t-[1px] border-[rgba(255,255,255,0.10)]">
          <div className="w-full max-w-[1536px] mx-auto flex flex-col md:flex-row px-6 lg:px-0">
            <div className="flex flex-col justify-start items-start gap-0.5 py-5 lg:px-6 w-full md:w-1/3 border-b md:border-b-0 md:border-r-[1px] border-[rgba(255,255,255,0.10)]">
              <p className="text-[clamp(16px,1.95vw,30px)] font-bold font-heading leading-[1.0] text-figma-accent">
                1.200+
              </p>
              <p className="text-figma-11 font-medium font-paragraph leading-figma-16 tracking-[1.1px] uppercase text-figma-text-4 mt-1">
                {t("quartos listados")}
              </p>
            </div>
            <div className="flex flex-col justify-start items-start gap-0.5 py-5 lg:px-6 w-full md:w-1/3 border-b md:border-b-0 md:border-r-[1px] border-[rgba(255,255,255,0.10)]">
              <p className="text-[clamp(16px,1.95vw,30px)] font-bold font-heading leading-[1.0] text-figma-accent">
                Coimbra
              </p>
              <p className="text-figma-11 font-medium font-paragraph leading-figma-16 tracking-[1.1px] uppercase text-figma-text-4 mt-1">
                {t("cidade universitária")}
              </p>
            </div>
            <div className="flex flex-col justify-start items-start gap-0.5 py-5 lg:px-6 w-full md:w-1/3">
              <p className="text-[clamp(16px,1.95vw,30px)] font-bold font-heading leading-[1.0] text-figma-accent">
                {t("Verificado")}
              </p>
              <p className="text-figma-11 font-medium font-paragraph leading-figma-16 tracking-[1.1px] uppercase text-figma-text-4 mt-1">
                {t("por estudantes")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quartos em Destaque */}
      <section id="quartos" className="w-full bg-figma-accent py-16">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          <div className="flex flex-row justify-between items-end gap-3 mb-8">
            <h2 className="text-[clamp(16px,1.95vw,30px)] font-bold font-heading leading-[1.2] text-figma-secondary">
              {t("Quartos em Destaque")}
            </h2>
            <button onClick={() => navigate("/quartos")} className="flex flex-row items-center gap-1 group shrink-0">
              <span className="text-figma-14 font-semibold font-paragraph leading-figma-20 text-figma-secondary">
                {t("Ver todos")}
              </span>
              <div className="w-3.5 h-3.5 relative overflow-clip group-hover:translate-x-1 transition-transform">
                <img className="w-[5px] h-2 absolute top-1 left-[5px]" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/950b7eae2_9e9a8afb3_11_48.svg" alt="Arrow Right" />
              </div>
            </button>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {/* Card 1 */}
            <motion.div variants={fadeInUp} className="flex flex-col bg-figma-muted rounded-[4px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.10)] overflow-clip group cursor-pointer">
              <div className="w-full min-h-[192px] relative overflow-clip">
                <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/3a1ff2a29_0516da52d_9be0e69fcc10b4d8cd3377f76a120a55cc91789b.png" alt="Quarto Individual Luminoso" />
                <div className="absolute top-2 left-2 bg-figma-secondary rounded-[4px] px-2 py-0.5">
                  <p className="text-figma-11 font-semibold font-paragraph leading-figma-16 tracking-[0.3px] uppercase text-figma-accent">
                    {t("Quarto Individual")}
                  </p>
                </div>
              </div>
              <div className="flex flex-col p-4 flex-grow gap-3">
                <div className="flex flex-row justify-between items-start gap-2">
                  <h3 className="text-figma-18 font-bold font-heading leading-figma-22 text-figma-secondary flex-1">
                    {t("Quarto Individual Luminoso — Alta de Coimbra")}
                  </h3>
                  <div className="flex flex-col items-end shrink-0">
                    <p className="text-figma-20 font-bold font-paragraph leading-figma-28 text-figma-secondary">€320</p>
                    <p className="text-figma-12 font-normal font-paragraph leading-figma-16 text-figma-text-1">{t("/mês")}</p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-1">
                  <div className="w-[13px] min-h-[13px] relative shrink-0">
                    <img className="w-2.5 h-3 absolute top-px left-0.5" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/3042cd60b_50fbb56ca_11_67.svg" alt="Pin" />
                    <img className="w-1 h-1 absolute top-1 left-[5px]" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/04a2b8e76_124b54953_11_68.svg" alt="Dot" />
                  </div>
                  <p className="text-figma-14 font-normal font-paragraph leading-figma-20 text-figma-text-1 truncate">
                    Rua da Sofia, 14, Coimbra, Portugal
                  </p>
                </div>
                <div className="flex flex-row items-center gap-3 flex-wrap">
                  <div className="flex flex-row items-center gap-1">
                    <div className="w-[13px] min-h-[13px] relative shrink-0">
                      <img className="w-2.5 h-1 absolute top-0.5 left-0.5" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/19d8691a7_7d5d57dee_11_76.svg" alt="Bed" />
                      <img className="w-px h-1 absolute top-0.5 left-1.5" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/78ba1c368_5cc0a2722_11_77.svg" alt="Bed" />
                      <img className="w-3 h-1.5 absolute top-[5px] left-px" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/ab3753dab_ecd2895e0_11_75.svg" alt="Bed" />
                      <img className="w-3 h-px absolute top-2.5 left-px" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/db978682e_db25ce22c_11_78.svg" alt="Bed" />
                    </div>
                    <p className="text-figma-14 font-normal font-paragraph leading-figma-20 text-figma-text-1">{t("1 quarto")}</p>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <div className="w-[13px] min-h-[13px] relative shrink-0">
                      <img className="w-2.5 h-2.5 absolute top-0.5 left-0.5" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/c7ac26267_143cdc48c_11_87.svg" alt="Bath" />
                      <img className="w-0.5 h-0.5 absolute top-0.5 left-1" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/43aeffe05_ef59cf716_11_83.svg" alt="Bath" />
                      <img className="w-3 h-px absolute top-1.5 left-px" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/db0c766b5_8f9bde3de_11_85.svg" alt="Bath" />
                      <img className="w-px h-0.5 absolute top-2.5 left-1" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/a03999f1f_c2eb928e9_11_86.svg" alt="Bath" />
                      <img className="w-px h-0.5 absolute top-2.5 left-[9px]" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/95c84765b_5a5947c00_11_84.svg" alt="Bath" />
                    </div>
                    <p className="text-figma-14 font-normal font-paragraph leading-figma-20 text-figma-text-1">{t("1 WC")}</p>
                  </div>
                  <p className="text-figma-14 font-normal font-paragraph leading-figma-20 text-figma-text-1">18 m²</p>
                </div>
                <div className="flex flex-row items-start gap-1 flex-wrap mt-1">
                  <div className="flex flex-row items-center gap-1 py-0.5 px-2 bg-figma-primary rounded-[4px]">
                    <div className="w-3.5 h-3.5 relative shrink-0">
                      <img className="w-[13px] h-[3px] absolute top-[3px] left-px" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/71aa793f4_471d3b6a3_11_97.svg" alt="WiFi" />
                      <img className="w-[9px] h-[3px] absolute top-1.5 left-[3px]" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/bb6590e15_e4c0ee3f9_11_98.svg" alt="WiFi" />
                      <img className="w-[5px] h-0.5 absolute top-[9px] left-[5px]" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/bcfc9d0ed_c3c8a6458_11_99.svg" alt="WiFi" />
                      <img className="w-px h-px absolute top-3 left-[7px]" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/f236cffde_1cf342d4b_11_96.svg" alt="WiFi" />
                    </div>
                    <p className="text-figma-12 font-medium font-paragraph leading-figma-16 text-figma-secondary">WiFi</p>
                  </div>
                  <div className="flex flex-row items-center gap-1 py-0.5 px-2 bg-figma-primary rounded-[4px]">
                    <div className="w-3.5 h-3.5 relative shrink-0">
                      <img className="w-2.5 h-1 absolute top-0.5 left-0.5" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/0a0d0df49_ceb8756a3_11_104.svg" alt="Furnished" />
                      <img className="w-px h-1.5 absolute top-0.5 left-[7px]" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/b18d44f99_33279047b_11_108.svg" alt="Furnished" />
                      <img className="w-[13px] h-1.5 absolute top-[5px] left-px" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/5ad37889e_f43d8d690_11_105.svg" alt="Furnished" />
                      <img className="w-px h-0.5 absolute top-2.5 left-0.5" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/064482c15_dea3999bd_11_106.svg" alt="Furnished" />
                      <img className="w-px h-0.5 absolute top-2.5 left-3" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/b96946ffe_2a64eb380_11_107.svg" alt="Furnished" />
                    </div>
                    <p className="text-figma-12 font-medium font-paragraph leading-figma-16 text-figma-secondary">{t("Mobilado")}</p>
                  </div>
                  <div className="flex flex-row items-center gap-1 py-0.5 px-2 bg-figma-primary rounded-[4px]">
                    <div className="w-3.5 h-3.5 relative shrink-0">
                      <img className="w-[13px] h-[13px] absolute top-px left-px" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/8fe22e42f_495777f66_11_113.svg" alt="Laundry" />
                    </div>
                    <p className="text-figma-12 font-medium font-paragraph leading-figma-16 text-figma-secondary">{t("Lavandaria")}</p>
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <button onClick={() => navigate("/quartos/1")} className="w-full py-2 bg-figma-secondary rounded-[4px] hover:opacity-90 transition-opacity">
                  <p className="text-figma-14 font-semibold font-paragraph leading-figma-20 text-center text-figma-accent">
                    {t("Ver Detalhes")}
                  </p>
                </button>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="flex flex-col bg-figma-muted rounded-[4px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.10)] overflow-clip group cursor-pointer">
              <div className="w-full min-h-[192px] relative overflow-clip">
                <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/37e040cd6_357b706e6_0f699ac5ceed7587095c9c9defbc2282ec184fdd.png" alt="Estúdio Moderno" />
                <div className="absolute top-2 left-2 bg-figma-secondary rounded-[4px] px-2 py-0.5">
                  <p className="text-figma-11 font-semibold font-paragraph leading-figma-16 tracking-[0.3px] uppercase text-figma-accent">
                    {t("Estúdio")}
                  </p>
                </div>
              </div>
              <div className="flex flex-col p-4 flex-grow gap-3">
                <div className="flex flex-row justify-between items-start gap-2">
                  <h3 className="text-figma-18 font-bold font-heading leading-figma-22 text-figma-secondary flex-1">
                    {t("Estúdio Moderno perto da UC")}
                  </h3>
                  <div className="flex flex-col items-end shrink-0">
                    <p className="text-figma-20 font-bold font-paragraph leading-figma-28 text-figma-secondary">€480</p>
                    <p className="text-figma-12 font-normal font-paragraph leading-figma-16 text-figma-text-1">{t("/mês")}</p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-1">
                  <div className="w-[13px] min-h-[13px] relative shrink-0">
                    <img className="w-2.5 h-3 absolute top-px left-0.5" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/4c6db88e5_747d440a1_11_144.svg" alt="Pin" />
                    <img className="w-1 h-1 absolute top-1 left-[5px]" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/2b9f4a2fb_e079fb970_11_145.svg" alt="Dot" />
                  </div>
                  <p className="text-figma-14 font-normal font-paragraph leading-figma-20 text-figma-text-1 truncate">
                    Rua Padre António Vieira, 8, Coimbra, Portugal
                  </p>
                </div>
                <div className="flex flex-row items-center gap-3 flex-wrap">
                  <div className="flex flex-row items-center gap-1">
                    <div className="w-[13px] min-h-[13px] relative shrink-0">
                      <img className="w-2.5 h-1 absolute top-0.5 left-0.5" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/f161badc2_1bf76ee2a_11_153.svg" alt="Bed" />
                      <img className="w-px h-1 absolute top-0.5 left-1.5" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/3df9fccdd_16af3565d_11_154.svg" alt="Bed" />
                      <img className="w-3 h-1.5 absolute top-[5px] left-px" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/d54429258_d62e04ef0_11_152.svg" alt="Bed" />
                      <img className="w-3 h-px absolute top-2.5 left-px" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/0f7c85a1b_38ce2e1d1_11_155.svg" alt="Bed" />
                    </div>
                    <p className="text-figma-14 font-normal font-paragraph leading-figma-20 text-figma-text-1">{t("1 quarto")}</p>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <div className="w-[13px] min-h-[13px] relative shrink-0">
                      <img className="w-2.5 h-2.5 absolute top-0.5 left-0.5" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/2ad29e1ee_3386930d8_11_164.svg" alt="Bath" />
                      <img className="w-0.5 h-0.5 absolute top-0.5 left-1" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/1341bf538_de43d6aae_11_160.svg" alt="Bath" />
                      <img className="w-3 h-px absolute top-1.5 left-px" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/a037c0dea_41326d322_11_162.svg" alt="Bath" />
                      <img className="w-px h-0.5 absolute top-2.5 left-1" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/2fedce1c5_d1cf76dac_11_163.svg" alt="Bath" />
                      <img className="w-px h-0.5 absolute top-2.5 left-[9px]" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/3cb960e3c_3f3cd8422_11_161.svg" alt="Bath" />
                    </div>
                    <p className="text-figma-14 font-normal font-paragraph leading-figma-20 text-figma-text-1">{t("1 WC")}</p>
                  </div>
                  <p className="text-figma-14 font-normal font-paragraph leading-figma-20 text-figma-text-1">35 m²</p>
                </div>
                <div className="flex flex-row items-start gap-1 flex-wrap mt-1">
                  <div className="flex flex-row items-center gap-1 py-0.5 px-2 bg-figma-primary rounded-[4px]">
                    <div className="w-3.5 h-3.5 relative shrink-0">
                      <img className="w-[13px] h-[3px] absolute top-[3px] left-px" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/f57769b85_d76da6a06_11_174.svg" alt="WiFi" />
                      <img className="w-[9px] h-[3px] absolute top-1.5 left-[3px]" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/262c5f44a_441195937_11_175.svg" alt="WiFi" />
                      <img className="w-[5px] h-0.5 absolute top-[9px] left-[5px]" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/3fda8ddf6_e1c7ffda5_11_176.svg" alt="WiFi" />
                      <img className="w-px h-px absolute top-3 left-[7px]" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/c708de7a5_7131be976_11_173.svg" alt="WiFi" />
                    </div>
                    <p className="text-figma-12 font-medium font-paragraph leading-figma-16 text-figma-secondary">WiFi</p>
                  </div>
                  <div className="flex flex-row items-center gap-1 py-0.5 px-2 bg-figma-primary rounded-[4px]">
                    <div className="w-3.5 h-3.5 relative shrink-0">
                      <img className="w-[13px] h-[13px] absolute top-px left-px" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/bca3446b1_0c329da4e_11_181.svg" alt="Laundry" />
                    </div>
                    <p className="text-figma-12 font-medium font-paragraph leading-figma-16 text-figma-secondary">{t("Lavandaria")}</p>
                  </div>
                  <div className="flex flex-row items-center gap-1 py-0.5 px-2 bg-figma-primary rounded-[4px]">
                    <div className="w-3.5 h-3.5 relative shrink-0">
                      <img className="w-3 h-[13px] absolute top-px left-0.5" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/9d4d00684_d4504ceec_11_186.svg" alt="Bills" />
                    </div>
                    <p className="text-figma-12 font-medium font-paragraph leading-figma-16 text-figma-secondary">{t("Despesas incluídas")}</p>
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <button onClick={() => navigate("/quartos/2")} className="w-full py-2 bg-figma-secondary rounded-[4px] hover:opacity-90 transition-opacity">
                  <p className="text-figma-14 font-semibold font-paragraph leading-figma-20 text-center text-figma-accent">
                    {t("Ver Detalhes")}
                  </p>
                </button>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeInUp} className="flex flex-col bg-figma-muted rounded-[4px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.10)] overflow-clip group cursor-pointer">
              <div className="w-full min-h-[192px] relative overflow-clip">
                <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/a819483d9_e807791ff_21761b2f9cfea5c09ff235b4ca4f1fae37e019c5.png" alt="T1 Mobilado" />
                <div className="absolute top-2 left-2 bg-figma-secondary rounded-[4px] px-2 py-0.5">
                  <p className="text-figma-11 font-semibold font-paragraph leading-figma-16 tracking-[0.3px] uppercase text-figma-accent">
                    T1
                  </p>
                </div>
              </div>
              <div className="flex flex-col p-4 flex-grow gap-3">
                <div className="flex flex-row justify-between items-start gap-2">
                  <h3 className="text-figma-18 font-bold font-heading leading-figma-22 text-figma-secondary flex-1">
                    {t("T1 Mobilado — Todas as Despesas Incluídas")}
                  </h3>
                  <div className="flex flex-col items-end shrink-0">
                    <p className="text-figma-20 font-bold font-paragraph leading-figma-28 text-figma-secondary">€590</p>
                    <p className="text-figma-12 font-normal font-paragraph leading-figma-16 text-figma-text-1">{t("/mês")}</p>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-1">
                  <div className="w-[13px] min-h-[13px] relative shrink-0">
                    <img className="w-2.5 h-3 absolute top-px left-0.5" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/0253ac7be_ea116d5fd_11_217.svg" alt="Pin" />
                    <img className="w-1 h-1 absolute top-1 left-[5px]" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/cfd36294c_331c28cc5_11_218.svg" alt="Dot" />
                  </div>
                  <p className="text-figma-14 font-normal font-paragraph leading-figma-20 text-figma-text-1 truncate">
                    Rua Dr. Manuel Rodrigues, 55, Coimbra, Portugal
                  </p>
                </div>
                <div className="flex flex-row items-center gap-3 flex-wrap">
                  <div className="flex flex-row items-center gap-1">
                    <div className="w-[13px] min-h-[13px] relative shrink-0">
                      <img className="w-2.5 h-1 absolute top-0.5 left-0.5" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/46ac1eb3e_114831201_11_226.svg" alt="Bed" />
                      <img className="w-px h-1 absolute top-0.5 left-1.5" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/1e8fcc5b3_77732b89f_11_227.svg" alt="Bed" />
                      <img className="w-3 h-1.5 absolute top-[5px] left-px" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/bcb03095a_2ec0de27f_11_225.svg" alt="Bed" />
                      <img className="w-3 h-px absolute top-2.5 left-px" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/5eec0b42c_0909bef46_11_228.svg" alt="Bed" />
                    </div>
                    <p className="text-figma-14 font-normal font-paragraph leading-figma-20 text-figma-text-1">{t("1 quarto")}</p>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <div className="w-[13px] min-h-[13px] relative shrink-0">
                      <img className="w-2.5 h-2.5 absolute top-0.5 left-0.5" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/5ede9a02d_556bb2b1c_11_237.svg" alt="Bath" />
                      <img className="w-0.5 h-0.5 absolute top-0.5 left-1" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/bce422670_47df1bf16_11_233.svg" alt="Bath" />
                      <img className="w-3 h-px absolute top-1.5 left-px" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/43dc7cfac_5a82f6425_11_235.svg" alt="Bath" />
                      <img className="w-px h-0.5 absolute top-2.5 left-1" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/c32d0875a_0d1309afe_11_236.svg" alt="Bath" />
                      <img className="w-px h-0.5 absolute top-2.5 left-[9px]" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/a5addb83b_5a666656e_11_234.svg" alt="Bath" />
                    </div>
                    <p className="text-figma-14 font-normal font-paragraph leading-figma-20 text-figma-text-1">{t("1 WC")}</p>
                  </div>
                  <p className="text-figma-14 font-normal font-paragraph leading-figma-20 text-figma-text-1">50 m²</p>
                </div>
                <div className="flex flex-row items-start gap-1 flex-wrap mt-1">
                  <div className="flex flex-row items-center gap-1 py-0.5 px-2 bg-figma-primary rounded-[4px]">
                    <div className="w-3.5 h-3.5 relative shrink-0">
                      <img className="w-[13px] h-[3px] absolute top-[3px] left-px" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/595dbf5c3_977dd9fbb_11_247.svg" alt="WiFi" />
                      <img className="w-[9px] h-[3px] absolute top-1.5 left-[3px]" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/a30f0e5f7_fec8c8cb7_11_248.svg" alt="WiFi" />
                      <img className="w-[5px] h-0.5 absolute top-[9px] left-[5px]" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/b39d02bea_ac28034e3_11_249.svg" alt="WiFi" />
                      <img className="w-px h-px absolute top-3 left-[7px]" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/6c990ec83_eb720fcca_11_246.svg" alt="WiFi" />
                    </div>
                    <p className="text-figma-12 font-medium font-paragraph leading-figma-16 text-figma-secondary">WiFi</p>
                  </div>
                  <div className="flex flex-row items-center gap-1 py-0.5 px-2 bg-figma-primary rounded-[4px]">
                    <div className="w-3.5 h-3.5 relative shrink-0">
                      <img className="w-2.5 h-1 absolute top-0.5 left-0.5" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/a93541a54_e157a88ec_11_254.svg" alt="Furnished" />
                      <img className="w-px h-1.5 absolute top-0.5 left-[7px]" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/bea717468_1b6d140ba_11_258.svg" alt="Furnished" />
                      <img className="w-[13px] h-1.5 absolute top-[5px] left-px" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/53badeca6_2847ef8d0_11_255.svg" alt="Furnished" />
                      <img className="w-px h-0.5 absolute top-2.5 left-0.5" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/569eb9532_ad2d373b5_11_256.svg" alt="Furnished" />
                      <img className="w-px h-0.5 absolute top-2.5 left-3" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/d93444c59_bb2929594_11_257.svg" alt="Furnished" />
                    </div>
                    <p className="text-figma-12 font-medium font-paragraph leading-figma-16 text-figma-secondary">{t("Mobilado")}</p>
                  </div>
                  <div className="flex flex-row items-center gap-1 py-0.5 px-2 bg-figma-primary rounded-[4px]">
                    <div className="w-3.5 h-3.5 relative shrink-0">
                      <img className="w-3 h-[13px] absolute top-px left-0.5" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/6bf471c8d_383a25137_11_263.svg" alt="Bills" />
                    </div>
                    <p className="text-figma-12 font-medium font-paragraph leading-figma-16 text-figma-secondary">{t("Despesas incluídas")}</p>
                  </div>
                  <div className="flex flex-row items-center py-0.5 px-2 bg-figma-primary rounded-[4px]">
                    <p className="text-figma-12 font-medium font-paragraph leading-figma-16 text-figma-secondary">+1</p>
                  </div>
                </div>
              </div>
              <div className="p-4 pt-0">
                <button onClick={() => navigate("/quartos/3")} className="w-full py-2 bg-figma-secondary rounded-[4px] hover:opacity-90 transition-opacity">
                  <p className="text-figma-14 font-semibold font-paragraph leading-figma-20 text-center text-figma-accent">
                    {t("Ver Detalhes")}
                  </p>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bairros em Destaque */}
      <section id="bairros" className="w-full bg-figma-muted border-t-[1px] border-[rgba(0,0,0,0.10)] py-16">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          <div className="flex flex-row justify-between items-end gap-3 mb-8">
            <div className="flex flex-col gap-1">
              <h2 className="text-[clamp(16px,1.95vw,30px)] font-bold font-heading leading-[1.2] text-figma-secondary">
                {t("Bairros em Destaque")}
              </h2>
              <p className="text-figma-14 font-normal font-paragraph leading-figma-20 text-figma-text-1">
                {t("Os bairros mais procurados por estudantes em Coimbra.")}
              </p>
            </div>
            <button onClick={() => navigate("/quartos")} className="flex flex-row items-center gap-1 group shrink-0">
              <span className="text-figma-14 font-semibold font-paragraph leading-figma-20 text-figma-secondary">
                {t("Ver todos")}
              </span>
              <div className="w-3.5 h-3.5 relative overflow-clip group-hover:translate-x-1 transition-transform">
                <img className="w-[5px] h-2 absolute top-1 left-[5px]" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/d6cad7afd_3fc776235_11_300.svg" alt="Arrow Right" />
              </div>
            </button>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              {
                img: "https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/49d3434e0_01b861d4f_e7f3fee685720244464374ae7e69d8e93d6d818c.png",
                title: "Alta de Coimbra",
                desc: "Perto da UC, da Biblioteca Joanina e da Baixa histórica.",
                price: "a partir de €280/mês",
                rooms: "18 quartos disponíveis",
                arrow: "https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/ea8ae4fa6_280ce8256_11_311.svg",
              },
              {
                img: "https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/0eea6a491_db7df0f68_9de638ad2f9847438429339f61e8da26b72160df.png",
                title: "Celas",
                desc: "Bairro residencial tranquilo, próximo dos hospitais e da FMUC.",
                price: "a partir de €240/mês",
                rooms: "14 quartos disponíveis",
                arrow: "https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/e9c6abd90_89a8b2926_11_332.svg",
              },
              {
                img: "https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/1ebc5dfc2_831ca8f09_fab91e979dc0f1c44059972379e5c31051b023e1.png",
                title: "Santa Cruz",
                desc: "Centro da cidade, ótimas ligações de autocarro a todos os polos.",
                price: "a partir de €260/mês",
                rooms: "11 quartos disponíveis",
                arrow: "https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/20d8bb0f9_2b9f710f8_11_353.svg",
              },
              {
                img: "https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/ade148990_c97f770d2_5abddf9d5fe37548ea24af8c6eebeb60f1ea43f0.png",
                title: "Norton de Matos",
                desc: "Zona universitária junto ao polo II — FCTUC e FEUCP.",
                price: "a partir de €220/mês",
                rooms: "21 quartos disponíveis",
                arrow: "https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/f15f8f5cf_bc3025dab_11_374.svg",
              },
            ].map((bairro, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex flex-col bg-figma-accent rounded-[6px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.10)] overflow-clip group cursor-pointer"
              >
                <div className="w-full min-h-[144px] relative overflow-clip">
                  <img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src={bairro.img} alt={bairro.title} />
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(0,0,0,0.50)_0%,_rgba(0,0,0,0.00)_100%)]" />
                  <div className="absolute bottom-3 left-3 right-3 flex flex-row justify-between items-end">
                    <h3 className="text-figma-18 font-bold font-heading leading-figma-22 text-figma-accent">
                      {bairro.title}
                    </h3>
                    <div className="w-[15px] min-h-[15px] relative overflow-clip group-hover:translate-x-1 transition-transform">
                      <img className="w-[5px] h-[9px] absolute top-1 left-1.5" src={bairro.arrow} alt="Arrow" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-4 gap-2 flex-grow">
                  <p className="text-figma-14 font-medium font-paragraph leading-figma-19 text-figma-text-1 flex-grow">
                    {t(bairro.desc)}
                  </p>
                  <div className="flex flex-col gap-0.5 pt-2 border-t-[1px] border-[rgba(0,0,0,0.10)]">
                    <p className="text-figma-12 font-semibold font-paragraph leading-figma-16 text-figma-secondary">
                      {t(bairro.price)}
                    </p>
                    <p className="text-figma-12 font-medium font-paragraph leading-figma-16 text-figma-text-1">
                      {t(bairro.rooms)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testemunhos */}
      <section id="testemunhos" className="w-full bg-figma-accent py-16">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          <h2 className="text-[clamp(16px,1.95vw,30px)] font-bold font-heading leading-[1.2] text-center text-figma-secondary mb-10">
            {t("O que dizem os estudantes")}
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {[
              {
                quote: `"Encontrei o meu quarto em dois dias. O site é simples e os anúncios são honestos — sem surpresas quando fui visitar."`,
                initials: "MC",
                name: "Mariana Costa",
                course: "FEUC — Economia",
                icon1: "https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/57d5f6959_47cfb2a83_11_400.svg",
                icon2: "https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/3804b3cc1_d56c756ac_11_399.svg",
              },
              {
                quote: `"Vim de Braga sem conhecer ninguém em Coimbra. Os bairros explicados no site ajudaram-me a perceber onde ficava cada polo."`,
                initials: "TA",
                name: "Tiago Almeida",
                course: "FCTUC — Engenharia Informática",
                icon1: "https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/3b272046b_22934fb82_11_419.svg",
                icon2: "https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/6c16ca3e2_bdca62483_11_418.svg",
              },
              {
                quote: `"Contactei três senhorios num fim de semana e fechei contrato na semana seguinte. Recomendo a qualquer caloiro."`,
                initials: "BL",
                name: "Beatriz Lemos",
                course: "FMUC — Medicina",
                icon1: "https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/621a910d9_3a1940833_11_438.svg",
                icon2: "https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/6c059f71d_42217fa2f_11_437.svg",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex flex-col gap-4 p-6 bg-figma-muted rounded-[6px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.10)]"
              >
                <div className="w-5 h-5 relative shrink-0">
                  <img className="w-[7px] h-4 absolute top-0.5 left-0.5" src={testimonial.icon1} alt="Quote" />
                  <img className="w-[7px] h-4 absolute top-0.5 left-[11px]" src={testimonial.icon2} alt="Quote" />
                </div>
                <p className="text-figma-14 font-normal font-paragraph leading-figma-22 text-figma-secondary flex-grow">
                  {t(testimonial.quote)}
                </p>
                <div className="flex flex-row items-center gap-3 pt-3 border-t-[1px] border-[rgba(0,0,0,0.10)]">
                  <div className="flex items-center justify-center w-[35px] min-h-[35px] bg-figma-secondary rounded-full shrink-0">
                    <p className="text-figma-12 font-bold font-heading leading-figma-16 text-figma-accent">
                      {testimonial.initials}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-figma-14 font-semibold font-paragraph leading-figma-17 text-figma-secondary">
                      {testimonial.name}
                    </p>
                    <p className="text-figma-12 font-normal font-paragraph leading-figma-16 text-figma-text-1">
                      {t(testimonial.course)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="w-full bg-figma-muted border-t-[1px] border-[rgba(0,0,0,0.10)] py-16">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          <h2 className="text-[clamp(16px,1.95vw,30px)] font-bold font-heading leading-[1.2] text-center text-figma-secondary mb-12">
            {t("Como funciona")}
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[896px] mx-auto"
          >
            {/* Para Estudantes */}
            <motion.div variants={fadeInUp} className="flex flex-col p-8 bg-figma-accent rounded-[10px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.10)]">
              <div className="flex flex-row items-center gap-2 mb-7">
                <div className="flex items-center justify-center w-7 h-7 bg-figma-secondary rounded-full shrink-0">
                  <div className="w-[13px] min-h-[13px] relative">
                    <img className="w-[5px] h-[5px] absolute top-0.5 left-1" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/674a7cdad_28f1a3927_11_470.svg" alt="Icon" />
                    <img className="w-[9px] h-1 absolute top-2 left-[3px]" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/f8eef5b41_c6b5ed7ec_11_469.svg" alt="Icon" />
                  </div>
                </div>
                <h3 className="text-figma-14 font-bold font-heading leading-figma-20 tracking-[1.4px] uppercase text-figma-secondary">
                  {t("Para Estudantes")}
                </h3>
              </div>
              <div className="flex flex-col gap-6 flex-grow">
                <div className="flex flex-row items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-[4px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.10)] shrink-0">
                    <div className="w-5 h-5 relative">
                      <img className="w-[15px] h-[15px] absolute top-0.5 left-0.5" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/711986ad6_528d9de5b_11_478.svg" alt="Search" />
                      <img className="w-[5px] h-[5px] absolute top-3.5 left-3.5" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/88ee67e83_bd886e2f8_11_479.svg" alt="Search" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-row items-baseline gap-2">
                      <span className="text-figma-12 font-normal font-figma-liberation-mono leading-figma-16 text-figma-text-1">01</span>
                      <h4 className="text-figma-14 font-semibold font-paragraph leading-figma-20 text-figma-secondary">{t("Pesquisa e filtra")}</h4>
                    </div>
                    <p className="text-figma-14 font-normal font-paragraph leading-figma-20 text-figma-text-1 mt-0.5">
                      {t("Encontra quartos por preço, tipo e comodidades.")}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-[4px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.10)] shrink-0">
                    <div className="w-5 h-5 relative">
                      <img className="w-[18px] h-[18px] absolute top-0.5 left-0.5" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/176a46290_0d15bec9a_11_495.svg" alt="Compare" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-row items-baseline gap-2">
                      <span className="text-figma-12 font-normal font-figma-liberation-mono leading-figma-16 text-figma-text-1">02</span>
                      <h4 className="text-figma-14 font-semibold font-paragraph leading-figma-20 text-figma-secondary">{t("Compara opções")}</h4>
                    </div>
                    <p className="text-figma-14 font-normal font-paragraph leading-figma-20 text-figma-text-1 mt-0.5">
                      {t("Vê fotos, detalhes e o perfil do senhorio.")}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-[4px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.10)] shrink-0">
                    <div className="w-5 h-5 relative">
                      <img className="w-[18px] h-[18px] absolute top-0.5 left-0.5" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/a435fcef5_4fc8fe852_11_511.svg" alt="Contact" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-row items-baseline gap-2">
                      <span className="text-figma-12 font-normal font-figma-liberation-mono leading-figma-16 text-figma-text-1">03</span>
                      <h4 className="text-figma-14 font-semibold font-paragraph leading-figma-20 text-figma-secondary">{t("Contacta diretamente")}</h4>
                    </div>
                    <p className="text-figma-14 font-normal font-paragraph leading-figma-20 text-figma-text-1 mt-0.5">
                      {t("Envia mensagem e marca uma visita.")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-8 mt-auto">
                <button onClick={() => navigate("/quartos")} className="w-full py-2.5 bg-figma-secondary rounded-[4px] hover:opacity-90 transition-opacity">
                  <p className="text-figma-14 font-semibold font-paragraph leading-figma-20 text-center text-figma-accent">
                    {t("Ver Quartos")}
                  </p>
                </button>
              </div>
            </motion.div>

            {/* Para Senhorios */}
            <motion.div variants={fadeInUp} className="flex flex-col p-8 bg-figma-accent rounded-[10px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.10)]">
              <div className="flex flex-row items-center gap-2 mb-7">
                <div className="flex items-center justify-center w-7 h-7 bg-figma-secondary rounded-full shrink-0">
                  <div className="w-[13px] min-h-[13px] relative">
                    <img className="w-2 h-3 absolute top-px left-[3px]" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/97ff8f36b_4b31e26c7_11_533.svg" alt="Icon" />
                    <img className="w-[3px] h-px absolute top-[3px] left-[5px]" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/250dc5d72_783466c4e_11_536.svg" alt="Icon" />
                    <img className="w-[3px] h-px absolute top-[5px] left-[5px]" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/1ddc15ec9_06626f6d0_11_537.svg" alt="Icon" />
                    <img className="w-[3px] h-1.5 absolute top-1.5 left-px" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/758731272_c637ec407_11_534.svg" alt="Icon" />
                    <img className="w-[3px] h-2 absolute top-[5px] left-2.5" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/8bb71fbbb_69db36fd5_11_535.svg" alt="Icon" />
                    <img className="w-[3px] h-px absolute top-2 left-[5px]" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/618afabe0_dc264af71_11_538.svg" alt="Icon" />
                    <img className="w-[3px] h-px absolute top-2.5 left-[5px]" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/79fbf2617_2fe064b50_11_539.svg" alt="Icon" />
                  </div>
                </div>
                <h3 className="text-figma-14 font-bold font-heading leading-figma-20 tracking-[1.4px] uppercase text-figma-secondary">
                  {t("Para Senhorios")}
                </h3>
              </div>
              <div className="flex flex-col gap-6 flex-grow">
                <div className="flex flex-row items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-[4px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.10)] shrink-0">
                    <div className="w-5 h-5 relative">
                      <img className="w-[17px] h-[17px] absolute top-0.5 left-0.5" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/64b44b48e_9cf72416f_11_548.svg" alt="Create" />
                      <img className="w-[7px] h-[9px] absolute top-2.5 left-2" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/08e8f2cdb_9e44071c2_11_547.svg" alt="Create" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-row items-baseline gap-2">
                      <span className="text-figma-12 font-normal font-figma-liberation-mono leading-figma-16 text-figma-text-1">01</span>
                      <h4 className="text-figma-14 font-semibold font-paragraph leading-figma-20 text-figma-secondary">{t("Cria o anúncio")}</h4>
                    </div>
                    <p className="text-figma-14 font-normal font-paragraph leading-figma-20 text-figma-text-1 mt-0.5">
                      {t("Adiciona fotos, preço e comodidades em minutos.")}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-[4px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.10)] shrink-0">
                    <div className="w-5 h-5 relative">
                      <img className="w-3 h-[18px] absolute top-0.5 left-[5px]" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/24ebc25cf_f1a2bf4b2_11_564.svg" alt="Reach" />
                      <img className="w-[5px] h-0.5 absolute top-[5px] left-2" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/11a91c81b_68a337aad_11_567.svg" alt="Reach" />
                      <img className="w-[5px] h-0.5 absolute top-2 left-2" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/2d3bab0b7_cfc492205_11_568.svg" alt="Reach" />
                      <img className="w-[5px] h-2.5 absolute top-2.5 left-0.5" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/629b3579b_cc5dfbb20_11_565.svg" alt="Reach" />
                      <img className="w-[5px] h-0.5 absolute top-3 left-2" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/7e2ab6666_e17c69d4c_11_569.svg" alt="Reach" />
                      <img className="w-[5px] h-3 absolute top-2 left-[15px]" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/35070822a_b6f5ebe19_11_566.svg" alt="Reach" />
                      <img className="w-[5px] h-0.5 absolute top-[15px] left-2" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/120702b23_cc6e41c7c_11_570.svg" alt="Reach" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-row items-baseline gap-2">
                      <span className="text-figma-12 font-normal font-figma-liberation-mono leading-figma-16 text-figma-text-1">02</span>
                      <h4 className="text-figma-14 font-semibold font-paragraph leading-figma-20 text-figma-secondary">{t("Chega a estudantes")}</h4>
                    </div>
                    <p className="text-figma-14 font-normal font-paragraph leading-figma-20 text-figma-text-1 mt-0.5">
                      {t("O teu anúncio fica visível em quartoscoimbra.pt.")}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-[4px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.10)] shrink-0">
                    <div className="w-5 h-5 relative">
                      <img className="w-[18px] h-[18px] absolute top-0.5 left-0.5" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/2bf14ca9d_498487777_11_586.svg" alt="Rent" />
                      <img className="w-[7px] h-[5px] absolute top-2 left-2" src="https://media.base44.com/images/public/6a777053f51aa899acaf4fd8/7a6a49f62_599260be1_11_587.svg" alt="Rent" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-row items-baseline gap-2">
                      <span className="text-figma-12 font-normal font-figma-liberation-mono leading-figma-16 text-figma-text-1">03</span>
                      <h4 className="text-figma-14 font-semibold font-paragraph leading-figma-20 text-figma-secondary">{t("Arrenda o quarto")}</h4>
                    </div>
                    <p className="text-figma-14 font-normal font-paragraph leading-figma-20 text-figma-text-1 mt-0.5">
                      {t("Recebe pedidos e escolhe o teu inquilino.")}
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-8 mt-auto">
                <button onClick={() => navigate("/conta")} className="w-full py-2.5 rounded-[4px] shadow-[inset_0_0_0_1px_#111111] hover:bg-figma-muted transition-colors">
                  <p className="text-figma-14 font-semibold font-paragraph leading-figma-20 text-center text-figma-secondary">
                    {t("Anunciar Quarto")}
                  </p>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="ajuda" className="w-full bg-figma-muted border-t-[1px] border-[rgba(0,0,0,0.10)] py-16">
        <div className="w-full max-w-[672px] mx-auto px-6">
          <h2 className="text-[clamp(16px,1.95vw,30px)] font-bold font-heading leading-[1.2] text-center text-figma-secondary mb-10">
            {t("Perguntas frequentes")}
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="w-full rounded-[6px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.10)] overflow-clip bg-figma-accent"
          >
            <Accordion type="single" collapsible className="w-full">
              {[
                "Quando devo começar a procurar quarto?",
                "Que documentos são normalmente pedidos pelo senhorio?",
                "Posso visitar o quarto antes de pagar alguma coisa?",
                "As despesas estão incluídas na renda?",
                "Como contacto o senhorio através do site?",
              ].map((question, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b-[1px] border-[rgba(0,0,0,0.10)] last:border-b-0"
                >
                  <AccordionTrigger className="py-4 px-5 hover:no-underline hover:bg-figma-muted transition-colors">
                    <span className="text-figma-14 font-semibold font-paragraph leading-figma-20 text-figma-secondary text-left">
                      {t(question)}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4 text-figma-14 font-normal font-paragraph leading-figma-20 text-figma-text-1">
                    {t('Esta é uma resposta de exemplo para a pergunta "{question}". O conteúdo real seria inserido aqui para ajudar os estudantes a esclarecerem as suas dúvidas sobre o processo de arrendamento em Coimbra.', { question })}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}