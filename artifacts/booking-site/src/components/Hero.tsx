import React from "react";
import { Button } from "@/components/ui/button";
import { CONTENT } from "@/content";
import { motion } from "framer-motion";
import { Shield, Star, CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-primary via-[#6c284f] to-secondary text-primary-foreground min-h-[90vh] flex items-center">
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-secondary blur-[100px]" />
        <div className="absolute top-[60%] -right-[10%] w-[60%] h-[60%] rounded-full bg-background blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {CONTENT.hero.headline}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-2xl mb-10 text-primary-foreground/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {CONTENT.hero.subheadline}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <Button asChild size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 border-transparent shadow-lg" data-testid="button-hero-primary">
              <a href="#booking">{CONTENT.hero.primaryCta}</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white/10" data-testid="button-hero-secondary">
              <a href={`tel:${CONTENT.business.phone.replace(/[^0-9]/g, "")}`}>{CONTENT.hero.secondaryCta}</a>
            </Button>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="flex items-center gap-2 bg-black/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-white">{CONTENT.business.trustBadges[0]}</span>
            </div>
            <div className="flex items-center gap-2 bg-black/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Star className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-white">{CONTENT.business.trustBadges[1]}</span>
            </div>
            <div className="flex items-center gap-2 bg-black/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <CheckCircle className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-white">{CONTENT.business.trustBadges[2]}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
