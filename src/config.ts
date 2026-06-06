import type { DisplayMode } from "./types/ui";

// open model display style
export const DEV_DISPLAY_VIEW_TYPE: DisplayMode = "modal"; // drawer | modal

// Language config
export type LanguageId = "en" | "zh-Tw" | "ja";

export const DEFAULT_LANGUAGE: LanguageId = 'en'; // en | zh-Tw | jp

export const LANGUAGE_STORAGE_KEY = 'portfolio-language';

// project tags maximum display number
export const MAX_TAGS = 3; 

// Resume URLs path
export const RESUME_URLS = {
  en: `${import.meta.env.BASE_URL}resume/Stuart_Chen_Frontend_Engineer_resume.pdf`,
  "zh-TW": `${import.meta.env.BASE_URL}resume/Stuart_Chen_Local_Taiwan_Junior_Frontend_Resume.pdf`,
} as const;