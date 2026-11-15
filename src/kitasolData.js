/**
 * Fuente de Verdad Centralizada — CORTINAS "KITASOL" (Pucallpa, Ucayali)
 * Datos verificados del logotipo oficial y portal histórico saneado.
 * CERO precios inventados, CERO datos de terceros o ex-webmaster.
 */

export const BRAND_INFO = {
  name: 'CORTINAS "KITASOL"',
  altName: 'Cortinas en Pucallpa Kitasol',
  slogan: 'Hagamos de su casa un palacio',
  commercialClaim: 'La mejor tienda de cortinas en Pucallpa',
  specialistRole: 'Maestro especialista en cortinas',
  promises: [
    'Consulte sin compromiso',
    'Solicite presupuesto a domicilio gratis',
  ],
  phoneDisplay: '981 641 263',
  phoneRaw: '+51981641263',
  phoneHref: 'tel:+51981641263',
  whatsappNumber: '51981641263',
  whatsappHref:
    'https://wa.me/51981641263?text=Hola%20Cortinas%20KITASOL%20Pucallpa%2C%20deseo%20consultar%20por%20una%20cotizaci%C3%B3n%20sin%20compromiso.',
  whatsappValidationNote: 'Atención directa por WhatsApp y llamadas',
  addressMain: 'Jr. Teniente Clavero N.º 134, 2do piso de Decoraciones "Buen Hogar"',
  addressRef: 'Referencia: Centro Comercial El Huequito — Callería, Pucallpa, Ucayali, Perú',
  addressValidationNote: 'Sede oficial en Centro Comercial El Huequito',
  schedule: 'Lunes a Sábado de 08:00 a. m. a 06:00 p. m.',
  scheduleValidationNote: 'Atención en tienda y visitas a domicilio en Pucallpa',
  locationCombinedNote: 'Jr. Teniente Clavero 134 (El Huequito) · Lun-Sáb 8:00 a. m. a 6:00 p. m.',
  coverageValidationNote: '[SUJETO A CONFIRMACIÓN DE COBERTURA]',
  pricingPolicy: '[COTIZACIÓN SIN COMPROMISO SEGÚN MEDIDAS]',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61590533792326',
  logoImage: '/assets/aistudio/image_beaf4f7a.png',
  city: 'Pucallpa',
  region: 'Ucayali, Perú',
};

export const TECHNICAL_BENEFITS = [
  {
    id: 'intimidad',
    title: 'Intimidad',
    shortDesc: 'Privacidad absoluta día y noche para su familia o empresa.',
    detail:
      'Tejidos, visillos y láminas graduables que resguardan el interior de miradas externas manteniendo la amplitud visual de cada salón.',
    metricLabel: 'Privacidad Interior',
  },
  {
    id: 'luz',
    title: 'Control de Luz',
    shortDesc: 'Regulación y difusión exacta del sol tropical de Ucayali.',
    detail:
      'Domine el resplandor solar desde una penumbra palaciega para el descanso hasta una iluminación difusa y cálida sin reflejos en pantallas.',
    metricLabel: 'Filtrado Solar',
  },
  {
    id: 'aislamiento',
    title: 'Aislamiento Térmico/Acústico',
    shortDesc: 'Frescura interior frente al calor de Pucallpa y confort sonoro.',
    detail:
      'Cámara protectora entre el vidrio y el ambiente que reduce la transferencia de calor tropical y amortigua el ruido urbano exterior.',
    metricLabel: 'Confort Térmico',
  },
  {
    id: 'elegancia',
    title: 'Elegancia',
    shortDesc: 'Función decorativa monumental: "Hagamos de su casa un palacio".',
    detail:
      'Caídas plisadas de piso a techo, cenefas clásicas o líneas minimalistas en roller que visten cada ventana como una pieza arquitectónica.',
    metricLabel: 'Realce Palaciego',
  },
];

