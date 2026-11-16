import React, { useState } from 'react';
import { BRAND_INFO } from '../kitasolData.js';
import { computeImageTransitionClasses } from '../utils/quoteLogic';

/**
 * Letra "A" monumental con la ventana arquitectónica de 4 paneles en su interior,
 * fiel al logotipo oficial de CORTINAS "KITASOL".
 */
export const LetterAWithWindow: React.FC<{
  className?: string;
  fillColor?: string;
  windowColor?: string;
}> = ({
  className = 'inline-block h-[0.84em] w-[0.86em] align-baseline',
  fillColor = '#00600F',
  windowColor = '#FAF9F5',
}) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    {/* Silueta externa de la letra A ultra-pesada */}
    <path
      d="M36 4 L64 4 L98 98 L72 98 L65 78 L35 78 L28 98 L2 98 Z"
      fill={fillColor}
    />
    {/* Hueco superior triangular */}
    <polygon points="50,22 39,52 61,52" fill={windowColor} />
    {/* Ventana de 4 paneles (2x2) en el corazón de la A */}
    <g fill={fillColor}>
      <rect x="41" y="56" width="8" height="8" rx="0.8" />
      <rect x="51" y="56" width="8" height="8" rx="0.8" />
      <rect x="41" y="66" width="8" height="8" rx="0.8" />
      <rect x="51" y="66" width="8" height="8" rx="0.8" />
    </g>
    {/* Fondo contrastante detrás de los 4 paneles */}
    <rect
      x="38.5"
      y="53.5"
      width="23"
      height="23"
      rx="1.5"
      fill={windowColor}
    />
    <rect x="41" y="56" width="7.8" height="7.8" fill={fillColor} />
    <rect x="51.2" y="56" width="7.8" height="7.8" fill={fillColor} />
    <rect x="41" y="66.2" width="7.8" height="7.8" fill={fillColor} />
    <rect x="51.2" y="66.2" width="7.8" height="7.8" fill={fillColor} />
  </svg>
);

/**
 * Logotipo tipográfico monumental: C O R T I N A S "KITASOL"
 * con comillas escénicas verdes, la ventana de 4 paneles en la "A" y doble onda inferior.
 */
export const KitasolMonumentalWordmark: React.FC<{
  size?: 'sm' | 'md' | 'lg' | 'hero';
  onDark?: boolean;
  showOvertitle?: boolean;
  showWaves?: boolean;
}> = ({
  size = 'md',
  onDark = false,
  showOvertitle = true,
  showWaves = true,
}) => {
  const kitaColor = onDark ? '#FFFFFF' : '#00600F';
  const windowBg = onDark ? '#00600F' : '#FAF9F5';
  const quoteColor = onDark ? '#F7C502' : '#00600F';

  const sizeClasses = {
    sm: 'text-2xl sm:text-3xl',
    md: 'text-3xl sm:text-4xl',
    lg: 'text-5xl sm:text-6xl md:text-7xl',
    hero: 'text-5xl sm:text-7xl md:text-8xl lg:text-[6.25rem]',
  }[size];

  const overtitleClasses = {
    sm: 'text-xs sm:text-sm mb-1 font-black',
    md: 'text-sm sm:text-base md:text-lg mb-1.5 font-black',
    lg: 'text-xl sm:text-2xl md:text-3xl mb-2 font-black',
    hero: 'text-2xl sm:text-4xl md:text-5xl lg:text-[4.5rem] mb-2 sm:mb-3 font-black leading-none',
  }[size];

  return (
    <div className="inline-flex flex-col items-center select-none max-w-full">
      {showOvertitle && (
        <span
          className={`w-full block text-center font-display font-black uppercase whitespace-nowrap ${overtitleClasses} ${
            onDark ? 'text-[#F7C502]' : 'text-[#00600F]'
          }`}
          style={{ letterSpacing: '0.22em', paddingLeft: '0.22em' }}
        >
          CORTINAS
        </span>
      )}

      <div
        className={`font-display font-extrabold uppercase leading-none tracking-tight flex items-start justify-center ${sizeClasses}`}
      >
        <span
          className="font-serif font-black text-[0.72em] leading-none -mt-[0.06em] mr-0.5"
          style={{ color: quoteColor }}
          aria-hidden="true"
        >
          “
        </span>
        <span
          className="inline-flex items-baseline"
          style={{
            color: kitaColor,
            textShadow: onDark
              ? '0 3px 16px rgba(0,0,0,0.45)'
              : '0 2px 0 rgba(255,255,255,0.9)',
          }}
        >
          KIT
          <LetterAWithWindow
            fillColor={kitaColor}
            windowColor={windowBg}
            className="inline-block h-[0.79em] w-[0.84em] -mx-[0.02em] translate-y-[0.04em]"
          />
        </span>
        <span
          className="inline-block"
          style={{
            color: '#F7C502',
            textShadow: onDark
              ? '0 3px 16px rgba(0,0,0,0.5)'
              : '1px 2px 0 #00600F',
          }}
        >
          SOL
        </span>
        <span
          className="font-serif font-black text-[0.72em] leading-none -mt-[0.06em] ml-0.5"
          style={{ color: quoteColor }}
          aria-hidden="true"
        >
          ”
        </span>
      </div>

      {showWaves && (
        <svg
          viewBox="0 0 400 32"
          className="w-full max-w-[92%] h-auto mt-1"
          aria-hidden="true"
        >
          <path
            d="M8 22 C 110 2, 185 6, 250 18 C 310 28, 355 24, 392 10 C 350 28, 295 32, 225 22 C 155 12, 85 10, 8 22 Z"
            fill={onDark ? '#207000' : '#00600F'}
          />
          <path
            d="M20 26 C 120 12, 195 16, 260 25 C 315 32, 360 28, 388 16 C 352 30, 300 33, 232 27 C 165 20, 90 16, 20 26 Z"
            fill="#F7C502"
          />
        </svg>
      )}
    </div>
  );
};

