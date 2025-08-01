import Header from "@/components/Header";
import AppHero from "@/components/mvpblocks/app-hero";
import Faq3 from "@/components/mvpblocks/faq-3";
import Feature1 from "@/components/mvpblocks/feature-1";
import type React from "react";

export default function HomePage() {
  return (
    <section className="flex size-full flex-col">
      <Header header_className="text-white" />
      <AppHero />
      <Feature1 />
      <Faq3 />
    </section>
  );
}
