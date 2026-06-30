import React from "react";
import { CONTENT } from "@/content";
import { Button } from "@/components/ui/button";

export function ClosingCta() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary opacity-20 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white leading-tight">
          {CONTENT.closingCta.headline}
        </h2>
        <p className="text-xl md:text-2xl mb-10 text-white/80 font-light">
          {CONTENT.closingCta.subtext}
        </p>
        <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 h-auto shadow-lg" data-testid="button-closing-cta">
          <a href="#booking">Book Your Visit Now</a>
        </Button>
      </div>
    </section>
  );
}