/**
 * Recreación vectorial SVG del emblema superior del logo (tubo dorado + cortina verde plisada
 * recogida a la izquierda + persiana horizontal amarilla a la derecha con cadena y péndulo verde).
 */
export const KitasolCurtainBlindEmblemSVG: React.FC<{
  className?: string;
  slatClosurePct?: number;
}> = ({ className = 'w-44 h-36', slatClosurePct = 35 }) => {
  const slatHeight = Math.max(4, Math.min(11, 5 + (slatClosurePct / 100) * 6));
  const pendantY = 128 + Math.round((slatClosurePct / 100) * 18);

  return (
    <svg
      viewBox="0 0 260 190"
      className={className}
      role="img"
      aria-label="Emblema Cortinas Kitasol: cortina verde plisada y persiana horizontal amarilla con cadena de mando"
    >
      <defs>
        <linearGradient id="goldRodGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF078" />
          <stop offset="45%" stopColor="#F7C502" />
          <stop offset="100%" stopColor="#B58900" />
        </linearGradient>
        <linearGradient id="curtainFoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00440A" />
          <stop offset="22%" stopColor="#207000" />
          <stop offset="40%" stopColor="#00580E" />
          <stop offset="62%" stopColor="#2B8A04" />
          <stop offset="82%" stopColor="#004D0C" />
          <stop offset="100%" stopColor="#1B6600" />
        </linearGradient>
        <linearGradient id="slatGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE14D" />
          <stop offset="65%" stopColor="#F7C502" />
          <stop offset="100%" stopColor="#C49700" />
        </linearGradient>
      </defs>

      {/* Persiana horizontal amarilla en el lado derecho */}
      <g>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((idx) => {
          const y = 26 + idx * 16;
          return (
            <g key={idx}>
              <rect
                x="88"
                y={y}
                width="126"
                height={slatHeight}
                rx="1.5"
                fill="url(#slatGrad)"
                stroke="#A88000"
                strokeWidth="0.6"
              />
              {/* Hilo guía vertical de la persiana */}
              <line
                x1="186"
                y1={y - 3}
                x2="186"
                y2={y + slatHeight + 3}
                stroke="#8F6D00"
                strokeWidth="1.1"
              />
            </g>
          );
        })}
      </g>

      {/* Cadena colgante dorada en el extremo derecho + péndulo verde */}
      <g>
        <line
          x1="224"
          y1="26"
          x2="224"
          y2={pendantY}
          stroke="#D9A700"
          strokeWidth="3"
          strokeDasharray="2 3.5"
          strokeLinecap="round"
        />
        <rect
          x="219"
          y={pendantY}
          width="10"
          height="24"
          rx="4.5"
          fill="#00600F"
          stroke="#207000"
          strokeWidth="1.5"
        />
      </g>

      {/* Tubo dorado superior con terminales esféricos */}
      <rect
        x="34"
        y="14"
        width="192"
        height="9"
        rx="4.5"
        fill="url(#goldRodGrad)"
        stroke="#9E7600"
        strokeWidth="0.8"
      />
      <circle cx="28" cy="18.5" r="9.5" fill="url(#goldRodGrad)" stroke="#9E7600" strokeWidth="0.8" />
      <circle cx="232" cy="18.5" r="9.5" fill="url(#goldRodGrad)" stroke="#9E7600" strokeWidth="0.8" />

      {/* Cortina verde plisada recogida hacia la izquierda */}
      <path
        d="M42 12 L176 12 C164 62, 134 106, 98 134 L106 176 L38 176 L48 124 C42 88, 42 50, 42 12 Z"
        fill="url(#curtainFoldGrad)"
        stroke="#003B08"
        strokeWidth="1.2"
      />
      {/* Pliegues internos escultóricos */}
      <path
        d="M66 13 C64 58, 58 98, 54 126 L56 176"
        stroke="#003807"
        strokeWidth="2.4"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M92 13 C88 60, 74 102, 66 129 L70 176"
        stroke="#003807"
        strokeWidth="2.6"
        fill="none"
        opacity="0.75"
      />
      <path
        d="M122 13 C114 62, 92 104, 78 131 L84 176"
        stroke="#003807"
        strokeWidth="2.6"
        fill="none"
        opacity="0.75"
      />
      <path
        d="M150 13 C138 64, 112 106, 90 133"
        stroke="#369E08"
        strokeWidth="2.2"
        fill="none"
        opacity="0.55"
      />

      {/* Sujetador dorado diagonal con esfera */}
      <circle
        cx="41"
        cy="115"
        r="8.5"
        fill="url(#goldRodGrad)"
        stroke="#8C6700"
        strokeWidth="0.9"
      />
      <path
        d="M46 116 L103 144 C105 145, 104 150, 100 149 L43 121 Z"
        fill="url(#goldRodGrad)"
        stroke="#8C6700"
        strokeWidth="0.9"
      />
    </svg>
  );
};

