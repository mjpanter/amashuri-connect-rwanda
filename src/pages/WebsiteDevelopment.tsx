
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Code, Globe, Smartphone, Search, Shield } from "lucide-react";

const WebsiteDevelopment = () => {
  const features = [
    {
      icon: Globe,
      title: "Custom Website Design",
      description: "Professional, modern websites tailored to your school's needs"
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Perfectly optimized for all devices and screen sizes"
    },
    {
      icon: Search,
      title: "SEO Optimized",
      description: "Built-in SEO features to help your school rank higher on Google"
    },
    {
      icon: Shield,
      title: "Secure & Fast",
      description: "Fast loading times with enterprise-level security"
    },
    {
      icon: Code,
      title: "Easy Management",
      description: "User-friendly content management system"
    }
  ];

  const packages = [
    {
      name: "Basic Website",
      price: "150,000 RWF",
      description: "Perfect for small schools",
      features: [
        "5-page custom website",
        "Mobile responsive design",
        "Basic SEO setup",
        "Contact forms",
        "1 month free maintenance"
      ]
    },
    {
      name: "Advanced Website",
      price: "300,000 RWF",
      description: "Comprehensive solution",
      features: [
        "10-page custom website",
        "Advanced design & animations",
        "Full SEO optimization",
        "Student portal integration",
        "Gallery & events system",
        "3 months free maintenance"
      ],
      popular: true
    },
    {
      name: "Premium Website",
      price: "500,000 RWF",
      description: "Complete digital presence",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "E-learning integration",
        "Payment gateway",
        "Advanced analytics",
        "6 months free maintenance",
        "Social media integration"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Professional Website Development</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get a stunning, professional website for your school that attracts students 
              and showcases your institution's excellence
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Website Development?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in creating beautiful, functional websites for educational institutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Packages */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Website Development Packages</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package for your school's website needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-blue-500 shadow-lg scale-105' : ''} hover:shadow-lg transition-all duration-300`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">{pkg.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                </div>
                <p className="text-gray-600 mt-2">{pkg.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className={`w-full ${pkg.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'}`}>
                  Choose This Package
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact */}
        <div className="text-center mt-16 bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
          <p className="text-gray-600 mb-6">Contact us today to discuss your website development needs</p>
          <div className="space-y-2 text-gray-600">
            <p>📞 +250 791 725 380 | +250 791 628 276</p>
            <p>✉️ muhirejeanleonard2@gmail.com | support@amashuri.rw</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDevelopment;
