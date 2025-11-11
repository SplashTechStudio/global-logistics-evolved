import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Values from "@/components/Values";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Values />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;
