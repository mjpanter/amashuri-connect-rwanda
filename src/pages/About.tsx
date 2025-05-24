
import { Mail, Phone, MapPin, Users, Target, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">About Amashuri Connect</h1>
          <p className="text-xl text-gray-600 text-center mt-4 max-w-3xl mx-auto">
            Connecting students with quality education across Rwanda
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Target className="h-8 w-8 text-green-600" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To bridge the gap between students and quality educational institutions in Rwanda by providing 
                a comprehensive platform that connects learners with the right schools at every level of education.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-blue-600" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                To become Rwanda's leading educational platform that empowers every student to find 
                their ideal learning environment and achieve their academic goals.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* About Content */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Our Platform</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg mb-4">
              Amashuri Connect is Rwanda's premier educational platform that brings together students, 
              parents, and educational institutions in one comprehensive ecosystem. We understand that 
              choosing the right school is one of the most important decisions in a student's life.
            </p>
            <p className="text-lg mb-4">
              Our platform features schools from all levels - from nursery to university - across all 
              30 districts of Rwanda. Whether you're looking for public or private institutions, 
              we provide detailed information to help you make informed decisions.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">575+</div>
            <div className="text-gray-600">Total Schools</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">30</div>
            <div className="text-gray-600">Districts Covered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">5</div>
            <div className="text-gray-600">Education Levels</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">1000+</div>
            <div className="text-gray-600">Happy Families</div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Phone className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+250 791 725 380</p>
              <p className="text-gray-600">+250 791 628 276</p>
            </div>
            
            <div className="text-center">
              <Mail className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">muhirejeanleonard2@gmail.com</p>
              <p className="text-gray-600">support@amashuri.rw</p>
            </div>
            
            <div className="text-center">
              <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Kigali, Rwanda</p>
            </div>
            
            <div className="text-center">
              <Users className="h-8 w-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600">24/7 Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
