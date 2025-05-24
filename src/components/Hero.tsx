
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, GraduationCap, Users } from "lucide-react";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Navigation />

      {/* Hero Content */}
      <div className="relative z-10 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            Discover Every
            <span className="text-green-600 block">School in Rwanda</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            The premier platform connecting students, parents, and schools across Rwanda. 
            Find the perfect educational institution from nursery to university.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12 animate-scale-in">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search schools by name, level, or district..."
                className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-gray-200 focus:border-green-500 focus:ring-0"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-green-600 hover:bg-green-700">
                Search
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <GraduationCap className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Schools Listed</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">50K+</div>
              <div className="text-gray-600">Students Connected</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">30</div>
              <div className="text-gray-600">Districts Covered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Hero;
