import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import heroImage from "@/assets/hero-logistics.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="JuanChini Logistics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-logistics-navy/95 via-primary/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Swift, Secure, Seamless
            <span className="text-logistics-orange block mt-2">Logistics</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
            Your trusted partner for transportation and logistics solutions across West Africa and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="default" className="text-lg px-8" asChild>
              <NavLink to="/services">
                Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <NavLink to="/contact">Get a Quote</NavLink>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
