import {
  createContext,
  createElement,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { enLocale } from "./locales/en.js";
import { zhLocale } from "./locales/zh-TW.js";

const STORAGE_KEY = "cigr-lang-v2";
const DEFAULT_LOCALE = "en";
const LocaleContext = createContext(null);

const messages = {
  en: enLocale,
  "zh-TW": zhLocale,
};

function useBrowserLocale() {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && messages[stored]) return stored;
  return DEFAULT_LOCALE;
}

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(useBrowserLocale);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale === "zh-TW" ? "zh-Hant" : "en";
  }, [locale]);

  const setLocale = (nextLocale) => {
    if (messages[nextLocale]) setLocaleState(nextLocale);
  };

  const t = (key, fallback = key) => {
    const localeMessages = messages[locale] || {};
    if (Object.prototype.hasOwnProperty.call(localeMessages, key)) return localeMessages[key];
    const fallbackMessages = messages[DEFAULT_LOCALE] || {};
    return Object.prototype.hasOwnProperty.call(fallbackMessages, key) ? fallbackMessages[key] : fallback;
  };

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      locales: Object.keys(messages),
    }),
    [locale],
  );

  return createElement(
    LocaleContext.Provider,
    { value },
    children,
  );
}

export function useI18n() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
