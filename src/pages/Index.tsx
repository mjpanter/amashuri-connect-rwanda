
import Hero from "@/components/Hero";
import SchoolLevels from "@/components/SchoolLevels";
import Packages from "@/components/Packages";
import Statistics from "@/components/Statistics";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <SchoolLevels />
      <Statistics />
      <Packages />
      <Footer />
    </div>
  );
};

export default Index;
