import { AMBIENTES, BRAND_INFO, CATEGORIES, SERVICIOS, FAQS } from '../kitasolData.js';

export interface SolarEffectMetrics {
  /** 0 = Sol Tropical Intenso (Persiana abierta), 100 = Protección Kitasol Total (Cerrada) */
  protectionLevel: number;
  /** Ángulo de láminas en grados (0° horizontal abierto a 82° cerrado) */
  slatAngleDeg: number;
  /** Porcentaje de rayos solares directos filtrados */
  solarFilteredPct: number;
  /** Nivel de intimidad interior (0 a 100%) */
  privacyPct: number;
  /** Reducción de reverberación y calor percibido */
  thermalComfortLabel: string;
  /** Estado descriptivo del escenario */
  stageStatusLabel: string;
}

/**
 * Calcula las métricas físicas y visuales del "Efecto Quita-Sol" según el porcentaje
 * de cierre de las cortinas / láminas de persiana (0 a 100).
 */
export function computeSolarEffect(rawLevel: number): SolarEffectMetrics {
  const protectionLevel = Math.max(0, Math.min(100, Math.round(rawLevel)));
  const slatAngleDeg = Math.round((protectionLevel / 100) * 82);
  const solarFilteredPct = Math.min(98, Math.round(12 + protectionLevel * 0.86));
  const privacyPct = Math.min(100, Math.round(15 + protectionLevel * 0.85));

  let thermalComfortLabel = 'Sol directo de Ucayali (Alto brillo)';
  let stageStatusLabel = 'Ventana Despejada · Luz Solar Directa';

  if (protectionLevel >= 80) {
    thermalComfortLabel = 'Sombra Esmeralda Palaciega · Máxima Frescura';
    stageStatusLabel = 'Modo Palacio Kitasol · Intimidad & Confort Total';
  } else if (protectionLevel >= 40) {
    thermalComfortLabel = 'Brillo Tropical Domesticado · Luz Difusa';
    stageStatusLabel = 'Láminas en Penumbra Equilibrada · Cero Reflejos';
  }

  return {
    protectionLevel,
    slatAngleDeg,
    solarFilteredPct,
    privacyPct,
    thermalComfortLabel,
    stageStatusLabel,
  };
}

export interface QuoteFormInput {
  ambienteId: string;
  productoOrServicio: string;
  widthMeters: number;
  heightMeters: number;
  windowCount: number;
  wantsHomeVisit: boolean;
  customerName: string;
  customerNeighborhood: string;
  notes: string;
}

export interface QuoteSummaryResult {
  isValid: boolean;
  errors: string[];
  totalAreaSqm: number;
  recommendedRailSpanMeters: number;
  ambienteName: string;
  productLabel: string;
  formattedMessage: string;
  whatsappUrl: string;
  pricingDisclaimer: string;
}

export const QUOTE_PRODUCT_OPTIONS = [
  { id: 'cortinas', label: 'Cortinas (Clásicas / Modernas / Visillos / Cenefas)' },
  { id: 'persianas', label: 'Persianas (Verticales / Horizontales / Stores)' },
  { id: 'roller', label: 'Roller (Cortinas Enrollables Modernas)' },
  { id: 'rieles', label: 'Rieles y Accesorios de Soporte' },
  { id: 'reparacion', label: 'Servicio: Reparación de Rieles' },
  { id: 'renovacion', label: 'Servicio: Renovación de Cortinas' },
];

