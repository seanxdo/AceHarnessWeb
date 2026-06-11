import type { Dictionary } from "@/i18n/types";

export default function Footer({ dict }: { dict: Dictionary }) {
    return (
        <footer className="border-t border-brand-border bg-brand-bg mt-12 py-8 relative z-10">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-sm text-slate-500">{dict["footer"]}</p>
            </div>
        </footer>
    );
}
