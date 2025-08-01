"use client";

import React from "react";
import { ModeToggle } from "./ModeToggle";
import { cn } from "@/lib/utils";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { c } from "node_modules/framer-motion/dist/types.d-Cjd591yU";

type HeaderProps = {
  header_className?: string;
  className?: string;
};

const Header = ({ header_className, className }: HeaderProps) => {
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
        "fixed top-0 right-0 left-0 z-100 mx-auto flex size-full h-[40px] items-center justify-between px-2 py-3 md:px-4 lg:py-8",
        {
          "bg-white/50 shadow-sm backdrop-blur-md": isScrolled,
          "bg-transparent": !isScrolled,
        },
        className,
      )}
    >
      <div className="space-x-4">
        <h1 className={cn("text-2xl font-bold", header_className)}>
          Simple Bank
        </h1>
      </div>
      <div className="flex items-center space-x-2">
        <ModeToggle />
        <ConnectButton
          showBalance={false}
          accountStatus={{
            smallScreen: "avatar",
            largeScreen: "full",
          }}
        />
      </div>
    </header>
  );
};

export default Header;
