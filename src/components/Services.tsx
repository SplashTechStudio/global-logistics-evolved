import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Truck, Plane, Ship } from "lucide-react";
import fleetImage from "@/assets/fleet-vehicles.jpg";
import flightImage from "@/assets/flight-charter.jpg";
import freightImage from "@/assets/freight-service.jpg";

const services = [
  {
    icon: Car,
    title: "Car Rental",
    description: "Economy to luxury vehicles for daily, long-term, or corporate hire with professional drivers.",
    image: fleetImage,
  },
  {
    icon: Truck,
    title: "Truck Hire",
    description: "Flatbeds, tippers, cargo vans, and haulage trucks for logistics, construction, and bulk transport.",
    image: fleetImage,
  },
  {
    icon: Plane,
    title: "Flight Charter",
    description: "Private jets and air logistics for executive flights, cargo airlifts, and medical evacuations.",
    image: flightImage,
  },
  {
    icon: Ship,
    title: "Freight Services",
    description: "Air, sea, and road freight with customs clearance, multi-modal transportation, and route optimization.",
    image: freightImage,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-logistics-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive logistics solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-secondary w-12 h-12 rounded-full flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
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
  );
};

export default Services;
