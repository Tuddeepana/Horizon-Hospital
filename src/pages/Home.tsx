import { Link } from "react-router-dom";
import { Users, Building2, Heart, Pill, Stethoscope, Home as HomeIcon, AlertCircle, PhoneCall, CheckCircle, CreditCard, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import SEO from "@/components/SEO";

import opdD from "../../public/img/opdD.webp";
import emergency from "../../public/img/emergency.webp"



const Home = () => {
  const hospitalSchema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": "Horizon Hospital",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Debarawewa Thissamaharama",
      "addressLocality": "Thissamaharama",
      "addressRegion": "Southern Province",
      "postalCode": "82600",
      "addressCountry": "LK"
    },
    "telephone": "+94 472 239 444",
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "Rs Rs - Rs Rsrs",
  };

  const stats = [
    { icon: Users, label: "Doctors", value: "25+" },
    { icon: Building2, label: "Medical Beds", value: "25+" },
    { icon: Heart, label: "Happy Patients", value: "420+" },
    { icon: Pill, label: "Prescriptions", value: "300K+" },
  ];

  const services = [
    {
      icon: Stethoscope,
      title: "OPD Doctor",
      description: "Comprehensive outpatient consultation with experienced physicians for all your healthcare needs.",
      image: opdD,
    },
    {
      icon: HomeIcon,
      title: "Home Visit",
      description: "Professional medical care delivered to your doorstep with personalized attention.",
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=400&h=300&fit=crop",
    },
    {
      icon: AlertCircle,
      title: "Emergency Care",
      description: "24/7 emergency medical services with rapid response and advanced life support.",
      image: emergency,
    },
    {
      icon: Pill,
      title: "Pharmacy",
      description: "Fully stocked pharmacy with qualified pharmacists to dispense your medications.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=300&fit=crop",
    },
  ];

  const features = [
    {
      icon: PhoneCall,
      title: "24/7 Support Team",
      description: "Round-the-clock assistance for all your medical queries and emergencies",
    },
    {
      icon: CheckCircle,
      title: "SMS Appointment Alerts",
      description: "Instant SMS notifications for appointment confirmations and reminders",
    },
    {
      icon: CreditCard,
      title: "Easy Payment Options",
      description: "Multiple payment methods including insurance, cards, and installment plans",
    },
    {
      icon: UserCheck,
      title: "Personalized Care",
      description: "Tailored consultant matching based on your specific health requirements",
    },
  ];

  return (
    <>
      <SEO
        title="Horizon Hospital - Quality Healthcare Services | 24/7 Medical Care"
        description="Horizon Hospital provides comprehensive healthcare services with 25+ experienced doctors, modern facilities, and 24/7 emergency care in Sri Lanka."
        keywords="hospital Sri Lanka, healthcare services, emergency care, medical consultation, doctors, pharmacy, OPD, home visit"
        schema={hospitalSchema}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroCarousel />

          <section className="py-16 bg-card">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">About Horizon Hospital</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Horizon Hospital, we are committed to providing exceptional healthcare services with a focus on patient comfort and well-being. 
                  With over two decades of experience, our team of skilled medical professionals utilizes state-of-the-art technology to deliver 
                  accurate diagnoses and effective treatments. We believe in creating a healing environment where every patient receives personalized 
                  care and attention, ensuring the best possible health outcomes for our community.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6 pb-6">
                      <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                      <p className="text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Services</h2>
                <p className="text-lg text-muted-foreground">Comprehensive healthcare solutions for you and your family</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {services.map((service, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <CardContent className="p-6">
                      <service.icon className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button asChild size="lg" className="font-semibold">
                  <Link to="/services">View All Services</Link>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-16 bg-accent">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Choose Us</h2>
                <p className="text-lg text-muted-foreground">Experience healthcare excellence with patient-centered services</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-8 pb-8">
                      <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                        <feature.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Make Your Appointment Today</h2>
              <p className="text-xl mb-8 opacity-90">Get in touch with our team for personalized healthcare services</p>
              <Button asChild size="lg" variant="secondary" className="font-semibold">
                <Link to="/contact">Contact Us Now</Link>
              </Button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;
