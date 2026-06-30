import React from "react";
import { CONTENT } from "@/content";
import { motion } from "framer-motion";

export function Gallery() {
  // Using pure CSS gradients with branding text since no external images are allowed
  const galleryItems = [
    { id: 1, bg: "from-[#FDFBF7] to-[#F1E9DE]", title: "Interior" },
    { id: 2, bg: "from-[#F1E9DE] to-[#E9D5C9]", title: "Styling" },
    { id: 3, bg: "from-[#E9D5C9] to-[#D5AD9D]", title: "Products" },
    { id: 4, bg: "from-[#D5AD9D] to-[#E9D5C9]", title: "Relaxation" },
    { id: 5, bg: "from-[#E9D5C9] to-[#F1E9DE]", title: "Facial Care" },
    { id: 6, bg: "from-[#F1E9DE] to-[#FDFBF7]", title: "Our Team" },
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Inside {CONTENT.business.name.split(' ')[0]}
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            A glimpse into our sanctuary.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="aspect-square relative rounded-xl overflow-hidden group border border-border shadow-sm cursor-pointer"
            >
              {/* Fake image using gradient block */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bg} group-hover:scale-105 transition-transform duration-700 ease-out`} />
              
              {/* Overlay with brand name pattern softly in background */}
              <div className="absolute inset-0 opacity-5 flex items-center justify-center overflow-hidden">
                <p className="font-serif font-bold text-8xl text-primary transform -rotate-12 pointer-events-none">
                  Lumière
                </p>
              </div>
              
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-background/90 backdrop-blur-sm p-4 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif font-bold text-primary text-xl">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{CONTENT.business.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
