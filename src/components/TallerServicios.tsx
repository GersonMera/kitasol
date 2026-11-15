import React from 'react';
import { Scissors, RefreshCw, Wrench, Compass, CheckCircle2, ArrowDownRight } from 'lucide-react';
import { SERVICIOS, BRAND_INFO } from '../kitasolData.js';

interface TallerServiciosProps {
  onSelectServiceForQuote: (serviceId: string) => void;
}

export const TallerServicios: React.FC<TallerServiciosProps> = ({
  onSelectServiceForQuote,
}) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'confeccion':
        return <Scissors className="w-6 h-6 text-[#00600F] stroke-[2.5]" aria-hidden="true" />;
      case 'renovacion':
        return <RefreshCw className="w-6 h-6 text-[#00600F] stroke-[2.5]" aria-hidden="true" />;
      case 'reparacion':
        return <Wrench className="w-6 h-6 text-[#00600F] stroke-[2.5]" aria-hidden="true" />;
      case 'asesoria':
      default:
        return <Compass className="w-6 h-6 text-[#00600F] stroke-[2.5]" aria-hidden="true" />;
    }
  };

  return (
    <section
      id="servicios"
      className="py-16 sm:py-24 bg-[#00600F] text-white border-b-4 border-[#F7C502] relative overflow-hidden"
    >
      {/* Textura sutil de láminas de persiana */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'repeating-linear-gradient(-25deg, rgba(247,197,2,0.12) 0px, rgba(247,197,2,0.12) 12px, transparent 12px, transparent 28px)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado del Taller */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 pb-8 border-b border-white/15">
          <div>
            <p className="font-display font-bold text-xs sm:text-sm uppercase tracking-[0.4em] text-[#F7C502]">
              T A L L E R · E S P E C I A L I Z A D O
            </p>
            <h2
              className="mt-2 font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              El Taller del Maestro Especialista en Cortinas
            </h2>
          </div>

          <div className="max-w-md text-sm sm:text-base text-white/90">
            <p>
              Más que una tienda, somos artesanos y técnicos del confort interior en Pucallpa.{' '}
              <strong className="text-[#F7C502]">
                Consulte sin compromiso y solicite presupuesto a domicilio gratis.
              </strong>
            </p>
          </div>
        </div>

        {/* Cuadrícula de los 4 Servicios Confirmados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICIOS.map((srv) => (
            <article
              key={srv.id}
              className="bg-[#004b0b] hover:bg-[#00550d] border-2 border-[#F7C502] rounded-2xl p-6 sm:p-8 shadow-[0_6px_0_0_#F7C502] flex flex-col justify-between transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono-tabular font-extrabold text-sm text-[#F7C502]">
                      {srv.number}.
                    </span>
                    <span className="text-xs font-display font-extrabold uppercase tracking-[0.2em] text-[#F7C502]">
                      {srv.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-[#F7C502] border-2 border-[#00600F] flex items-center justify-center shrink-0 shadow-sm">
                    {getServiceIcon(srv.id)}
                  </div>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight mb-3">
                  {srv.title}
                </h3>

                <p className="text-sm sm:text-base text-white/90 leading-relaxed mb-6">
                  {srv.description}
                </p>

                <ul className="space-y-2.5 border-t border-white/15 pt-4 mb-6">
                  {srv.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-white/95"
                    >
                      <CheckCircle2
                        className="w-4 h-4 text-[#F7C502] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-[11px] font-mono-tabular font-bold text-[#F7C502]">
                  {srv.validationNote}
                </span>

                <button
                  type="button"
                  onClick={() => onSelectServiceForQuote(srv.id)}
                  className="inline-flex items-center justify-center gap-2 bg-[#F7C502] hover:bg-[#ffcf1a] text-[#00600F] font-display font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-lg border-2 border-[#00600F] shadow-[0_3px_0_0_#002d06] active:translate-y-0.5 transition-all cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>{srv.ctaLabel}</span>
                  <ArrowDownRight className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
