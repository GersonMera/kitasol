/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroLightTheater } from './components/HeroLightTheater';
import { CatalogoBento } from './components/CatalogoBento';
import { AmbienteComparator } from './components/AmbienteComparator';
import { TallerServicios } from './components/TallerServicios';
import { QuoteConfigurator } from './components/QuoteConfigurator';
import { PreguntasFrecuentes } from './components/PreguntasFrecuentes';
import { TestimoniosClientes } from './components/TestimoniosClientes';
import { UbicacionSection, PalatialFooter } from './components/UbicacionFooter';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { QuoteFormInput } from './utils/quoteLogic';

export default function App() {
  // Nivel del "Efecto Quita-Sol" en el Hero (0 = Sol Intenso, 100 = Modo Palacio Kitasol)
  const [solarProtection, setSolarProtection] = useState<number>(65);

  // Ambiente activo en el Escaparate Interactivo ("Viste Cada Ventana")
  const [selectedAmbienteId, setSelectedAmbienteId] = useState<string>('sala');

  // Estado compartido del Simulador de Medidas y Cotización
  const [quoteForm, setQuoteForm] = useState<QuoteFormInput>({
    ambienteId: 'sala',
    productoOrServicio: 'cortinas',
    widthMeters: 2.8,
    heightMeters: 2.4,
    windowCount: 1,
    wantsHomeVisit: false,
    customerName: '',
    customerNeighborhood: '',
    notes: '',
  });

  const scrollToCotizador = () => {
    const el = document.getElementById('cotizador');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleUpdateQuoteForm = (patch: Partial<QuoteFormInput>) => {
    setQuoteForm((prev) => ({ ...prev, ...patch }));
  };

  const handleRequestHomeVisitFromHero = () => {
    handleUpdateQuoteForm({ wantsHomeVisit: true });
    scrollToCotizador();
  };

  const handleSelectCategoryForQuote = (categoryId: string) => {
    handleUpdateQuoteForm({ productoOrServicio: categoryId });
    scrollToCotizador();
  };

  const handleQuoteFromAmbiente = (
    ambienteId: string,
    defaultWidth: number,
    defaultHeight: number
  ) => {
    handleUpdateQuoteForm({
      ambienteId,
      widthMeters: defaultWidth,
      heightMeters: defaultHeight,
    });
    scrollToCotizador();
  };

  const handleSelectServiceForQuote = (serviceId: string) => {
    if (serviceId === 'reparacion') {
      handleUpdateQuoteForm({ productoOrServicio: 'reparacion' });
    } else if (serviceId === 'renovacion') {
      handleUpdateQuoteForm({ productoOrServicio: 'renovacion' });
    } else if (serviceId === 'asesoria') {
      handleUpdateQuoteForm({ wantsHomeVisit: true });
    } else {
      handleUpdateQuoteForm({ productoOrServicio: 'cortinas' });
    }
    scrollToCotizador();
  };

  const handleSelectTestimonialForQuote = (ambienteId: string, categoryId: string) => {
    handleUpdateQuoteForm({
      ambienteId,
      productoOrServicio: categoryId,
    });
    scrollToCotizador();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#081c0b]">
      <Header />

      <main className="flex-1">
        <HeroLightTheater
          solarProtection={solarProtection}
          onSolarProtectionChange={setSolarProtection}
          onRequestHomeVisit={handleRequestHomeVisitFromHero}
        />

        <CatalogoBento
          onSelectCategoryForQuote={handleSelectCategoryForQuote}
        />

        <AmbienteComparator
          selectedAmbienteId={selectedAmbienteId}
          onSelectAmbiente={setSelectedAmbienteId}
          onQuoteThisAmbiente={handleQuoteFromAmbiente}
        />

        <TallerServicios
          onSelectServiceForQuote={handleSelectServiceForQuote}
        />

        <QuoteConfigurator
          formState={quoteForm}
          onUpdateForm={handleUpdateQuoteForm}
        />

        <UbicacionSection />

        <PreguntasFrecuentes onRequestQuote={scrollToCotizador} />

        <TestimoniosClientes
          onSelectTestimonialForQuote={handleSelectTestimonialForQuote}
        />
      </main>

      <PalatialFooter />
      <FloatingWhatsAppButton />
    </div>
  );
}
