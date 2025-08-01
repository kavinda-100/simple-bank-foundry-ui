import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { ThemeProvider } from "@/providers/ThemeProvider";
import WebTreeProvider from "@/providers/WebTreeProvider";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Simple Bank",
  description: "Your one-stop solution for all banking needs.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable}`}
      suppressHydrationWarning={true}
      suppressContentEditableWarning={true}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <WebTreeProvider>
            <header className="mx-auto w-full max-w-[2000px]">
              <Header />
            </header>
            <main className="mx-auto min-h-screen w-full max-w-[2000px] pt-[60px]">
              {children}
            </main>
          </WebTreeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
