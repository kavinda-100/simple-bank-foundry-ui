import "@/styles/globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/providers/ThemeProvider";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

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
          <main className="container mx-auto min-h-screen">
            <Header />
            <section className="pt-[60px]">{children}</section>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
