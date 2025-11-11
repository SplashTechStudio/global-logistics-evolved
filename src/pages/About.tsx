import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Award, TrendingUp } from "lucide-react";
import fleetImage from "@/assets/fleet-vehicles.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-logistics-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About JuanChini</h1>
            <p className="text-xl text-gray-200">
              Your reliable transportation and logistics partner across Liberia and West Africa
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-up">
              <h2 className="text-4xl font-bold text-primary mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-4">
                JuanChini is a reliable transportation and logistics company offering car rental services, 
                truck hires, and flight charters across Liberia and beyond. We provide seamless, safe, 
                and efficient mobility solutions for individuals, businesses, and organizations.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our commitment to excellence and customer satisfaction has made us a trusted partner 
                for leading organizations across West Africa, including AfricaCDC, ECOWAS Commission, 
                and the United Nations.
              </p>
              <p className="text-lg text-muted-foreground">
                With a diverse fleet and experienced team, we handle everything from daily car rentals 
                to complex multi-modal freight operations, always delivering with professionalism and reliability.
              </p>
            </div>
            <div className="animate-fade-up rounded-lg overflow-hidden shadow-xl">
              <img
                src={fleetImage}
                alt="JuanChini Fleet"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="animate-fade-up">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Regional Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deep understanding of West African markets and logistics infrastructure
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-up" style={{ animationDelay: "100ms" }}>
              <CardHeader>
                <Award className="h-12 w-12 text-secondary mb-4" />
                <CardTitle>Proven Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Years of experience delivering secure logistics solutions and dependable service
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-up" style={{ animationDelay: "200ms" }}>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Comprehensive Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  From car rentals to flight charters, we cover all your transportation needs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
