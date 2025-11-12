import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Truck, Plane, Ship, Package, FileText, Route, Globe, Check, Thermometer, Shield, AlertTriangle, Navigation as NavigationIcon, Briefcase, ShoppingCart, TrendingUp, Stethoscope } from "lucide-react";
import fleetImage from "@/assets/fleet-vehicles.jpg";
import flightImage from "@/assets/flight-charter.jpg";
import freightImage from "@/assets/freight-service.jpg";

const mainServices = [
  {
    icon: Car,
    title: "Car Rental Services",
    tagline: "Drive in Comfort & Style",
    description: "Our car rental services feature a wide range of vehicles from economy cars to luxury sedans, available for daily, long-term, or corporate hire.",
    image: fleetImage,
    features: [
      "Economy to luxury vehicles",
      "Daily, weekly, and monthly rentals",
      "Professional drivers available",
      "Well-maintained and insured fleet",
      "Corporate packages available"
    ],
    gradient: "from-secondary to-logistics-orange"
  },
  {
    icon: Truck,
    title: "Truck Hire Services",
    tagline: "Heavy-Duty Solutions",
    description: "From flatbeds to tippers, cargo vans to heavy haulage trucks - we provide the muscle for your logistics needs.",
    image: fleetImage,
    features: [
      "Flatbed trucks",
      "Tipper trucks",
      "Cargo vans",
      "Heavy haulage trucks",
      "Experienced drivers"
    ],
    gradient: "from-primary to-accent"
  },
  {
    icon: Plane,
    title: "Flight Charter Services",
    tagline: "Speed & Privacy Combined",
    description: "Private jet and air logistics options through certified aviation partners for executive flights, cargo airlifts, and medical evacuations.",
    image: flightImage,
    features: [
      "Private jet charters",
      "Executive flights",
      "Cargo airlifts",
      "Medical evacuations",
      "Certified aviation partners"
    ],
    gradient: "from-accent to-logistics-teal"
  },
  {
    icon: Ship,
    title: "Freight Services",
    tagline: "Multi-Modal Excellence",
    description: "Comprehensive freight solutions covering air, sea, and road transportation with full customs clearance support.",
    image: freightImage,
    features: [
      "Air freight",
      "Sea freight",
      "Road freight",
      "Multi-modal transportation",
      "Real-time tracking"
    ],
    gradient: "from-logistics-teal to-primary"
  }
];

const additionalServices = [
  { icon: Stethoscope, title: "Medical Equipment Services", description: "Transportation, installation, training, and maintenance support for medical equipment" },
  { icon: Thermometer, title: "Cold Chain Logistics", description: "Temperature-controlled logistics for pharmaceuticals, vaccines, and perishables" },
  { icon: Shield, title: "Security & Risk Management", description: "Escort services, facility security, risk assessment, and emergency response" },
  { icon: AlertTriangle, title: "Dangerous Goods Handling", description: "Certified handling and transport of hazardous materials with IMO/IATA compliance" },
  { icon: NavigationIcon, title: "Last-Mile Delivery", description: "Efficient delivery solutions for urban and rural areas with real-time tracking" },
  { icon: Briefcase, title: "Consultancy & Project Management", description: "Expert project management and logistics consultancy services" },
  { icon: ShoppingCart, title: "Procurement & E-commerce", description: "Comprehensive procurement solutions and e-commerce logistics support" },
  { icon: TrendingUp, title: "Haulage & Distribution", description: "Long haul and last-mile distribution with route optimization" },
  { icon: FileText, title: "Customs Clearance", description: "Expert customs clearance services to streamline your operations" },
  { icon: Package, title: "Warehousing & Storage", description: "Secure storage facilities for your goods and equipment" },
  { icon: Route, title: "Route Optimization", description: "Strategic route planning for maximum efficiency" },
  { icon: Globe, title: "Project Consultancy", description: "Professional logistics consultancy services" }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Dynamic Design */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-logistics-orange via-secondary to-secondary/90">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
              Comprehensive Solutions
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
              Services That Move
              <span className="block mt-2">Your Business Forward</span>
            </h1>
            <p className="text-2xl text-white/90 max-w-3xl mx-auto">
              Tailored logistics solutions for every transportation challenge
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L50 110C100 100 200 80 300 70C400 60 500 60 600 65C700 70 800 80 900 85C1000 90 1100 90 1150 90L1200 90V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Main Services with Creative Layouts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.title}
                  className="relative"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}>
                    {/* Content */}
                    <div className={`space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"} animate-fade-up`}>
                      <div className={`inline-block p-4 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-xl`}>
                        <Icon className="h-12 w-12 text-white" />
                      </div>
                      <div>
                        <div className="text-secondary font-semibold text-lg mb-2">{service.tagline}</div>
                        <h2 className="text-5xl font-bold text-primary mb-4">{service.title}</h2>
                      </div>
                      <p className="text-xl text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-3 pt-4">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3 group">
                            <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                              <Check className="w-4 h-4 text-secondary group-hover:text-white" />
                            </div>
                            <span className="text-foreground text-lg group-hover:text-secondary transition-colors">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-6">
                        <Button size="lg" asChild>
                          <a href="/contact">Request Quote</a>
                        </Button>
                      </div>
                    </div>

                    {/* Image */}
                    <div className={`${isEven ? "lg:order-2" : "lg:order-1"} animate-fade-up`}>
                      <div className="relative group">
                        <div className={`absolute -inset-4 bg-gradient-to-br ${service.gradient} opacity-20 rounded-3xl blur-2xl group-hover:opacity-30 transition-opacity`} />
                        <img
                          src={service.image}
                          alt={service.title}
                          className="relative rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 bg-gradient-to-br from-logistics-light via-white to-logistics-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-5xl font-bold text-primary mb-4">
              Value-Added Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Supporting services to complement your logistics operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-none bg-white overflow-hidden animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="text-center relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-colors" />
                    <div className="relative mx-auto mb-4 bg-gradient-to-br from-secondary to-logistics-orange w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-secondary transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center relative">
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary via-logistics-orange to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white animate-fade-up">
            <h2 className="text-5xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-xl mb-8 text-white/90">
              We specialize in creating tailored logistics packages for unique requirements
            </p>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white hover:text-secondary">
              <a href="/contact">Discuss Your Needs</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
