import React from "react";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

interface FooterProps {
  admissionGuidelineLinks?: Array<{ title: string; href: string }>;
  quickLinks?: Array<{ title: string; href: string }>;
  contactInfo?: {
    email: string;
    phone: string;
    address: string;
  };
}

const Footer = ({
  admissionGuidelineLinks = [
    { title: "Admission Requirements", href: "#" },
    { title: "Application Process", href: "#" },
    { title: "Important Dates", href: "#" },
    { title: "FAQs", href: "#" },
  ],
  quickLinks = [
    { title: "About DMMMSU", href: "#" },
    { title: "Academic Programs", href: "#" },
    { title: "Student Life", href: "#" },
    { title: "Contact Us", href: "#" },
  ],
  contactInfo = {
    email: "admissions@dmmmsu.edu.ph",
    phone: "+63 (123) 456-7890",
    address: "DMMMSU Main Campus, City of San Fernando, La Union",
  },
}: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Admission Guidelines */}
          <div>
            <h3 className="text-xl font-bold mb-4">Admission Guidelines</h3>
            <ul className="space-y-2">
              {admissionGuidelineLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-gray-300">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-gray-300">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Social Media and Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-white hover:bg-gray-800"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-white hover:bg-gray-800"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-300 hover:text-white hover:bg-gray-800"
              >
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} DMMMSU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
