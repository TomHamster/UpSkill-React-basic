import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const i18nInitObject = i18next.createInstance();

i18nInitObject
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    saveMissing: true,
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    missingKeyHandler: (lng: readonly string[], ns: string, key: string) => {
      const errorMsg = `${key} does not exist in ${lng} translation file!`;
      alert(errorMsg);
      throw new Error(errorMsg);
    }
  });

export default i18nInitObject;
