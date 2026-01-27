import type {LanguageUi} from "../types/i18n";

export function t(ui: LanguageUi, key: string, fallback: string) {
    return ui[key] ?? fallback;
}