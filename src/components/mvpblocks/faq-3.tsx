"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      className={cn(
        "group dark:border-border/60 rounded-lg border border-purple-200 bg-white/60 backdrop-blur-sm dark:bg-transparent",
        "transition-all duration-200 ease-in-out",
        isOpen
          ? "dark:bg-card/30 dark:border-primary/30 border-purple-300 bg-purple-50 shadow-sm"
          : "hover:bg-purple-25 dark:hover:bg-card/50 hover:border-purple-250 dark:hover:border-primary/20",
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 px-6 py-4"
      >
        <h3
          className={cn(
            "text-left text-base font-medium transition-colors duration-200",
            "dark:text-foreground/80 text-gray-800",
            isOpen && "dark:text-foreground text-gray-900",
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={cn(
            "shrink-0 rounded-full p-0.5",
            "transition-colors duration-200",
            isOpen
              ? "dark:text-primary text-purple-600"
              : "dark:text-muted-foreground text-gray-500",
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: {
                  duration: 0.4,
                  ease: [0.04, 0.62, 0.23, 0.98],
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.1,
                },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
          >
            <div className="dark:border-border/40 border-t border-purple-200 px-6 pt-2 pb-4">
              <motion.p
                initial={{ y: -8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="dark:text-muted-foreground text-sm leading-relaxed text-gray-600"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Faq3() {
  const faqs: Omit<FAQItemProps, "index">[] = [
    {
      question: "What makes MVPBlocks unique?",
      answer:
        "MVPBlocks stands out through its intuitive design, powerful component library, and seamless integration options. We've focused on creating a user experience that combines simplicity with advanced features, all while maintaining excellent performance and accessibility.",
    },
    {
      question: "How can I customize the components?",
      answer:
        "All components are built with Tailwind CSS, making them highly customizable. You can modify colors, spacing, typography, and more by simply adjusting the class names or using our theme variables to match your brand identity.",
    },
    {
      question: "Do the components work with dark mode?",
      answer:
        "Yes, all MVPBlocks components are designed to work seamlessly with both light and dark modes. They automatically adapt to your site's theme settings, providing a consistent user experience regardless of the user's preference.",
    },
    {
      question: "How can I get started with MVPBlocks?",
      answer:
        "You can get started by browsing our component library and copying the code for the components you need. Our documentation provides clear instructions for installation and usage, and you can always reach out to our support team if you need assistance.",
    },
    {
      question: "Can I use MVPBlocks for commercial projects?",
      answer:
        "Absolutely! MVPBlocks is free to use for both personal and commercial projects. There are no licensing fees or attribution requirements—just build and launch your MVP faster than ever before.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gray-50 py-16 dark:bg-black">
      {/* Decorative elements - theme aware */}
      <div className="dark:bg-primary/5 absolute top-20 -left-20 h-64 w-64 rounded-full bg-purple-200/30 blur-3xl" />
      <div className="dark:bg-primary/5 absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-blue-200/30 blur-3xl" />

      {/* Additional background effects */}
      <div className="absolute inset-0">
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-100/20 via-white/50 to-gray-50 blur-2xl dark:from-indigo-900/20 dark:via-black/50 dark:to-gray-950"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)]"></div>
        </div>
      </div>

      <div className="relative container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <Badge
            variant="outline"
            className="dark:border-primary dark:text-primary mb-4 border-purple-300 bg-purple-50 px-3 py-1 text-xs font-medium tracking-wider text-purple-700 uppercase dark:bg-transparent"
          >
            FAQs
          </Badge>

          <h2 className="dark:from-primary mb-3 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-3xl font-bold text-transparent dark:to-rose-400">
            Frequently Asked Questions
          </h2>
          <p className="dark:text-muted-foreground text-sm text-gray-600">
            Everything you need to know about MVPBlocks
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={cn(
            "mx-auto mt-12 max-w-md rounded-lg border border-purple-200 bg-white/50 p-6 text-center backdrop-blur-sm dark:border-gray-800 dark:bg-transparent",
          )}
        >
          <div className="dark:bg-primary/10 dark:text-primary mb-4 inline-flex items-center justify-center rounded-full bg-purple-100 p-2 text-purple-600">
            <Mail className="h-4 w-4" />
          </div>
          <p className="dark:text-foreground mb-1 text-sm font-medium text-gray-900">
            Still have questions?
          </p>
          <p className="dark:text-muted-foreground mb-4 text-xs text-gray-600">
            We&apos;re here to help you
          </p>
          <button
            type="button"
            className={cn(
              "rounded-md px-4 py-2 text-sm",
              "dark:bg-primary dark:text-primary-foreground bg-gradient-to-r from-purple-600 to-blue-600 text-white",
              "dark:hover:bg-primary/90 hover:from-purple-700 hover:to-blue-700",
              "transition-all duration-200",
              "font-medium shadow-lg shadow-purple-500/25",
            )}
          >
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
}
