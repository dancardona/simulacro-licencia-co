export const SITE_URL = 'https://simulacro-licencia-co.vercel.app/';

export const seo = {
  title: 'Simulacro Licencia de Conducción Colombia | Examen Teórico A2, B1 y C1',
  description:
    'Practica el examen teórico para licencia de conducción en Colombia con 40 preguntas aleatorias, puntaje ponderado y explicaciones basadas en la Ley 769 de 2002.',
  siteName: 'Simulacro Licencia Colombia',
  author: 'Daniel Cardona',
  ogDescription:
    'Simulacro gratuito del examen teórico A2, B1 y C1: 40 preguntas aleatorias, banco de 144, puntaje ponderado y explicaciones de la Ley 769 de 2002.',
  twitterDescription:
    'Practica el examen teórico A2, B1 y C1 con 40 preguntas aleatorias, puntaje ponderado y explicación inmediata.',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Simulacro Licencia de Conducción Colombia',
    url: SITE_URL,
    description:
      'Simulacro gratuito del examen teórico para licencia de conducción en Colombia, con 40 preguntas aleatorias, puntaje ponderado y explicaciones basadas en la Ley 769 de 2002.',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Any',
    inLanguage: 'es-CO',
    isAccessibleForFree: true,
    educationalUse: 'Practice',
    learningResourceType: 'Practice test',
    about: [
      'Licencia de conducción Colombia',
      'Examen teórico A2',
      'Examen teórico B1',
      'Examen teórico C1',
      'Ley 769 de 2002',
    ],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'COP',
    },
  },
} as const;
