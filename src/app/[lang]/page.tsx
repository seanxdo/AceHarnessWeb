import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TeamGrid from "@/components/TeamGrid";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import LangSync from "./LangSync";

export default async function LangPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    if (!isLocale(lang)) notFound();
    const dict = getDictionary(lang);

    return (
        <>
            <LangSync lang={lang} />
            <Header dict={dict} />
            <main className="relative z-10 pt-32 pb-24">
                <Hero dict={dict} />
                <TeamGrid dict={dict} />
                <Features dict={dict} />
                <CTA dict={dict} />
            </main>
            <Footer dict={dict} />
        </>
    );
}
