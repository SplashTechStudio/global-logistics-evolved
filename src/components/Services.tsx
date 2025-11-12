import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Truck, Plane,Fuel, Flame, Ship, Package, FileText, Thermometer, Shield, AlertTriangle, Navigation as NavigationIcon, Briefcase, ShoppingCart, TrendingUp, Stethoscope } from "lucide-react";
import fleetImage from "@/assets/fleet-vehicles.jpg";
import flightImage from "@/assets/flight-charter.jpg";
import freightImage from "@/assets/freight-service.jpg";
import oilngas from "@/assets/oilngas.jpg";
import minning from "@/assets/minningoperations.jpg";
import carsImg from "@/assets/cars.jpg";
const services = [
  {
    icon: Fuel,
    title: "Oil and Gas",
    description: "Supply chain accross oil and gas",
    image: oilngas,
  },
  {
    icon: Flame,
    title: "Minning Operations",
    description: "Minning operations accross crude productions plants",
    image: minning,
  },
  {
    icon: Car,
    title: "Car Rental Services",
    description: "Economy to luxury vehicles for daily, long-term, or corporate hire with professional drivers.",
    image: carsImg,
  },
  {
    icon: Truck,
    title: "Truck Hire Services",
    description: "Flatbeds, tippers, cargo vans, and haulage trucks for logistics, construction, and bulk transport.",
    image: fleetImage,
  },
  {
    icon: Plane,
    title: "Flight Charter Services",
    description: "Private jets and air logistics for executive flights, cargo airlifts, and medical evacuations.",
    image: flightImage,
  },
  {
    icon: Ship,
    title: "Freight Services",
    description: "Air, sea, and road freight with customs clearance, multi-modal transportation, and route optimization.",
    image: freightImage,
  },
  {
    icon: Stethoscope,
    title: "Medical Equipment Services",
    description: "Transportation, installation, training programs, and ongoing maintenance support for medical equipment.",
    image: freightImage,
  },
  {
    icon: Thermometer,
    title: "Cold Chain Logistics",
    description: "Temperature-controlled logistics for pharmaceuticals, vaccines, and perishables with real-time monitoring.",
    image: freightImage,
  },
  {
    icon: Shield,
    title: "Security & Risk Management",
    description: "Escort services, facility security, risk assessment, and emergency response for logistics operations.",
    image: fleetImage,
  },
  {
    icon: AlertTriangle,
    title: "Dangerous Goods Handling",
    description: "Certified handling and transport of hazardous materials with IMO/IATA compliance and safety documentation.",
    image: freightImage,
  },
  {
    icon: NavigationIcon,
    title: "Last-Mile Delivery",
    description: "Efficient delivery solutions for urban and rural areas with real-time tracking and flexible scheduling.",
    image: fleetImage,
  },
  {
    icon: Briefcase,
    title: "Consultancy & Project Management",
    description: "Expert project management and logistics consultancy services for complex operations.",
    image: flightImage,
  },
  {
    icon: ShoppingCart,
    title: "Procurement & E-commerce",
    description: "Comprehensive procurement solutions and e-commerce logistics support.",
    image: freightImage,
  },
  {
    icon: TrendingUp,
    title: "Haulage & Distribution",
    description: "Long haul and last-mile distribution services with route optimization and fleet management.",
    image: fleetImage,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
