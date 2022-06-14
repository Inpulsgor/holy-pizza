import i18n from "i18next";
import translation_EN from "translations/en/translation.json";
import translation_UA from "translations/ua/translation.json";
import { initReactI18next } from "react-i18next";

export const resources = {
  en: {
    translation: translation_EN,
  },
  ua: {
    translation: translation_UA,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: "en",
  ns: ["translation"],
  interpolation: {
    escapeValue: false,
  },
  keySeparator: ".",
  resources,
});
