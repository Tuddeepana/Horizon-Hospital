import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Consultants = () => {
  const consultants = [
    {
      name: "Dr. Nuwan Fernando",
      specialization: "Cardiologist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=faces",
      description: "Specialist in cardiovascular diseases and heart health",
    },
    {
      name: "Dr. Asha Perera",
      specialization: "Pediatrician",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=faces",
      description: "Expert in children's health and development",
    },
    {
      name: "Dr. Rohan Silva",
      specialization: "Orthopedic Surgeon",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=faces",
      description: "Specialized in bone and joint surgeries",
    },
    {
      name: "Dr. Priya Mendis",
      specialization: "Gynecologist",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=faces",
      description: "Women's health and reproductive medicine expert",
    },
    {
      name: "Dr. Chaminda Weerasinghe",
      specialization: "General Surgeon",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=faces",
      description: "Experienced in complex surgical procedures",
    },
    {
      name: "Dr. Sanduni Jayawardena",
      specialization: "Dermatologist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces",
      description: "Specialist in skin, hair, and nail conditions",
    },
    {
      name: "Dr. Kasun Rathnayake",
      specialization: "Neurologist",
      image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop&crop=faces",
      description: "Expert in brain and nervous system disorders",
    },
    {
      name: "Dr. Nishadi Wijesinghe",
      specialization: "Ophthalmologist",
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop&crop=faces",
      description: "Specialized in eye care and vision correction",
    },
  ];

  return (
    <>
      <SEO
        title="Our Medical Consultants - Expert Doctors at Horizon Hospital"
        description="Meet our team of experienced medical specialists including cardiologists, pediatricians, surgeons, and more. Book your consultation with Horizon Hospital's expert doctors."
        keywords="doctors Sri Lanka, medical consultants, cardiologist, pediatrician, surgeon, specialist doctors, Horizon Hospital doctors"
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <section className="relative h-80 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1666214280577-46f21553aef4?w=1920&h=400&fit=crop"
              alt="Medical consultants and doctors at Horizon Hospital"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 flex items-center">
              <div className="container mx-auto px-4">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Consultants</h1>
                <p className="text-xl text-white/90">Meet our team of experienced medical professionals</p>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-foreground">Expert Medical Care</h2>
                <p className="text-lg text-muted-foreground">
                  Our team of highly qualified consultants brings years of experience and expertise across various medical specializations. 
                  Each doctor is committed to providing personalized care and the best treatment outcomes for our patients.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {consultants.map((consultant, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                    <img
                      src={consultant.image}
                      alt={`${consultant.name} - ${consultant.specialization} at Horizon Hospital`}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-bold mb-2 text-foreground">{consultant.name}</h3>
                      <p className="text-primary font-semibold mb-3">{consultant.specialization}</p>
                      <p className="text-sm text-muted-foreground">{consultant.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-accent">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Book a Consultation</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Schedule an appointment with one of our specialist doctors for personalized medical care
              </p>
              <a href="/contact" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Contact Us Today
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Consultants;
