import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send } from "lucide-react";
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
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-logistics-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200">
              Get in touch with us for all your logistics and transportation needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            <Card className="animate-fade-up">
              <CardHeader>
                <div className="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  <a href="mailto:info@juachinigroup.com" className="text-primary hover:underline">
                    info@juachinigroup.com
                  </a>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="animate-fade-up" style={{ animationDelay: "100ms" }}>
              <CardHeader>
                <div className="bg-secondary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Liberia, West Africa
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="animate-fade-up" style={{ animationDelay: "200ms" }}>
              <CardHeader>
                <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Available 24/7 for urgent logistics needs
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <Card className="animate-fade-up">
              <CardHeader>
                <CardTitle className="text-3xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Your Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your logistics needs..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
