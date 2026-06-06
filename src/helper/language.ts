import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  type LanguageId,
} from '../config';

export const isLanguageId = (value: string | null): value is LanguageId => {
  return value === 'en' || value === 'zh-Tw' || value === 'ja';
};

export const detectBrowserLanguage = (): LanguageId => {
  const preferredLanguage =
    navigator.languages?.[0] ?? navigator.language;

  const normalizedLanguage = preferredLanguage.toLowerCase();

  if (normalizedLanguage.startsWith('zh')) {
    return 'zh-Tw';
  }

  if (normalizedLanguage.startsWith('ja')) {
    return 'ja';
  }

  return DEFAULT_LANGUAGE;
};

export const getInitialLanguage = (): LanguageId => {
  const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (isLanguageId(savedLanguage)) {
    return savedLanguage;
  }

  return detectBrowserLanguage();
};