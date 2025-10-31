import { Stethoscope, Home, Activity, Pill, Microscope, Heart, AlertCircle } from "lucide-react";
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
      description: "Our Outpatient Department (OPD) provides comprehensive primary care and medical consultations with experienced physicians across multiple disciplines. Whether you need a routine check-up, illness management, or specialized medical advice, our doctors in Tissamaharama are here to help diagnose and treat various health conditions with the latest medical protocols.",
      image: opdD,
    },
    {
      icon: Heart,
      title: "Expert Specialist Consultation",
      description: "Access high-quality, focused care through our network of leading medical consultants. We offer specialized consultations in areas such as Cardiology, Gastroenterology, and more to provide expert diagnosis, advanced management plans, and coordinated ongoing care for complex conditions. Book your specialist appointment today.",
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&h=400&fit=crop",
    },
    {
      icon: Activity,
      title: "Advanced Surgical Theater Services",
      description: "Our modern operating Theater is equipped with state-of-the-art technology to facilitate a wide range of minor and major surgical procedures. Our skilled surgical team and anesthetists are committed to maintaining the highest standards of safety, precision, and post-operative recovery for all our patients.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
    },
    {
      icon: Microscope,
      title: "State-of-the-Art Laboratory Services",
      description: "Our in-house, fully equipped laboratory is equipped with advanced diagnostic equipment to perform a wide range of tests including blood work, pathology, and specialized imaging procedures. We ensure accurate results with quick turnaround times to facilitate timely and effective treatment decisions.",
      image: lab,
    },
    {
      icon: Pill,
      title: "24/7 Hospital Pharmacy",
      description: "Our in-house pharmacy is fully stocked with a comprehensive range of medications and medical supplies. Our qualified pharmacists provide expert guidance on medication usage, potential interactions, and proper storage, ensuring safe and convenient access to all your prescribed medicines.",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop",
    },
    {
      icon: AlertCircle,
      title: "24/7 Emergency & Trauma Unit (ETU)",
      description: "Available 24 hours a day, 7 days a week, our Emergency Ward is staffed with experienced emergency physicians and nurses ready to handle any medical crisis. Equipped with advanced life support systems and rapid diagnostic facilities, we provide immediate, life-saving care and swift treatment when every second counts.",
      image: emergency,
    },
    {
      icon: Microscope,
      title: "Advanced Laboratory and Pathology Services",
      description: "Our state-of-the-art laboratory performs a wide range of diagnostic and pathology tests, including blood work, biochemical analysis, and microbiology. We prioritize accuracy and rapid turnaround times to support your physician's timely treatment decisions.",
      image: lab,
    },
    {
      icon: Activity,
      title: "Digital X-Ray and Imaging Services",
      description: "We offer efficient and high-quality digital X-ray services for clear skeletal and chest imaging. Our skilled technicians and consultants ensure accurate diagnostics for fractures, infections, and other conditions, providing quick results for prompt care.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
    },
    {
      icon: Heart,
      title: "Cardiac Diagnostic: Exercise ECG (TMT)",
      description: "Specialized non-invasive test used to evaluate heart function during physical stress. Our Exercise ECG (Treadmill Test) helps diagnose coronary artery disease, assess fitness levels, and guide treatment plans under the supervision of our experienced cardiologists.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
    },
    {
      icon: Microscope,
      title: "Upper Gastrointestinal Endoscopy",
      description: "A minimally invasive procedure performed by specialists to examine the upper digestive tract (esophagus, stomach, and duodenum). Used for accurate diagnosis and treatment of ulcers, inflammation, and other related conditions.",
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&h=400&fit=crop",
    },
    {
      icon: Microscope,
      title: "Diagnostic and Screening Colonoscopy",
      description: "Essential for detecting early signs of colorectal issues, including polyps and cancer. Our specialists perform comfortable and thorough colonoscopy procedures for screening, diagnosis, and removal of growths, promoting proactive digestive health.",
      image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&h=400&fit=crop",
    },
    {
      icon: Heart,
      title: "Beauty and Medical Wellness Clinic",
      description: "Go beyond medical treatment with our specialized clinic. We offer a range of services focusing on aesthetic enhancement, skin health, and overall wellbeing. Consult with our experts to achieve your personal health and wellness goals in a professional setting.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
    },
  ];

  return (
    <>
      <SEO
        title="Comprehensive Medical Services in Tissamaharama | Horizon Hospital"
        description="Exceptional Healthcare Solutions Tailored to Your Needs and Available 24/7. OPD, Specialist Consultations, Surgery, Laboratory, Pharmacy, Emergency, Imaging, Cardiac, Endoscopy, Colonoscopy, Wellness."
        keywords="Hospital Services, OPD, Specialist, Surgery, Laboratory, Pharmacy, Emergency, Imaging, Cardiac, Endoscopy, Colonoscopy, Wellness, Tissamaharama"
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
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Comprehensive Medical Services in Tissamaharama</h1>
                <p className="text-xl text-white/90">Exceptional Healthcare Solutions Tailored to Your Needs and Available 24/7.</p>
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
