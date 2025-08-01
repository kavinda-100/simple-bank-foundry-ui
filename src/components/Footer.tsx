"use client";

import { motion } from "framer-motion";
import {
  Github,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Shield,
  Zap,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Security", href: "#security" },
      { name: "API", href: "#api" },
      { name: "Documentation", href: "#docs" },
    ],
    banking: [
      { name: "Deposits", href: "#deposits" },
      { name: "Withdrawals", href: "#withdrawals" },
      { name: "Loans", href: "#loans" },
      { name: "Transfers", href: "#transfers" },
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Contact", href: "#contact" },
      { name: "Status", href: "#status" },
      { name: "Community", href: "#community" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Security Policy", href: "#security-policy" },
      { name: "Compliance", href: "#compliance" },
    ],
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/kavinda-100" },
    { name: "Twitter", icon: Twitter, href: "#twitter" },
    { name: "Email", icon: Mail, href: "mailto:support@simplebank.com" },
  ];

  const stats = [
    { label: "Total Value Locked", value: "$2.5M+" },
    { label: "Active Users", value: "1M+" },
    { label: "Transactions", value: "1.5M+" },
    { label: "Networks", value: "5+" },
  ];

  return (
    <footer className="relative border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-transparent dark:from-indigo-900/20"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]"></div>
        </div>

        {/* Floating glow effects */}
        <div className="absolute top-20 -left-20 h-40 w-40 rounded-full bg-purple-200/30 blur-[60px] dark:bg-purple-600/20"></div>
        <div className="absolute -right-20 bottom-20 h-40 w-40 rounded-full bg-blue-200/30 blur-[60px] dark:bg-blue-600/20"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 grid grid-cols-2 gap-8 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-2xl font-bold text-transparent dark:from-purple-400 dark:to-blue-400">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid gap-8 lg:grid-cols-6">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-4 flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-xl font-bold text-transparent dark:from-white dark:to-gray-300">
                Simple Bank
              </span>
            </div>
            <p className="mb-6 max-w-md text-gray-600 dark:text-gray-400">
              The future of decentralized banking. Secure, transparent, and
              accessible financial services powered by Ethereum blockchain
              technology.
            </p>

            {/* Security badges */}
            <div className="mb-6 flex flex-wrap gap-2">
              <div className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs text-green-700 dark:bg-green-900/20 dark:text-green-400">
                <Shield className="h-3 w-3" />
                Audited
              </div>
              <div className="flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700 dark:bg-blue-900/20 dark:text-blue-400">
                <Zap className="h-3 w-3" />
                Fast
              </div>
              <div className="flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 text-xs text-purple-700 dark:bg-purple-900/20 dark:text-purple-400">
                <Globe className="h-3 w-3" />
                Global
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="group rounded-lg bg-gray-100 p-2 transition-all hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white dark:bg-gray-800"
                >
                  <social.icon className="h-4 w-4" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
              Product
            </h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                  >
                    {link.name}
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
              Banking
            </h3>
            <ul className="space-y-2">
              {footerLinks.banking.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                  >
                    {link.name}
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
              Support
            </h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                  >
                    {link.name}
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
              Legal
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-gray-600 transition-colors hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
                  >
                    {link.name}
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-purple-200/50 bg-gradient-to-r from-purple-600/10 to-blue-600/10 p-8 backdrop-blur-sm dark:border-purple-800/50 dark:from-purple-600/20 dark:to-blue-600/20"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-4 lg:mb-0">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Stay updated with Simple Bank
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get the latest updates on new features, security improvements,
                and DeFi innovations.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
              />
              <button className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-2 font-medium text-white transition-all hover:from-purple-700 hover:to-blue-700 hover:shadow-lg hover:shadow-purple-500/25">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-gray-200 pt-8 dark:border-gray-800"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-4 lg:mb-0">
              <p className="text-gray-600 dark:text-gray-400">
                © {currentYear} Simple Bank. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Built with ❤️ using Next.js, Ethereum, and Web3 technologies.
              </p>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-500">
              <span className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
                All systems operational
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