export const CATEGORIES = [
  {
    id: 'cortinas',
    order: '01',
    name: 'CORTINAS',
    fullTitle: 'Cortinas Clásicas y Modernas',
    subtitle: 'Sala · Cocina · Oficina · Habitaciones',
    description:
      'Amplia variedad de diseños, telas selectas, visillos translúcidos y cenefas ornamentales confeccionadas con pliegues perfectos para hogares y empresas en Pucallpa.',
    applications: ['Salas de estar palaciegas', 'Dormitorios principales', 'Comedores y recibidores', 'Cocinas y ambientes familiares'],
    features: [
      'Variedad de diseños, texturas y caídas textiles',
      'Combinación de visillos luminosos y cortinas de alto gramaje',
      'Cenefas decorativas y recogidos con sujetadores',
      'Confección personalizada según ancho y alto de ventana',
    ],
    quotePolicy: '[COTIZACIÓN SIN COMPROMISO SEGÚN MEDIDAS]',
    image: '/src/assets/images/sala_con_cortinas_1794762217945.jpg',
    fallbackGradient: 'from-[#00600F] via-[#134e1b] to-[#207000]',
    louverType: 'curtain',
  },
  {
    id: 'persianas',
    order: '02',
    name: 'PERSIANAS',
    fullTitle: 'Persianas Verticales, Horizontales y Stores',
    subtitle: 'Control Milimétrico de Luz y Privacidad',
    description:
      'Sistemas de láminas verticales y horizontales, además de estores (stores), diseñados para orientar la entrada de luz natural con precisión arquitectónica en oficinas y viviendas.',
    applications: ['Oficinas corporativas y despachos', 'Salas de estudio', 'Cocinas ventiladas', 'Ventanales panorámicos'],
    features: [
      'Persianas verticales ideales para grandes ventanales y oficinas',
      'Persianas horizontales con giro de láminas de 180°',
      'Estores (stores) de recogido limpio y elegante',
      'Regulación gradual sin perder vista hacia el exterior',
    ],
    quotePolicy: '[COTIZACIÓN SIN COMPROMISO SEGÚN MEDIDAS]',
    image: '/src/assets/images/cocina_con_cortinas_1794762222130.jpg',
    fallbackGradient: 'from-[#1a4314] via-[#207000] to-[#3a6b1c]',
    louverType: 'blinds',
  },
  {
    id: 'roller',
    order: '03',
    name: 'ROLLER',
    fullTitle: 'Cortinas Roller Enrollables',
    subtitle: 'Estética Contemporánea Residencial y Corporativa',
    description:
      'Cortinas enrollables modernas de accionamiento fluido por cadena de mando. Solución limpia, compacta y funcional para filtrar el sol intenso de Pucallpa.',
    applications: ['Departamentos modernos', 'Salas de reuniones y empresas', 'Dormitorios minimalistas', 'Locales comerciales'],
    features: [
      'Accionamiento suave mediante cadena de mando lateral',
      'Acabado arquitectónico plano que optimiza el espacio',
      'Excelente difusión de luz solar y protección térmica',
      'Instalación limpia a techo o pared según el marco',
    ],
    quotePolicy: '[COTIZACIÓN SIN COMPROMISO SEGÚN MEDIDAS]',
    image: '/src/assets/images/habitacion_con_cortinas_1794762220325.jpg',
    fallbackGradient: 'from-[#0d3b14] via-[#00600F] to-[#207000]',
    louverType: 'roller',
  },
  {
    id: 'rieles',
    order: '04',
    name: 'RIELES Y ACCESORIOS',
    fullTitle: 'Rieles, Tubos y Accesorios de Soporte',
    subtitle: 'Ingeniería de Deslizamiento y Detalles Dorados',
    description:
      'Venta e instalación de rieles de alta resistencia, mecanismos de tracción, sujetadores laterales, terminales decorativos y todos los accesorios que sostienen sus cortinas.',
    applications: ['Instalaciones nuevas de piso a techo', 'Reemplazo de rieles trabados', 'Barras decorativas y sujetadores', 'Mantenimiento de sistemas existentes'],
    features: [
      'Rieles de deslizamiento silencioso y alta carga',
      'Tubos, terminales y sujetadores decorativos',
      'Repuestos, correderas, ganchos y mecanismos de mando',
      'Compatibilidad con cortinas clásicas, visillos y cenefas',
    ],
    quotePolicy: '[COTIZACIÓN SIN COMPROMISO SEGÚN MEDIDAS]',
    image: '/src/assets/images/oficina_con_cortinas_1794762225995.jpg',
    fallbackGradient: 'from-[#004d0c] via-[#00600F] to-[#1e5e10]',
    louverType: 'track',
  },
];

