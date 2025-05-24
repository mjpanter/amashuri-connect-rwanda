
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Zap, ArrowLeft, CreditCard, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const Buying = () => {
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
        "Analytics dashboard",
        "Social media integration"
      ],
      limitations: [],
      buttonText: "Choose Pro",
      buttonClass: "bg-green-600 hover:bg-green-700",
      icon: Star,
      popular: true
    },
    {
      name: "Premium Package",
      price: "100,000 RWF",
      period: "/year",
      description: "Complete solution with enhanced features",
      features: [
        "Everything in Pro",
        "Advanced analytics",
        "Multiple admin accounts",
        "Custom branding",
        "Advanced SEO tools",
        "Priority listing",
        "Dedicated support",
        "Marketing tools"
      ],
      limitations: [],
      buttonText: "Go Premium",
      buttonClass: "bg-purple-600 hover:bg-purple-700",
      icon: Zap
    }
  ];

  const paymentMethods = [
    { name: "Mobile Money", icon: Smartphone, description: "MTN MoMo, Airtel Money" },
    { name: "Credit Card", icon: CreditCard, description: "Visa, Mastercard via Stripe" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Choose Your Package</h1>
            <div></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Select the Perfect Package for Your School
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get the visibility your school deserves with our flexible packages designed for every need and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
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

        {/* Payment Methods */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Payment Methods</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-green-500 transition-colors cursor-pointer">
                <CardContent className="p-6 text-center">
                  <method.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{method.name}</h4>
                  <p className="text-gray-600">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Website Development CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Website for Your School?</h3>
          <p className="text-lg mb-6">Get a professional website developed specifically for your institution</p>
          <Link to="/website-development">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Explore Website Development
            </Button>
          </Link>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need help choosing the right package?</p>
          <div className="space-y-2 text-gray-600">
            <p>📞 +250 791 725 380 | +250 791 628 276</p>
            <p>✉️ muhirejeanleonard2@gmail.com | support@amashuri.rw</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buying;
