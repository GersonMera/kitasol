import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, Calculator } from 'lucide-react';
import { BRAND_INFO } from '../kitasolData.js';
import { LetterAWithWindow } from './KitasolGraphics';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const NAV_LINKS = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#catalogo', label: 'Catálogo' },
    { href: '#ambientes', label: 'Ambientes' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#cotizador', label: 'Cotizador de Medidas' },
    { href: '#ubicacion', label: 'Ubicación' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-4 border-[#00600F] shadow-[0_4px_0_0_#F7C502]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-6 lg:gap-8">
          {/* Zona 1: Emblema tipográfico en una línea con la ventana de 4 paneles en la "A" */}
          <a
            href="#inicio"
            aria-label="Cortinas KITASOL Pucallpa - Inicio"
            className="inline-flex items-baseline font-display font-extrabold text-xl sm:text-2xl tracking-tight whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#00600F]"
          >
            <span className="hidden sm:inline text-[#00600F] mr-2 text-base sm:text-lg tracking-[0.25em] font-black">
              CORTINAS
            </span>
            <span className="text-[#00600F]">“KIT</span>
            <LetterAWithWindow
              fillColor="#00600F"
              windowColor="#FFFFFF"
              className="inline-block h-[0.82em] w-[0.85em] -mx-[0.02em] translate-y-[0.04em]"
            />
            <span className="text-[#F7C502]" style={{ textShadow: '1px 1px 0 #00600F' }}>
              SOL
            </span>
            <span className="text-[#00600F]">”</span>
          </a>

          {/* Zona 2: Enlaces de navegación de escritorio (lg: pantallas grandes) */}
          <nav
            aria-label="Navegación principal"
            className="hidden lg:flex items-center gap-7 text-sm font-bold text-[#00600F]"
          >
            <a
              href="#catalogo"
              className="hover:text-[#207000] underline-offset-8 hover:underline transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Catálogo
            </a>
            <a
              href="#ambientes"
              className="hover:text-[#207000] underline-offset-8 hover:underline transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Ambientes
            </a>
            <a
              href="#servicios"
              className="hover:text-[#207000] underline-offset-8 hover:underline transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Servicios
            </a>
            <a
              href="#cotizador"
              className="hover:text-[#207000] underline-offset-8 hover:underline transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Cotizador de Medidas
            </a>
            <a
              href="#ubicacion"
              className="hover:text-[#207000] underline-offset-8 hover:underline transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Ubicación
            </a>
          </nav>

          {/* Zona 3: Botones de Acción (Escritorio + Móvil/Tablet) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Botón de Llamar visible en escritorio y tablet */}
            <a
              href={BRAND_INFO.phoneHref}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#F7C502] hover:bg-[#ffcf1a] text-[#00600F] font-display font-extrabold text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border-2 border-[#00600F] shadow-[0_3px_0_0_#00600F] active:translate-y-0.5 transition-all whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" aria-hidden="true" />
              <span className="hidden sm:inline">Llamar: {BRAND_INFO.phoneDisplay}</span>
              <span className="sm:hidden">Llamar</span>
            </a>

            {/* Botón Hamburguesa para Móvil y Tablet (oculto en lg) */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
              aria-expanded={isMenuOpen}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg bg-[#FAF9F5] hover:bg-[#F7C502] border-2 border-[#00600F] text-[#00600F] shadow-[0_2px_0_0_#00600F] active:translate-y-0.5 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#00600F]"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Menú Desplegable / Drawer para Móvil y Tablet (< lg) */}
      {isMenuOpen && (
        <>
          {/* Backdrop con desenfoque suave */}
          <div
            className="fixed inset-0 top-16 sm:top-20 bg-black/40 backdrop-blur-xs z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Panel de Navegación Móvil y Tablet */}
          <nav
            aria-label="Navegación móvil y tablet"
            className="fixed top-16 sm:top-20 inset-x-0 bg-white border-b-4 border-[#00600F] shadow-2xl z-50 lg:hidden max-h-[calc(100vh-4.5rem)] overflow-y-auto animate-in slide-in-from-top-2 duration-200"
          >
            <div className="max-w-md mx-auto p-4 sm:p-6 space-y-4">
              {/* Enlaces de secciones con icono de avance */}
              <div className="divide-y divide-[#00600F]/15 border-y border-[#00600F]/15">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="flex items-center justify-between py-3.5 px-2 text-base font-display font-extrabold text-[#00600F] hover:text-[#207000] hover:bg-[#FAF9F5] rounded-md transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#F7C502]" aria-hidden="true" />
                  </a>
                ))}
              </div>

              {/* Botones de Acción Directa en el Menú */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={BRAND_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-[#052b0c] font-display font-extrabold text-sm py-3 px-4 rounded-xl border-2 border-[#00600F] shadow-[0_3px_0_0_#00600F] active:translate-y-0.5 transition-all"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" aria-hidden="true">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.97 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8.01 12.27C8.14 12.44 9.76 14.94 12.25 16.01C14.34 16.92 14.76 16.74 15.21 16.7C15.66 16.66 16.68 16.09 16.89 15.51C17.1 14.93 17.1 14.43 17.04 14.33C16.97 14.24 16.81 14.18 16.56 14.06C16.31 13.94 15.09 13.34 14.87 13.26C14.64 13.17 14.48 13.13 14.31 13.38C14.15 13.63 13.67 14.18 13.53 14.35C13.38 14.52 13.24 14.54 12.99 14.42C12.74 14.29 11.94 14.03 10.99 13.19C10.25 12.53 9.75 11.71 9.61 11.46C9.46 11.21 9.59 11.08 9.72 10.95C9.83 10.84 9.97 10.66 10.1 10.51C10.22 10.37 10.27 10.26 10.35 10.1C10.43 9.93 10.39 9.79 10.33 9.66C10.27 9.54 9.77 8.32 9.56 7.82C9.36 7.34 9.16 7.4 9.01 7.39C8.86 7.38 8.7 7.33 8.53 7.33Z" />
                  </svg>
                  <span>Consultar por WhatsApp Directo</span>
                </a>

                <a
                  href="#cotizador"
                  onClick={handleLinkClick}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F7C502] hover:bg-[#ffcf1a] text-[#00600F] font-display font-extrabold text-sm py-3 px-4 rounded-xl border-2 border-[#00600F] shadow-[0_3px_0_0_#00600F] active:translate-y-0.5 transition-all"
                >
                  <Calculator className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                  <span>Cotizar Medidas de Ventana</span>
                </a>
              </div>

              {/* Referencia de Sede */}
              <div className="pt-3 border-t border-[#00600F]/15 text-center text-xs text-[#133016]">
                <p className="font-display font-bold text-[#00600F]">
                  “{BRAND_INFO.slogan}”
                </p>
                <p className="text-[11px] text-[#207000] mt-0.5">
                  {BRAND_INFO.addressMain} (El Huequito) · Pucallpa
                </p>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
};
