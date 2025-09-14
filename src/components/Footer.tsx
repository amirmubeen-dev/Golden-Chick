import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-golden-gradient rounded-full flex items-center justify-center shadow-golden">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="text-xl font-bold">
                Golden <span className="text-primary">Chicks</span>
              </span>
            </div>
            <p className="text-background/70 text-sm">
              Serving the finest chicken and fast food in Faisalabad since our establishment. 
              Quality taste, modern experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-background/70 hover:text-primary transition-smooth">Home</Link></li>
              <li><Link to="/menu" className="text-background/70 hover:text-primary transition-smooth">Menu</Link></li>
              <li><Link to="/about" className="text-background/70 hover:text-primary transition-smooth">About Us</Link></li>
              <li><Link to="/contact" className="text-background/70 hover:text-primary transition-smooth">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-background/70">Murid Wala, Sammundari Road, Faisalabad</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-background/70">+92 300 1234567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-background/70">info@goldenchicks.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Opening Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <div className="text-background/70">
                  <div>Mon - Thu: 11:00 AM - 11:00 PM</div>
                  <div>Fri - Sun: 11:00 AM - 12:00 AM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/70">
          <p>&copy; 2025 Golden Chicks. All rights reserved. | Made with ❤️ for food lovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;