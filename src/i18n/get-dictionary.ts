import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import zh from "@/i18n/dictionaries/zh";
import en from "@/i18n/dictionaries/en";

const DICTIONARIES: Record<Locale, Dictionary> = { zh, en };

export function getDictionary(lang: Locale): Dictionary {
    return DICTIONARIES[lang];
}