export const AMBIENTES = [
  {
    id: 'sala',
    name: 'Sala',
    title: 'Sala Principal Palaciega',
    kicker: 'EL CORAZÓN DE SU HOGAR EN PUCALLPA',
    specialistAdvice:
      'Para la sala recomendamos combinar cortinas de caída amplia con visillos translúcidos o sistemas Roller de filtro solar: durante el día disfrutas de luz suave sin calor excesivo, y por la noche cierras el telón con total intimidad y distinción.',
    recommendedCategories: ['Cortinas con Visillos y Cenefas', 'Cortinas Roller Modernas', 'Rieles de Deslizamiento Suave'],
    benefitsHighlight: {
      intimidad: 'Alta privacidad nocturna y diurna sin oscurecer el salón',
      luz: 'Difusión cálida del sol tropical sin deslumbramiento',
      termico: 'Reducción notable de la sensación térmica en horas punta',
      decoracion: 'Enmarcado monumental que eleva la arquitectura interior',
    },
    protectedBadgeLabel: 'Con Cortinas y Visillos “KITASOL”',
    sunnyBadgeLabel: 'Sin Cortina · Sol Intenso Directo',
    imageSunny: '/src/assets/images/sala_sin_cortinas_1794762219800.jpg',
    imageProtected: '/src/assets/images/sala_con_cortinas_1794762217945.jpg',
    defaultWidth: 2.8,
    defaultHeight: 2.4,
  },
  {
    id: 'habitacion',
    name: 'Habitación',
    title: 'Habitación & Descanso Reparador',
    kicker: 'INTIMIDAD ABSOLUTA Y FRESCURA',
    specialistAdvice:
      'En dormitorios priorizamos el bloqueo del resplandor matutino y el aislamiento térmico/acústico. Una cortina confeccionada a medida con pliegues profundos o un Roller de control lumínico garantiza sueño placentero y privacidad total.',
    recommendedCategories: ['Cortinas a Medida de Alto Gramaje', 'Roller de Control Lumínico', 'Persianas Horizontales'],
    benefitsHighlight: {
      intimidad: 'Resguardo 100% privado para el descanso familiar',
      luz: 'Control total de la claridad desde el amanecer',
      termico: 'Mantiene la frescura del dormitorio y atenúa ruidos',
      decoracion: 'Texturas suaves y acogedoras en armonía con su mobiliario',
    },
    protectedBadgeLabel: 'Con Cortinas y Roller “KITASOL”',
    sunnyBadgeLabel: 'Sin Cortina · Sol Intenso Directo',
    imageSunny: '/src/assets/images/habitacion_sin_cortinas_1794762221061.jpg',
    imageProtected: '/src/assets/images/habitacion_con_cortinas_1794762220325.jpg',
    defaultWidth: 1.8,
    defaultHeight: 1.6,
  },
  {
    id: 'cocina',
    name: 'Cocina',
    title: 'Cocina Iluminada y Funcional',
    kicker: 'LUZ NATURAL CON CONTROL PRÁCTICO',
    specialistAdvice:
      'La cocina requiere soluciones frescas, higiénicas y fáciles de accionar. Las persianas horizontales, estores (stores) y cortinas ligeras a medida permiten regular la ventilación y el paso del sol sin estorbar las zonas de trabajo.',
    recommendedCategories: ['Persianas Horizontales y Stores', 'Roller Compacto', 'Cortinas de Cocina a Medida'],
    benefitsHighlight: {
      intimidad: 'Visibilidad graduable hacia patios o exteriores',
      luz: 'Iluminación clara y limpia sin calor directo sobre mesones',
      termico: 'Permite circulación de aire fresco regulando el sol',
      decoracion: 'Acabado ordenado, práctico y hecho a la medida del vano',
    },
    protectedBadgeLabel: 'Con Persiana y Store “KITASOL”',
    sunnyBadgeLabel: 'Sin Cortina · Sol Intenso Directo',
    imageSunny: '/src/assets/images/cocina_sin_cortinas_1794762223918.jpg',
    imageProtected: '/src/assets/images/cocina_con_cortinas_1794762222130.jpg',
    defaultWidth: 1.4,
    defaultHeight: 1.2,
  },
  {
    id: 'oficina',
    name: 'Oficina / Empresa',
    title: 'Oficina Corporativa & Negocios',
    kicker: 'PRODUCTIVIDAD SIN REFLEJOS SOLARES',
    specialistAdvice:
      'Para oficinas, consultorios e instituciones en Pucallpa, instalamos persianas verticales, horizontales y cortinas Roller que eliminan el reflejo en monitores, proyectan imagen ejecutiva y mejoran el rendimiento del aire acondicionado.',
    recommendedCategories: ['Persianas Verticales y Horizontales', 'Cortinas Roller Corporativas', 'Mantenimiento y Reparación de Rieles'],
    benefitsHighlight: {
      intimidad: 'Reserva visual para salas de directorio y atención al cliente',
      luz: 'Cero deslumbramiento en pantallas y proyectores',
      termico: 'Optimiza la climatización y reduce el calor en oficinas',
      decoracion: 'Presencia sobria, limpia y corporativa para su empresa',
    },
    protectedBadgeLabel: 'Con Persianas y Roller “KITASOL”',
    sunnyBadgeLabel: 'Sin Cortina · Sol Intenso Directo',
    imageSunny: '/src/assets/images/oficina_sin_cortinas_1794762225208.jpg',
    imageProtected: '/src/assets/images/oficina_con_cortinas_1794762225995.jpg',
    defaultWidth: 2.5,
    defaultHeight: 2.0,
  },
];

