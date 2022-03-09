import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as translations from "./translations";
import { languageDetector } from "./i18n-language-detector";
import "intl-pluralrules"; // required here

const resources = {
  en: {
    translation: translations.en,
  },
  uk: {
    translation: translations.uk,
  },
};
i18n
  .use(initReactI18next)
  .use(languageDetector)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react
    },
  });
export default i18n;
