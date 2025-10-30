import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

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
                <span>Horizon Hospital Debarawewa, Thissamaharama</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+9472239444" className="hover:text-primary transition-colors">
                  0472 239 444
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@horizonhospital.com" className="hover:text-primary transition-colors">
                  info@horizonhospital.com
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
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="TikTok"
              >
                {/* TikTok icon is not in lucide-react, use a generic icon or SVG if needed */}
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.5 2v15.5a2.5 2.5 0 1 1-2.5-2.5h2V9.5h2V7.5h-2V2h-2v5.5h-2v2h2v8.5a4.5 4.5 0 1 0 4.5-4.5V2h-2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-muted-foreground">
          <p>
    &copy; {new Date().getFullYear()} All Rights Reserved by Horizon Hospital | © Developed by{" "}
    <a
      href="https://wrenix.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:underline"
    >
      Wrenix PVT LTD
    </a>
  </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;