export const SERVICIOS = [
  {
    id: 'confeccion',
    number: '01',
    title: 'Confección de Cortinas a Pedido',
    badge: 'A LA MEDIDA EXACTA',
    description:
      'Elaboramos cada cortina a pedido según las dimensiones reales de su ventana. Selección personalizada de telas, visillos, cenefas y tipo de pliegue por nuestro maestro especialista.',
    deliverables: [
      'Corte y costura artesanal a medida para ventanas estándar o monumentales',
      'Diseños exclusivos para sala, dormitorio, cocina y oficina',
      'Acabados prolijos en bastas, cabezales plisados y cenefas',
    ],
    ctaLabel: 'Cotizar Confección a Medida',
    validationNote: '[COTIZACIÓN SIN COMPROMISO SEGÚN MEDIDAS]',
  },
  {
    id: 'renovacion',
    number: '02',
    title: 'Renovación de Cortinas',
    badge: 'NUEVA VIDA A SU HOGAR',
    description:
      'Transformamos y actualizamos sus cortinas actuales o rediseñamos la vestimenta de sus ventanas para devolverle a su casa u oficina un aspecto palaciego, luminoso y renovado.',
    deliverables: [
      'Evaluación del estado de sus cortinas, visillos y cenefas existentes',
      'Actualización de diseño, caída textil y combinación de colores',
      'Adaptación de cortinas a nuevas medidas o ambientes',
    ],
    ctaLabel: 'Solicitar Renovación',
    validationNote: '[COTIZACIÓN SIN COMPROMISO SEGÚN MEDIDAS]',
  },
  {
    id: 'reparacion',
    number: '03',
    title: 'Reparación de Rieles',
    badge: 'SERVICIO TÉCNICO MAESTRO',
    description:
      'Solución rápida y duradera para rieles trabados, cuerdas rotas, correderas desgastadas o soportes sueltos. Recuperamos el deslizamiento suave y silencioso de sus cortinas.',
    deliverables: [
      'Destrabe, alineación y ajuste de rieles metálicos y de aluminio',
      'Reemplazo de correderas, ganchos, topes y accesorios dañados',
      'Provisión e instalación de rieles nuevos cuando se requiera',
    ],
    ctaLabel: 'Agendar Reparación de Riel',
    validationNote: '[COTIZACIÓN SIN COMPROMISO SEGÚN MEDIDAS]',
  },
  {
    id: 'asesoria',
    number: '04',
    title: 'Asesoría Personalizada & Presupuesto a Domicilio Gratis',
    badge: 'CONSULTE SIN COMPROMISO',
    description:
      'Un maestro especialista en cortinas le asesora en la elección del sistema, tela y color ideal para cada ambiente, con toma de medidas y presupuesto a domicilio gratis en Pucallpa.',
    deliverables: [
      'Orientación experta según entrada de sol, ventilación y decoración',
      'Verificación de medidas de ancho y alto en su domicilio o empresa',
      'Presupuesto detallado sin compromiso de compra',
    ],
    ctaLabel: 'Pedir Presupuesto a Domicilio',
    validationNote: '[SUJETO A CONFIRMACIÓN DE COBERTURA]',
  },
];

export const MARQUEE_ITEMS = [
  'HAGAMOS DE SU CASA UN PALACIO',
  'CORTINAS',
  'PERSIANAS VERTICALES Y HORIZONTALES',
  'ROLLER',
  'RIELES Y ACCESORIOS',
  'CONFECCIÓN A PEDIDO Y REPARACIÓN',
  'PUCALLPA',
];

