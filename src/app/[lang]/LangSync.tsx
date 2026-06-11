"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n/config";

export default function LangSync({ lang }: { lang: Locale }) {
    useEffect(() => {
        document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
        try {
            localStorage.setItem("ace-harness-lang", lang);
        } catch {
            /* ignore */
        }
    }, [lang]);
    return null;
}
