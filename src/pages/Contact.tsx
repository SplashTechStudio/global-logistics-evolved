import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, Clock, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Vibrant Design */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-logistics-orange to-secondary/90">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
              Get In Touch
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white">
              Let's Start Your
              <span className="block mt-2">Logistics Journey</span>
            </h1>
            <p className="text-2xl text-white/90 max-w-3xl mx-auto">
              We're here 24/7 to answer your questions and provide solutions
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L50 110C100 100 200 80 300 70C400 60 500 60 600 65C700 70 800 80 900 85C1000 90 1100 90 1150 90L1200 90V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Contact Cards with Creative Design */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            {[
              { 
                icon: Mail, 
                title: "Email Us", 
                content: "info@juachinigroup.com", 
                description: "Quick responses within 24 hours",
                href: "mailto:info@juachinigroup.com",
                gradient: "from-secondary to-logistics-orange"
              },
              { 
                icon: MapPin, 
                title: "Visit Us", 
                content: "Liberia, West Africa", 
                description: "Serving the entire region",
                gradient: "from-primary to-accent"
              },
              { 
                icon: Clock, 
                title: "Available", 
                content: "24/7 Support", 
                description: "We're always here for urgent needs",
                gradient: "from-accent to-logistics-teal"
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={item.title}
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-none overflow-hidden animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="text-center relative pb-4">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
                    <div className={`relative mx-auto mb-4 bg-gradient-to-br ${item.gradient} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-2">
                    {item.href ? (
                      <a href={item.href} className="text-secondary hover:underline font-semibold text-lg block">
                        {item.content}
                      </a>
                    ) : (
                      <p className="font-semibold text-lg text-foreground">{item.content}</p>
                    )}
                    <CardDescription className="text-sm">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form with Modern Design */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Left Side - Message */}
              <div className="lg:col-span-2 space-y-6 animate-slide-in-left">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-primary">
                    Ready to Move Forward?
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Fill out the form and our logistics experts will get back to you with a tailored solution for your needs.
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <MessageSquare className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Quick Response</h3>
                      <p className="text-sm text-muted-foreground">We typically respond within 2 hours during business hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Phone className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Urgent Matters?</h3>
                      <p className="text-sm text-muted-foreground">Call us directly for immediate assistance with your logistics needs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="lg:col-span-3 animate-slide-in-right">
                <Card className="border-none shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-3xl">Send Us a Message</CardTitle>
                    <CardDescription className="text-base">
                      We'll craft a custom solution for your logistics needs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-semibold text-foreground flex items-center gap-2">
                            Your Name <span className="text-secondary">*</span>
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            className="h-12 border-2 focus:border-secondary transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-semibold text-foreground flex items-center gap-2">
                            Your Email <span className="text-secondary">*</span>
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                            className="h-12 border-2 focus:border-secondary transition-colors"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-semibold text-foreground flex items-center gap-2">
                          Subject <span className="text-secondary">*</span>
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          required
                          className="h-12 border-2 focus:border-secondary transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-semibold text-foreground flex items-center gap-2">
                          Message <span className="text-secondary">*</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your logistics needs..."
                          className="min-h-[150px] border-2 focus:border-secondary transition-colors resize-none"
                          required
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full h-14 text-lg">
                        Send Message <Send className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-gradient-to-r from-primary via-secondary to-logistics-orange">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white animate-fade-up">
            <h3 className="text-3xl font-bold mb-4">Trusted by Leading Organizations</h3>
            <p className="text-lg text-white/90">
              Join AfricaCDC, ECOWAS Commission, United Nations, and hundreds of businesses who trust JuanChini
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
