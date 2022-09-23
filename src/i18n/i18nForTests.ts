import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n.use(initReactI18next).use(Backend).init({
  lng: 'en',
  fallbackLng: 'en',
  ns: ['locales'],
  defaultNS: 'locales',
  debug: true,
});

export default i18n;
