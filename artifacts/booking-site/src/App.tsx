import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Booking } from "@/components/Booking";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { FAQ } from "@/components/FAQ";
import { Location } from "@/components/Location";
import { ClosingCta } from "@/components/ClosingCta";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground font-sans">
          <Header />
          <main>
            <Hero />
            <TrustBar />
            <About />
            <Services />
            <Booking />
            <Testimonials />
            <Gallery />
            <FAQ />
            <Location />
            <ClosingCta />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
