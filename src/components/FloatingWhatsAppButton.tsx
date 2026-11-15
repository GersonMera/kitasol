import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { BRAND_INFO } from '../kitasolData.js';

/**
 * Botón flotante de acción rápida (FAB) para WhatsApp en la esquina inferior derecha.
 * Utiliza el Verde Principal "#00600F" con borde Amarillo Dorado "#F7C502" y animación
 * de entrada con ligero rebote elástico (spring bounce).
 */
export const FloatingWhatsAppButton: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      href={BRAND_INFO.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Consultar por WhatsApp al ${BRAND_INFO.phoneDisplay}`}
      title={`WhatsApp Cortinas KITASOL: ${BRAND_INFO.phoneDisplay} ${BRAND_INFO.whatsappValidationNote}`}
      initial={
        prefersReducedMotion
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0, scale: 0.4, y: 28 }
      }
      animate={
        prefersReducedMotion
          ? { opacity: 1, scale: 1, y: 0 }
          : {
              opacity: 1,
              scale: 1,
              y: [0, -6, 0],
            }
      }
      transition={{
        opacity: { duration: 0.25 },
        scale: {
          type: 'spring',
          stiffness: 340,
          damping: 15,
          mass: 0.9,
        },
        y: {
          duration: 0.55,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.15,
        },
      }}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.06, y: -3 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.95 }}
      className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 group inline-flex items-center gap-2.5 bg-[#00600F] hover:bg-[#207000] text-white px-4 py-3.5 rounded-full border-2 border-[#F7C502] shadow-[0_6px_0_0_#003808,0_10px_24px_rgba(0,40,6,0.38)] focus-visible:outline-2 focus-visible:outline-[#F7C502] cursor-pointer select-none"
    >
      {/* Icono vectorial oficial de WhatsApp */}
      <span className="w-7 h-7 rounded-full bg-[#F7C502] text-[#00600F] flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4 fill-current"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.97 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8.01 12.27C8.14 12.44 9.76 14.94 12.25 16.01C14.34 16.92 14.76 16.74 15.21 16.7C15.66 16.66 16.68 16.09 16.89 15.51C17.1 14.93 17.1 14.43 17.04 14.33C16.97 14.24 16.81 14.18 16.56 14.06C16.31 13.94 15.09 13.34 14.87 13.26C14.64 13.17 14.48 13.13 14.31 13.38C14.15 13.63 13.67 14.18 13.53 14.35C13.38 14.52 13.24 14.54 12.99 14.42C12.74 14.29 11.94 14.03 10.99 13.19C10.25 12.53 9.75 11.71 9.61 11.46C9.46 11.21 9.59 11.08 9.72 10.95C9.83 10.84 9.97 10.66 10.1 10.51C10.22 10.37 10.27 10.26 10.35 10.1C10.43 9.93 10.39 9.79 10.33 9.66C10.27 9.54 9.77 8.32 9.56 7.82C9.36 7.34 9.16 7.4 9.01 7.39C8.86 7.38 8.7 7.33 8.53 7.33Z" />
        </svg>
      </span>

      <span className="flex flex-col text-left leading-none pr-1">
        <span className="text-[10px] font-display font-extrabold uppercase tracking-wider text-[#F7C502]">
          WhatsApp Directo
        </span>
        <span className="font-mono-tabular font-extrabold text-xs sm:text-sm text-white mt-0.5 whitespace-nowrap">
          {BRAND_INFO.phoneDisplay}
        </span>
      </span>
    </motion.a>
  );
};
