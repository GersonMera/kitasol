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

          {/* Mapa Oficial en Google Maps (6 cols) */}
          <div className="lg:col-span-6 bg-[#00600F] text-white border-2 border-[#00600F] rounded-2xl p-6 sm:p-8 shadow-[0_8px_0_0_#F7C502] flex flex-col justify-between">
            <div className="flex items-center justify-between gap-3 mb-4">
              <div>
                <span className="text-xs font-display font-extrabold uppercase tracking-[0.22em] text-[#F7C502]">
                  MAPA OFICIAL DE GOOGLE MAPS
                </span>
                <h3 className="font-display font-extrabold text-xl text-white">
                  CORTINAS EN PUCALLPA: KITASOL
                </h3>
              </div>
              <Compass className="w-8 h-8 text-[#F7C502] shrink-0" aria-hidden="true" />
            </div>

            {/* Iframe interactivo de Google Maps */}
            <div className="relative flex-1 min-h-[320px] rounded-xl overflow-hidden border-2 border-[#F7C502] bg-[#003d09] shadow-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.1595099946007!2d-74.533935!3d-8.3859671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a3bcf085999763%3A0xd51e1fc2b269ef58!2sCORTINAS%20EN%20PUCALLPA%3A%20KITASOL!5e0!3m2!1ses-419!2spe!4v1794764107965!5m2!1ses-419!2spe"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[320px] border-0"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Mapa oficial de ubicación de Cortinas KITASOL en Pucallpa"
              />
            </div>

            <div className="mt-4 pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 font-semibold text-[#F7C502]">
                <Building2 className="w-4 h-4" aria-hidden="true" />
                <span>Jr. Teniente Clavero N.º 134 (2do piso Decoraciones Buen Hogar)</span>
              </span>
              <a
                href="https://maps.google.com/?cid=15356782352136798040"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold text-[#F7C502] hover:underline"
              >
                <span>Abrir en Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>

            <p className="mt-3 text-xs text-white/85 leading-relaxed">
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
            <p>
              Desarrollado por{' '}
              <a
                href="https://github.com/GersonMera"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F7C502] hover:underline font-semibold transition-colors"
              >
                GersonMera
              </a>
            </p>
            <p className="font-mono-tabular">
              {BRAND_INFO.pricingPolicy}
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Bar en Móvil (≤ 15% de alto de pantalla, sólo en móvil) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[#00600F] border-t-4 border-[#F7C502] px-3 py-2 shadow-2xl">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          <a
            href={BRAND_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 bg-[#25D366] text-[#052b0c] font-display font-extrabold text-xs py-2.5 px-2 rounded-lg border-2 border-[#00600F] shadow-xs active:translate-y-0.5 transition-all whitespace-nowrap"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current shrink-0" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.97 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8.01 12.27C8.14 12.44 9.76 14.94 12.25 16.01C14.34 16.92 14.76 16.74 15.21 16.7C15.66 16.66 16.68 16.09 16.89 15.51C17.1 14.93 17.1 14.43 17.04 14.33C16.97 14.24 16.81 14.18 16.56 14.06C16.31 13.94 15.09 13.34 14.87 13.26C14.64 13.17 14.48 13.13 14.31 13.38C14.15 13.63 13.67 14.18 13.53 14.35C13.38 14.52 13.24 14.54 12.99 14.42C12.74 14.29 11.94 14.03 10.99 13.19C10.25 12.53 9.75 11.71 9.61 11.46C9.46 11.21 9.59 11.08 9.72 10.95C9.83 10.84 9.97 10.66 10.1 10.51C10.22 10.37 10.27 10.26 10.35 10.1C10.43 9.93 10.39 9.79 10.33 9.66C10.27 9.54 9.77 8.32 9.56 7.82C9.36 7.34 9.16 7.4 9.01 7.39C8.86 7.38 8.7 7.33 8.53 7.33Z" />
            </svg>
            <span>WhatsApp</span>
          </a>

          <a
            href="#cotizador"
            className="inline-flex items-center justify-center gap-1 bg-white text-[#00600F] font-display font-extrabold text-xs py-2.5 px-2 rounded-lg border-2 border-[#00600F] shadow-xs active:translate-y-0.5 transition-all whitespace-nowrap"
          >
            <Calculator className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
            <span>Cotizar</span>
          </a>

          <a
            href={BRAND_INFO.phoneHref}
            className="inline-flex items-center justify-center gap-1 bg-[#F7C502] text-[#00600F] font-display font-extrabold text-xs py-2.5 px-2 rounded-lg border-2 border-[#00600F] shadow-xs active:translate-y-0.5 transition-all whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
            <span>Llamar</span>
          </a>
        </div>
      </div>
    </>
  );
};
