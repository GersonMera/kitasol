import React from 'react';
import { MapPin, Clock, Phone, ExternalLink, Compass, Building2, Calculator } from 'lucide-react';
import { BRAND_INFO, CATEGORIES } from '../kitasolData.js';
import {
  KitasolMonumentalWordmark,
  OfficialLogoBadge,
  CategoryLogoIcon,
} from './KitasolGraphics';

export const UbicacionSection: React.FC = () => {
  return (
    <section
      id="ubicacion"
      className="py-16 sm:py-24 bg-white border-b-4 border-[#00600F] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-display font-bold text-xs sm:text-sm uppercase tracking-[0.4em] text-[#00600F]">
              U B I C A C I Ó N · E N · P U C A L L P A
            </p>
            <h2
              className="mt-2 font-display font-extrabold text-3xl sm:text-5xl text-[#00600F] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Visítanos en el Centro de Pucallpa (El Huequito)
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-mono-tabular font-bold text-[#207000]">
            {BRAND_INFO.locationCombinedNote}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Ficha Oficial de Dirección, Horario y Contacto (6 cols) */}
          <div className="lg:col-span-6 bg-[#FAF9F5] border-2 border-[#00600F] rounded-2xl p-6 sm:p-8 shadow-[0_8px_0_0_#00600F] flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Dirección Publicada */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F7C502] text-[#00600F] border-2 border-[#00600F] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 stroke-[2.5]" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-display font-extrabold uppercase tracking-wider text-[#207000]">
                    Dirección Oficial en Pucallpa:
                  </span>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#00600F] mt-0.5">
                    {BRAND_INFO.addressMain}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-[#132a15] mt-1">
                    {BRAND_INFO.addressRef}
                  </p>
                  <p className="text-xs font-mono-tabular font-bold text-[#00600F]/80 mt-1.5">
                    {BRAND_INFO.addressValidationNote}
                  </p>
                </div>
              </div>

              {/* Horario Referencial */}
              <div className="flex items-start gap-4 pt-5 border-t border-[#00600F]/15">
                <div className="w-12 h-12 rounded-xl bg-[#00600F] text-[#F7C502] border-2 border-[#00600F] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 stroke-[2.2]" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-display font-extrabold uppercase tracking-wider text-[#207000]">
                    Horario de Atención Referencial:
                  </span>
                  <p className="font-display font-extrabold text-lg sm:text-xl text-[#00600F] mt-0.5">
                    {BRAND_INFO.schedule}
                  </p>
                  <p className="text-xs font-mono-tabular font-bold text-[#00600F]/80 mt-1">
                    {BRAND_INFO.scheduleValidationNote}
                  </p>
                </div>
              </div>

              {/* Línea Telefónica Oficial y Red Social */}
              <div className="flex items-start gap-4 pt-5 border-t border-[#00600F]/15">
                <div className="w-12 h-12 rounded-xl bg-[#F7C502] text-[#00600F] border-2 border-[#00600F] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 stroke-[2.5]" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-display font-extrabold uppercase tracking-wider text-[#207000]">
                    Teléfono en Logotipo y Web:
                  </span>
                  <p className="font-mono-tabular font-extrabold text-2xl sm:text-3xl text-[#00600F] mt-0.5">
                    {BRAND_INFO.phoneDisplay}{' '}
                    <span className="text-sm font-normal text-[#1c381f]">
                      (+51 {BRAND_INFO.phoneDisplay})
                    </span>
                  </p>
                  <p className="text-xs font-mono-tabular font-bold text-[#00600F]/80 mt-1">
                    {BRAND_INFO.whatsappValidationNote}
                  </p>
                </div>
              </div>
            </div>

            {/* Botones de Llamada Directa y Facebook Oficial */}
            <div className="pt-5 border-t border-[#00600F]/15 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={BRAND_INFO.phoneHref}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#F7C502] hover:bg-[#ffcf1a] text-[#00600F] font-display font-extrabold text-sm sm:text-base px-5 py-3.5 rounded-xl border-2 border-[#00600F] shadow-[0_4px_0_0_#00600F] active:translate-y-0.5 transition-all whitespace-nowrap"
              >
                <Phone className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                <span>Llamar: {BRAND_INFO.phoneDisplay}</span>
              </a>

              <a
                href={BRAND_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#00600F] hover:bg-[#207000] text-white font-display font-bold text-sm px-5 py-3.5 rounded-xl border-2 border-[#00600F] transition-colors whitespace-nowrap"
              >
                <span>Facebook Oficial</span>
                <ExternalLink className="w-4 h-4 text-[#F7C502]" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Plano / Mapa Arquitectónico Referencial de Jr. Teniente Clavero 134, Pucallpa (6 cols) */}
          <div className="lg:col-span-6 bg-[#00600F] text-white border-2 border-[#00600F] rounded-2xl p-6 sm:p-8 shadow-[0_8px_0_0_#F7C502] flex flex-col justify-between">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div>
                <span className="text-xs font-display font-extrabold uppercase tracking-[0.22em] text-[#F7C502]">
                  CROQUIS ARQUITECTÓNICO DE REFERENCIA
                </span>
                <h3 className="font-display font-extrabold text-xl text-white">
                  Centro Comercial “El Huequito” · Callería, Pucallpa
                </h3>
              </div>
              <Compass className="w-8 h-8 text-[#F7C502] shrink-0" aria-hidden="true" />
            </div>

            {/* Mapa Vectorial Detallado del Centro de Pucallpa */}
            <div className="relative flex-1 min-h-[260px] rounded-xl overflow-hidden border-2 border-[#F7C502] bg-[#003d09] p-4 flex flex-col justify-between">
              <svg
                viewBox="0 0 500 280"
                className="w-full h-full object-cover"
                role="img"
                aria-label="Plano referencial de ubicación en Jr. Teniente Clavero 134, 2do piso de Decoraciones Buen Hogar, cerca del Centro Comercial El Huequito en Pucallpa"
              >
                {/* Cuadrícula urbana de Callería - Pucallpa */}
                <rect width="500" height="280" fill="#003808" />
                {[60, 140, 220, 300, 380, 440].map((x) => (
                  <line
                    key={`v-${x}`}
                    x1={x}
                    y1="0"
                    x2={x}
                    y2="280"
                    stroke="#005e0f"
                    strokeWidth="14"
                  />
                ))}
                {[55, 135, 215].map((y) => (
                  <line
                    key={`h-${y}`}
                    x1="0"
                    y1={y}
                    x2="500"
                    y2={y}
                    stroke="#005e0f"
                    strokeWidth="16"
                  />
                ))}

                {/* Vía Principal Destacada: Jr. Teniente Clavero */}
                <line
                  x1="0"
                  y1="135"
                  x2="500"
                  y2="135"
                  stroke="#F7C502"
                  strokeWidth="22"
                  opacity="0.9"
                />
                <text
                  x="24"
                  y="140"
                  fill="#00600F"
                  fontSize="12"
                  fontWeight="800"
                  letterSpacing="2"
                >
                  JR. TENIENTE CLAVERO (CUADRA 1)
                </text>

                {/* Bloque Referencia: Centro Comercial El Huequito */}
                <rect
                  x="235"
                  y="68"
                  width="130"
                  height="48"
                  rx="6"
                  fill="#207000"
                  stroke="#F7C502"
                  strokeWidth="2"
                />
                <text
                  x="300"
                  y="90"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="10"
                  fontWeight="700"
                >
                  REF: C.C. EL HUEQUITO
                </text>
                <text
                  x="300"
                  y="105"
                  textAnchor="middle"
                  fill="#F7C502"
                  fontSize="9"
                  fontWeight="700"
                >
                  ZONA COMERCIAL PUCALLPA
                </text>

                {/* Marcador Principal: CORTINAS KITASOL N.º 134 (2do Piso) */}
                <g transform="translate(260, 152)">
                  <rect
                    x="-85"
                    y="0"
                    width="210"
                    height="64"
                    rx="8"
                    fill="#F7C502"
                    stroke="#00600F"
                    strokeWidth="3"
                  />
                  <text
                    x="20"
                    y="22"
                    textAnchor="middle"
                    fill="#00600F"
                    fontSize="12"
                    fontWeight="900"
                  >
                    ★ CORTINAS “KITASOL” ★
                  </text>
                  <text
                    x="20"
                    y="38"
                    textAnchor="middle"
                    fill="#00600F"
                    fontSize="10"
                    fontWeight="800"
                  >
                    Jr. Teniente Clavero N.º 134
                  </text>
                  <text
                    x="20"
                    y="53"
                    textAnchor="middle"
                    fill="#004d0c"
                    fontSize="9.5"
                    fontWeight="700"
                  >
                    2do Piso — Decoraciones “Buen Hogar”
                  </text>
                </g>

                {/* Pin en la vía */}
                <circle
                  cx="280"
                  cy="135"
                  r="10"
                  fill="#00600F"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                />
              </svg>

              <div className="mt-3 pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="inline-flex items-center gap-1.5 font-semibold text-[#F7C502]">
                  <Building2 className="w-4 h-4" aria-hidden="true" />
                  <span>2do piso de Decoraciones “Buen Hogar”</span>
                </span>
                <span className="font-mono-tabular text-white/90">
                  Callería · Pucallpa · Ucayali
                </span>
              </div>
            </div>

            <p className="mt-4 text-xs text-white/85 leading-relaxed">
              Atendemos pedidos para viviendas familiares, departamentos, oficinas corporativas, instituciones y comercios en toda la ciudad de Pucallpa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const PalatialFooter: React.FC = () => {
  return (
    <>

      {/* Footer Palaciego Oficial */}
      <footer className="bg-[#00440a] text-white border-t-4 border-[#F7C502] pb-24 md:pb-12 pt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/15 items-center">
            {/* Sello circular + Wordmark (5 cols) */}
            <div className="md:col-span-5 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
              <OfficialLogoBadge className="w-24 h-24 shrink-0" />
              <div>
                <KitasolMonumentalWordmark
                  size="sm"
                  onDark={true}
                  showOvertitle={true}
                  showWaves={true}
                />
                <p className="mt-2 font-display font-bold text-base text-[#F7C502]">
                  “{BRAND_INFO.slogan}”
                </p>
                <p className="text-xs text-white/80 mt-1">
                  {BRAND_INFO.commercialClaim} · {BRAND_INFO.specialistRole}
                </p>
              </div>
            </div>

            {/* Las 4 Categorías Oficiales del Sello (4 cols) */}
            <div className="md:col-span-4">
              <p className="font-display font-extrabold text-xs uppercase tracking-[0.25em] text-[#F7C502] mb-3 text-center sm:text-left">
                Líneas del Logotipo Oficial
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {CATEGORIES.map((c) => (
                  <a
                    key={c.id}
                    href="#catalogo"
                    className="flex items-center gap-2 text-xs font-bold text-white/90 hover:text-[#F7C502] transition-colors"
                  >
                    <CategoryLogoIcon
                      categoryId={c.id}
                      className="w-5 h-5 text-[#F7C502] shrink-0"
                    />
                    <span>{c.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contacto rápido (3 cols) */}
            <div className="md:col-span-3 flex flex-col items-center sm:items-end text-center sm:text-right space-y-2">
              <a
                href={BRAND_INFO.phoneHref}
                className="inline-flex items-center gap-2 bg-[#F7C502] hover:bg-[#ffcf1a] text-[#00600F] font-display font-extrabold text-sm px-4 py-2.5 rounded-lg border-2 border-[#00600F] whitespace-nowrap"
              >
                <Phone className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                <span>{BRAND_INFO.phoneDisplay}</span>
              </a>
              <p className="text-xs text-white/85">
                {BRAND_INFO.addressMain}
              </p>
              <a
                href={BRAND_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#F7C502] hover:underline inline-flex items-center gap-1"
              >
                <span>Síguenos en Facebook</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/75">
            <p>
              © 2026 {BRAND_INFO.name} — {BRAND_INFO.altName}. Pucallpa, Ucayali, Perú.
            </p>
            <p className="font-mono-tabular">
              {BRAND_INFO.pricingPolicy}
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Bar en Móvil (≤ 15% de alto de pantalla, sólo en móvil) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[#00600F] border-t-4 border-[#F7C502] px-3 py-2 shadow-2xl">
        <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
          <a
            href="#cotizador"
            className="inline-flex items-center justify-center gap-1.5 bg-white text-[#00600F] font-display font-extrabold text-xs py-2.5 px-3 rounded-lg border-2 border-[#00600F] whitespace-nowrap"
          >
            <Calculator className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
            <span>Cotizar mi Ventana</span>
          </a>

          <a
            href={BRAND_INFO.phoneHref}
            className="inline-flex items-center justify-center gap-1.5 bg-[#F7C502] text-[#00600F] font-display font-extrabold text-xs py-2.5 px-3 rounded-lg border-2 border-[#00600F] whitespace-nowrap"
          >
            <Phone className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
            <span>Llamar: {BRAND_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </>
  );
};
