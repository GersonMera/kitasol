import React, { useState } from 'react';
import {
  Ruler,
  Phone,
  Copy,
  Check,
  Home,
  AlertCircle,
  ClipboardCheck,
  Sparkles,
} from 'lucide-react';
import { AMBIENTES, BRAND_INFO } from '../kitasolData.js';
import {
  buildQuoteSummary,
  QUOTE_PRODUCT_OPTIONS,
  QuoteFormInput,
} from '../utils/quoteLogic';

interface QuoteConfiguratorProps {
  formState: QuoteFormInput;
  onUpdateForm: (patch: Partial<QuoteFormInput>) => void;
}

export const QuoteConfigurator: React.FC<QuoteConfiguratorProps> = ({
  formState,
  onUpdateForm,
}) => {
  const [copied, setCopied] = useState(false);
  const [submittedConfirmation, setSubmittedConfirmation] = useState(false);

  const summary = buildQuoteSummary(formState);

  const handleCopySummary = async () => {
    if (!summary.isValid) return;
    try {
      await navigator.clipboard.writeText(summary.formattedMessage);
      setCopied(true);
      setSubmittedConfirmation(true);
      setTimeout(() => setCopied(false), 3500);
    } catch {
      setSubmittedConfirmation(true);
    }
  };

  const handleConfirmSheet = (e: React.FormEvent) => {
    e.preventDefault();
    if (!summary.isValid) return;
    setSubmittedConfirmation(true);
  };

  // Proporción visual para el plano de ventana en vivo
  const previewAspectRatio = Math.max(
    0.55,
    Math.min(1.85, (formState.widthMeters || 2) / (formState.heightMeters || 2))
  );

  return (
    <section
      id="cotizador"
      className="py-16 sm:py-24 bg-[#FAF9F5] border-b-4 border-[#00600F] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado del Simulador */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <p className="font-display font-bold text-xs sm:text-sm uppercase tracking-[0.4em] text-[#00600F]">
              S I M U L A D O R · D E · M E D I D A S
            </p>
            <h2
              className="mt-2 font-display font-extrabold text-3xl sm:text-5xl text-[#00600F] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Prepara tu Cotización sin Compromiso
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#1c381f] max-w-md">
            Selecciona tu ambiente, el tipo de cortina o servicio y tus medidas aproximadas (o solicita visita técnica a domicilio en Pucallpa).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Formulario Interactivo (7 cols) */}
          <form
            onSubmit={handleConfirmSheet}
            className="lg:col-span-7 bg-white border-2 border-[#00600F] rounded-2xl p-6 sm:p-8 shadow-[0_8px_0_0_#00600F] space-y-6"
            noValidate
          >
            {/* Paso 1: Selección de Ambiente */}
            <div>
              <label className="block font-display font-extrabold text-sm uppercase tracking-wider text-[#00600F] mb-3">
                1. ¿Qué ambiente deseas vestir o renovar?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {AMBIENTES.map((amb) => {
                  const active = formState.ambienteId === amb.id;
                  return (
                    <button
                      key={amb.id}
                      type="button"
                      onClick={() => {
                        onUpdateForm({ ambienteId: amb.id });
                        setSubmittedConfirmation(false);
                      }}
                      className={`py-3 px-3 rounded-xl font-display font-extrabold text-xs sm:text-sm border-2 transition-all cursor-pointer whitespace-nowrap ${
                        active
                          ? 'bg-[#F7C502] text-[#00600F] border-[#00600F] shadow-[0_3px_0_0_#00600F]'
                          : 'bg-[#FAF9F5] text-[#00600F] border-[#00600F]/30 hover:border-[#00600F]'
                      }`}
                    >
                      {amb.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Paso 2: Selección de Producto o Servicio */}
            <div>
              <label
                htmlFor="quote-product-select"
                className="block font-display font-extrabold text-sm uppercase tracking-wider text-[#00600F] mb-2.5"
              >
                2. Línea del Catálogo o Servicio Especializado
              </label>
              <select
                id="quote-product-select"
                value={formState.productoOrServicio}
                onChange={(e) => {
                  onUpdateForm({ productoOrServicio: e.target.value });
                  setSubmittedConfirmation(false);
                }}
                className="w-full rounded-xl border-2 border-[#00600F] bg-[#FAF9F5] px-4 py-3.5 text-sm sm:text-base font-bold text-[#00600F] focus:bg-white focus:outline-2 focus:outline-[#F7C502]"
              >
                {QUOTE_PRODUCT_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Paso 3: Medidas de la Ventana o Visita a Domicilio */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#FAF9F5] border-2 border-[#00600F]/25 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="font-display font-extrabold text-sm uppercase tracking-wider text-[#00600F] flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-[#207000]" aria-hidden="true" />
                  <span>3. Medidas de Ventana (Ancho × Alto)</span>
                </span>
                <span className="text-xs font-mono-tabular font-semibold text-[#207000]">
                  {BRAND_INFO.pricingPolicy}
                </span>
              </div>

              {/* Checkbox de Visita a Domicilio Gratis */}
              <label className="flex items-start gap-3 p-3 rounded-lg bg-white border-2 border-[#00600F] cursor-pointer">
                <input
                  type="checkbox"
                  checked={formState.wantsHomeVisit}
                  onChange={(e) => {
                    onUpdateForm({ wantsHomeVisit: e.target.checked });
                    setSubmittedConfirmation(false);
                  }}
                  className="mt-0.5 w-5 h-5 accent-[#00600F] rounded cursor-pointer"
                />
                <span className="text-xs sm:text-sm font-bold text-[#00600F]">
                  Deseo visita para toma de medidas y presupuesto a domicilio gratis{' '}
                  <span className="font-mono-tabular text-[11px] text-[#207000] block sm:inline">
                    {BRAND_INFO.coverageValidationNote}
                  </span>
                </span>
              </label>

              {/* Campos numéricos de Ancho, Alto y Cantidad de Ventanas */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label
                    htmlFor="quote-width-input"
                    className="block text-xs font-bold text-[#00600F] mb-1"
                  >
                    Ancho aprox. (metros)
                  </label>
                  <input
                    id="quote-width-input"
                    type="number"
                    step="0.1"
                    min="0.3"
                    max="15"
                    value={formState.widthMeters || ''}
                    onChange={(e) => {
                      onUpdateForm({ widthMeters: parseFloat(e.target.value) || 0 });
                      setSubmittedConfirmation(false);
                    }}
                    placeholder="Ej. 2.40"
                    className="w-full rounded-lg border-2 border-[#00600F] bg-white px-3.5 py-2.5 font-mono-tabular font-bold text-sm text-[#00600F]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="quote-height-input"
                    className="block text-xs font-bold text-[#00600F] mb-1"
                  >
                    Alto aprox. (metros)
                  </label>
                  <input
                    id="quote-height-input"
                    type="number"
                    step="0.1"
                    min="0.3"
                    max="10"
                    value={formState.heightMeters || ''}
                    onChange={(e) => {
                      onUpdateForm({ heightMeters: parseFloat(e.target.value) || 0 });
                      setSubmittedConfirmation(false);
                    }}
                    placeholder="Ej. 2.20"
                    className="w-full rounded-lg border-2 border-[#00600F] bg-white px-3.5 py-2.5 font-mono-tabular font-bold text-sm text-[#00600F]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="quote-count-input"
                    className="block text-xs font-bold text-[#00600F] mb-1"
                  >
                    N.º de Ventanas
                  </label>
                  <input
                    id="quote-count-input"
                    type="number"
                    min="1"
                    max="50"
                    value={formState.windowCount}
                    onChange={(e) => {
                      onUpdateForm({
                        windowCount: Math.max(1, parseInt(e.target.value, 10) || 1),
                      });
                      setSubmittedConfirmation(false);
                    }}
                    className="w-full rounded-lg border-2 border-[#00600F] bg-white px-3.5 py-2.5 font-mono-tabular font-bold text-sm text-[#00600F]"
                  />
                </div>
              </div>
            </div>

            {/* Paso 4: Datos de Contacto y Referencia en Pucallpa */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="quote-customer-name"
                  className="block text-xs font-bold uppercase tracking-wider text-[#00600F] mb-1.5"
                >
                  Tu Nombre o Empresa (Opcional)
                </label>
                <input
                  id="quote-customer-name"
                  type="text"
                  value={formState.customerName}
                  onChange={(e) => {
                    onUpdateForm({ customerName: e.target.value });
                    setSubmittedConfirmation(false);
                  }}
                  placeholder="Ej. Familia Ríos / Clínica Ucayali"
                  className="w-full rounded-lg border-2 border-[#00600F] bg-[#FAF9F5] focus:bg-white px-3.5 py-2.5 text-sm font-semibold text-[#00600F]"
                />
              </div>

              <div>
                <label
                  htmlFor="quote-customer-zone"
                  className="block text-xs font-bold uppercase tracking-wider text-[#00600F] mb-1.5"
                >
                  Distrito / Zona en Pucallpa
                </label>
                <input
                  id="quote-customer-zone"
                  type="text"
                  value={formState.customerNeighborhood}
                  onChange={(e) => {
                    onUpdateForm({ customerNeighborhood: e.target.value });
                    setSubmittedConfirmation(false);
                  }}
                  placeholder="Ej. Callería, Yarinacocha, Manantay"
                  className="w-full rounded-lg border-2 border-[#00600F] bg-[#FAF9F5] focus:bg-white px-3.5 py-2.5 text-sm font-semibold text-[#00600F]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="quote-notes"
                className="block text-xs font-bold uppercase tracking-wider text-[#00600F] mb-1.5"
              >
                Detalles adicionales (Color preferido, visillos, cenefas o estado del riel)
              </label>
              <textarea
                id="quote-notes"
                rows={2}
                value={formState.notes}
                onChange={(e) => {
                  onUpdateForm({ notes: e.target.value });
                  setSubmittedConfirmation(false);
                }}
                placeholder="Ej. Busco cortinas verdes con visillo blanco o reparación de riel en sala..."
                className="w-full rounded-lg border-2 border-[#00600F] bg-[#FAF9F5] focus:bg-white px-3.5 py-2.5 text-sm font-semibold text-[#00600F]"
              />
            </div>

            {/* Mensajes de Validación */}
            {!summary.isValid && (
              <div
                role="alert"
                className="p-3.5 rounded-xl bg-amber-50 border-2 border-[#00600F] text-[#00600F] flex items-start gap-2.5 text-xs sm:text-sm font-bold"
              >
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  {summary.errors.map((err) => (
                    <p key={err}>{err}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Botones de Acción del Formulario */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#F7C502] hover:bg-[#ffcf1a] text-[#00600F] font-display font-extrabold text-sm sm:text-base px-5 py-3.5 rounded-xl border-2 border-[#00600F] shadow-[0_4px_0_0_#00600F] active:translate-y-0.5 transition-all cursor-pointer whitespace-nowrap"
              >
                <ClipboardCheck className="w-5 h-5 stroke-[2.5]" aria-hidden="true" />
                <span>Generar Ficha de Cotización</span>
              </button>

              <button
                type="button"
                onClick={handleCopySummary}
                disabled={!summary.isValid}
                className="inline-flex items-center justify-center gap-2 bg-[#00600F] hover:bg-[#207000] disabled:opacity-50 text-white font-display font-bold text-sm px-5 py-3.5 rounded-xl border-2 border-[#00600F] transition-colors cursor-pointer whitespace-nowrap"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#F7C502]" aria-hidden="true" />
                    <span>¡Ficha Copiada!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#F7C502]" aria-hidden="true" />
                    <span>Copiar Resumen</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Columna Derecha (5 cols): Plano Arquitectónico en Vivo y Resumen para el 981 641 263 */}
          <div className="lg:col-span-5 bg-[#00600F] text-white border-2 border-[#00600F] rounded-2xl p-6 sm:p-8 shadow-[0_8px_0_0_#F7C502] flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/15">
                <div>
                  <span className="text-[11px] font-display font-extrabold uppercase tracking-[0.25em] text-[#F7C502]">
                    HOJA TÉCNICA DEL MAESTRO ESPECIALISTA
                  </span>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                    Resumen de tu Ventana
                  </h3>
                </div>
                <span className="font-mono-tabular text-xs font-extrabold bg-[#F7C502] text-[#00600F] px-2.5 py-1 rounded-md border border-[#00600F]">
                  {formState.windowCount} {formState.windowCount === 1 ? 'Vano' : 'Vanos'}
                </span>
              </div>

              {/* Esquema Visual de la Ventana con Cotas en Metros */}
              <div className="my-5 p-4 rounded-xl bg-[#00470b] border border-white/15 flex flex-col items-center">
                <div className="text-xs font-mono-tabular text-[#F7C502] mb-2">
                  Ancho de ventana: {formState.widthMeters > 0 ? `${formState.widthMeters.toFixed(2)} m` : 'A medir en visita'}
                  {summary.recommendedRailSpanMeters > 0 && (
                    <span className="text-white/80">
                      {' '}
                      (Riel sugerido: ~{summary.recommendedRailSpanMeters.toFixed(2)} m)
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 w-full justify-center py-2">
                  {/* Marco proporcional de 4 paneles */}
                  <div
                    className="relative border-4 border-[#F7C502] bg-[#00600F] rounded-md grid grid-cols-2 grid-rows-2 overflow-hidden shadow-inner transition-all duration-200"
                    style={{
                      width: `${Math.min(220, Math.round(135 * previewAspectRatio))}px`,
                      height: '135px',
                    }}
                  >
                    <div className="border-r-2 border-b-2 border-[#F7C502]/50" />
                    <div className="border-b-2 border-[#F7C502]/50" />
                    <div className="border-r-2 border-[#F7C502]/50" />
                    <div />
                    {/* Cortinas laterales ilustrativas */}
                    <div className="absolute inset-y-0 left-0 w-1/4 curtain-pleats-emerald border-r border-[#F7C502]" />
                    <div className="absolute inset-y-0 right-0 w-1/4 curtain-pleats-emerald border-l border-[#F7C502]" />
                  </div>

                  <div className="text-xs font-mono-tabular text-[#F7C502] [writing-mode:vertical-rl] rotate-180">
                    Alto: {formState.heightMeters > 0 ? `${formState.heightMeters.toFixed(2)} m` : 'En visita'}
                  </div>
                </div>

                <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-mono-tabular text-white/90">
                  <span>Área total aprox.: {summary.totalAreaSqm.toFixed(2)} m²</span>
                  <span aria-hidden="true">·</span>
                  <span>Ambiente: {summary.ambienteName}</span>
                </div>
              </div>

              {/* Texto Preformateado Listo para Consultar */}
              <div>
                <p className="text-xs font-display font-extrabold uppercase tracking-wider text-[#F7C502] mb-2">
                  Ficha lista para dictar o enviar al {BRAND_INFO.phoneDisplay}:
                </p>
                <pre className="p-3.5 rounded-xl bg-[#003808] border border-[#F7C502]/40 font-mono-tabular text-xs text-white/95 whitespace-pre-wrap leading-relaxed overflow-x-auto">
                  {summary.formattedMessage}
                </pre>
              </div>

              {submittedConfirmation && summary.isValid && (
                <div
                  role="status"
                  className="mt-4 p-3.5 rounded-xl bg-[#F7C502] text-[#00600F] border-2 border-white font-display font-extrabold text-xs sm:text-sm"
                >
                  ¡Tu ficha de medidas está lista! Llama ahora al {BRAND_INFO.phoneDisplay} para recibir atención directa del maestro especialista.
                </div>
              )}
            </div>

            {/* Acción Directa Telefónica + Nota de Validación de WhatsApp */}
            <div className="pt-4 border-t border-white/15 space-y-3">
              <a
                href={BRAND_INFO.phoneHref}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#F7C502] hover:bg-[#ffcf1a] text-[#00600F] font-display font-extrabold text-sm sm:text-base px-6 py-4 rounded-xl border-2 border-[#00600F] shadow-[0_4px_0_0_#003307] active:translate-y-0.5 transition-all whitespace-nowrap"
              >
                <Phone className="w-5 h-5 stroke-[2.5]" aria-hidden="true" />
                <span>Llamar y Consultar: {BRAND_INFO.phoneDisplay}</span>
              </a>

              <div className="text-[11px] font-mono-tabular text-white/85 space-y-1">
                <p>Nota sobre mensajería: {BRAND_INFO.whatsappValidationNote}</p>
                <p>Política de precios: {BRAND_INFO.pricingPolicy}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
