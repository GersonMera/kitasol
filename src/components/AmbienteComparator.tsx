import React, { useState } from 'react';
import { Sliders, Sparkles, ArrowRight, Eye, SunMedium, ThermometerSnowflake, Crown } from 'lucide-react';
import { AMBIENTES, BRAND_INFO } from '../kitasolData.js';
import { ResilientArchitecturalImage } from './KitasolGraphics';

interface AmbienteComparatorProps {
  selectedAmbienteId: string;
  onSelectAmbiente: (ambienteId: string) => void;
  onQuoteThisAmbiente: (ambienteId: string, defaultWidth: number, defaultHeight: number) => void;
}

export const AmbienteComparator: React.FC<AmbienteComparatorProps> = ({
  selectedAmbienteId,
  onSelectAmbiente,
  onQuoteThisAmbiente,
}) => {
  // Posición del comparador "Con Cortinas Kitasol (Izquierda) vs Sin Cortina / Sol Intenso (Derecha)" (0 a 100%)
  const [compareSplit, setCompareSplit] = useState<number>(58);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const sectionRef = React.useRef<HTMLElement | null>(null);

  const currentAmbiente =
    AMBIENTES.find((a) => a.id === selectedAmbienteId) || AMBIENTES[0];

  // Pre-carga diferida (lazy preload) de las fotos de los demás ambientes cuando la sección entra al viewport
  // para evitar cualquier parpadeo al alternar entre Sala, Habitación, Cocina y Oficina
  React.useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            AMBIENTES.forEach((amb) => {
              const img1 = new Image();
              img1.decoding = 'async';
              img1.src = amb.imageProtected;
              const img2 = new Image();
              img2.decoding = 'async';
              img2.src = amb.imageSunny;
            });
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: '250px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handlePointerUpdate = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (rect.width <= 0) return;
    const rawPct = ((e.clientX - rect.left) / rect.width) * 100;
    const clamped = Math.max(8, Math.min(92, Math.round(rawPct)));
    setCompareSplit(clamped);
  };

  return (
    <section
      ref={sectionRef}
      id="ambientes"
      className="py-16 sm:py-24 bg-white border-b-4 border-[#00600F] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabecera y Selector de los 4 Ambientes */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="font-display font-bold text-xs sm:text-sm uppercase tracking-[0.4em] text-[#00600F]">
              E S C A P A R A T E · P O R · A M B I E N T E
            </p>
            <h2
              className="mt-2 font-display font-extrabold text-3xl sm:text-5xl text-[#00600F] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Viste Cada Ventana de tu Casa o Empresa
            </h2>
          </div>

          {/* Controles Interactivos de Selección de Ambiente (Botones Funcionales) */}
          <div
            role="tablist"
            aria-label="Seleccionar ambiente del hogar o empresa"
            className="flex flex-wrap sm:flex-nowrap items-center gap-2 p-1.5 bg-[#FAF9F5] border-2 border-[#00600F] rounded-xl shrink-0"
          >
            {AMBIENTES.map((amb) => {
              const isSelected = amb.id === currentAmbiente.id;
              return (
                <button
                  key={amb.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => onSelectAmbiente(amb.id)}
                  className={`px-3.5 sm:px-4 py-2.5 rounded-lg font-display font-extrabold text-xs sm:text-sm transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-[#F7C502] text-[#00600F] border-2 border-[#00600F] shadow-[0_2px_0_0_#00600F]'
                      : 'text-[#00600F] hover:bg-[#00600F]/10 border-2 border-transparent'
                  }`}
                >
                  {amb.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gran Marco de Ventana Arquitectónica de 4 Paneles + Ficha del Maestro Especialista */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Izquierda (7 cols): Comparador Interactivo "Con Cortinas Kitasol vs Sin Cortina (Sol Intenso)" */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#FAF9F5] border-2 border-[#00600F] rounded-2xl p-4 sm:p-6 shadow-[0_8px_0_0_#00600F]">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-xs font-display font-extrabold uppercase tracking-[0.2em] text-[#00600F]">
                COMPARADOR DE LUZ Y CONFORT: {currentAmbiente.name.toUpperCase()}
              </span>
              <span className="text-xs font-mono-tabular font-bold text-[#207000]">
                Medida referencial: {currentAmbiente.defaultWidth.toFixed(1)}m ×{' '}
                {currentAmbiente.defaultHeight.toFixed(1)}m
              </span>
            </div>

            {/* Marco Monumental de Ventana (con los 4 cuadrantes de la letra "A") */}
            <div
              onPointerDown={(e) => {
                setIsDragging(true);
                handlePointerUpdate(e);
              }}
              onPointerMove={(e) => {
                if (isDragging) handlePointerUpdate(e);
              }}
              onPointerUp={() => setIsDragging(false)}
              onPointerLeave={() => setIsDragging(false)}
              className="relative h-72 sm:h-96 rounded-xl overflow-hidden border-4 border-[#00600F] select-none bg-[#0b2910] cursor-ew-resize touch-pan-y"
            >
              {/* Capa Fondo Derecha (100% ancho): SIN CORTINA — Sol Intenso de Ucayali */}
              <div className="absolute inset-0">
                <ResilientArchitecturalImage
                  src={currentAmbiente.imageSunny}
                  alt={`${currentAmbiente.title} sin cortinas con sol intenso directo`}
                  sceneTitle={`${currentAmbiente.name} - Sin Cortina`}
                  sceneType="blinds"
                />
                {/* Sutil destello solar cálido en la esquina derecha sin ocultar la ventana desnuda */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-bl from-[#F7C502]/25 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute top-3 right-3 z-20 bg-[#F7C502] text-[#00600F] border-2 border-[#00600F] px-3 py-1.5 rounded-md font-display font-extrabold text-[11px] sm:text-xs shadow-md">
                  {currentAmbiente.sunnyBadgeLabel || 'Sin Cortina · Sol Intenso Directo'}
                </div>
              </div>

              {/* Capa Superpuesta Izquierda Recortada (clip-path sin deformar escala): CON CORTINAS KITASOL */}
              <div
                className="absolute inset-0 z-10"
                style={{ clipPath: `inset(0 ${100 - compareSplit}% 0 0)` }}
              >
                <div className="relative w-full h-full">
                  <ResilientArchitecturalImage
                    src={currentAmbiente.imageProtected}
                    alt={`${currentAmbiente.title} vestido con Cortinas Kitasol`}
                    sceneTitle={`${currentAmbiente.name} - Con Kitasol`}
                    sceneType="curtain"
                  />
                  {/* Sutil viñeta superior para legibilidad de la etiqueta sin tapar las cortinas */}
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/35 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute top-3 left-3 z-20 bg-[#00600F] text-[#F7C502] border-2 border-[#F7C502] px-3 py-1.5 rounded-md font-display font-extrabold text-[11px] sm:text-xs shadow-md">
                    {currentAmbiente.protectedBadgeLabel || 'Con Cortinas “KITASOL”'} ({compareSplit}%)
                  </div>
                </div>
              </div>

              {/* Divisor vertical dorado en el punto exacto de corte con tirador táctil central */}
              <div
                className="pointer-events-none absolute inset-y-0 z-30 w-1 bg-[#F7C502] shadow-[0_0_0_2px_#00600F]"
                style={{ left: `${compareSplit}%` }}
                aria-hidden="true"
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#F7C502] text-[#00600F] border-2 border-[#00600F] shadow-lg flex items-center justify-center font-display font-black text-xs">
                  ↔
                </div>
              </div>

              {/* Rejilla Arquitectónica de 4 Paneles (Inspirada en la ventana dentro de la "A") */}
              <div
                className="pointer-events-none absolute inset-0 grid grid-cols-2 grid-rows-2 z-20"
                aria-hidden="true"
              >
                <div className="border-r border-b border-white/25" />
                <div className="border-b border-white/25" />
                <div className="border-r border-white/25" />
                <div />
              </div>
            </div>

            {/* Control Deslizante del Comparador + Botones Rápidos */}
            <div className="mt-4 pt-3 border-t border-[#00600F]/15">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-[#00600F] mb-2">
                <label htmlFor="ambiente-compare-slider" className="flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-[#207000]" aria-hidden="true" />
                  <span>Desliza para comparar: Con Cortinas “KITASOL” vs. Sin Cortina</span>
                </label>
                <div className="flex items-center gap-1.5">
                  {[
                    { label: 'Ver Con Cortina', val: 88 },
                    { label: '50 / 50', val: 50 },
                    { label: 'Ver Sin Cortina', val: 12 },
                  ].map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => setCompareSplit(preset.val)}
                      className={`px-2 py-1 rounded text-[11px] font-display font-extrabold border transition-colors cursor-pointer ${
                        Math.abs(compareSplit - preset.val) <= 6
                          ? 'bg-[#F7C502] text-[#00600F] border-[#00600F]'
                          : 'bg-white text-[#00600F] border-[#00600F]/30 hover:bg-[#00600F]/10'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>
              <input
                id="ambiente-compare-slider"
                type="range"
                min={8}
                max={92}
                value={compareSplit}
                onChange={(e) => setCompareSplit(Number(e.target.value))}
                aria-label={`Comparar control solar en ${currentAmbiente.name}`}
                className="w-full kitasol-slider bg-gradient-to-r from-[#00600F] via-[#207000] to-[#F7C502]"
              />
            </div>
          </div>

          {/* Derecha (5 cols): Diagnóstico del Maestro Especialista para el Ambiente */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#00600F] text-white border-2 border-[#00600F] rounded-2xl p-6 sm:p-8 shadow-[0_8px_0_0_#F7C502]">
            <div>
              <p className="font-display font-extrabold text-xs uppercase tracking-[0.28em] text-[#F7C502]">
                {currentAmbiente.kicker}
              </p>
              <h3 className="mt-1 font-display font-extrabold text-2xl sm:text-3xl text-white">
                {currentAmbiente.title}
              </h3>

              {/* Recomendación del Maestro Especialista */}
              <div className="mt-5 p-4 rounded-xl bg-[#004b0b] border border-[#F7C502]/40">
                <p className="text-xs font-display font-extrabold uppercase tracking-wider text-[#F7C502] mb-1">
                  Recomendación del Maestro Especialista:
                </p>
                <p className="text-sm text-white/95 leading-relaxed">
                  “{currentAmbiente.specialistAdvice}”
                </p>
              </div>

              {/* Los 4 Beneficios Técnicos en este Ambiente */}
              <div className="mt-5 space-y-2.5">
                <div className="p-3 rounded-lg bg-[#00520d] border border-white/10 flex items-start gap-3">
                  <Eye className="w-4 h-4 text-[#F7C502] shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-xs">
                    <strong className="text-[#F7C502] uppercase tracking-wider block">
                      Intimidad:
                    </strong>
                    <span className="text-white/90">{currentAmbiente.benefitsHighlight.intimidad}</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#00520d] border border-white/10 flex items-start gap-3">
                  <SunMedium className="w-4 h-4 text-[#F7C502] shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-xs">
                    <strong className="text-[#F7C502] uppercase tracking-wider block">
                      Regulación y Difusión de Luz:
                    </strong>
                    <span className="text-white/90">{currentAmbiente.benefitsHighlight.luz}</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#00520d] border border-white/10 flex items-start gap-3">
                  <ThermometerSnowflake className="w-4 h-4 text-[#F7C502] shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-xs">
                    <strong className="text-[#F7C502] uppercase tracking-wider block">
                      Aislamiento Térmico y Acústico:
                    </strong>
                    <span className="text-white/90">{currentAmbiente.benefitsHighlight.termico}</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#00520d] border border-white/10 flex items-start gap-3">
                  <Crown className="w-4 h-4 text-[#F7C502] shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-xs">
                    <strong className="text-[#F7C502] uppercase tracking-wider block">
                      Función Decorativa Palaciega:
                    </strong>
                    <span className="text-white/90">{currentAmbiente.benefitsHighlight.decoracion}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Soluciones Sugeridas + CTA de Simulación */}
            <div className="mt-6 pt-5 border-t border-white/15">
              <p className="text-xs font-semibold text-[#F7C502] mb-3">
                Sistemas recomendados: {currentAmbiente.recommendedCategories.join(' · ')}
              </p>

              <button
                type="button"
                onClick={() =>
                  onQuoteThisAmbiente(
                    currentAmbiente.id,
                    currentAmbiente.defaultWidth,
                    currentAmbiente.defaultHeight
                  )
                }
                className="w-full inline-flex items-center justify-center gap-2 bg-[#F7C502] hover:bg-[#ffcf1a] text-[#00600F] font-display font-extrabold text-sm px-5 py-3.5 rounded-xl border-2 border-[#00600F] shadow-[0_4px_0_0_#003b08] active:translate-y-0.5 transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Cotizar Ventana de {currentAmbiente.name}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
