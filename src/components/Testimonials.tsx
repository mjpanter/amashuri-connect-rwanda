
import { useState, useCallback, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  school: string;
  quote: string;
  image: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jean Pierre Habimana",
      role: "Headmaster",
      school: "Green Hills Academy",
      quote: "Since listing our school on AMASHURI, our enrollment has increased by 30%. Parents appreciate being able to find comprehensive information about our institution online.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&fit=crop",
    },
    {
      id: 2,
      name: "Alice Uwimana",
      role: "School Administrator",
      school: "FAWE Girls School",
      quote: "The Pro package on AMASHURI gives us excellent visibility. The platform is user-friendly and our profile receives many views from potential students and their families.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&fit=crop",
    },
    {
      id: 3,
      name: "Emmanuel Mugisha",
      role: "IT Director",
      school: "College Saint-André",
      quote: "The website development service from AMASHURI was excellent. We now have a modern website linked to our profile, which has significantly improved our online presence.",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=150&h=150&fit=crop",
    },
    {
      id: 4,
      name: "Marie Chantal Ingabire",
      role: "Principal",
      school: "Lycée de Kigali",
      quote: "AMASHURI has revolutionized how we connect with prospective students. The analytics dashboard provides valuable insights about visitor engagement with our profile.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&fit=crop",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, testimonials.length]);

  const prevTestimonial = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, testimonials.length]);

  // Auto advance carousel
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Schools Say About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from school administrators and educators who have joined the AMASHURI platform
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden h-[400px] rounded-xl">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={`absolute w-full transition-all duration-500 ease-in-out ${
                  index === activeIndex
                    ? "opacity-100 translate-x-0"
                    : index < activeIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <CardContent className="p-8 flex flex-col md:flex-row items-center gap-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-green-100">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Quote className="absolute -bottom-2 -right-2 h-8 w-8 text-green-600 bg-white rounded-full p-1" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-xl text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-green-600">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">{testimonial.school}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation controls */}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white shadow-lg border border-gray-200 z-10 opacity-90 hover:opacity-100"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 rounded-full bg-white shadow-lg border border-gray-200 z-10 opacity-90 hover:opacity-100"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? "bg-green-600" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
