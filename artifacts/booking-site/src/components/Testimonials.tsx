import React from "react";
import { CONTENT } from "@/content";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import testimonial1 from "@assets/img_(5)_1782839522175.jpeg";
import testimonial2 from "../assets/testimonial-2.png";
import testimonial3 from "../assets/testimonial-3.png";

const avatarImages = [testimonial1, testimonial2, testimonial3];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-muted/50 border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Client Love
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Don't just take our word for it. Here's what our community has to say.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {CONTENT.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              data-testid={`testimonial-card-${testimonial.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl border border-border shadow-sm flex flex-col h-full relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />

              <div className="flex gap-1 mb-6 text-yellow-500">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <blockquote className="text-foreground leading-relaxed flex-grow mb-8 font-medium">
                "{testimonial.text}"
              </blockquote>

              <div className="flex items-center gap-4 mt-auto">
                <Avatar className="h-14 w-14 border-2 border-primary/20 shadow-sm">
                  <AvatarImage
                    src={avatarImages[index]}
                    alt={testimonial.name}
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-primary text-primary-foreground font-serif text-lg">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-serif font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">Verified Client</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
