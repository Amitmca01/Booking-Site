import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CONTENT } from "@/content";
import { motion } from "framer-motion";
import { Shield, Star, CheckCircle, Phone, Sparkles } from "lucide-react";

import heroBg from "../assets/hero-bg.png";
import heroBanner from "../assets/hero-banner.png";

const trustIcons = [Shield, Star, CheckCircle];

const PHRASES = [
  "Your Best Self,\nEvery Visit",
  "Glow Up.\nStand Out.",
  "Look Good.\nFeel Amazing.",
  "Beauty,\nReimagined.",
];

const TYPE_SPEED = 60;
const DELETE_SPEED = 35;
const PAUSE_AFTER = 2200;
const PAUSE_BEFORE = 400;

function useTypewriter(phrases: string[]) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPausing, setIsPausing] = useState(false);

  useEffect(() => {
    if (isPausing) return;

    const current = phrases[phraseIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, displayed.length + 1);
        setDisplayed(next);
        if (next === current) {
          setIsPausing(true);
          setTimeout(() => {
            setIsPausing(false);
            setIsDeleting(true);
          }, PAUSE_AFTER);
        }
      } else {
        const next = displayed.slice(0, -1);
        setDisplayed(next);
        if (next === "") {
          setIsPausing(true);
          setTimeout(() => {
            setIsPausing(false);
            setIsDeleting(false);
            setPhraseIndex((i) => (i + 1) % phrases.length);
          }, PAUSE_BEFORE);
        }
      }
    }, isDeleting ? DELETE_SPEED : TYPE_SPEED);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, isPausing, phraseIndex, phrases]);

  return displayed;
}

export function Hero() {
  const typedText = useTypewriter(PHRASES);

  const lines = typedText.split("\n");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Full-bleed salon interior background ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="A&S Signature Salon interior"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/40" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: text */}
          <div className="max-w-xl">
            {/* Eyebrow */}
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-8 h-px bg-secondary block" />
              <span className="text-secondary text-xs font-bold uppercase tracking-[0.25em]">
                {CONTENT.business.tagline}
              </span>
            </motion.div>

            {/* Typewriter headline */}
            <motion.div
              className="mb-6 min-h-[9rem] md:min-h-[10.5rem] xl:min-h-[12rem] flex flex-col justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-serif font-bold text-white leading-[1.1]">
                {lines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                    {/* Show cursor only on the last line */}
                    {i === lines.length - 1 && (
                      <span
                        className="inline-block w-[3px] h-[0.85em] bg-secondary ml-1 align-middle"
                        style={{ animation: "blink 1s step-start infinite" }}
                      />
                    )}
                  </span>
                ))}
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              className="text-lg md:text-xl text-white/75 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
            >
              {CONTENT.hero.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold shadow-xl px-8 py-6 text-base"
                data-testid="button-hero-primary"
              >
                <a href="#booking">{CONTENT.hero.primaryCta}</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/40 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-6 text-base"
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
              transition={{ duration: 0.8, delay: 0.85 }}
            >
              {CONTENT.business.trustBadges.map((badge, i) => {
                const Icon = trustIcons[i];
                return (
                  <div
                    key={badge}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full"
                  >
                    <Icon className="w-3.5 h-3.5 text-secondary" />
                    <span className="text-sm font-medium text-white/90">{badge}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right: AI portrait + stats */}
          <motion.div
            className="hidden lg:flex flex-col items-end gap-6"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative w-[340px] xl:w-[400px]">
              <div className="absolute -top-3 -left-3 w-full h-full rounded-3xl border-2 border-secondary/60" />
              <img
                src={heroBanner}
                alt="Expert Indian beauty professional at A&S Signature Salon"
                className="relative z-10 w-full rounded-3xl shadow-2xl object-cover aspect-[3/4]"
              />
              <div className="absolute -top-4 -right-4 z-20 bg-secondary text-secondary-foreground rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6" />
              </div>
            </div>

            <div className="flex gap-4 w-full justify-end">
              {CONTENT.business.stats.slice(0, 2).map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 text-white text-center"
                >
                  <p className="text-2xl font-serif font-bold text-secondary">{stat.value}</p>
                  <p className="text-xs text-white/60 mt-0.5 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Blinking cursor keyframe */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
