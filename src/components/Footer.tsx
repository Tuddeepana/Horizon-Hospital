import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Contact Information</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>123 Medical Avenue, Colombo 07, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+94112345678" className="hover:text-primary transition-colors">
                  +94 11 234 5678
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@horizonhospital.lk" className="hover:text-primary transition-colors">
                  info@horizonhospital.lk
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/services" className="hover:text-primary transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/consultants" className="hover:text-primary transition-colors">
                  Find a Doctor
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary transition-colors">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Emergency Care
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Horizon Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
