import React, { useState } from 'react';
import {
  ChevronDown,
  Phone,
  HelpCircle,
  ArrowUpRight,
  ShieldCheck,
  Wrench,
  Clock,
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { FAQS, BRAND_INFO } from '../kitasolData.js';

interface PreguntasFrecuentesProps {
  onRequestQuote?: () => void;
}

const FAQ_CATEGORIES = [
  { id: 'todas', label: 'Todas las Consultas' },
  { id: 'instalacion', label: 'Instalación y Tiempos' },
  { id: 'durabilidad', label: 'Durabilidad y Clima' },
  { id: 'mantenimiento', label: 'Mantenimiento y Cuidado' },
];

export const PreguntasFrecuentes: React.FC<PreguntasFrecuentesProps> = ({
  onRequestQuote,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');
  const [openIds, setOpenIds] = useState<string[]>([
    'faq-instalacion-1',
    'faq-durabilidad-1',
    'faq-mantenimiento-1',
  ]);
  const prefersReducedMotion = useReducedMotion();

  const filteredFaqs =
    selectedCategory === 'todas'
      ? FAQS
      : FAQS.filter((item) => item.category === selectedCategory);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenIds(filteredFaqs.map((f) => f.id));
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'instalacion':
        return <Clock className="w-4 h-4 text-[#207000] shrink-0" aria-hidden="true" />;
      case 'durabilidad':
        return <ShieldCheck className="w-4 h-4 text-[#207000] shrink-0" aria-hidden="true" />;
      case 'mantenimiento':
      default:
        return <Wrench className="w-4 h-4 text-[#207000] shrink-0" aria-hidden="true" />;
    }
  };

  // Variantes escalonadas ("Cortinas que se descorren y láminas que se abren")
  const listContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.09,
        delayChildren: prefersReducedMotion ? 0 : 0.05,
      },
    },
  };

  const cardItemVariants = {
    hidden: prefersReducedMotion
      ? { opacity: 1, y: 0, scale: 1 }
      : { opacity: 0.15, y: 18, scale: 0.985 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.42,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const curtainSashLeftVariants = {
    hidden: { scaleX: prefersReducedMotion ? 0 : 1 },
    visible: {
      scaleX: 0,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const curtainSashRightVariants = {
    hidden: { scaleX: prefersReducedMotion ? 0 : 1 },
    visible: {
      scaleX: 0,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="preguntas-frecuentes"
      aria-labelledby="faq-heading"
      className="py-16 sm:py-24 bg-[#FAF9F5] border-b-4 border-[#00600F] relative overflow-hidden"
    >
      {/* Sombra arquitectónica diagonal de persiana */}
      <div
        className="pointer-events-none absolute inset-0 louver-shadow-overlay opacity-45"
        aria-hidden="true"
      />

      {/* Telones laterales escénicos sutiles que se descorren al entrar en vista */}
      <motion.div
        initial={{ x: prefersReducedMotion ? '-85%' : '0%' }}
        whileInView={{ x: '-85%' }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none hidden xl:block absolute inset-y-0 left-0 w-24 curtain-pleats-emerald border-r-2 border-[#F7C502] opacity-25 z-0"
        aria-hidden="true"
      />
      <motion.div
        initial={{ x: prefersReducedMotion ? '85%' : '0%' }}
        whileInView={{ x: '85%' }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none hidden xl:block absolute inset-y-0 right-0 w-24 curtain-pleats-emerald border-l-2 border-[#F7C502] opacity-25 z-0"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera con revelación suave tipo telón */}
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0.2, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10"
        >
          <div>
            <p className="font-display font-bold text-xs sm:text-sm uppercase tracking-[0.4em] text-[#00600F]">
              G U Í A · D E L · C L I E N T E
            </p>
            <h2
              id="faq-heading"
              className="mt-2 font-display font-extrabold text-3xl sm:text-5xl text-[#00600F] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Preguntas Frecuentes
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#1c381f] max-w-2xl">
              Respuestas claras de nuestro{' '}
              <strong className="text-[#00600F]">maestro especialista en cortinas</strong> sobre
              tiempos de confección e instalación, resistencia al clima de Pucallpa y mantenimiento
              de sus cortinas, persianas, rollers y rieles.
            </p>
          </div>

          {/* Controles Interactivos de Filtro por Tema */}
          <div
            role="tablist"
            aria-label="Filtrar preguntas frecuentes por tema"
            className="flex flex-wrap sm:flex-nowrap items-center gap-1.5 p-1.5 bg-white border-2 border-[#00600F] rounded-xl shrink-0"
          >
            {FAQ_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 sm:px-3.5 py-2 rounded-lg font-display font-extrabold text-xs transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#F7C502] text-[#00600F] border-2 border-[#00600F] shadow-[0_2px_0_0_#00600F]'
                      : 'text-[#00600F] hover:bg-[#00600F]/10 border-2 border-transparent'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Diseño en 2 Columnas: Acordeón Persiana Escalonado (8 cols) + Tarjeta del Maestro Especialista (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Lista de Preguntas Frecuentes con Animación Escalonada tipo Cortina */}
          <motion.div
            key={selectedCategory}
            variants={listContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-8 space-y-4"
          >
            <div className="flex items-center justify-between text-xs font-bold text-[#00600F] px-1">
              <span>
                Mostrando {filteredFaqs.length} consultas frecuentes (
                {FAQ_CATEGORIES.find((c) => c.id === selectedCategory)?.label})
              </span>
              <button
                type="button"
                onClick={expandAll}
                className="underline decoration-[#F7C502] decoration-2 hover:text-[#207000] cursor-pointer whitespace-nowrap"
              >
                Desplegar todas las respuestas
              </button>
            </div>

            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <motion.article
                  key={faq.id}
                  variants={cardItemVariants}
                  className="relative bg-white border-2 border-[#00600F] rounded-2xl overflow-hidden shadow-[0_5px_0_0_#00600F]"
                >
                  {/* Cortinilla doble decorativa que se abre lateralmente al revelarse la tarjeta */}
                  <motion.div
                    variants={curtainSashLeftVariants}
                    style={{ originX: 0 }}
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/2 curtain-pleats-emerald border-r-2 border-[#F7C502] z-20"
                    aria-hidden="true"
                  />
                  <motion.div
                    variants={curtainSashRightVariants}
                    style={{ originX: 1 }}
                    className="pointer-events-none absolute inset-y-0 right-0 w-1/2 curtain-pleats-emerald border-l-2 border-[#F7C502] z-20"
                    aria-hidden="true"
                  />

                  {/* Pliegue vertical esmeralda sutil en el borde izquierdo indicando apertura */}
                  <div
                    className={`pointer-events-none absolute inset-y-0 left-0 w-1.5 transition-colors duration-200 ${
                      isOpen ? 'bg-[#F7C502]' : 'bg-[#00600F]'
                    }`}
                    aria-hidden="true"
                  />

                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`panel-${faq.id}`}
                      onClick={() => toggleItem(faq.id)}
                      className="w-full text-left p-5 sm:p-6 pl-6 sm:pl-7 flex items-start justify-between gap-4 hover:bg-[#FAF9F5] transition-colors cursor-pointer"
                    >
                      <div className="space-y-1.5 pr-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#207000]">
                          {getCategoryIcon(faq.category)}
                          <span>
                            0{idx + 1}. {faq.categoryLabel}
                          </span>
                        </div>
                        <span className="block font-display font-extrabold text-base sm:text-lg text-[#00600F] leading-snug">
                          {faq.question}
                        </span>
                      </div>

                      <span
                        className={`w-9 h-9 rounded-lg border-2 border-[#00600F] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                          isOpen
                            ? 'bg-[#F7C502] text-[#00600F] rotate-180'
                            : 'bg-[#FAF9F5] text-[#00600F]'
                        }`}
                        aria-hidden="true"
                      >
                        <ChevronDown className="w-5 h-5 stroke-[2.5]" />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`panel-${faq.id}`}
                        key={`content-${faq.id}`}
                        initial={
                          prefersReducedMotion
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: -6 }
                        }
                        animate={{ opacity: 1, y: 0 }}
                        exit={
                          prefersReducedMotion
                            ? { opacity: 0 }
                            : { opacity: 0, y: -4 }
                        }
                        transition={{
                          duration: 0.18,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="px-5 sm:px-6 pl-6 sm:pl-7 pb-6 pt-3 border-t border-[#00600F]/15 bg-[#FAF9F5]/75 space-y-3"
                      >
                        <p className="text-sm sm:text-base text-[#132a15] leading-relaxed">
                          {faq.answer}
                        </p>
                        <div className="pt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono-tabular font-bold text-[#00600F]">
                          <span>Nota del Especialista:</span>
                          <span aria-hidden="true">·</span>
                          <span className="text-[#207000]">{faq.specialistTip}</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </motion.div>

          {/* Tarjeta Lateral: Consulta Directa sin Compromiso con entrada suave */}
          <motion.aside
            initial={
              prefersReducedMotion
                ? { opacity: 1, x: 0 }
                : { opacity: 0.15, x: 20 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            className="lg:col-span-4 bg-[#00600F] text-white border-2 border-[#00600F] rounded-2xl p-6 sm:p-7 shadow-[0_8px_0_0_#F7C502] space-y-5"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-display font-extrabold uppercase tracking-[0.22em] text-[#F7C502]">
                ASESORÍA SIN COMPROMISO
              </span>
              <div className="w-10 h-10 rounded-xl bg-[#F7C502] text-[#00600F] border-2 border-[#00600F] flex items-center justify-center shrink-0">
                <HelpCircle className="w-5 h-5 stroke-[2.5]" aria-hidden="true" />
              </div>
            </div>

            <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white leading-tight">
              ¿Tienes dudas sobre las medidas o el tipo de tela para tu ventana?
            </h3>

            <p className="text-sm text-white/90 leading-relaxed">
              Cada ambiente en Pucallpa tiene una entrada de luz y ventilación distinta. Nuestro{' '}
              <strong className="text-[#F7C502]">maestro especialista en cortinas</strong> te
              orienta personalmente sobre instalación, durabilidad de telas y mantenimiento.
            </p>

            <div className="p-4 rounded-xl bg-[#004b0b] border border-[#F7C502]/40 space-y-2 text-xs">
              <p className="font-display font-extrabold uppercase tracking-wider text-[#F7C502]">
                Garantía de Atención Kitasol:
              </p>
              <p className="text-white/95">• Confección a pedido según ancho y alto real</p>
              <p className="text-white/95">
                • Telas, persianas y rollers resistentes al sol de Ucayali
              </p>
              <p className="text-white/95">
                • Servicio técnico de reparación de rieles y renovación
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={BRAND_INFO.phoneHref}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#F7C502] hover:bg-[#ffcf1a] text-[#00600F] font-display font-extrabold text-sm px-5 py-3.5 rounded-xl border-2 border-[#00600F] shadow-[0_4px_0_0_#003307] active:translate-y-0.5 transition-all whitespace-nowrap"
              >
                <Phone className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                <span>Consultar: {BRAND_INFO.phoneDisplay}</span>
              </a>

              <button
                type="button"
                onClick={onRequestQuote}
                className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FAF9F5] text-[#00600F] font-display font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl border-2 border-[#00600F] transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Ir al Simulador de Medidas</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
              </button>
            </div>

            <p className="text-[11px] font-mono-tabular text-white/80">
              {BRAND_INFO.pricingPolicy}
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

