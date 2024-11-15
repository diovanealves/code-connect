import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

import SearchForm from "@/components/search-form";
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
        className={`mx-auto flex w-[95%] max-w-7xl flex-row items-center justify-center gap-7 py-6 antialiased ${prompt.className}`}
      >
        <Sidebar />
        <div className="flex h-full w-full flex-col overflow-hidden">
          <SearchForm />
          <div className="no-scrollbar flex-1 overflow-y-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
