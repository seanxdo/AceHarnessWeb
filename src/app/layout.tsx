import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "ACEHarness - OPC Anywhere",
    description:
        "ACE Harness OPC Anywhere — One prompt spins up a virtual team covering CEO, design, dev, QA, and marketing.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="zh-CN">
            <body className="relative min-h-screen overflow-x-hidden selection:bg-brand-cyan selection:text-brand-bg">
                {children}
            </body>
        </html>
    );
}
