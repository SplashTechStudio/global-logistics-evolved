import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Truck, Plane, Ship, Package, FileText, Route, Globe } from "lucide-react";
import fleetImage from "@/assets/fleet-vehicles.jpg";
import flightImage from "@/assets/flight-charter.jpg";
import freightImage from "@/assets/freight-service.jpg";

const mainServices = [
  {
    icon: Car,
    title: "Car Rental Services",
    description: "Our car rental services feature a wide range of vehicles from economy cars to luxury sedans, available for daily, long-term, or corporate hire. Each vehicle is well-maintained, insured, and operated by professional drivers to ensure comfort and safety.",
    image: fleetImage,
    features: [
      "Economy to luxury vehicles",
      "Daily, weekly, and monthly rentals",
      "Professional drivers available",
      "Well-maintained and insured fleet",
      "Corporate packages available"
    ]
  },
  {
    icon: Truck,
    title: "Truck Hire Services",
    description: "Our truck hire services cater to clients requiring bulk and heavy-duty transport. We provide flatbeds, tippers, cargo vans, and haulage trucks for logistics, construction, and industrial operations, all supported by experienced drivers and timely delivery management.",
    image: fleetImage,
    features: [
      "Flatbed trucks",
      "Tipper trucks",
      "Cargo vans",
      "Heavy haulage trucks",
      "Experienced drivers"
    ]
  },
  {
    icon: Plane,
    title: "Flight Charter Services",
    description: "For clients seeking speed, privacy, and convenience, our flight charter services offer private jet and air logistics options through certified aviation partners. We handle executive flights, cargo airlifts, and medical evacuations with flexibility and professionalism.",
    image: flightImage,
    features: [
      "Private jet charters",
      "Executive flights",
      "Cargo airlifts",
      "Medical evacuations",
      "Certified aviation partners"
    ]
  },
  {
    icon: Ship,
    title: "Freight Services",
    description: "Comprehensive freight solutions covering air, sea, and road transportation. Our multi-modal approach ensures your cargo reaches its destination efficiently, with full customs clearance support and documentation handling.",
    image: freightImage,
    features: [
      "Air freight",
      "Sea freight",
      "Road freight",
      "Multi-modal transportation",
      "Real-time tracking"
    ]
  }
];

const additionalServices = [
  {
    icon: FileText,
    title: "Customs Clearance",
    description: "Expert customs clearance services to streamline your import and export operations."
  },
  {
    icon: Package,
    title: "Warehousing & Storage",
    description: "Secure storage facilities for your goods and equipment."
  },
  {
    icon: Route,
    title: "Route Optimization",
    description: "Strategic route planning for maximum efficiency and cost savings."
  },
  {
    icon: Globe,
    title: "Project Consultancy",
    description: "Professional logistics consultancy and project management services."
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-logistics-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200">
              Comprehensive logistics solutions tailored to meet your unique transportation needs
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`animate-fade-up ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-primary">{service.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`animate-fade-up rounded-lg overflow-hidden shadow-xl ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-muted-foreground">
              Supporting services to complement your logistics operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="text-center hover:shadow-xl transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="mx-auto mb-4 bg-muted w-16 h-16 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
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

      <Footer />
    </div>
  );
};

export default ServicesPage;
