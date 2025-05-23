
import Hero from "@/components/Hero";
import SchoolLevels from "@/components/SchoolLevels";
import Packages from "@/components/Packages";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import SchoolMap from "@/components/SchoolMap";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <SchoolLevels />
      <SchoolMap />
      <Statistics />
      <Testimonials />
      <Packages />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
