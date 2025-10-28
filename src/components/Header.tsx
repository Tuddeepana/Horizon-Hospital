import { Link, useLocation } from "react-router-dom";
import { Activity } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-80 transition-opacity">
          <Activity className="h-8 w-8" />
          <span>Horizon Hospital</span>
        </Link>

        <ul className="flex items-center gap-8">
          <li>
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/services") ? "text-primary" : "text-foreground"
              }`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/consultants"
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/consultants") ? "text-primary" : "text-foreground"
              }`}
            >
              Consultants
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-foreground"
              }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
