import type { DisplayMode } from "./types/ui";
import type {LanguageId} from "./types/i18n";

export const DEV_DISPLAY_VIEW_TYPE: DisplayMode = "modal"; // drawer | modal
export const DEFAULT_LANGUAGE: LanguageId = 'en'; // en | zh-Tw | jp

export const MAX_TAGS = 3; // project tags maximum display number

export const RESUME_URL = `${import.meta.env.BASE_URL}Stuart_Chen_Frontend_Engineer_resume.pdf`