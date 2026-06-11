"use client";

import { usePathname, useRouter } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname() || "/";

    const segments = pathname.split("/").filter(Boolean);
    const first = segments[0];
    const current: Locale = first && isLocale(first) ? first : "zh";
    const target: Locale = current === "zh" ? "en" : "zh";

    const rest = segments.slice(1).join("/");
    const targetHref = rest ? `/${target}/${rest}/` : `/${target}/`;

    const onClick = () => {
        try {
            localStorage.setItem("ace-harness-lang", target);
        } catch {
            /* ignore */
        }
        router.push(targetHref);
    };

    return (
        <button
            type="button"
            aria-label="Switch language"
            onClick={onClick}
            className="px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-brand-border text-slate-300 hover:text-brand-cyan text-sm font-medium transition-all inline-flex items-center gap-1.5"
        >
            <svg
                aria-hidden="true"
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 010 18M12 3a14.5 14.5 0 000 18"
                />
            </svg>
            <span>{current === "zh" ? "EN" : "中"}</span>
        </button>
    );
}
