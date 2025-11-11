import { Zap, Shield, Workflow, Users } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Swift",
    description: "Fast and efficient services to meet your urgent logistics needs",
    color: "text-secondary",
  },
  {
    icon: Shield,
    title: "Secure",
    description: "Reliable and safe handling of your valuable cargo and equipment",
    color: "text-primary",
  },
  {
    icon: Workflow,
    title: "Seamless",
    description: "Smooth operations with minimal disruption to your business",
    color: "text-accent",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals dedicated to providing exceptional service",
    color: "text-logistics-teal",
  },
];

const Values = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Why Choose JuanChini?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine local expertise with international standards to deliver exceptional logistics solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="text-center group animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="bg-muted w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`h-10 w-10 ${value.color}`} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
