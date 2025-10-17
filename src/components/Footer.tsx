import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-primary-light border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Naresh Singh Rajawat</h3>
            <p className="text-sm text-muted-foreground">
              Young political leader, visionary, and entrepreneur dedicated to public service and youth empowerment.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/naresh4nation"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/naresh4nation"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.twitter.com/naresh4nation"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@naresh4nation"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  27-S, Girdharpur, Goverdhan Road, Krishna Nagar, Mathura, 281004
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+918630539143" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +91 8630539143
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:support@focuscodelabs.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  support@focuscodelabs.com
                </a>
              </li>
            </ul>
          </div>

          {/* Mission */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Our Mission</h3>
            <p className="text-sm text-muted-foreground">
              To serve people with honesty and dedication, empowering youth and building a united, progressive India.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Naresh Singh Rajawat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
