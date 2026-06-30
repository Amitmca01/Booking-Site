import React, { useState } from "react";
import { CONTENT } from "@/content";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Download } from "lucide-react";

export function Services() {
  const [activeTab, setActiveTab] = useState("hair");

  const renderServiceCards = (services: any[]) => {
    return services.map((service, index) => (
      <motion.div
        key={service.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className="flex items-center justify-between p-4 bg-background rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow group"
      >
        <div>
          <h4 className="text-lg font-serif font-bold text-foreground group-hover:text-primary transition-colors">
            {service.name}
          </h4>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{service.duration}</span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-xl font-bold text-primary">{service.price}</span>
        </div>
      </motion.div>
    ));
  };

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Curated treatments tailored to your unique needs. We use only premium, cruelty-free products.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="hair" onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-10 h-auto p-1.5 bg-muted rounded-xl">
              <TabsTrigger value="hair" className="text-base py-3 rounded-lg data-[state=active]:bg-background data-[state=active]:text-primary font-medium data-[state=active]:shadow-sm">
                Hair Services
              </TabsTrigger>
              <TabsTrigger value="skin" className="text-base py-3 rounded-lg data-[state=active]:bg-background data-[state=active]:text-primary font-medium data-[state=active]:shadow-sm">
                Skin & Facial
              </TabsTrigger>
              <TabsTrigger value="wellness" className="text-base py-3 rounded-lg data-[state=active]:bg-background data-[state=active]:text-primary font-medium data-[state=active]:shadow-sm">
                Wellness
              </TabsTrigger>
            </TabsList>
            
            <div className="bg-card p-6 md:p-8 rounded-2xl shadow-sm border border-border">
              <AnimatePresence mode="wait">
                <TabsContent key="hair" value="hair" className="mt-0 outline-none space-y-4">
                  {renderServiceCards(CONTENT.services.hair)}
                </TabsContent>
                <TabsContent key="skin" value="skin" className="mt-0 outline-none space-y-4">
                  {renderServiceCards(CONTENT.services.skin)}
                </TabsContent>
                <TabsContent key="wellness" value="wellness" className="mt-0 outline-none space-y-4">
                  {renderServiceCards(CONTENT.services.wellness)}
                </TabsContent>
              </AnimatePresence>
            </div>
          </Tabs>
          
          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors" data-testid="link-download-price">
              <Download className="w-4 h-4" />
              Download Full Price List
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
