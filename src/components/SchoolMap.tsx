
import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

interface District {
  name: string;
  coordinates: { x: number; y: number };
  schoolCount: number;
}

const SchoolMap = () => {
  // Rwanda districts with approximate relative coordinates and dummy school counts
  const districts: District[] = [
    { name: "Kigali", coordinates: { x: 48, y: 48 }, schoolCount: 85 },
    { name: "Nyarugenge", coordinates: { x: 45, y: 45 }, schoolCount: 42 },
    { name: "Gasabo", coordinates: { x: 52, y: 44 }, schoolCount: 38 },
    { name: "Kicukiro", coordinates: { x: 49, y: 52 }, schoolCount: 45 },
    { name: "Nyanza", coordinates: { x: 40, y: 65 }, schoolCount: 28 },
    { name: "Gisagara", coordinates: { x: 35, y: 70 }, schoolCount: 22 },
    { name: "Nyaruguru", coordinates: { x: 32, y: 75 }, schoolCount: 19 },
    { name: "Huye", coordinates: { x: 38, y: 68 }, schoolCount: 31 },
    { name: "Nyamagabe", coordinates: { x: 30, y: 65 }, schoolCount: 24 },
    { name: "Ruhango", coordinates: { x: 42, y: 60 }, schoolCount: 26 },
    { name: "Muhanga", coordinates: { x: 45, y: 55 }, schoolCount: 29 },
    { name: "Kamonyi", coordinates: { x: 47, y: 50 }, schoolCount: 27 },
    { name: "Karongi", coordinates: { x: 25, y: 50 }, schoolCount: 23 },
    { name: "Rutsiro", coordinates: { x: 20, y: 45 }, schoolCount: 18 },
    { name: "Rubavu", coordinates: { x: 15, y: 35 }, schoolCount: 35 },
    { name: "Nyabihu", coordinates: { x: 22, y: 38 }, schoolCount: 22 },
    { name: "Ngororero", coordinates: { x: 28, y: 42 }, schoolCount: 21 },
    { name: "Rusizi", coordinates: { x: 10, y: 55 }, schoolCount: 29 },
    { name: "Nyamasheke", coordinates: { x: 15, y: 60 }, schoolCount: 26 },
    { name: "Bugesera", coordinates: { x: 55, y: 60 }, schoolCount: 27 },
    { name: "Gatsibo", coordinates: { x: 70, y: 35 }, schoolCount: 24 },
    { name: "Nyagatare", coordinates: { x: 75, y: 25 }, schoolCount: 26 },
    { name: "Kayonza", coordinates: { x: 65, y: 45 }, schoolCount: 23 },
    { name: "Kirehe", coordinates: { x: 75, y: 55 }, schoolCount: 22 },
    { name: "Ngoma", coordinates: { x: 65, y: 60 }, schoolCount: 25 },
    { name: "Rwamagana", coordinates: { x: 60, y: 50 }, schoolCount: 28 },
    { name: "Burera", coordinates: { x: 40, y: 20 }, schoolCount: 24 },
    { name: "Musanze", coordinates: { x: 35, y: 25 }, schoolCount: 32 },
    { name: "Gicumbi", coordinates: { x: 50, y: 25 }, schoolCount: 27 },
    { name: "Rulindo", coordinates: { x: 45, y: 35 }, schoolCount: 23 },
  ];

  const [activeDistrict, setActiveDistrict] = useState<District | null>(null);
  const [animatingDistricts, setAnimatingDistricts] = useState<boolean[]>(
    Array(districts.length).fill(false)
  );

  // Animate pins appearing one by one
  useEffect(() => {
    districts.forEach((_, index) => {
      setTimeout(() => {
        setAnimatingDistricts((prev) => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, index * 100);
    });
  }, []);

  return (
    <div className="relative w-full h-[500px] bg-blue-50 rounded-xl overflow-hidden border border-gray-200">
      {/* Map background - simplified outline of Rwanda */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        style={{ filter: "drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.1))" }}
      >
        <path
          d="M15,35 Q20,20 35,25 Q50,15 65,25 Q80,20 75,40 Q85,55 75,70 Q60,80 40,75 Q20,70 15,55 Q10,45 15,35 Z"
          fill="#e6ffe6"
          stroke="#a0d6a0"
          strokeWidth="0.5"
        />
      </svg>

      {/* District pins */}
      {districts.map((district, index) => (
        <div
          key={district.name}
          className={`absolute transition-all duration-500 cursor-pointer ${
            animatingDistricts[index] 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-4"
          }`}
          style={{
            left: `${district.coordinates.x}%`,
            top: `${district.coordinates.y}%`,
            transform: "translate(-50%, -50%)",
            zIndex: activeDistrict?.name === district.name ? 10 : 1,
          }}
          onMouseEnter={() => setActiveDistrict(district)}
          onMouseLeave={() => setActiveDistrict(null)}
        >
          <div
            className={`relative flex items-center justify-center ${
              activeDistrict?.name === district.name
                ? "scale-150"
                : "scale-100 hover:scale-125"
            } transition-transform duration-200`}
          >
            <MapPin
              className={`h-6 w-6 text-green-600 ${
                activeDistrict?.name === district.name
                  ? "animate-pulse"
                  : ""
              }`}
            />
            <div
              className="absolute top-0 left-0 rounded-full bg-green-500 opacity-25 animate-ping"
              style={{ width: "100%", height: "100%" }}
            ></div>
          </div>
          {activeDistrict?.name === district.name && (
            <Card className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 p-3 bg-white shadow-lg z-20 w-48 text-center">
              <h4 className="font-bold text-gray-900">{district.name}</h4>
              <p className="text-sm text-gray-600">
                {district.schoolCount} Schools
              </p>
            </Card>
          )}
        </div>
      ))}

      {/* Information overlay */}
      <div className="absolute bottom-4 left-4 bg-white/90 p-4 rounded-lg shadow-md max-w-xs">
        <h3 className="font-bold text-gray-900 mb-2">Schools Across Rwanda</h3>
        <p className="text-sm text-gray-600">
          AMASHURI covers all 30 districts in Rwanda, connecting students with quality schools all over the country.
        </p>
      </div>
    </div>
  );
};

export default SchoolMap;
