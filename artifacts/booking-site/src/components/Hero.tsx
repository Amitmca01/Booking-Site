import React from "react";
import { Button } from "@/components/ui/button";
import { CONTENT } from "@/content";
import { motion } from "framer-motion";
import { Shield, Star, CheckCircle, Phone } from "lucide-react";

import heroBanner from "../assets/hero-banner.png";

const trustIcons = [Shield, Star, CheckCircle];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-stretch overflow-hidden">
      {/* ── Left panel: brand + copy ── */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-[52%] bg-primary px-8 md:px-14 py-32 md:py-24">
        {/* Subtle diagonal texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "12px 12px" }}
        />

        <div className="relative max-w-xl">
          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-2 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-8 h-px bg-secondary block" />
            <span className="text-secondary text-sm font-semibold uppercase tracking-[0.2em]">
              {CONTENT.business.tagline}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-5xl md:text-6xl xl:text-7xl font-serif font-bold text-primary-foreground leading-[1.05] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            {CONTENT.hero.headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-primary-foreground/70 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          >
            {CONTENT.hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold shadow-lg px-8 py-6 text-base"
              data-testid="button-hero-primary"
            >
              <a href="#booking">{CONTENT.hero.primaryCta}</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base"
              data-testid="button-hero-secondary"
            >
              <a href={`tel:${CONTENT.business.phone.replace(/[^0-9+]/g, "")}`}>
                <Phone className="w-4 h-4 mr-2" />
                {CONTENT.hero.secondaryCta}
              </a>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {CONTENT.business.trustBadges.map((badge, i) => {
              const Icon = trustIcons[i];
              return (
                <div
                  key={badge}
                  className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 px-4 py-2 rounded-full"
                >
                  <Icon className="w-3.5 h-3.5 text-secondary" />
                  <span className="text-sm font-medium text-primary-foreground/90">{badge}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* ── Right panel: AI photo ── */}
      <div className="hidden lg:block absolute right-0 top-0 w-[50%] h-full">
        <motion.img
          src={heroBanner}
          alt="A&S Signature Salon — luxury Indian beauty experience"
          className="w-full h-full object-cover object-center"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        {/* Gradient blend to left panel */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/30 to-transparent" />
        {/* Bottom overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Floating stat card */}
        <motion.div
          className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-3xl font-serif font-bold">{CONTENT.business.stats[1].value}</p>
          <p className="text-sm text-white/70 mt-1">{CONTENT.business.stats[1].label}</p>
        </motion.div>
      </div>

      {/* Mobile: image strip below fold */}
      <div className="lg:hidden absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="A&S Signature Salon"
          className="w-full h-full object-cover object-top opacity-25"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>
    </section>
  );
}
