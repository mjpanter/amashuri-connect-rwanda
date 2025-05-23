
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Zap } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      name: "Free Package",
      price: "Free",
      description: "Perfect for getting started",
      features: [
        "Basic school information",
        "Contact details",
        "School photos (up to 3)",
        "Search visibility",
        "Mobile responsive page"
      ],
      limitations: ["No website link", "Limited customization"],
      buttonText: "Get Started",
      buttonClass: "bg-gray-600 hover:bg-gray-700",
      icon: null
    },
    {
      name: "Pro Package",
      price: "50,000 RWF",
      period: "/year",
      description: "Enhanced visibility and features",
      features: [
        "Everything in Free",
        "Website link integration",
        "Unlimited photos",
        "School history section",
        "Services showcase",
        "Priority support",
        "Analytics dashboard"
      ],
      limitations: [],
      buttonText: "Choose Pro",
      buttonClass: "bg-green-600 hover:bg-green-700",
      icon: Star,
      popular: true
    },
    {
      name: "Pro Full Package",
      price: "150,000 RWF",
      period: "/year",
      description: "Complete solution with website development",
      features: [
        "Everything in Pro",
        "Custom website development",
        "Professional design",
        "Content management system",
        "SEO optimization",
        "Hosting included",
        "Maintenance support",
        "Custom domain setup"
      ],
      limitations: [],
      buttonText: "Go Premium",
      buttonClass: "bg-purple-600 hover:bg-purple-700",
      icon: Zap
    }
  ];

  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Package
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the visibility your school deserves with our flexible packages designed for every need and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card key={index} className={`relative ${pkg.popular ? 'ring-2 ring-green-500 shadow-lg scale-105' : ''} hover:shadow-lg transition-all duration-300`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                {pkg.icon && (
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4 mx-auto">
                    <pkg.icon className="h-6 w-6 text-green-600" />
                  </div>
                )}
                <CardTitle className="text-2xl font-bold text-gray-900">{pkg.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                  {pkg.period && <span className="text-gray-600">{pkg.period}</span>}
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
                  {pkg.limitations.map((limitation, limitationIndex) => (
                    <li key={limitationIndex} className="flex items-center text-gray-400">
                      <span className="w-5 h-5 mr-3 flex-shrink-0 text-center">×</span>
                      <span>{limitation}</span>
                    </li>
                  ))}
                </ul>

                <Button className={`w-full ${pkg.buttonClass}`}>
                  {pkg.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need help choosing the right package?</p>
          <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
            Contact Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
