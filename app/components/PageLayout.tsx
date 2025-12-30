'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  PhoneIcon,
} from "@heroicons/react/24/outline";
import MobileMenu from "./MobileMenu";
import { FadeInUp, FadeIn } from "./animations";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex-shrink-0"
            >
              <Link href="/">
                <Image
                  src="/Final Files-01.png"
                  alt="Goldman and Co"
                  width={180}
                  height={50}
                  className="h-12 w-auto"
                  priority
                />
              </Link>
            </motion.div>
            <div className="hidden md:flex items-center gap-8">
              {[
                { href: "/the-goldman-difference", label: "About" },
                { href: "/investment-strategy", label: "Investment Strategy" },
                { href: "/capital-solutions", label: "Capital Solutions" },
                { href: "/who-we-partner-with", label: "Who We Partner With" },
              ].map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="text-sm font-medium text-gray-600 hover:text-[#b8860b] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/confidential-review"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="ml-4 px-6 py-2.5 bg-[#0f172a] text-white text-sm font-medium rounded hover:bg-[#1e293b] transition-colors"
              >
                Contact Us
              </motion.a>
            </div>
            <MobileMenu />
          </div>
        </div>
      </motion.nav>

      {/* Page Content */}
      {children}

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#0f172a] pt-16 pb-8"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 items-start">
            <FadeInUp className="lg:col-span-1">
              <Image
                src="/Final Files 1-01.png"
                alt="Goldman and Co"
                width={160}
                height={45}
                className="h-10 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Private Capital | Strategic Growth | Long-Term Value
              </p>
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-[#b8860b]" />
                <a href="tel:+18006971887" className="text-gray-400 text-sm hover:text-white transition-colors">+1 (800) 697-1887</a>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { href: "/the-goldman-difference", label: "About Us" },
                  { href: "/investment-strategy", label: "Investment Strategy" },
                  { href: "/capital-solutions", label: "Capital Solutions" },
                  { href: "/value-creation", label: "Value Creation" },
                  { href: "/who-we-partner-with", label: "Who We Partner With" },
                  { href: "/confidential-review", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5, color: "#b8860b" }}
                      className="text-gray-400 text-sm hover:text-[#b8860b] transition-colors inline-block"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </FadeInUp>
            <FadeInUp delay={0.2} className="lg:col-span-2">
              <h4 className="text-white font-semibold mb-6">Our Offices</h4>
              <div className="grid sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-[#b8860b] font-medium">San Diego</p>
                  <p className="text-gray-400">12636 High Bluff Drive, Suite 400<br />San Diego, CA 92130</p>
                </div>
                <div>
                  <p className="text-[#b8860b] font-medium">St. Petersburg</p>
                  <p className="text-gray-400">333 3rd Avenue N., Suite 400<br />St. Petersburg, FL 33701</p>
                </div>
              </div>
            </FadeInUp>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-t border-gray-800 origin-left"
          />
          <div className="pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <FadeIn>
                <p className="text-gray-500 text-sm">
                  &copy; {new Date().getFullYear()} Goldman and Co. All rights reserved.
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="flex gap-6">
                  <motion.a
                    href="#"
                    whileHover={{ color: "#b8860b" }}
                    className="text-gray-500 text-sm transition-colors"
                  >
                    Privacy Policy
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ color: "#b8860b" }}
                    className="text-gray-500 text-sm transition-colors"
                  >
                    Terms of Service
                  </motion.a>
                </div>
              </FadeIn>
            </div>
            {/* Disclaimer */}
            <FadeIn delay={0.2}>
              <p className="text-gray-600 text-xs mt-8 max-w-4xl mx-auto text-center leading-relaxed">
                The Goldman Fund is a private investment firm. We are not a bank, broker-dealer, or registered investment adviser. Capital solutions are provided on a discretionary basis and are not offered to the general public. All investments are subject to review, diligence, and final approval.
              </p>
            </FadeIn>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
