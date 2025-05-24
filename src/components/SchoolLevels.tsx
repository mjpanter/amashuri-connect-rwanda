
import { Baby, BookOpen, Users, Wrench, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const SchoolLevels = () => {
  const navigate = useNavigate();

  const levels = [
    {
      icon: Baby,
      title: "Nursery",
      description: "Early childhood education centers",
      color: "bg-pink-100 text-pink-600",
      count: "120+ Schools",
      level: "nursery"
    },
    {
      icon: BookOpen,
      title: "Primary",
      description: "Primary education institutions",
      color: "bg-blue-100 text-blue-600",
      count: "200+ Schools",
      level: "primary"
    },
    {
      icon: Users,
      title: "Secondary",
      description: "Secondary education schools",
      color: "bg-green-100 text-green-600",
      count: "150+ Schools",
      level: "secondary"
    },
    {
      icon: Wrench,
      title: "TVET",
      description: "Technical and vocational training",
      color: "bg-orange-100 text-orange-600",
      count: "80+ Schools",
      level: "tvet"
    },
    {
      icon: GraduationCap,
      title: "University",
      description: "Higher education institutions",
      color: "bg-purple-100 text-purple-600",
      count: "25+ Universities",
      level: "university"
    }
  ];

  const handleLevelClick = (level: string) => {
    navigate(`/schools?level=${level}`);
  };

  return (
    <section id="schools" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Education at Every Level
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From early childhood to higher education, discover schools across all levels in Rwanda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {levels.map((level, index) => (
            <Card 
              key={level.title} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => handleLevelClick(level.level)}
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${level.color} group-hover:scale-110 transition-transform duration-300`}>
                  <level.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{level.title}</h3>
                <p className="text-gray-600 mb-3">{level.description}</p>
                <div className="text-sm font-medium text-green-600">{level.count}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-6 py-3 shadow-md">
            <span className="text-gray-600">Browse by type:</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium cursor-pointer hover:bg-blue-200 transition-colors">Public Schools</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium cursor-pointer hover:bg-green-200 transition-colors">Private Schools</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolLevels;