/**
 * Los 4 iconos vectoriales oficiales del logotipo de CORTINAS "KITASOL":
 * 1. CORTINAS | 2. PERSIANAS | 3. ROLLER | 4. RIELES Y ACCESORIOS
 */
export const CategoryLogoIcon: React.FC<{
  categoryId: string;
  className?: string;
}> = ({ categoryId, className = 'w-12 h-12' }) => {
  switch (categoryId) {
    case 'cortinas':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          {/* Barra superior */}
          <rect x="8" y="8" width="48" height="4.5" rx="2" fill="currentColor" />
          {/* Cortina izquierda recogida */}
          <path
            d="M10 14 L29 14 C27 26, 22 35, 17 40 L20 56 L10 56 Z"
            fill="currentColor"
          />
          <rect x="10" y="38" width="9" height="2.8" rx="1" fill="#F7C502" />
          {/* Cortina derecha recogida */}
          <path
            d="M54 14 L35 14 C37 26, 42 35, 47 40 L44 56 L54 56 Z"
            fill="currentColor"
          />
          <rect x="45" y="38" width="9" height="2.8" rx="1" fill="#F7C502" />
        </svg>
      );
    case 'persianas':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          {/* Riel cabezal */}
          <rect x="8" y="8" width="48" height="5.5" rx="1.5" fill="currentColor" />
          {/* 5 láminas verticales */}
          {[11, 20, 29, 38, 47].map((x) => (
            <path
              key={x}
              d={`M${x} 16 L${x + 6} 16 L${x + 6} 53 L${x + 3} 56 L${x} 53 Z`}
              fill="currentColor"
            />
          ))}
        </svg>
      );
    case 'roller':
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          {/* Tubo superior roller */}
          <rect x="8" y="10" width="48" height="5" rx="2" fill="currentColor" />
          {/* Tela enrollable */}
          <rect x="11" y="17" width="42" height="27" rx="1" fill="currentColor" />
          {/* Contrapeso inferior */}
          <rect x="9" y="46" width="46" height="3" rx="1.5" fill="currentColor" />
          {/* Tirador central */}
          <line x1="32" y1="49" x2="32" y2="56" stroke="currentColor" strokeWidth="2.5" />
          <rect x="28" y="55" width="8" height="3" rx="1.5" fill="#F7C502" />
        </svg>
      );
    case 'rieles':
    default:
      return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
          {/* Perfil del riel */}
          <rect x="6" y="14" width="52" height="7" rx="2" fill="currentColor" />
          <line x1="8" y1="24" x2="56" y2="24" stroke="currentColor" strokeWidth="2" />
          {/* 3 correderas / accesorios colgantes */}
          {[14, 29, 44].map((x) => (
            <g key={x}>
              <rect x={x + 1} y="24" width="4" height="7" fill="currentColor" />
              <rect x={x - 1} y="31" width="8" height="15" rx="3" fill="currentColor" />
              <circle cx={x + 3} cy="40" r="2.2" fill="#F7C502" />
            </g>
          ))}
        </svg>
      );
  }
};

