export const CONTENT = {
  business: {
    name: "Lumière Beauty Studio",
    tagline: "Where Beauty Meets Expertise",
    phone: "(555) 820-4100",
    email: "hello@lumierebeauty.com",
    address: "248 Rosewood Avenue, Suite 12, San Francisco, CA 94110",
    mapEmbedUrl: "https://maps.google.com/maps?q=San+Francisco,CA&output=embed",
    social: { instagram: "#", facebook: "#", whatsapp: "#", google: "#" },
    hours: [
      { day: "Monday–Friday", hours: "9:00 AM – 7:00 PM" },
      { day: "Saturday", hours: "9:00 AM – 6:00 PM" },
      { day: "Sunday", hours: "10:00 AM – 5:00 PM" },
    ],
    stats: [
      { label: "Years in Business", value: "12+" },
      { label: "Happy Clients", value: "8,500+" },
      { label: "Award", value: "SF Best Salon 2024" },
    ],
    trustBadges: ["Licensed & Insured", "5-Star Rated", "Premium Products Only"],
    features: [
      { title: "Expert Stylists", description: "Each stylist has 5+ years of advanced training" },
      { title: "Clean & Safe", description: "Hospital-grade sterilization after every service" },
      { title: "Premium Products", description: "Only top-tier, cruelty-free brands" },
      { title: "Easy Booking", description: "Online scheduling, instant confirmation" },
    ],
  },
  hero: {
    headline: "Your Best Self, Every Visit",
    subheadline: "Expert hair, skin & wellness services in the heart of San Francisco",
    primaryCta: "Book My Appointment",
    secondaryCta: "Call Us Now",
  },
  closingCta: {
    headline: "Ready to Feel Amazing?",
    subtext: "Join thousands of clients who trust Lumière for their beauty needs.",
  },
  services: {
    hair: [
      { id: "hair-cut", name: "Haircut & Style", price: "$65", duration: "60 min" },
      { id: "hair-color", name: "Color Treatment", price: "$120", duration: "90 min" },
      { id: "hair-balayage", name: "Balayage", price: "$175", duration: "150 min" },
      { id: "hair-keratin", name: "Keratin Treatment", price: "$220", duration: "120 min" },
      { id: "hair-blowout", name: "Blowout", price: "$45", duration: "45 min" },
    ],
    skin: [
      { id: "skin-classic", name: "Classic Facial", price: "$85", duration: "60 min" },
      { id: "skin-hydrafacial", name: "HydraFacial", price: "$145", duration: "75 min" },
      { id: "skin-peel", name: "Chemical Peel", price: "$110", duration: "60 min" },
      { id: "skin-microderm", name: "Microdermabrasion", price: "$95", duration: "50 min" },
    ],
    wellness: [
      { id: "wax-leg", name: "Full Leg Wax", price: "$60", duration: "45 min" },
      { id: "wax-brazilian", name: "Brazilian Wax", price: "$65", duration: "30 min" },
      { id: "thread-eyebrow", name: "Eyebrow Threading", price: "$18", duration: "15 min" },
      { id: "wax-lip-chin", name: "Lip & Chin Wax", price: "$22", duration: "15 min" },
    ]
  },
  practitioners: ["Alex Johnson", "Maria Santos", "Chen Li", "Priya Patel"],
  testimonials: [
    {
      id: 1,
      name: "Sarah M.",
      rating: 5,
      text: "Absolute perfection every single time. Maria transformed my hair and I couldn't be happier with the results.",
      initials: "SM"
    },
    {
      id: 2,
      name: "James T.",
      rating: 5,
      text: "I was nervous trying a new salon but the team made me feel right at home. My HydraFacial was incredible.",
      initials: "JT"
    },
    {
      id: 3,
      name: "Olivia R.",
      rating: 5,
      text: "The best threading I've ever had — quick, precise, and painless. Will never go anywhere else.",
      initials: "OR"
    }
  ],
  faqs: [
    {
      id: "faq-1",
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, cash, Venmo, and Apple Pay."
    },
    {
      id: "faq-2",
      question: "What is your cancellation policy?",
      answer: "Cancel at least 24 hours in advance to avoid a 50% cancellation fee."
    },
    {
      id: "faq-3",
      question: "Do you accept walk-ins?",
      answer: "We prioritize appointments but welcome walk-ins based on availability. Call ahead to check."
    },
    {
      id: "faq-4",
      question: "Where do I park?",
      answer: "Free 2-hour street parking on Rosewood Ave. Paid garage 1 block away on Mission St."
    },
    {
      id: "faq-5",
      question: "Are your products safe for sensitive skin?",
      answer: "Yes — all products are hypoallergenic and cruelty-free. Tell us about sensitivities at booking."
    }
  ]
};