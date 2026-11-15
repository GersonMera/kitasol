import React from 'react';
import { Phone } from 'lucide-react';
import { BRAND_INFO } from '../kitasolData.js';
import { LetterAWithWindow } from './KitasolGraphics';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-4 border-[#00600F] shadow-[0_4px_0_0_#F7C502]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-6 lg:gap-8">
        {/* Zona 1: Emblema tipográfico en una línea con la ventana de 4 paneles en la "A" */}
        <a
          href="#inicio"
          aria-label="Cortinas KITASOL Pucallpa - Inicio"
          className="inline-flex items-baseline font-display font-extrabold text-xl sm:text-2xl tracking-tight whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#00600F]"
        >
          <span className="hidden sm:inline text-[#00600F] mr-1.5 text-xs sm:text-sm tracking-[0.28em] font-bold">
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

        {/* Zona 2: 5 enlaces de navegación limpios en una sola línea */}
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

        {/* Zona 3: 1 Acción Primaria en Amarillo Dorado #F7C502 con texto #00600F en negrita */}
        <div className="flex items-center shrink-0">
          <a
            href={BRAND_INFO.phoneHref}
            className="inline-flex items-center gap-2 bg-[#F7C502] hover:bg-[#ffcf1a] text-[#00600F] font-display font-extrabold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-lg border-2 border-[#00600F] shadow-[0_3px_0_0_#00600F] active:translate-y-0.5 transition-all whitespace-nowrap shrink-0"
          >
            <Phone className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
            <span>Llamar: {BRAND_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </header>
  );
};