/**
 * Imagen resiliente con respaldo arquitectónico SVG en caso de bloqueo de red externa.
 */
export const ResilientArchitecturalImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  sceneTitle?: string;
  sceneType?: 'curtain' | 'blinds' | 'roller' | 'track';
}> = ({ src, alt, className = 'w-full h-full object-cover', sceneTitle, sceneType = 'curtain' }) => {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const imgRef = React.useRef<HTMLImageElement | null>(null);

  // Observar la entrada cercana al viewport para pre-activar lazy loading con margen
  React.useEffect(() => {
    const node = containerRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
            break;
          }
        }
      },
      { rootMargin: '300px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Reiniciar estado de transición cuando cambia src y detectar si ya está en caché
  React.useEffect(() => {
    setFailed(false);
    const imgEl = imgRef.current;
    if (imgEl && imgEl.complete && imgEl.naturalWidth > 0) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [src]);

  const { imgClassName, backdropPulseClassName } = computeImageTransitionClasses(
    loaded,
    failed,
    className
  );

  return (
    <div
      ref={containerRef}
      data-in-view={isInView ? 'true' : 'false'}
      className="relative w-full h-full overflow-hidden bg-[#07260c]"
    >
      {/* Ilustración arquitectónica de respaldo siempre presente debajo para evitar parpadeo */}
      <div
        className={`absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-br from-[#00440a] via-[#00600F] to-[#1a5c02] ${backdropPulseClassName}`}
        aria-hidden="true"
      >
        <div className="absolute inset-0 opacity-25 louver-shadow-overlay" />
        {/* Ventana arquitectónica estilizada */}
        <svg
          viewBox="0 0 400 260"
          className="w-full h-full opacity-45 object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="ucayaliSun" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF7B2" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#F7C502" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#00600F" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect x="40" y="20" width="320" height="200" rx="4" fill="url(#ucayaliSun)" stroke="#F7C502" strokeWidth="3" />
          <line x1="200" y1="20" x2="200" y2="220" stroke="#00600F" strokeWidth="6" />
          <line x1="40" y1="120" x2="360" y2="120" stroke="#00600F" strokeWidth="6" />
          {sceneType === 'curtain' && (
            <>
              <path d="M40 20 L135 20 C125 95, 100 155, 78 220 L40 220 Z" fill="#004d0c" />
              <path d="M360 20 L265 20 C275 95, 300 155, 322 220 L360 220 Z" fill="#004d0c" />
            </>
          )}
          {sceneType === 'blinds' &&
            [38, 62, 86, 110, 134, 158, 182].map((y) => (
              <rect key={y} x="44" y={y} width="312" height="10" fill="#F7C502" opacity="0.75" />
            ))}
          {sceneType === 'roller' && (
            <rect x="44" y="22" width="312" height="118" fill="#00520d" opacity="0.82" />
          )}
        </svg>
        {sceneTitle && (
          <span className="relative z-10 text-xs font-display font-bold tracking-[0.25em] uppercase text-[#F7C502]">
            {sceneTitle}
          </span>
        )}
      </div>

      {!failed && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
          data-loaded={loaded ? 'true' : 'false'}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={imgClassName}
        />
      )}
    </div>
  );
};

/**
 * Sello circular oficial de CORTINAS "KITASOL" con soporte para la imagen original adjunta
 * y respaldo vectorial completo.
 */
export const OfficialLogoBadge: React.FC<{
  className?: string;
}> = ({ className = 'w-28 h-28' }) => {
  const [imgError, setImgError] = useState(false);

  if (!imgError) {
    return (
      <div
        className={`relative rounded-full overflow-hidden bg-white p-0.5 shadow-md ring-2 ring-[#F7C502] ${className}`}
      >
        <img
          src={BRAND_INFO.logoImage}
          alt="Sello Oficial Cortinas KITASOL Pucallpa"
          onError={() => setImgError(true)}
          className="w-full h-full object-contain rounded-full"
        />
      </div>
    );
  }

  return (
    <div
      className={`rounded-full bg-white border-4 border-[#F7C502] ring-2 ring-[#00600F] flex flex-col items-center justify-center p-2 shadow-md ${className}`}
    >
      <KitasolMonumentalWordmark size="sm" showOvertitle={true} showWaves={false} />
    </div>
  );
};
