"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { DEFAULT_LOCALE, isLocale } from "@/i18n/config";

export default function RootRedirect() {
    const router = useRouter();

    useEffect(() => {
        const saved = localStorage.getItem("ace-harness-lang");
        const lang =
            saved && isLocale(saved)
                ? saved
                : navigator.language?.toLowerCase().startsWith("zh")
                  ? "zh"
                  : "en";
        router.replace(`/${lang}/`);
    }, [router]);

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="text-slate-500 text-sm font-mono">
                Loading {DEFAULT_LOCALE.toUpperCase()}…
            </div>
        </div>
    );
}
