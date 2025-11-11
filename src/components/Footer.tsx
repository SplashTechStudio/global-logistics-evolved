import { Mail, Phone, MapPin } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const Footer = () => {
  return (
    <footer className="bg-logistics-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-logistics-orange">JuanChini</h3>
            <p className="text-gray-300 text-sm">
              Your trusted partner in transportation and logistics across West Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <NavLink to="/" className="text-gray-300 hover:text-logistics-orange transition-colors text-sm">
                Home
              </NavLink>
              <NavLink to="/about" className="text-gray-300 hover:text-logistics-orange transition-colors text-sm">
                About Us
              </NavLink>
              <NavLink to="/services" className="text-gray-300 hover:text-logistics-orange transition-colors text-sm">
                Services
              </NavLink>
              <NavLink to="/contact" className="text-gray-300 hover:text-logistics-orange transition-colors text-sm">
                Contact
              </NavLink>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="flex flex-col space-y-2 text-sm text-gray-300">
              <li>Car Rental</li>
              <li>Truck Hire</li>
              <li>Flight Charter</li>
              <li>Freight Services</li>
              <li>Customs Clearance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="flex flex-col space-y-3 text-sm text-gray-300">
              <a href="mailto:info@juachinigroup.com" className="flex items-center gap-2 hover:text-logistics-orange transition-colors">
                <Mail className="h-4 w-4" />
                info@juachinigroup.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Liberia, West Africa
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} JuanChini Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
