import React from "react";
import { CONTENT } from "@/content";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Location() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Find Us
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Visit our sanctuary in the heart of San Francisco.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full min-h-[400px] rounded-2xl overflow-hidden border border-border shadow-sm bg-muted relative"
          >
            <iframe
              src={CONTENT.business.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", inset: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center space-y-10"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl mb-2 text-foreground">Address</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{CONTENT.business.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <h3 className="font-serif font-bold text-xl mb-3 text-foreground">Hours</h3>
                  <div className="space-y-2">
                    {CONTENT.business.hours.map((schedule, idx) => (
                      <div key={idx} className="flex justify-between items-center text-muted-foreground pb-2 border-b border-border/50 last:border-0">
                        <span>{schedule.day}</span>
                        <span className="font-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl mb-2 text-foreground">Contact</h3>
                  <p className="text-muted-foreground text-lg mb-1">{CONTENT.business.phone}</p>
                  <p className="text-muted-foreground">{CONTENT.business.email}</p>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="w-full md:w-auto self-start text-base" data-testid="button-directions">
              <a href={`https://maps.google.com/?q=${encodeURIComponent(CONTENT.business.address)}`} target="_blank" rel="noopener noreferrer">
                Get Directions
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
