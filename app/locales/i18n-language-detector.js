import * as Localization from "expo-localization";

export const languageDetector = {
  type: "languageDetector",
  async: true, // async detection
  detect: (cb) => {
    const currentLocale = Localization.locale.substring(0, 2);
    cb(currentLocale);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};
