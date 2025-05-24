
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Globe, Star } from "lucide-react";
import { Link } from "react-router-dom";

const School = () => {
  const [selectedLevel, setSelectedLevel] = useState("all");

  const schools = [
    {
      id: 1,
      name: "Green Hills Academy",
      level: "secondary",
      district: "Kigali",
      type: "Private",
      rating: 4.8,
      students: 850,
      phone: "+250 788 123 456",
      website: "www.greenhills.ac.rw",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Kigali Institute of Science and Technology",
      level: "university",
      district: "Kigali",
      type: "Public",
      rating: 4.6,
      students: 5200,
      phone: "+250 788 234 567",
      website: "www.kist.ac.rw",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Little Angels Nursery",
      level: "nursery",
      district: "Gasabo",
      type: "Private",
      rating: 4.9,
      students: 120,
      phone: "+250 788 345 678",
      website: "www.littleangels.rw",
      image: "/placeholder.svg"
    },
    // Add more schools as needed
  ];

  const levels = [
    { id: "all", name: "All Levels", count: schools.length },
    { id: "nursery", name: "Nursery", count: schools.filter(s => s.level === "nursery").length },
    { id: "primary", name: "Primary", count: schools.filter(s => s.level === "primary").length },
    { id: "secondary", name: "Secondary", count: schools.filter(s => s.level === "secondary").length },
    { id: "tvet", name: "TVET", count: schools.filter(s => s.level === "tvet").length },
    { id: "university", name: "University", count: schools.filter(s => s.level === "university").length },
  ];

  const filteredSchools = selectedLevel === "all" 
    ? schools 
    : schools.filter(school => school.level === selectedLevel);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">Schools Directory</h1>
          <p className="text-xl text-gray-600 text-center mt-4">
            Discover quality educational institutions across Rwanda
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Level Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Filter by Level</h2>
          <div className="flex flex-wrap gap-3">
            {levels.map((level) => (
              <Button
                key={level.id}
                variant={selectedLevel === level.id ? "default" : "outline"}
                onClick={() => setSelectedLevel(level.id)}
                className={selectedLevel === level.id ? "bg-green-600 hover:bg-green-700" : ""}
              >
                {level.name} ({level.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Schools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchools.map((school) => (
            <Card key={school.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <img 
                  src={school.image} 
                  alt={school.name}
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />
                <CardTitle className="text-xl">{school.name}</CardTitle>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full capitalize">
                    {school.level}
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    {school.type}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{school.district} District</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{school.phone}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Globe className="h-4 w-4 mr-2" />
                    <span>{school.website}</span>
                  </div>
                  <div className="flex items-center text-yellow-600">
                    <Star className="h-4 w-4 mr-2 fill-current" />
                    <span>{school.rating} ({school.students} students)</span>
                  </div>
                </div>
                
                <Link to={`/school/${school.id}`}>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default School;
