import React from 'react';
import { Phone, Sparkles, Sun, ShieldCheck, ArrowDownRight, SlidersHorizontal } from 'lucide-react';
import { BRAND_INFO, TECHNICAL_BENEFITS } from '../kitasolData.js';
import { computeSolarEffect } from '../utils/quoteLogic';
import {
  KitasolMonumentalWordmark,
  KitasolCurtainBlindEmblemSVG,
  OfficialLogoBadge,
  CategoryLogoIcon,
} from './KitasolGraphics';

interface HeroLightTheaterProps {
  solarProtection: number;
  onSolarProtectionChange: (val: number) => void;
  onRequestHomeVisit: () => void;
}

export const HeroLightTheater: React.FC<HeroLightTheaterProps> = ({
  solarProtection,
  onSolarProtectionChange,
  onRequestHomeVisit,
}) => {
  const metrics = computeSolarEffect(solarProtection);

  // Tirar de la cadena del roller avanza cíclicamente el nivel de protección
  const handlePullRollerChain = () => {
    const nextLevel =
      solarProtection < 35 ? 55 : solarProtection < 80 ? 92 : 15;
    onSolarProtectionChange(nextLevel);
  };

  // Cálculo de apertura visual de los telones laterales (de 14% a 36% de ancho cada lado)
  const curtainSpreadPct = 10 + Math.round((solarProtection / 100) * 22);
  // Opacidad del filtro solar esmeralda sobre el salón
  const shadeOverlayOpacity = (solarProtection / 100) * 0.65;
  // Intensidad del resplandor solar directo de Ucayali
  const sunGlareOpacity = Math.max(0.05, 0.72 - (solarProtection / 100) * 0.65);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#FAF9F5] border-b-4 border-[#00600F] pt-6 pb-14 lg:py-12"
    >
      {/* Sombra proyectada diagonal de persiana sobre el lienzo arquitectónico */}
      <div
        className="pointer-events-none absolute inset-0 louver-shadow-overlay transition-opacity duration-300"
        style={{ opacity: 0.35 + (solarProtection / 100) * 0.55 }}
        aria-hidden="true"
      />

      {/* Telón Escénico Superior: Tubo Dorado de Cortina de Lado a Lado */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="relative flex items-center justify-between">
          <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-gradient-to-b from-[#FFF078] via-[#F7C502] to-[#9E7600] border-2 border-[#00600F] shrink-0 shadow-sm" />
          <div className="h-2.5 sm:h-3.5 w-full bg-gradient-to-b from-[#FFF078] via-[#F7C502] to-[#B58900] border-y border-[#00600F] flex items-center justify-around px-6">
            {Array.from({ length: 14 }).map((_, idx) => (
              <span
                key={idx}
                className="w-1.5 h-3.5 sm:h-4 bg-[#00600F] rounded-xs"
              />
            ))}
          </div>
          <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-gradient-to-b from-[#FFF078] via-[#F7C502] to-[#9E7600] border-2 border-[#00600F] shrink-0 shadow-sm" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Columna Izquierda (7 cols): Identidad Monumental + Slogan + Promesa de Valor */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-white border-2 border-[#00600F] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_8px_0_0_#00600F] relative overflow-hidden">
            {/* Franja decorativa superior con el lema comercial y ubicación */}
            <div className="flex items-center justify-between gap-4 pb-5 mb-6 border-b border-[#00600F]/15">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <OfficialLogoBadge className="w-14 h-14 sm:w-18 sm:h-18 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs font-display font-extrabold uppercase tracking-[0.18em] text-[#207000]">
                    {BRAND_INFO.commercialClaim}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-[#00600F] mt-0.5">
                    Atención por un <strong className="underline decoration-[#F7C502] decoration-2">maestro especialista en cortinas</strong> · Pucallpa
                  </p>
                </div>
              </div>

              <KitasolCurtainBlindEmblemSVG
                className="hidden sm:block w-24 h-20 shrink-0"
                slatClosurePct={solarProtection}
              />
            </div>

            {/* Titular Monumental CORTINAS "KITASOL" con la ventana de 4 paneles en la "A" */}
            <div className="my-2 text-center sm:text-left">
              <div className="flex justify-center sm:justify-start">
                <KitasolMonumentalWordmark
                  size="hero"
                  onDark={false}
                  showOvertitle={true}
                  showWaves={true}
                />
              </div>

              {/* Slogan oficial */}
              <h1
                className="mt-4 font-display font-extrabold text-xl sm:text-3xl lg:text-[2.35rem] text-[#00600F] leading-[1.18] tracking-tight"
                style={{ textWrap: 'balance' }}
              >
                “{BRAND_INFO.slogan}”
              </h1>

              <p className="mt-4 text-base sm:text-lg text-[#133016] leading-relaxed max-w-2xl">
                Vestimos las ventanas de su hogar, oficina o empresa en Pucallpa con{' '}
                <strong className="text-[#00600F]">
                  cortinas a medida, persianas verticales y horizontales, rollers modernos y rieles de alta durabilidad
                </strong>
                . Domine el sol intenso de Ucayali con elegancia palaciega, frescura térmica e intimidad total.
              </p>
            </div>

            {/* Las 4 Categorías Oficiales del Logo con divisores limpios */}
            <div className="my-6 py-4 px-4 bg-[#FAF9F5] border border-[#00600F]/20 rounded-xl">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'cortinas', label: 'CORTINAS' },
                  { id: 'persianas', label: 'PERSIANAS' },
                  { id: 'roller', label: 'ROLLER' },
                  { id: 'rieles', label: 'RIELES Y ACC.' },
                ].map((item) => (
                  <a
                    key={item.id}
                    href="#catalogo"
                    className="group flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors"
                  >
                    <CategoryLogoIcon
                      categoryId={item.id}
                      className="w-8 h-8 text-[#207000] group-hover:text-[#00600F] shrink-0 transition-transform group-hover:scale-105"
                    />
                    <span className="font-display font-extrabold text-xs tracking-wider text-[#00600F]">
                      {item.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Doble CTA + Promesas verificadas */}
            <div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  type="button"
                  onClick={onRequestHomeVisit}
                  className="inline-flex items-center justify-center gap-2.5 bg-[#F7C502] hover:bg-[#ffcf1a] text-[#00600F] font-display font-extrabold text-sm sm:text-base px-6 py-4 rounded-xl border-2 border-[#00600F] shadow-[0_4px_0_0_#00600F] active:translate-y-0.5 transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>Solicitar Presupuesto a Domicilio</span>
                  <ArrowDownRight className="w-5 h-5 stroke-[2.5]" aria-hidden="true" />
                </button>

                <a
                  href="#catalogo"
                  className="inline-flex items-center justify-center gap-2 bg-[#00600F] hover:bg-[#207000] text-white font-display font-bold text-sm sm:text-base px-6 py-4 rounded-xl border-2 border-[#00600F] transition-colors whitespace-nowrap"
                >
                  <span>Explorar Catálogo</span>
                </a>
              </div>

              {/* Metadatos limpios sin píldoras estáticas */}
              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-[#00600F]">
                <span>Consulte sin compromiso</span>
                <span aria-hidden="true">·</span>
                <span>Presupuesto a domicilio gratis {BRAND_INFO.coverageValidationNote}</span>
                <span aria-hidden="true">·</span>
                <span>Jr. Teniente Clavero 134 (El Huequito)</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha (5 cols): Escenario Teatral Interactivo "Prueba el Efecto Kitasol" */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#00600F] text-white border-2 border-[#00600F] rounded-2xl p-5 sm:p-6 shadow-[0_8px_0_0_#F7C502] relative">
            {/* Cabecera del simulador de luz solar */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-[11px] font-display font-extrabold uppercase tracking-[0.28em] text-[#F7C502]">
                  TEATRO DE LUZ & SOMBRA EN VIVO
                </span>
                <h2 className="text-lg sm:text-xl font-display font-extrabold text-white">
                  Prueba el Efecto “KITASOL”
                </h2>
              </div>
              <span className="font-mono-tabular text-xs font-extrabold bg-[#F7C502] text-[#00600F] px-2.5 py-1 rounded-md border border-[#00600F]">
                Láminas: {metrics.slatAngleDeg}°
              </span>
            </div>

            {/* Ventana Arquitectónica de 4 Paneles con Cortinas + Persianas + Cadena Roller */}
            <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden border-4 border-[#F7C502] bg-[#102a13] select-none">
              {/* Fotografía / Escena del Salón Iluminado */}
              <img
                src="./assets/images/sala_con_cortinas_1794762217945.jpg"
                alt="Salón residencial en Pucallpa con control solar Kitasol"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />

              {/* Resplandor Solar Intenso de Ucayali (disminuye al activar Kitasol) */}
              <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-200"
                style={{
                  opacity: sunGlareOpacity,
                  background:
                    'radial-gradient(circle at 75% 22%, rgba(255,246,165,0.95) 0%, rgba(247,197,2,0.55) 42%, rgba(247,197,2,0.1) 100%)',
                }}
                aria-hidden="true"
              />

              {/* Filtro de Sombra Esmeralda y Frescura Térmica (aumenta al cerrar Kitasol) */}
              <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-200"
                style={{
                  opacity: shadeOverlayOpacity,
                  background:
                    'linear-gradient(180deg, rgba(0,65,10,0.88) 0%, rgba(0,96,15,0.68) 60%, rgba(8,36,12,0.82) 100%)',
                }}
                aria-hidden="true"
              />

              {/* Láminas Horizontales de Persiana que giran según el control */}
              <div
                className="pointer-events-none absolute inset-0 flex flex-col justify-between py-1"
                aria-hidden="true"
              >
                {Array.from({ length: 11 }).map((_, idx) => {
                  const slatThickness = 2 + (solarProtection / 100) * 14;
                  return (
                    <div
                      key={idx}
                      className="w-full transition-all duration-150"
                      style={{
                        height: `${slatThickness}px`,
                        backgroundColor:
                          solarProtection > 50
                            ? 'rgba(247, 197, 2, 0.42)'
                            : 'rgba(247, 197, 2, 0.25)',
                        borderBottom: '1px solid rgba(0, 96, 15, 0.55)',
                      }}
                    />
                  );
                })}
              </div>

              {/* Cortina Plisada Izquierda que se despliega suavemente */}
              <div
                className="pointer-events-none absolute inset-y-0 left-0 curtain-pleats-emerald border-r-2 border-[#F7C502] shadow-xl transition-all duration-200"
                style={{ width: `${curtainSpreadPct}%` }}
                aria-hidden="true"
              >
                {/* Sujetador dorado */}
                <div className="absolute top-2/3 -right-1.5 left-0 h-2.5 bg-gradient-to-r from-[#F7C502] to-[#B58900] rounded-r-full border border-[#00600F]" />
              </div>

              {/* Cortina Plisada Derecha */}
              <div
                className="pointer-events-none absolute inset-y-0 right-0 curtain-pleats-emerald border-l-2 border-[#F7C502] shadow-xl transition-all duration-200"
                style={{ width: `${curtainSpreadPct}%` }}
                aria-hidden="true"
              >
                <div className="absolute top-2/3 -left-1.5 right-0 h-2.5 bg-gradient-to-l from-[#F7C502] to-[#B58900] rounded-l-full border border-[#00600F]" />
              </div>

              {/* Marco de Ventana de 4 Paneles inspirado en la "A" del logo */}
              <div
                className="pointer-events-none absolute inset-0 grid grid-cols-2 grid-rows-2 border-2 border-[#00600F]/60"
                aria-hidden="true"
              >
                <div className="border-r-2 border-b-2 border-[#FAF9F5]/45" />
                <div className="border-b-2 border-[#FAF9F5]/45" />
                <div className="border-r-2 border-[#FAF9F5]/45" />
                <div />
              </div>

              {/* Cadena de Mando Roller Interactiva en el lateral derecho */}
              <button
                type="button"
                onClick={handlePullRollerChain}
                title="Tirar de la cadena de mando Kitasol"
                aria-label="Tirar de la cadena del roller para regular el sol"
                className="absolute top-0 right-3 z-20 flex flex-col items-center group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#F7C502]"
              >
                <div
                  className="w-1.5 bg-repeating-linear-gradient border-x border-[#F7C502] transition-all duration-200"
                  style={{
                    height: `${76 + Math.round((solarProtection / 100) * 68)}px`,
                    backgroundImage:
                      'repeating-linear-gradient(180deg, #F7C502 0px, #F7C502 3px, transparent 3px, transparent 6px)',
                  }}
                />
                <div className="px-2 py-1.5 rounded-full bg-[#F7C502] text-[#00600F] border-2 border-[#00600F] shadow-md font-display font-extrabold text-[10px] tracking-wider uppercase group-hover:scale-110 transition-transform">
                  Tirar Cadena
                </div>
              </button>

              {/* Indicador inferior de estado lumínico sobre scrim medido */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/65 to-transparent p-3 flex items-center justify-between text-xs">
                <span className="font-semibold text-white">
                  {metrics.stageStatusLabel}
                </span>
                <span className="font-mono-tabular font-bold text-[#F7C502]">
                  {metrics.solarFilteredPct}% Sol Filtrado
                </span>
              </div>
            </div>

            {/* Control Deslizante Táctil + Botones de Escena */}
            <div className="mt-4 bg-[#004a0b] border border-[#207000] rounded-xl p-3.5">
              <div className="flex items-center justify-between text-xs font-bold mb-2">
                <label
                  htmlFor="hero-solar-slider"
                  className="flex items-center gap-1.5 text-[#F7C502]"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Desliza para girar persianas y cerrar cortinas</span>
                </label>
                <span className="font-mono-tabular text-white">
                  {metrics.protectionLevel}% Kitasol
                </span>
              </div>

              <input
                id="hero-solar-slider"
                type="range"
                min={0}
                max={100}
                value={solarProtection}
                onChange={(e) => onSolarProtectionChange(Number(e.target.value))}
                aria-label="Control de Luz Solar Kitasol"
                className="w-full kitasol-slider bg-gradient-to-r from-[#F7C502] via-[#207000] to-[#003307]"
              />

              {/* 3 Modos Rápidos Operables con el Pulgar */}
              <div className="grid grid-cols-3 gap-2 mt-3">
                {[
                  { label: 'Sol Intenso', value: 10 },
                  { label: 'Luz Difusa', value: 55 },
                  { label: 'Modo Palacio', value: 92 },
                ].map((preset) => {
                  const active = Math.abs(solarProtection - preset.value) <= 12;
                  return (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => onSolarProtectionChange(preset.value)}
                      className={`py-1.5 px-2 rounded-lg font-display font-extrabold text-xs transition-all cursor-pointer whitespace-nowrap ${
                        active
                          ? 'bg-[#F7C502] text-[#00600F] border border-[#00600F] shadow-xs'
                          : 'bg-[#00600F] text-white/90 hover:bg-[#207000] border border-white/15'
                      }`}
                    >
                      {preset.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Los 4 Beneficios Técnicos Declarados en tiempo real */}
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              {TECHNICAL_BENEFITS.map((benefit) => (
                <div
                  key={benefit.id}
                  className="p-2.5 rounded-lg bg-[#004f0c] border border-white/15 flex flex-col justify-between"
                >
                  <span className="font-display font-extrabold text-xs text-[#F7C502]">
                    {benefit.title}
                  </span>
                  <span className="text-[11px] text-white/90 leading-snug mt-0.5">
                    {benefit.shortDesc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
