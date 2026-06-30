import React from "react";
import { CONTENT } from "@/content";

export function Footer() {
  return (
    <footer className="bg-black text-white/80 py-16 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <a href="#" className="inline-block mb-4">
              <span className="font-serif text-3xl font-bold text-white tracking-tight">
                Lumière
              </span>
            </a>
            <p className="text-sm mb-6 text-white/60">
              {CONTENT.business.tagline}
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href={`tel:${CONTENT.business.phone.replace(/[^0-9]/g, "")}`} className="hover:text-white transition-colors">
                  {CONTENT.business.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTENT.business.email}`} className="hover:text-white transition-colors">
                  {CONTENT.business.email}
                </a>
              </li>
              <li className="leading-relaxed">
                {CONTENT.business.address}
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Hours</h4>
            <ul className="space-y-4 text-sm">
              {CONTENT.business.hours.map((schedule, idx) => (
                <li key={idx} className="flex justify-between">
                  <span>{schedule.day}</span>
                  <span className="text-white">{schedule.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} {CONTENT.business.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
