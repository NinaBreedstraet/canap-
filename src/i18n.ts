import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import nlTranslation from "./locales/nl/translation.json";
import enTranslation from "./locales/en/translation.json";
import frTranslation from "./locales/fr/translation.json";

const resources = {
  nl: {
    translation: nlTranslation,
  },
  en: {
    translation: enTranslation,
  },
  fr: {
    translation: frTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "nl",
  fallbackLng: "nl",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
