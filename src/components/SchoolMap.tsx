
import { useState, useEffect } from "react";
import { MapPin, Map } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
  const [highlightedRegion, setHighlightedRegion] = useState<string | null>(null);

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

  // Group districts by region
  const regions = {
    kigali: ["Kigali", "Nyarugenge", "Gasabo", "Kicukiro"],
    southern: ["Nyanza", "Gisagara", "Nyaruguru", "Huye", "Nyamagabe", "Ruhango", "Muhanga", "Kamonyi"],
    western: ["Karongi", "Rutsiro", "Rubavu", "Nyabihu", "Ngororero", "Rusizi", "Nyamasheke"],
    eastern: ["Bugesera", "Gatsibo", "Nyagatare", "Kayonza", "Kirehe", "Ngoma", "Rwamagana"],
    northern: ["Burera", "Musanze", "Gicumbi", "Rulindo"],
  };

  const getRegionColor = (districtName: string) => {
    if (!highlightedRegion) return "rgba(230, 255, 230, 0.8)";
    
    const regionNames = Object.entries(regions);
    for (let [region, districts] of regionNames) {
      if (districts.includes(districtName)) {
        return region === highlightedRegion ? "rgba(144, 238, 144, 0.8)" : "rgba(230, 255, 230, 0.4)";
      }
    }
    return "rgba(230, 255, 230, 0.8)";
  };

  return (
    <section id="map" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Schools Across Rwanda
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            With coverage in all 30 districts, AMASHURI connects students with quality education everywhere in Rwanda
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Button 
              variant="outline" 
              size="sm" 
              className={cn("text-xs", !highlightedRegion ? "bg-green-100" : "")}
              onClick={() => setHighlightedRegion(null)}
            >
              All Regions
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className={cn("text-xs", highlightedRegion === 'kigali' ? "bg-green-100" : "")}
              onClick={() => setHighlightedRegion('kigali')}
            >
              Kigali City
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className={cn("text-xs", highlightedRegion === 'northern' ? "bg-green-100" : "")}
              onClick={() => setHighlightedRegion('northern')}
            >
              Northern Province
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className={cn("text-xs", highlightedRegion === 'eastern' ? "bg-green-100" : "")}
              onClick={() => setHighlightedRegion('eastern')}
            >
              Eastern Province
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className={cn("text-xs", highlightedRegion === 'southern' ? "bg-green-100" : "")}
              onClick={() => setHighlightedRegion('southern')}
            >
              Southern Province
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className={cn("text-xs", highlightedRegion === 'western' ? "bg-green-100" : "")}
              onClick={() => setHighlightedRegion('western')}
            >
              Western Province
            </Button>
          </div>
        </div>

        <div className="relative w-full h-[600px] bg-blue-50 rounded-xl overflow-hidden border border-gray-200 shadow-lg">
          <div className="absolute inset-0">
            {/* Rwanda Map with SVG */}
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full"
              style={{ filter: "drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.1))" }}
            >
              {/* Map background - actual outline shape of Rwanda */}
              <path
                d="M29.5,20 L46,15 L63,17 L72,26 L80,39 L77,53 L82,62 L72,76 L61,81 L51,82 L37,80 L27,73 L18,61 L14,48 L20,37 L19,28 L29.5,20 Z"
                fill="#e6ffe6"
                stroke="#a0d6a0"
                strokeWidth="0.5"
              />
              
              {/* Kigali region */}
              <path
                d="M46,46 L50,43 L54,46 L53,51 L47,51 L46,46 Z"
                fill={getRegionColor("Kigali")}
                stroke="#a0d6a0"
                strokeWidth="0.3"
                className="transition-colors duration-300"
              />
              
              {/* Northern region */}
              <path
                d="M29.5,20 L46,15 L63,17 L55,27 L46,31 L35,27 L29.5,20 Z"
                fill={getRegionColor("Burera")}
                stroke="#a0d6a0"
                strokeWidth="0.3"
                className="transition-colors duration-300"
              />
              
              {/* Eastern region */}
              <path
                d="M63,17 L72,26 L80,39 L77,53 L70,62 L60,60 L58,45 L55,27 L63,17 Z"
                fill={getRegionColor("Gatsibo")}
                stroke="#a0d6a0"
                strokeWidth="0.3"
                className="transition-colors duration-300"
              />
              
              {/* Southern region */}
              <path
                d="M36,55 L47,51 L53,51 L60,60 L51,82 L37,80 L27,73 L33,62 L36,55 Z"
                fill={getRegionColor("Nyanza")}
                stroke="#a0d6a0"
                strokeWidth="0.3"
                className="transition-colors duration-300"
              />
              
              {/* Western region */}
              <path
                d="M19,28 L29.5,20 L35,27 L37,41 L36,55 L33,62 L27,73 L18,61 L14,48 L20,37 L19,28 Z"
                fill={getRegionColor("Karongi")}
                stroke="#a0d6a0"
                strokeWidth="0.3"
                className="transition-colors duration-300"
              />
              
              {/* Lakes */}
              <path
                d="M15,50 C17,52 17,56 15,58 C13,56 13,52 15,50 Z"
                fill="#a0c4e8"
                opacity="0.8"
              />
              <path
                d="M14,40 C15,42 15,44 14,46 C13,44 13,42 14,40 Z"
                fill="#a0c4e8"
                opacity="0.8"
              />
              <path
                d="M82,62 L77,53 L80,39 L85,45 L88,56 L82,62 Z"
                fill="#a0c4e8"
                opacity="0.8"
              />
              
              {/* Major rivers */}
              <path
                d="M29.5,20 L35,27 L37,41"
                fill="none"
                stroke="#a0c4e8"
                strokeWidth="0.5"
                opacity="0.7"
              />
              <path
                d="M46,31 L47,51"
                fill="none"
                stroke="#a0c4e8"
                strokeWidth="0.5"
                opacity="0.7"
              />
              <path
                d="M60,60 L51,82"
                fill="none"
                stroke="#a0c4e8"
                strokeWidth="0.5"
                opacity="0.7"
              />
            </svg>

            {/* District pins */}
            {districts.map((district, index) => {
              // Filter out pins if we're highlighting a specific region
              if (highlightedRegion) {
                const isInRegion = Object.entries(regions).some(
                  ([region, districtNames]) => 
                    region === highlightedRegion && districtNames.includes(district.name)
                );
                if (!isInRegion) return null;
              }
              
              return (
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
                      <div className="mt-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-xs bg-green-50 hover:bg-green-100 hover:text-green-800"
                        >
                          View Schools
                        </Button>
                      </div>
                    </Card>
                  )}
                </div>
              );
            })}
          </div>

          {/* Information overlay */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-md max-w-xs">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Map className="h-5 w-5 text-green-600" />
              Schools Across Rwanda
            </h3>
            <p className="text-sm text-gray-600">
              AMASHURI covers all 30 districts in Rwanda, connecting students with quality schools all over the country.
            </p>
            <div className="mt-3 text-xs text-gray-500 flex items-center">
              <MapPin className="h-3 w-3 mr-1 text-green-600" />
              Hover over pins to see school counts
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0.3; }
          100% { transform: scale(1); opacity: 0.5; }
        }
      `}</style>
    </section>
  );
};

export default SchoolMap;
