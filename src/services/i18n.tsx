import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationFr from '../locales/fr/translation.json';
import translationEn from '../locales/en/translation.json';
import translationAr from '../locales/ar/translation.json';
/*
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    debug: true,

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
      wait: false,
    },

    resources: {
      fr: {
        translations: translationFr,
      },
      en: {
        translations: translationEn,
      },
      ar: {
        translations: translationAr,
      },
    },
    ns: ['translations'],
    defaultNS: 'translations',
  });*/

export default i18n;
