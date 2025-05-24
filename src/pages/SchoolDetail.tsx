
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, Phone, Globe, Star, Users, Calendar } from "lucide-react";

const SchoolDetail = () => {
  const { id } = useParams();

  // Mock school data - in real app this would come from API
  const school = {
    id: 1,
    name: "Green Hills Academy",
    level: "secondary",
    district: "Kigali",
    type: "Private",
    rating: 4.8,
    students: 850,
    phone: "+250 788 123 456",
    website: "www.greenhills.ac.rw",
    image: "/placeholder.svg",
    description: "Green Hills Academy is a leading secondary school in Kigali, providing quality education with modern facilities and experienced teachers.",
    established: "1995",
    curriculum: "Cambridge International",
    facilities: [
      "Science Laboratories",
      "Computer Lab",
      "Library",
      "Sports Fields",
      "Art Studio",
      "Music Room"
    ],
    programs: [
      "A-Level Programs",
      "O-Level Programs", 
      "Extracurricular Activities",
      "Sports Programs"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/schools" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Schools
            </Link>
            <div className="flex items-center space-x-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm capitalize">
                {school.level}
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                {school.type}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <img 
                  src={school.image} 
                  alt={school.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <CardTitle className="text-3xl">{school.name}</CardTitle>
                <p className="text-gray-600">{school.description}</p>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>About the School</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <span className="font-medium">Established:</span> {school.established}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gray-400 mr-3" />
                    <div>
                      <span className="font-medium">Students:</span> {school.students}
                    </div>
                  </div>
                </div>
                <div>
                  <span className="font-medium">Curriculum:</span> {school.curriculum}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Facilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {school.facilities.map((facility, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      {facility}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Programs Offered</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {school.programs.map((program, index) => (
                    <div key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {program}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>{school.district} District</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>{school.phone}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Globe className="h-5 w-5 mr-3" />
                  <span>{school.website}</span>
                </div>
                <div className="flex items-center text-yellow-600">
                  <Star className="h-5 w-5 mr-3 fill-current" />
                  <span>{school.rating} Rating</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Contact School
                </Button>
                <Button variant="outline" className="w-full">
                  Save to Favorites
                </Button>
                <Button variant="outline" className="w-full">
                  Share School
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolDetail;
