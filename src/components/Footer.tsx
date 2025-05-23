
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Updated with AMASHURI</h3>
            <p className="text-gray-400 mb-8">
              Get the latest updates about new schools, educational opportunities, and platform features
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="bg-green-600 hover:bg-green-700 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <GraduationCap className="h-8 w-8 text-green-500" />
              <span className="text-2xl font-bold">AMASHURI</span>
              <span className="text-gray-400">.rw</span>
            </div>
            <p className="text-gray-400 mb-6">
              Connecting every school in Rwanda to create better educational opportunities for all students.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 cursor-pointer transition-colors">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 cursor-pointer transition-colors">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 cursor-pointer transition-colors">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 cursor-pointer transition-colors">
                <Linkedin className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Find Schools</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">School Levels</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Packages</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* For Schools */}
          <div>
            <h4 className="text-xl font-semibold mb-6">For Schools</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Register Your School</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Website Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Dashboard</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Kigali, Rwanda<br />
                  KG 123 St, Nyarugenge
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-400">+250 788 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-400">info@amashuri.rw</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 AMASHURI.rw. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-green-500 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-green-500 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-green-500 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
