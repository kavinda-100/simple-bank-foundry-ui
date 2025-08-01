"use client";

import React from "react";
import { ModeToggle } from "./ModeToggle";
import { cn } from "@/lib/utils";
import { ConnectButton } from "@rainbow-me/rainbowkit";

type HeaderProps = {
  className?: string;
  isHomePage?: boolean;
};

const Header = ({ className, isHomePage }: HeaderProps) => {
  const [scrollY, setScrollY] = React.useState(0);

  // Listener to scroll events to track scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isScrolled = scrollY > 0;

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-100 mx-auto flex size-full h-[40px] items-center justify-between px-2 py-3 md:px-4 lg:py-8",
        {
          "bg-white/30 shadow-sm backdrop-blur-sm dark:bg-black/30": isScrolled,
          "bg-transparent": !isScrolled,
          "text-white dark:text-black": isHomePage && scrollY <= 800,
          "text-gray-900 dark:text-white": isHomePage && scrollY > 800,
        },
        className,
      )}
    >
      <div className="space-x-4">
        <h1 className="text-2xl font-bold">Simple Bank</h1>
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
