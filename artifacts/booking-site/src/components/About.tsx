import React from "react";
import { CONTENT } from "@/content";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Droplets, CalendarCheck } from "lucide-react";

import featureExpert from "../assets/feature-expert.png";

const icons = [Sparkles, ShieldCheck, Droplets, CalendarCheck];

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Clients Choose {CONTENT.business.name.split(" ")[0]}
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We believe that self-care is not a luxury, but a necessity. Our studio is designed to
            be your sanctuary — a place where you can unwind, recharge, and leave feeling more
            confident than ever.
          </motion.p>
        </div>

        {/* Featured expert image + first feature card */}
        <div className="grid lg:grid-cols-2 gap-10 mb-10 items-stretch">
          {/* AI image showcase */}
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-xl h-80 lg:h-auto min-h-[320px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={featureExpert}
              alt="Expert Indian stylist at work in Lumière Beauty Studio"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block bg-primary/90 text-primary-foreground text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                Our Experts
              </span>
              <h3 className="font-serif font-bold text-white text-2xl leading-snug">
                Every stylist brings mastery,<br />every visit brings results.
              </h3>
            </div>
          </motion.div>

          {/* Right column: first feature card tall + second feature card */}
          <div className="flex flex-col gap-6">
            {CONTENT.business.features.slice(0, 2).map((feature, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={index}
                  data-testid={`feature-card-${index}`}
                  className="bg-card p-7 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow flex-1 flex items-start gap-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom row: remaining 2 feature cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {CONTENT.business.features.slice(2).map((feature, index) => {
            const Icon = icons[index + 2];
            return (
              <motion.div
                key={index + 2}
                data-testid={`feature-card-${index + 2}`}
                className="bg-card p-7 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow flex items-start gap-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