export function buildQuoteSummary(input: QuoteFormInput): QuoteSummaryResult {
  const errors: string[] = [];

  const ambiente = AMBIENTES.find((a) => a.id === input.ambienteId);
  const productObj = QUOTE_PRODUCT_OPTIONS.find((p) => p.id === input.productoOrServicio);

  if (!ambiente) {
    errors.push('Seleccione un ambiente válido.');
  }
  if (!productObj) {
    errors.push('Seleccione una línea de producto o servicio.');
  }

  const width = Number(input.widthMeters);
  const height = Number(input.heightMeters);
  const count = Math.max(1, Math.min(50, Math.round(Number(input.windowCount) || 1)));

  if (!input.wantsHomeVisit) {
    if (Number.isNaN(width) || width < 0.3 || width > 15) {
      errors.push('Ingrese un ancho válido entre 0.30 m y 15.00 m (o solicite toma de medidas a domicilio).');
    }
    if (Number.isNaN(height) || height < 0.3 || height > 10) {
      errors.push('Ingrese un alto válido entre 0.30 m y 10.00 m (o solicite toma de medidas a domicilio).');
    }
  }

  const safeWidth = !Number.isNaN(width) && width > 0 ? Number(width.toFixed(2)) : 0;
  const safeHeight = !Number.isNaN(height) && height > 0 ? Number(height.toFixed(2)) : 0;
  const singleArea = safeWidth * safeHeight;
  const totalAreaSqm = Number((singleArea * count).toFixed(2));
  // El maestro especialista recomienda considerar ~20 cm adicionales por lado para el riel/traslape
  const recommendedRailSpanMeters = safeWidth > 0 ? Number((safeWidth + 0.3).toFixed(2)) : 0;

  const ambienteName = ambiente ? ambiente.name : 'Ambiente General';
  const productLabel = productObj ? productObj.label : 'Cortinas a Medida';

  const dimensionsLine = input.wantsHomeVisit
    ? `Solicito visita para toma de medidas a domicilio gratis (${BRAND_INFO.coverageValidationNote})${
        safeWidth > 0 && safeHeight > 0 ? ` — Medida referencial aprox: ${safeWidth.toFixed(2)}m × ${safeHeight.toFixed(2)}m` : ''
      }`
    : `${safeWidth.toFixed(2)} m (Ancho) × ${safeHeight.toFixed(2)} m (Alto) · ${count} ventana(s) (Área aprox: ${totalAreaSqm.toFixed(2)} m²)`;

  const clientLine = input.customerName.trim()
    ? `Cliente: ${input.customerName.trim()}${input.customerNeighborhood.trim() ? ` (${input.customerNeighborhood.trim()}, Pucallpa)` : ' (Pucallpa)'}`
    : `Ubicación: ${input.customerNeighborhood.trim() || 'Pucallpa, Ucayali'}`;

  const notesLine = input.notes.trim() ? `\nDetalle adicional: ${input.notes.trim()}` : '';

  const formattedMessage = [
    `FICHA DE CONSULTA — ${BRAND_INFO.name} (${BRAND_INFO.city})`,
    `Lema: "${BRAND_INFO.slogan}"`,
    `--------------------------------------------`,
    `• Ambiente: ${ambienteName}`,
    `• Solución requerida: ${productLabel}`,
    `• Medidas / Visita: ${dimensionsLine}`,
    `• ${clientLine}${notesLine}`,
    `--------------------------------------------`,
    `Atención directa: ${BRAND_INFO.phoneDisplay} ${BRAND_INFO.pricingPolicy}`,
  ].join('\n');

  const whatsappUrl = `https://wa.me/51981641263?text=${encodeURIComponent(formattedMessage)}`;

  return {
    isValid: errors.length === 0,
    errors,
    totalAreaSqm,
    recommendedRailSpanMeters,
    ambienteName,
    productLabel,
    formattedMessage,
    whatsappUrl,
    pricingDisclaimer: BRAND_INFO.pricingPolicy,
  };
}

/**
 * Verifica que la fuente de verdad cumpla las reglas estrictas de saneamiento de legado.
 */
export function verifySanitizedBrandData(): boolean {
  const serialized = JSON.stringify({ BRAND_INFO, CATEGORIES, AMBIENTES, SERVICIOS, FAQS });
  const hasForbiddenEmail = serialized.toLowerCase().includes('caretsglobus@hotmail.com');
  const hasForbiddenPiuraNews = serialized.toLowerCase().includes('huaico') || serialized.toLowerCase().includes('piura');
  const hasForbiddenThirdPartyPhone = serialized.includes('592813') || serialized.toLowerCase().includes('coronel portillo 493');

  return (
    !hasForbiddenEmail &&
    !hasForbiddenPiuraNews &&
    !hasForbiddenThirdPartyPhone &&
    CATEGORIES.length === 4 &&
    AMBIENTES.length === 4 &&
    SERVICIOS.length === 4 &&
    FAQS.length >= 6
  );
}

export interface ImageTransitionClasses {
  imgClassName: string;
  backdropPulseClassName: string;
  isVisible: boolean;
}

/**
 * Calcula las clases de transición de opacidad (fade-in) y desenfoque suave para imágenes
 * con lazy loading en CatalogoBento y AmbienteComparator, evitando parpadeos (FOUC/flicker).
 */
export function computeImageTransitionClasses(
  isLoaded: boolean,
  hasFailed: boolean,
  baseClassName = 'w-full h-full object-cover'
): ImageTransitionClasses {
  const isVisible = isLoaded && !hasFailed;
  const stateClasses = isVisible
    ? 'opacity-100 scale-100 blur-0'
    : 'opacity-0 scale-[1.02] blur-[2px]';

  return {
    imgClassName: `relative z-10 transition-all duration-700 ease-out will-change-[opacity,transform] ${stateClasses} ${baseClassName}`.trim(),
    backdropPulseClassName: isVisible
      ? 'opacity-35 transition-opacity duration-700'
      : 'opacity-100 animate-pulse transition-opacity duration-500',
    isVisible,
  };
}

/**
 * Calcula el índice circular siguiente o anterior para el carrusel de Testimonios de Clientes.
 */
export function getNextCarouselIndex(
  currentIndex: number,
  totalItems: number,
  direction: 'next' | 'prev'
): number {
  if (totalItems <= 0) return 0;
  const normalizedCurrent = ((currentIndex % totalItems) + totalItems) % totalItems;
  if (direction === 'next') {
    return (normalizedCurrent + 1) % totalItems;
  }
  return (normalizedCurrent - 1 + totalItems) % totalItems;
}


