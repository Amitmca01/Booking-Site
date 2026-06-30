import React from "react";
import { CONTENT } from "@/content";

export function TrustBar() {
  return (
    <div className="bg-muted py-8 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center divide-y md:divide-y-0 md:divide-x divide-border">
          {CONTENT.business.stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center px-8 py-4 md:py-0 w-full md:w-auto">
              <span className="text-3xl md:text-4xl font-serif font-bold text-primary mb-1">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
