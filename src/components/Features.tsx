import type { Dictionary } from "@/i18n/types";

export default function Features({ dict }: { dict: Dictionary }) {
    return (
        <section className="max-w-7xl mx-auto px-6 py-24 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="p-8 rounded-2xl border border-brand-border bg-brand-surface">
                    <div className="w-12 h-12 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mb-6">
                        <svg
                            className="w-6 h-6 text-brand-cyan"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                            />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                        {dict["feature.deploy.title"]}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                        {dict["feature.deploy.desc"]}
                    </p>
                </div>
                {/* Feature 2 */}
                <div className="p-8 rounded-2xl border border-brand-border bg-brand-surface">
                    <div className="w-12 h-12 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center mb-6">
                        <svg
                            className="w-6 h-6 text-brand-purple"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                            />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                        {dict["feature.cost.title"]}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                        {dict["feature.cost.desc"]}
                    </p>
                </div>
                {/* Feature 3 */}
                <div className="p-8 rounded-2xl border border-brand-border bg-brand-surface">
                    <div className="w-12 h-12 rounded-lg bg-slate-100/10 border border-slate-100/20 flex items-center justify-center mb-6">
                        <svg
                            className="w-6 h-6 text-slate-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                            />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                        {dict["feature.oss.title"]}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                        {dict["feature.oss.desc"]}
                    </p>
                </div>
            </div>
        </section>
    );
}
