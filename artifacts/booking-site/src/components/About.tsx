import React from "react";
import { CONTENT } from "@/content";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Droplets, CalendarCheck } from "lucide-react";

export function About() {
  const icons = [Sparkles, ShieldCheck, Droplets, CalendarCheck];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Clients Choose {CONTENT.business.name.split(' ')[0]}
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We believe that self-care is not a luxury, but a necessity. Our studio is designed to be your sanctuary—a place where you can unwind, recharge, and leave feeling more confident than ever.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CONTENT.business.features.map((feature, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div 
                key={index}
                className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
