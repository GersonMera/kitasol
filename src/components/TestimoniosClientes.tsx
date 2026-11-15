import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
  Sparkles,
  ArrowUpRight,
  Pause,
  Play,
} from 'lucide-react';
import { TESTIMONIOS, BRAND_INFO } from '../kitasolData.js';
import { getNextCarouselIndex } from '../utils/quoteLogic';
import { CategoryLogoIcon, ResilientArchitecturalImage } from './KitasolGraphics';

interface TestimoniosClientesProps {
  onSelectTestimonialForQuote?: (ambienteId: string, categoryId: string) => void;
}

export const TestimoniosClientes: React.FC<TestimoniosClientesProps> = ({
  onSelectTestimonialForQuote,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const total = TESTIMONIOS.length;
  const currentTestimonial = TESTIMONIOS[activeIndex] || TESTIMONIOS[0];

  const handleNext = () => {
    setDirection('next');
    setActiveIndex((prev) => getNextCarouselIndex(prev, total, 'next'));
  };

  const handlePrev = () => {
    setDirection('prev');
    setActiveIndex((prev) => getNextCarouselIndex(prev, total, 'prev'));
  };

  const handleSelectIndex = (idx: number) => {
    if (idx === activeIndex) return;
    setDirection(idx > activeIndex ? 'next' : 'prev');
    setActiveIndex(idx);
  };

  useEffect(() => {
    if (!isAutoPlaying || isHovered || total <= 1) return;
    const timer = window.setInterval(() => {
      setDirection('next');
      setActiveIndex((prev) => getNextCarouselIndex(prev, total, 'next'));
    }, 6500);
    return () => window.clearInterval(timer);
  }, [isAutoPlaying, isHovered, total]);

  return (
    <section
      id="testimonios"
      aria-labelledby="testimonios-heading"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="py-16 sm:py-24 bg-[#00600F] text-white border-b-4 border-[#F7C502] relative overflow-hidden"
    >
      {/* Sombra arquitectónica de persiana proyectada sobre el fondo esmeralda */}
      <div
        className="pointer-events-none absolute inset-0 louver-shadow-overlay opacity-25"
        aria-hidden="true"
      />

      {/* Pliegues decorativos laterales como telón escénico */}
      <div
        className="pointer-events-none hidden xl:block absolute inset-y-0 left-0 w-10 curtain-pleats-emerald border-r-2 border-[#F7C502]/45 opacity-75"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none hidden xl:block absolute inset-y-0 right-0 w-10 curtain-pleats-emerald border-l-2 border-[#F7C502]/45 opacity-75"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera Monumental + Controles del Carrusel */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="font-display font-extrabold text-xs sm:text-sm uppercase tracking-[0.4em] text-[#F7C502]">
              V O C E S · D E · P U C A L L P A
            </p>
            <h2
              id="testimonios-heading"
              className="mt-2 font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Testimonios de Clientes
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/90 max-w-2xl leading-relaxed">
              Hogares, consultorios y empresas en{' '}
              <strong className="text-[#F7C502]">Callería, Yarinacocha y Manantay</strong>{' '}
              que confiaron en nuestro maestro especialista bajo la promesa:{' '}
              <span className="italic text-[#F7C502] font-semibold">
                “{BRAND_INFO.slogan}”
              </span>
              .
            </p>
          </div>

          {/* Controles de Navegación del Carrusel */}
          <div className="flex items-center gap-2.5 self-start lg:self-end shrink-0">
            <button
              type="button"
              onClick={() => setIsAutoPlaying((prev) => !prev)}
              aria-label={
                isAutoPlaying
                  ? 'Pausar rotación automática de testimonios'
                  : 'Reanudar rotación automática de testimonios'
              }
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#004b0b] hover:bg-[#207000] text-[#F7C502] border-2 border-[#F7C502] font-display font-extrabold text-xs transition-colors cursor-pointer"
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                  <span className="hidden sm:inline">Pausar</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                  <span className="hidden sm:inline">Reanudar</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handlePrev}
              aria-label="Testimonio anterior"
              className="w-11 h-11 rounded-xl bg-[#F7C502] hover:bg-[#ffcf1a] text-[#00600F] border-2 border-[#00600F] shadow-[0_3px_0_0_#003807] active:translate-y-0.5 flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.75]" aria-hidden="true" />
            </button>

            <span
              className="px-3 py-2 rounded-xl bg-[#004b0b] border border-[#F7C502]/40 font-mono-tabular font-extrabold text-xs text-[#F7C502]"
              aria-live="polite"
            >
              {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Siguiente testimonio"
              className="w-11 h-11 rounded-xl bg-[#F7C502] hover:bg-[#ffcf1a] text-[#00600F] border-2 border-[#00600F] shadow-[0_3px_0_0_#003807] active:translate-y-0.5 flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.75]" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Escenario Principal del Carrusel con Transición de Telón */}
        <div className="bg-[#FAF9F5] text-[#00600F] border-4 border-[#F7C502] rounded-2xl p-5 sm:p-8 lg:p-10 shadow-[0_10px_0_0_#003b08] relative overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentTestimonial.id}
              initial={{
                opacity: 0,
                x: direction === 'next' ? 36 : -36,
                scale: 0.99,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: direction === 'next' ? -36 : 36,
                scale: 0.99,
              }}
              transition={{
                duration: 0.38,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              {/* Columna Izquierda (5 cols): Ventana Arquitectónica del Ambiente Instalado */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div className="relative h-64 sm:h-80 rounded-xl overflow-hidden border-3 border-[#00600F] bg-[#07260c] shadow-[0_6px_0_0_#00600F]">
                  <ResilientArchitecturalImage
                    src={currentTestimonial.image}
                    alt={`${currentTestimonial.installedSystem} para ${currentTestimonial.clientName} en ${currentTestimonial.district}`}
                    sceneTitle={currentTestimonial.ambienteLabel}
                    sceneType="curtain"
                  />

                  {/* Rejilla de 4 paneles inspirada en la ventana dentro de la letra "A" */}
                  <div
                    className="pointer-events-none absolute inset-0 grid grid-cols-2 grid-rows-2 z-20"
                    aria-hidden="true"
                  >
                    <div className="border-r border-b border-white/25" />
                    <div className="border-b border-white/25" />
                    <div className="border-r border-white/25" />
                    <div />
                  </div>

                  {/* Etiqueta superior con el distrito en Pucallpa */}
                  <div className="absolute top-3 left-3 z-20 inline-flex items-center gap-1.5 bg-[#F7C502] text-[#00600F] border-2 border-[#00600F] px-3 py-1 rounded-md font-display font-extrabold text-xs shadow-md">
                    <MapPin className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                    <span>{currentTestimonial.district}</span>
                  </div>

                  {/* Etiqueta inferior con el ambiente vestido */}
                  <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/85 via-black/55 to-transparent p-3.5 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[11px] font-display font-extrabold uppercase tracking-wider text-[#F7C502] block">
                        {currentTestimonial.ambienteLabel}
                      </span>
                      <span className="text-xs font-semibold text-white">
                        {currentTestimonial.installedSystem}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-[#F7C502] text-[#00600F] border-2 border-[#00600F] flex items-center justify-center shrink-0">
                      <CategoryLogoIcon
                        categoryId={currentTestimonial.categoryId}
                        className="w-6 h-6 text-[#00600F]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna Derecha (7 cols): Cita Escénica del Cliente + Metadatos Técnicos */}
              <div className="lg:col-span-7 flex flex-col justify-between bg-white border-2 border-[#00600F] rounded-xl p-6 sm:p-8 relative">
                {/* Comilla Escénica Monumental */}
                <span
                  className="pointer-events-none select-none font-serif font-black text-7xl sm:text-8xl leading-none text-[#F7C502] absolute top-3 right-5 opacity-45"
                  aria-hidden="true"
                >
                  “
                </span>

                <div>
                  {/* Calificación de 5 estrellas + Beneficio Destacado */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div
                      className="inline-flex items-center gap-1 bg-[#00600F] text-[#F7C502] px-3 py-1 rounded-md border border-[#00600F]"
                      aria-label={`Calificación: ${currentTestimonial.rating} de 5 estrellas`}
                    >
                      {Array.from({ length: currentTestimonial.rating }).map((_, idx) => (
                        <Star
                          key={idx}
                          className="w-3.5 h-3.5 fill-[#F7C502] text-[#F7C502]"
                          aria-hidden="true"
                        />
                      ))}
                      <span className="ml-1.5 font-mono-tabular font-extrabold text-xs text-white">
                        5.0
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-xs font-display font-extrabold uppercase tracking-wider text-[#00600F] bg-[#F7C502] px-3 py-1 rounded-md border border-[#00600F]">
                      <Sparkles className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
                      <span>{currentTestimonial.highlightBenefit}</span>
                    </span>
                  </div>

                  {/* Texto del Testimonio */}
                  <blockquote className="relative z-10 text-base sm:text-xl font-medium text-[#0e2912] leading-relaxed">
                    “{currentTestimonial.quote}”
                  </blockquote>
                </div>

                {/* Firma del Cliente + Botón de Cotización Directa */}
                <div className="mt-6 pt-5 border-t-2 border-[#00600F]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-display font-extrabold text-base sm:text-lg text-[#00600F]">
                      {currentTestimonial.clientName}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-[#207000]">
                      {currentTestimonial.clientRole} · {currentTestimonial.district}
                    </p>
                  </div>

                  {onSelectTestimonialForQuote && (
                    <button
                      type="button"
                      onClick={() =>
                        onSelectTestimonialForQuote(
                          currentTestimonial.ambienteId,
                          currentTestimonial.categoryId
                        )
                      }
                      className="inline-flex items-center justify-center gap-2 bg-[#F7C502] hover:bg-[#ffcf1a] text-[#00600F] font-display font-extrabold text-xs sm:text-sm px-4 py-3 rounded-xl border-2 border-[#00600F] shadow-[0_3px_0_0_#00600F] active:translate-y-0.5 transition-all cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <span>Cotizar Solución Similar</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Barra Inferior de Selección Directa de Clientes (Tabs Accesibles) */}
          <div
            role="tablist"
            aria-label="Seleccionar testimonio de cliente en Pucallpa"
            className="mt-6 pt-5 border-t-2 border-[#00600F]/15 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5"
          >
            {TESTIMONIOS.map((item, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleSelectIndex(idx)}
                  className={`text-left p-3 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#F7C502] text-[#00600F] border-[#00600F] shadow-[0_3px_0_0_#00600F]'
                      : 'bg-white hover:bg-[#00600F]/5 text-[#00600F] border-[#00600F]/25'
                  }`}
                >
                  <span className="font-display font-extrabold text-xs truncate block">
                    {item.clientName}
                  </span>
                  <span
                    className={`text-[11px] font-semibold truncate block mt-0.5 ${
                      isSelected ? 'text-[#00600F]' : 'text-[#207000]'
                    }`}
                  >
                    {item.ambienteLabel} · {item.district.split(',')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
