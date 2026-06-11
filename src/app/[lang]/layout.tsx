import { LOCALES } from "@/i18n/config";

export const dynamicParams = false;

export function generateStaticParams() {
    return LOCALES.map((lang) => ({ lang }));
}

export default function LangLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