export const FAQS = [
  {
    id: 'faq-instalacion-1',
    category: 'instalacion',
    categoryLabel: 'Instalación y Tiempos',
    question: '¿Cómo se coordina el tiempo de confección e instalación de mis cortinas o persianas?',
    answer:
      'Cada proyecto en CORTINAS "KITASOL" se confecciona a pedido según las medidas exactas de su ventana. El plazo de entrega e instalación se coordina directamente con nuestro maestro especialista al momento de tomar las medidas en su hogar o empresa, dependiendo del número de ventanas, el diseño elegido (cortinas con cenefas, persianas o rollers) y el tipo de riel requerido.',
    specialistTip: 'Atención personalizada en Pucallpa · Coordinación directa al 981 641 263 [SEGÚN MEDIDAS Y VOLUMEN DE PEDIDO]',
  },
  {
    id: 'faq-instalacion-2',
    category: 'instalacion',
    categoryLabel: 'Instalación y Tiempos',
    question: '¿Qué incluye la visita para presupuesto a domicilio gratis en Pucallpa?',
    answer:
      'Nuestro maestro especialista acude a su casa, departamento u oficina para medir el ancho y alto real de cada vano, evaluar la entrada de luz solar, revisar el soporte de pared o techo para los rieles y recomendarle la tela o sistema ideal sin compromiso de compra.',
    specialistTip: 'Presupuesto a domicilio gratis [SUJETO A CONFIRMACIÓN DE COBERTURA]',
  },
  {
    id: 'faq-durabilidad-1',
    category: 'durabilidad',
    categoryLabel: 'Durabilidad y Clima',
    question: '¿Qué tan durables son las telas, persianas y rollers frente al sol intenso de Pucallpa?',
    answer:
      'Seleccionamos telas de cortinería, visillos, láminas de persianas (verticales y horizontales) y tejidos para sistemas Roller pensados para resistir la radiación solar amazónica de Ucayali. Su estructura filtra y difunde los rayos solares protegiendo sus muebles del desgaste prematuro y manteniendo la caída y el color por largo tiempo.',
    specialistTip: 'Protección térmica, acústica y filtrado solar continuo para ambientes en Ucayali',
  },
  {
    id: 'faq-durabilidad-2',
    category: 'durabilidad',
    categoryLabel: 'Durabilidad y Clima',
    question: '¿Los rieles y accesorios soportan cortinas pesadas de piso a techo?',
    answer:
      'Sí. Contamos con rieles de alta resistencia, tubos decorativos, soportes firmes y correderas de deslizamiento suave diseñados específicamente para sostener desde visillos ligeros hasta cortinas palaciegas de alto gramaje y cenefas completas sin arquearse ni trabarse.',
    specialistTip: 'Línea oficial de Rieles y Accesorios con soporte técnico garantizado',
  },
  {
    id: 'faq-mantenimiento-1',
    category: 'mantenimiento',
    categoryLabel: 'Mantenimiento y Cuidado',
    question: '¿Cómo debo limpiar y mantener mis cortinas, persianas y rollers en buen estado?',
    answer:
      'Para cortinas de tela y visillos, recomendamos sacudido o aspirado suave periódico del polvo superficial y lavado delicado sin retorcer para conservar la forma de los pliegues y cenefas. En persianas (verticales/horizontales) y cortinas Roller, basta pasar un paño de microfibra ligeramente húmedo o plumero seco sobre las láminas y el tejido enrollable.',
    specialistTip: 'También ofrecemos el servicio especializado de Renovación de Cortinas cuando desee actualizar sus ambientes',
  },
  {
    id: 'faq-mantenimiento-2',
    category: 'mantenimiento',
    categoryLabel: 'Mantenimiento y Cuidado',
    question: '¿Qué hago si mi riel actual se traba o una cortina ya no desliza bien?',
    answer:
      'No necesita cambiar toda su cortina. En nuestro Taller del Maestro Especialista realizamos el servicio técnico de Reparación de Rieles: destrabamos mecanismos, reemplazamos correderas, ganchos, poleas o cuerdas desgastadas y alineamos el sistema para devolverle su deslizamiento original.',
    specialistTip: 'Servicio oficial de Reparación de Rieles · [COTIZACIÓN SIN COMPROMISO SEGÚN MEDIDAS]',
  },
];

