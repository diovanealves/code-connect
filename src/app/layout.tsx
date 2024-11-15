import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

import { Sidebar } from "@/components/sidebar";

export const metadata: Metadata = {
  title: "Code Connect",
  description: "Uma rede social para desenvolvedores",
};

const prompt = Prompt({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`mx-auto flex max-w-7xl flex-row items-center justify-center gap-7 py-6 antialiased ${prompt.className}`}
      >
        <Sidebar />
        <div className="h-full">{children}</div>
      </body>
    </html>
  );
}
