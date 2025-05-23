
import { TrendingUp, Award, Globe, Heart } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "95%",
      label: "Parent Satisfaction",
      description: "of parents find our platform helpful"
    },
    {
      icon: Award,
      number: "500+",
      label: "Partner Schools",
      description: "trusted educational institutions"
    },
    {
      icon: Globe,
      number: "30/30",
      label: "Districts Covered",
      description: "nationwide coverage across Rwanda"
    },
    {
      icon: Heart,
      number: "50K+",
      label: "Students Helped",
      description: "students connected to their ideal schools"
    }
  ];

  return (
    <section className="py-20 bg-green-600">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Transforming Education Access in Rwanda
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Our platform is making a real difference in connecting students with quality education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 group-hover:bg-white/30 transition-colors duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-green-100 mb-2">{stat.label}</div>
              <div className="text-green-200 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
