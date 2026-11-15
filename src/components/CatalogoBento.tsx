import React, { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { CATEGORIES, MARQUEE_ITEMS, BRAND_INFO } from '../kitasolData.js';
import { CategoryLogoIcon, ResilientArchitecturalImage } from './KitasolGraphics';

interface CatalogoBentoProps {
  onSelectCategoryForQuote: (categoryId: string) => void;
}

export const CatalogoBento: React.FC<CatalogoBentoProps> = ({
  onSelectCategoryForQuote,
}) => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  return (
    <>
      {/* Marquee / Cinta Cinética de Impacto en Verde Profundo #00600F */}
      <div
        className="bg-[#00600F] border-b-4 border-[#F7C502] py-3.5 overflow-hidden select-none"
        aria-label="Especialidades de Cortinas Kitasol Pucallpa"
      >
        <div className="animate-kitasol-marquee flex items-center gap-8">
          {[0, 1].map((loopIdx) => (
            <div key={loopIdx} className="flex items-center gap-8 shrink-0">
              {MARQUEE_ITEMS.map((item, idx) => (
                <React.Fragment key={`${loopIdx}-${idx}`}>
                  <span
                    className={`font-display font-extrabold text-sm sm:text-base tracking-[0.22em] uppercase whitespace-nowrap ${
                      idx % 2 === 0 ? 'text-[#F7C502]' : 'text-white'
                    }`}
                  >
                    {item}
                  </span>
                  <span className="text-[#F7C502] text-base" aria-hidden="true">
                    ★
                  </span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Las 4 Columnas del Logo (Bento Grid con Efecto Persiana & Pliegue Textil) */}
      <section
        id="catalogo"
        className="py-16 sm:py-24 bg-[#FAF9F5] border-b-2 border-[#00600F]/15 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Encabezado de Sección */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-display font-bold text-xs sm:text-sm uppercase tracking-[0.4em] text-[#00600F]">
                C A T Á L O G O · O F I C I A L
              </p>
              <h2
                className="mt-2 font-display font-extrabold text-3xl sm:text-5xl text-[#00600F] tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                Las 4 Líneas del Sello “KITASOL”
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#1c381f] max-w-md">
              Replicamos exactamente las 4 especialidades de nuestro emblema oficial en Pucallpa.{' '}
              <strong className="text-[#00600F]">{BRAND_INFO.pricingPolicy}</strong>
            </p>
          </div>

          {/* Bento Grid Asimétrico de 4 Paneles Monumentales */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
            {CATEGORIES.map((cat, index) => {
              // Diseño Bento asimétrico: Cortinas (7 cols) + Persianas (5 cols), Roller (5 cols) + Rieles (7 cols)
              const colSpanClass =
                index === 0 || index === 3
                  ? 'md:col-span-7'
                  : 'md:col-span-5';
              const isExpanded = activeCardId === cat.id;

              return (
                <article
                  key={cat.id}
                  onMouseEnter={() => setActiveCardId(cat.id)}
                  onMouseLeave={() => setActiveCardId(null)}
                  className={`${colSpanClass} group bg-white border-2 border-[#00600F] rounded-2xl overflow-hidden shadow-[0_6px_0_0_#00600F] flex flex-col justify-between transition-transform duration-200`}
                >
                  {/* Marco Superior de Ventana con Efecto Telón / Persiana en Hover y Lazy Loading Fade-In */}
                  <div className="relative h-60 sm:h-68 overflow-hidden border-b-2 border-[#00600F] bg-[#07260c]">
                    <ResilientArchitecturalImage
                      src={cat.image}
                      alt={`${cat.fullTitle} en Cortinas Kitasol Pucallpa`}
                      sceneTitle={cat.name}
                      sceneType={cat.louverType as 'curtain' | 'blinds' | 'roller' | 'track'}
                      className="w-full h-full object-cover group-hover:scale-105"
                    />

                    {/* Sombra de persiana diagonal sutil */}
                    <div
                      className="pointer-events-none absolute inset-0 louver-shadow-overlay opacity-40"
                      aria-hidden="true"
                    />

                    {/* Telón lateral esmeralda que se recoge al pasar el cursor o tocar */}
                    <div
                      className={`pointer-events-none absolute inset-y-0 left-0 curtain-pleats-emerald border-r-2 border-[#F7C502] transition-transform duration-200 ease-out flex items-center justify-center ${
                        isExpanded
                          ? '-translate-x-[78%]'
                          : 'translate-x-0 group-hover:-translate-x-[78%]'
                      }`}
                      style={{ width: '34%' }}
                      aria-hidden="true"
                    >
                      <span className="font-display font-extrabold text-xs tracking-[0.3em] uppercase text-[#F7C502] -rotate-90 whitespace-nowrap">
                        {cat.order} · {cat.name}
                      </span>
                    </div>

                    {/* Scrim graduado con numeración editorial y subtítulo */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-4 pl-14 sm:pl-16 flex items-end justify-between gap-3 z-20">
                      <div>
                        <span className="text-xs font-mono-tabular font-bold text-[#F7C502]">
                          {cat.order}. LÍNEA OFICIAL KITASOL
                        </span>
                        <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                          {cat.name}
                        </h3>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-[#F7C502] text-[#00600F] border-2 border-[#00600F] flex items-center justify-center shrink-0 shadow-sm">
                        <CategoryLogoIcon
                          categoryId={cat.id}
                          className="w-8 h-8 text-[#00600F]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Cuerpo Técnico de la Tarjeta */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h4 className="font-display font-extrabold text-lg sm:text-xl text-[#00600F]">
                          {cat.fullTitle}
                        </h4>
                        <span className="text-xs font-bold text-[#207000]">
                          {cat.subtitle}
                        </span>
                      </div>

                      <p className="text-sm sm:text-base text-[#1c381f] leading-relaxed mb-5">
                        {cat.description}
                      </p>

                      {/* Especificaciones y usos por ambiente */}
                      <div className="border-t border-[#00600F]/15 pt-4 mb-5">
                        <p className="text-xs font-display font-extrabold uppercase tracking-[0.2em] text-[#00600F] mb-2.5">
                          Características & Aplicaciones en Pucallpa:
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {cat.features.map((feat) => (
                            <li
                              key={feat}
                              className="flex items-start gap-2 text-xs sm:text-sm text-[#132a15]"
                            >
                              <Check
                                className="w-4 h-4 text-[#207000] shrink-0 mt-0.5 stroke-[2.5]"
                                aria-hidden="true"
                              />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Pie de tarjeta con política de cotización y CTA directo al simulador */}
                    <div className="pt-4 border-t border-[#00600F]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <span className="text-[11px] font-mono-tabular font-bold text-[#00600F]/85">
                        {cat.quotePolicy}
                      </span>

                      <button
                        type="button"
                        onClick={() => onSelectCategoryForQuote(cat.id)}
                        className="inline-flex items-center justify-center gap-2 bg-[#F7C502] hover:bg-[#ffcf1a] text-[#00600F] font-display font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-lg border-2 border-[#00600F] shadow-[0_2px_0_0_#00600F] active:translate-y-0.5 transition-all cursor-pointer whitespace-nowrap shrink-0"
                      >
                        <span>Cotizar {cat.name}</span>
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
