import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setFormData({ name: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <SEO
        title="Contact Horizon Hospital - 24/7 Emergency Support & Appointments"
        description="Contact Horizon Hospital for appointments, emergency care, or inquiries. Available 24/7 for your healthcare needs. Call us or visit our location in Colombo, Sri Lanka."
        keywords="Contact Horizon Hospital, 24/7 Support, Emergency Number, hospital contact, book appointment, medical emergency, Colombo hospital"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <section className="relative h-80 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&h=400&fit=crop"
              alt="Contact Horizon Hospital for medical services and appointments"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 flex items-center">
              <div className="container mx-auto px-4">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contact Us</h1>
                <p className="text-xl text-white/90">We're here to help you 24/7</p>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Get In Touch</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Have a question or need medical assistance? Our dedicated team is available around the clock to address your concerns. 
                    Reach out to us through any of the channels below, and we'll respond promptly.
                  </p>

                  <div className="space-y-6">
                    <Card>
                      <CardContent className="flex items-start gap-4 p-6">
                        <div className="p-3 rounded-full bg-primary/10">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-foreground">Phone</h3>
                          <a href="tel:+94112345678" className="text-muted-foreground hover:text-primary transition-colors">
                            +94 11 234 5678
                          </a>
                          <br />
                          <a href="tel:+94112345679" className="text-muted-foreground hover:text-primary transition-colors">
                            +94 11 234 5679 (Emergency)
                          </a>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="flex items-start gap-4 p-6">
                        <div className="p-3 rounded-full bg-primary/10">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-foreground">Email</h3>
                          <a href="mailto:info@horizonhospital.lk" className="text-muted-foreground hover:text-primary transition-colors">
                            info@horizonhospital.lk
                          </a>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="flex items-start gap-4 p-6">
                        <div className="p-3 rounded-full bg-primary/10">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-foreground">Address</h3>
                          <p className="text-muted-foreground">
                            123 Medical Avenue<br />
                            Colombo 07<br />
                            Sri Lanka
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="flex items-start gap-4 p-6">
                        <div className="p-3 rounded-full bg-primary/10">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-foreground">Hours</h3>
                          <p className="text-muted-foreground">
                            Open 24/7<br />
                            Emergency Services Always Available
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <Card>
                    <CardContent className="p-8">
                      <h2 className="text-3xl font-bold mb-6 text-foreground">Send Us a Message</h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                            Your Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                            Phone Number *
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                          />
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                            Message *
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="How can we help you?"
                            rows={6}
                          />
                        </div>

                        <Button type="submit" className="w-full" size="lg">
                          Send Message
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467128415!2d79.861243!3d6.914722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259692f3f56bb%3A0x169d3f3c3e8b4f8e!2sColombo%2007%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Horizon Hospital Location - Colombo 07, Sri Lanka"
                />
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
