"use client";

import React from "react";
import { ModeToggle } from "./ModeToggle";
import { cn } from "@/lib/utils";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Listener to scroll events to hide the header on scroll down
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-100 container mx-auto flex h-[40px] items-center justify-between py-2",
        {
          "bg-white/50 shadow-md backdrop-blur-md": isScrolled,
          "bg-transparent": !isScrolled,
        },
      )}
    >
      <div className="space-x-4">
        <h1 className="text-2xl font-bold">Simple Bank</h1>
      </div>
      <div className="flex items-center space-x-2">
        <ModeToggle />
        <ConnectButton />
      </div>
    </header>
  );
};

export default Header;
