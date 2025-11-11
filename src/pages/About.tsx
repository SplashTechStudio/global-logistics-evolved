import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Award, TrendingUp, Users, Target, Zap } from "lucide-react";
import fleetImage from "@/assets/fleet-vehicles.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Parallax Effect */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/90 to-logistics-orange">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
              Driving Excellence in
              <span className="block mt-2 text-white/90">West African Logistics</span>
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed">
              Your reliable transportation and logistics partner across Liberia and West Africa
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L50 110C100 100 200 80 300 70C400 60 500 60 600 65C700 70 800 80 900 85C1000 90 1100 90 1150 90L1200 90V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Mission Statement with Visual Impact */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-in-left">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl" />
                  <img
                    src={fleetImage}
                    alt="JuanChini Fleet"
                    className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-6 animate-slide-in-right">
                <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
                  Who We Are
                </div>
                <h2 className="text-5xl font-bold text-primary leading-tight">
                  Trusted By Leaders, 
                  <span className="text-secondary block mt-2">Built For Excellence</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  JuanChini is a reliable transportation and logistics company offering car rental services, 
                  truck hires, and flight charters across Liberia and beyond. We provide seamless, safe, 
                  and efficient mobility solutions for individuals, businesses, and organizations.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our commitment to excellence has made us the trusted partner for AfricaCDC, ECOWAS Commission, 
                  United Nations, and countless businesses across West Africa.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="w-px bg-border" />
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary">500+</div>
                    <div className="text-sm text-muted-foreground">Vehicles</div>
                  </div>
                  <div className="w-px bg-border" />
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary">1000+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values with Interactive Cards */}
      <section className="py-20 bg-gradient-to-br from-logistics-light to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-5xl font-bold text-primary mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our values drive every decision, every delivery, every partnership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Globe, title: "Regional Expertise", desc: "Deep understanding of West African markets and logistics infrastructure", color: "from-blue-500 to-primary" },
              { icon: Award, title: "Proven Reliability", desc: "Years of experience delivering secure logistics solutions and dependable service", color: "from-secondary to-logistics-orange" },
              { icon: TrendingUp, title: "Comprehensive Solutions", desc: "From car rentals to flight charters, we cover all your transportation needs", color: "from-accent to-logistics-teal" },
              { icon: Users, title: "Expert Team", desc: "Skilled professionals dedicated to providing exceptional service", color: "from-logistics-teal to-accent" },
              { icon: Target, title: "Customer Focus", desc: "Your needs drive our innovation and service excellence", color: "from-logistics-orange to-secondary" },
              { icon: Zap, title: "Swift Response", desc: "24/7 availability for urgent logistics and transportation needs", color: "from-primary to-blue-500" },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={value.title}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-fade-up border-none"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="relative pb-0">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${value.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
                    <div className="relative bg-white rounded-2xl w-16 h-16 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-secondary" />
                    </div>
                    <CardTitle className="text-2xl group-hover:text-secondary transition-colors">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-logistics-orange relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white animate-fade-up">
            <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Logistics?</h2>
            <p className="text-xl mb-8 text-white/90">
              Join leading organizations across West Africa who trust JuanChini for their transportation needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-secondary rounded-lg font-semibold text-lg hover:bg-white/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                Explore Our Services
              </a>
              <a href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-secondary transition-all duration-300">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
