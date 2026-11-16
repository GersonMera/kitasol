import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { CATEGORIES, MARQUEE_ITEMS, BRAND_INFO } from '../kitasolData.js';
import { CategoryLogoIcon, ResilientArchitecturalImage } from './KitasolGraphics';

interface CatalogoBentoProps {
  onSelectCategoryForQuote: (categoryId: string) => void;
}

export const CatalogoBento: React.FC<CatalogoBentoProps> = ({
  onSelectCategoryForQuote,
}) => {
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
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="font-display font-bold text-xs sm:text-sm uppercase tracking-[0.4em] text-[#00600F]">
                F O T O G R A F Í A S · Y · E S T I L O S
              </p>
              <h2
                className="mt-2 font-display font-extrabold text-3xl sm:text-5xl text-[#00600F] tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                Modelos de Cortinas y Persianas
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#1c381f] max-w-md">
              Fotos reales de nuestros trabajos a medida en Pucallpa: cortinas con ojalillos, con rieles, persianas y rollers.{' '}
              <strong className="text-[#00600F]">{BRAND_INFO.pricingPolicy}</strong>
            </p>
          </div>

          {/* Grid de 4 Modelos Principales: Ojalillos, Rieles, Persianas y Roller */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {CATEGORIES.map((cat) => (
              <article
                key={cat.id}
                className="group bg-white border-2 border-[#00600F] rounded-2xl overflow-hidden shadow-[0_6px_0_0_#00600F] flex flex-col justify-between transition-transform duration-200"
              >
                {/* Fotografía principal amplia y 100% visible sin obstrucciones */}
                <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden border-b-2 border-[#00600F] bg-[#07260c]">
                  <ResilientArchitecturalImage
                    src={cat.image}
                    alt={`${cat.fullTitle} en Cortinas Kitasol Pucallpa`}
                    sceneTitle={cat.name}
                    sceneType={cat.louverType as 'curtain' | 'blinds' | 'roller' | 'track'}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Scrim degradado inferior con numeración editorial y título de modelo */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-4 sm:p-5 flex items-end justify-between gap-3 z-20">
                    <div>
                      <span className="text-xs font-mono-tabular font-bold text-[#F7C502]">
                        {cat.order}. MODELO A MEDIDA
                      </span>
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                        {cat.name}
                      </h3>
                    </div>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#F7C502] text-[#00600F] border-2 border-[#00600F] flex items-center justify-center shrink-0 shadow-sm">
                      <CategoryLogoIcon
                        categoryId={cat.id}
                        className="w-7 h-7 sm:w-8 sm:h-8 text-[#00600F]"
                      />
                    </div>
                  </div>
                </div>

                {/* Contenido conciso: directo y sin saturar de texto */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                      <h4 className="font-display font-extrabold text-lg sm:text-xl text-[#00600F]">
                        {cat.fullTitle}
                      </h4>
                      <span className="text-xs font-bold text-[#207000]">
                        {cat.subtitle}
                      </span>
                    </div>

                    <p className="text-sm text-[#1c381f] leading-relaxed mb-4">
                      {cat.description}
                    </p>

                    {/* Etiquetas rápidas de aplicación sin listas pesadas */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {cat.applications.slice(0, 3).map((app) => (
                        <span
                          key={app}
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FAF9F5] border border-[#00600F]/20 rounded-md text-xs font-semibold text-[#00600F]"
                        >
                          <Check className="w-3 h-3 text-[#207000] stroke-[2.5]" aria-hidden="true" />
                          <span>{app}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pie de tarjeta con CTA directo para cotizar */}
                  <div className="pt-3.5 border-t border-[#00600F]/15 flex items-center justify-between gap-3">
                    <span className="text-[11px] font-mono-tabular font-bold text-[#00600F]/85">
                      {cat.quotePolicy}
                    </span>

                    <button
                      type="button"
                      onClick={() => onSelectCategoryForQuote(cat.id)}
                      className="inline-flex items-center justify-center gap-2 bg-[#F7C502] hover:bg-[#ffcf1a] text-[#00600F] font-display font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-lg border-2 border-[#00600F] shadow-[0_2px_0_0_#00600F] active:translate-y-0.5 transition-all cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <span>Cotizar Medidas</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
