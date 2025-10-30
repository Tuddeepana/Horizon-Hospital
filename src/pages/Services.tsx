import { Stethoscope, Home, Activity, Pill, Microscope } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

import opdD from "../../public/img/opdD.webp";
import emergency from "../../public/img/emergency.webp"
import lab from   "../../public/img/LabM.webp"

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "OPD Consultation",
      description: "Our Outpatient Department provides comprehensive medical consultations with experienced specialists across multiple disciplines. Whether you need a routine check-up or specialized medical advice, our doctors are here to help diagnose and treat various health conditions with the latest medical protocols.",
      image: opdD,
    },
    {
      icon: Home,
      title: "Home Visits",
      description: "For patients who find it difficult to visit the hospital, we offer professional home visit services. Our qualified medical staff will visit your home to provide medical consultations, routine check-ups, medication management, and basic medical procedures in the comfort of your own space.",
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&h=400&fit=crop",
    },
    {
      icon: Microscope,
      title: "Laboratory Services",
      description: "Our state-of-the-art laboratory is equipped with advanced diagnostic equipment to perform a wide range of tests including blood work, imaging, pathology, and specialized diagnostic procedures. We ensure accurate results with quick turnaround times to facilitate timely treatment decisions.",
      image: lab,
    },
    {
      icon: Pill,
      title: "Pharmacy",
      description: "Our in-house pharmacy is fully stocked with a comprehensive range of medications and medical supplies. Our qualified pharmacists provide expert guidance on medication usage, potential interactions, and proper storage. We also offer home delivery services for your convenience.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop",
    },
    {
      icon: Activity,
      title: "Emergency Ward",
      description: "Available 24/7, our emergency department is staffed with experienced emergency physicians and nurses ready to handle any medical crisis. Equipped with advanced life support systems and rapid diagnostic facilities, we provide immediate care for all emergency medical situations with a focus on patient stabilization and swift treatment.",
      image: emergency,
    },
  ];

  return (
    <>
      <SEO
        title="Medical Services - Horizon Hospital | OPD, Emergency, Laboratory & Pharmacy"
        description="Comprehensive healthcare services including OPD consultation, home visits, 24/7 emergency care, laboratory services, and fully-stocked pharmacy at Horizon Hospital Sri Lanka."
        keywords="Hospital Services, OPD, Home Visit, Pharmacy Sri Lanka, Horizon Hospital, emergency care, laboratory services, medical consultation"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <section className="relative h-80 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&h=400&fit=crop"
              alt="Hospital Services - Modern medical facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 flex items-center">
              <div className="container mx-auto px-4">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Services</h1>
                <p className="text-xl text-white/90">Comprehensive healthcare solutions tailored to your needs</p>
              </div>
            </div>
          </section>

          <article className="py-16">
            <div className="container mx-auto px-4">
              <div className="space-y-12">
                {services.map((service, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className={`grid md:grid-cols-2 gap-6 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                      <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                        <img
                          src={service.image}
                          alt={`${service.title} - Healthcare service at Horizon Hospital`}
                          className="w-full h-80 object-cover"
                          loading="lazy"
                        />
                      </div>
                      <CardContent className="flex flex-col justify-center p-8">
                        <div className="inline-flex p-4 rounded-full bg-primary/10 w-fit mb-4">
                          <service.icon className="h-10 w-10 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4 text-foreground">{service.title}</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </article>

          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Medical Assistance?</h2>
              <p className="text-xl mb-8 opacity-90">Contact us today to learn more about our services or book an appointment</p>
              <a href="/contact" className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors">
                Get in Touch
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Services;