export const TESTIMONIOS = [
  {
    id: 'testimonio-sala-yarinacocha',
    clientName: 'Familia Vela Ríos',
    district: 'Yarinacocha, Pucallpa',
    clientRole: 'Residencia Familiar',
    ambienteId: 'sala',
    ambienteLabel: 'Sala Principal Palaciega',
    categoryId: 'cortinas',
    installedSystem: 'Cortinas a Medida con Visillos y Cenefas',
    quote:
      'El sol de la tarde entraba directo a nuestra sala en Yarinacocha y recalentaba todo el ambiente. El maestro especialista de Cortinas KITASOL vino a tomar las medidas sin compromiso y confeccionó unas cortinas de piso a techo con visillos que transformaron la casa en un verdadero palacio fresco y luminoso.',
    highlightBenefit: 'Control de Luz Solar & Elegancia Palaciega',
    image: '/src/assets/images/sala_con_cortinas_1794762217945.jpg',
    rating: 5,
  },
  {
    id: 'testimonio-oficina-calleria',
    clientName: 'Dr. Carlos Bardales',
    district: 'Callería — Centro de Pucallpa',
    clientRole: 'Consultorio & Oficinas Ejecutivas',
    ambienteId: 'oficina',
    ambienteLabel: 'Oficina Corporativa',
    categoryId: 'persianas',
    installedSystem: 'Persianas Verticales y Cortinas Roller',
    quote:
      'Necesitábamos eliminar el reflejo del sol en las pantallas de las computadoras sin oscurecer la oficina. Nos instalaron persianas verticales y rollers a la medida exacta de cada ventanal; ahora el aire acondicionado rinde mucho mejor y la presentación ante nuestros clientes es impecable.',
    highlightBenefit: 'Cero Reflejos en Monitores & Aislamiento Térmico',
    image: '/src/assets/images/oficina_con_cortinas_1794762225995.jpg',
    rating: 5,
  },
  {
    id: 'testimonio-habitacion-calleria',
    clientName: 'Sra. Elena Pinedo de Macedo',
    district: 'Urb. Municipal — Callería, Pucallpa',
    clientRole: 'Hogar Familiar',
    ambienteId: 'habitacion',
    ambienteLabel: 'Habitación Principal',
    categoryId: 'roller',
    installedSystem: 'Cortinas de Alto Gramaje + Sistema Roller',
    quote:
      'Buscábamos privacidad absoluta y oscuridad para descansar mejor por las mañanas. La confección de las cortinas y el accionamiento suave de la cadena del roller superaron nuestras expectativas. Se nota la mano de un maestro especialista en cada costura y en la firmeza de los rieles.',
    highlightBenefit: 'Intimidad Total & Descanso Fresco',
    image: '/src/assets/images/habitacion_con_cortinas_1794762220325.jpg',
    rating: 5,
  },
  {
    id: 'testimonio-rieles-manantay',
    clientName: 'Ing. Martín Ávila',
    district: 'Manantay, Pucallpa',
    clientRole: 'Vivienda de 2 Pisos',
    ambienteId: 'sala',
    ambienteLabel: 'Sala y Comedor',
    categoryId: 'rieles',
    installedSystem: 'Reparación de Rieles y Renovación de Cortinas',
    quote:
      'Teníamos rieles antiguos que se trababan constantemente y cortinas que habían perdido su caída. En lugar de hacernos gastar de más, en KITASOL repararon los rieles con correderas nuevas y renovaron nuestras cortinas dejándolas suaves, silenciosas y como nuevas.',
    highlightBenefit: 'Servicio Técnico Maestro & Deslizamiento Silencioso',
    image: '/src/assets/images/sala_con_cortinas_1794762217945.jpg',
    rating: 5,
  },
  {
    id: 'testimonio-cocina-yarinacocha',
    clientName: 'Arq. Lucía Shapiama',
    district: 'Yarinacocha, Pucallpa',
    clientRole: 'Departamento Moderno',
    ambienteId: 'cocina',
    ambienteLabel: 'Cocina y Comedor Diario',
    categoryId: 'persianas',
    installedSystem: 'Persianas Horizontales y Stores a Pedido',
    quote:
      'Para la ventana de la cocina quería un sistema práctico que dejara circular la brisa pero bloqueara el resplandor del mediodía. Las persianas horizontales y el store que me recomendaron encajaron al milímetro y son facilísimos de limpiar.',
    highlightBenefit: 'Graduación Exacta de Luz & Fácil Mantenimiento',
    image: '/src/assets/images/cocina_con_cortinas_1794762222130.jpg',
    rating: 5,
  },
];


