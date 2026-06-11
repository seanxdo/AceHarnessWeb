import Image from "next/image";
import type { Dictionary } from "@/i18n/types";

type Role = {
    src: string;
    alt: string;
    ringClass: string;
    tagClass: string;
    titleKey: keyof Dictionary;
    tagKey: keyof Dictionary;
    descKey: keyof Dictionary;
};

const ROLES: Role[] = [
    {
        src: "/img/01.png",
        alt: "CEO Avatar",
        ringClass: "border-brand-purple",
        tagClass: "text-brand-purple",
        titleKey: "role.ceo.title",
        tagKey: "role.ceo.tag",
        descKey: "role.ceo.desc",
    },
    {
        src: "/img/02.png",
        alt: "Designer Avatar",
        ringClass: "border-brand-cyan",
        tagClass: "text-brand-cyan",
        titleKey: "role.designer.title",
        tagKey: "role.designer.tag",
        descKey: "role.designer.desc",
    },
    {
        src: "/img/03.png",
        alt: "Developer Avatar",
        ringClass: "border-blue-500",
        tagClass: "text-blue-400",
        titleKey: "role.dev.title",
        tagKey: "role.dev.tag",
        descKey: "role.dev.desc",
    },
    {
        src: "/img/04.png",
        alt: "QA Avatar",
        ringClass: "border-green-500",
        tagClass: "text-green-400",
        titleKey: "role.qa.title",
        tagKey: "role.qa.tag",
        descKey: "role.qa.desc",
    },
    {
        src: "/img/05.png",
        alt: "Marketing Avatar",
        ringClass: "border-pink-500",
        tagClass: "text-pink-400",
        titleKey: "role.mkt.title",
        tagKey: "role.mkt.tag",
        descKey: "role.mkt.desc",
    },
];

export default function TeamGrid({ dict }: { dict: Dictionary }) {
    return (
        <section className="max-w-7xl mx-auto px-6 pt-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">
                    {dict["team.title"]}
                </h2>
                <p className="text-slate-400">{dict["team.subtitle"]}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {ROLES.map((role) => (
                    <div
                        key={role.alt}
                        className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center group glow-border transition-all duration-300"
                    >
                        <div
                            className={`w-20 h-20 rounded-full mb-4 border-2 p-1 ${role.ringClass}`}
                        >
                            <Image
                                alt={role.alt}
                                className="w-full h-full rounded-full object-cover"
                                src={role.src}
                                width={80}
                                height={80}
                                unoptimized
                            />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-1">
                            {dict[role.titleKey]}
                        </h3>
                        <p
                            className={`text-xs font-medium mb-3 ${role.tagClass}`}
                        >
                            {dict[role.tagKey]}
                        </p>
                        <p className="text-sm text-slate-400 leading-snug">
                            {dict[role.descKey]}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
