import "server-only";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  ja: () => import("./ja.json").then((module) => module.default),
  es: () => import("./es.json").then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export type Dictionary = Awaited<ReturnType<typeof dictionaries.ja>>;

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale] ? dictionaries[locale]() : dictionaries.ja();
};
