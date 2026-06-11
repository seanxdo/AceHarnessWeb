import Image from "next/image";
import type { Dictionary } from "@/i18n/types";

export default function Hero({ dict }: { dict: Dictionary }) {
    return (
        <section className="max-w-7xl mx-auto px-6 pt-16 lg:pt-24 pb-20 text-center flex flex-col items-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/5 mb-8">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                <span className="text-xs font-medium text-brand-cyan uppercase tracking-wider">
                    {dict["hero.badge"]}
                </span>
            </div>
            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                ACE Harness <br />
                <span className="text-gradient">OPC Anywhere</span>
            </h1>
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                {dict["hero.subtitle"]}
            </p>
            {/* Command Line Mockup */}
            <div className="w-full max-w-2xl mx-auto text-left relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-[#0A0F18] border border-brand-border rounded-xl p-1 shadow-2xl flex items-center">
                    <div className="px-4 text-slate-500 font-mono text-lg">
                        &gt;
                    </div>
                    <input
                        className="w-full bg-transparent border-none text-brand-cyan font-mono text-sm md:text-base focus:ring-0 placeholder-brand-cyan/50 py-4 outline-none"
                        readOnly
                        type="text"
                        value={dict["hero.input"]}
                    />
                    <div className="px-4">
                        <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-200 transition-colors">
                            {dict["hero.run"]}
                        </button>
                    </div>
                </div>
            </div>
            <div className="glass-panel p-4 rounded-3xl border border-brand-cyan/20 w-full max-w-4xl mt-12 mx-auto">
                <Image
                    alt="One Person Company (OPC) - ACEHarness Flat Illustration"
                    className="rounded-2xl max-w-full h-auto shadow-2xl border border-brand-cyan/10 w-full"
                    src="/img/OPC_roles.png"
                    width={1600}
                    height={900}
                    priority
                    unoptimized
                />
            </div>
        </section>
    );
}
