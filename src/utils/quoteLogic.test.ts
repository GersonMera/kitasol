import test from 'node:test';
import assert from 'node:assert/strict';
import {
  computeSolarEffect,
  buildQuoteSummary,
  verifySanitizedBrandData,
  computeImageTransitionClasses,
  getNextCarouselIndex,
} from './quoteLogic';
import { BRAND_INFO, CATEGORIES, AMBIENTES, SERVICIOS, FAQS, TESTIMONIOS } from '../kitasolData.js';

test('getNextCarouselIndex y TESTIMONIOS operan circularmente con clientes de Pucallpa', () => {
  assert.ok(TESTIMONIOS.length >= 5);
  assert.ok(TESTIMONIOS.every((t) => t.district.includes('Pucallpa')));
  assert.equal(getNextCarouselIndex(0, 5, 'prev'), 4);
  assert.equal(getNextCarouselIndex(4, 5, 'next'), 0);
  assert.equal(getNextCarouselIndex(2, 5, 'next'), 3);
});

test('computeImageTransitionClasses genera transición de opacidad fade-in sin parpadeos', () => {
  const loadingState = computeImageTransitionClasses(false, false);
  assert.equal(loadingState.isVisible, false);
  assert.ok(loadingState.imgClassName.includes('opacity-0'));
  assert.ok(loadingState.imgClassName.includes('duration-700'));
  assert.ok(loadingState.backdropPulseClassName.includes('animate-pulse'));

  const loadedState = computeImageTransitionClasses(true, false);
  assert.equal(loadedState.isVisible, true);
  assert.ok(loadedState.imgClassName.includes('opacity-100'));
  assert.ok(loadedState.imgClassName.includes('scale-100'));
  assert.ok(!loadedState.backdropPulseClassName.includes('animate-pulse'));

  const failedState = computeImageTransitionClasses(true, true);
  assert.equal(failedState.isVisible, false);
  assert.ok(failedState.imgClassName.includes('opacity-0'));
});

test('Fuente de verdad Kitasol cumple saneamiento de legado y contiene 4 categorías, 4 ambientes, 4 servicios y FAQS completas', () => {
  assert.equal(verifySanitizedBrandData(), true);
  assert.equal(CATEGORIES.length, 4);
  assert.equal(AMBIENTES.length, 4);
  assert.equal(SERVICIOS.length, 4);
  assert.ok(FAQS.length >= 6);
  assert.ok(FAQS.some((f) => f.category === 'instalacion'));
  assert.ok(FAQS.some((f) => f.category === 'durabilidad'));
  assert.ok(FAQS.some((f) => f.category === 'mantenimiento'));
  assert.equal(BRAND_INFO.phoneDisplay, '981 641 263');
  assert.ok(BRAND_INFO.whatsappHref.includes('51981641263'));
  assert.ok(BRAND_INFO.addressMain.includes('Jr. Teniente Clavero N.º 134'));
  assert.ok(BRAND_INFO.pricingPolicy.includes('[COTIZACIÓN SIN COMPROMISO SEGÚN MEDIDAS]'));

  for (const amb of AMBIENTES) {
    assert.ok(
      amb.imageProtected.includes('_con_cortinas_'),
      `Ambiente ${amb.id} imageProtected debe mostrar imagen CON cortinas`
    );
    assert.ok(
      amb.imageSunny.includes('_sin_cortinas_'),
      `Ambiente ${amb.id} imageSunny debe mostrar imagen SIN cortinas`
    );
  }
});

test('computeSolarEffect calcula ángulo de láminas y filtrado solar correctamente', () => {
  const openState = computeSolarEffect(0);
  assert.equal(openState.protectionLevel, 0);
  assert.equal(openState.slatAngleDeg, 0);
  assert.ok(openState.solarFilteredPct < 20);

  const palacioState = computeSolarEffect(90);
  assert.equal(palacioState.protectionLevel, 90);
  assert.ok(palacioState.slatAngleDeg > 65);
  assert.ok(palacioState.solarFilteredPct >= 85);
  assert.ok(palacioState.stageStatusLabel.includes('Palacio'));
});

test('buildQuoteSummary valida medidas y genera ficha sin inventar precios', () => {
  const validQuote = buildQuoteSummary({
    ambienteId: 'sala',
    productoOrServicio: 'cortinas',
    widthMeters: 2.8,
    heightMeters: 2.4,
    windowCount: 2,
    wantsHomeVisit: false,
    customerName: 'María Rojas',
    customerNeighborhood: 'Yarinacocha',
    notes: 'Deseo visillos blancos y cenefa verde',
  });

  assert.equal(validQuote.isValid, true);
  assert.equal(validQuote.errors.length, 0);
  assert.equal(validQuote.totalAreaSqm, 13.44);
  assert.equal(validQuote.recommendedRailSpanMeters, 3.1);
  assert.ok(validQuote.formattedMessage.includes('981 641 263'));
  assert.ok(validQuote.formattedMessage.includes('[COTIZACIÓN SIN COMPROMISO SEGÚN MEDIDAS]'));
  assert.ok(!validQuote.formattedMessage.includes('S/'));
  assert.ok(validQuote.whatsappUrl.startsWith('https://wa.me/51981641263?text='));

  const invalidQuote = buildQuoteSummary({
    ambienteId: 'sala',
    productoOrServicio: 'roller',
    widthMeters: 0,
    heightMeters: 0,
    windowCount: 1,
    wantsHomeVisit: false,
    customerName: '',
    customerNeighborhood: '',
    notes: '',
  });
  assert.equal(invalidQuote.isValid, false);
  assert.ok(invalidQuote.errors.length >= 2);

  const homeVisitQuote = buildQuoteSummary({
    ambienteId: 'oficina',
    productoOrServicio: 'persianas',
    widthMeters: 0,
    heightMeters: 0,
    windowCount: 3,
    wantsHomeVisit: true,
    customerName: 'Empresa Ucayali',
    customerNeighborhood: 'Callería',
    notes: '',
  });
  assert.equal(homeVisitQuote.isValid, true);
  assert.ok(homeVisitQuote.formattedMessage.includes('[SUJETO A CONFIRMACIÓN DE COBERTURA]'));
});
