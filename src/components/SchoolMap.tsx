
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
  const [mapView, setMapView] = useState<'simple' | '3d'>('simple');
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
          
          <div className="flex justify-center space-x-4 mb-8">
            <Button 
              variant={mapView === 'simple' ? "default" : "outline"} 
              onClick={() => setMapView('simple')}
              className={cn(
                "flex items-center gap-2",
                mapView === 'simple' ? "bg-green-600 hover:bg-green-700" : ""
              )}
            >
              <Map size={18} />
              Simple View
            </Button>
            <Button 
              variant={mapView === '3d' ? "default" : "outline"}
              onClick={() => setMapView('3d')}
              className={cn(
                "flex items-center gap-2",
                mapView === '3d' ? "bg-green-600 hover:bg-green-700" : ""
              )}
            >
              <Map size={18} />
              3D View
            </Button>
          </div>
          
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
          {mapView === 'simple' ? (
            <>
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
                
                {/* Kigali region */}
                <circle
                  cx="48"
                  cy="48"
                  r="8"
                  fill={getRegionColor("Kigali")}
                  stroke="#a0d6a0"
                  strokeWidth="0.3"
                  opacity="0.8"
                  className="transition-all duration-300"
                />
                
                {/* Northern region */}
                <path
                  d="M35,25 Q45,15 55,25 Q60,30 45,35 Q35,30 35,25 Z"
                  fill={getRegionColor("Burera")}
                  stroke="#a0d6a0"
                  strokeWidth="0.3"
                  opacity="0.8"
                  className="transition-all duration-300"
                />
                
                {/* Eastern region */}
                <path
                  d="M65,25 Q80,20 75,40 Q85,55 75,70 Q65,65 60,50 Q65,35 65,25 Z"
                  fill={getRegionColor("Gatsibo")}
                  stroke="#a0d6a0"
                  strokeWidth="0.3"
                  opacity="0.8"
                  className="transition-all duration-300"
                />
                
                {/* Southern region */}
                <path
                  d="M45,55 Q60,60 60,70 Q50,80 30,75 Q45,65 45,55 Z"
                  fill={getRegionColor("Nyanza")}
                  stroke="#a0d6a0"
                  strokeWidth="0.3"
                  opacity="0.8"
                  className="transition-all duration-300"
                />
                
                {/* Western region */}
                <path
                  d="M15,35 Q20,25 30,30 Q35,35 30,55 Q20,70 15,55 Q10,45 15,35 Z"
                  fill={getRegionColor("Karongi")}
                  stroke="#a0d6a0"
                  strokeWidth="0.3"
                  opacity="0.8"
                  className="transition-all duration-300"
                />
              </svg>

              {/* Water bodies */}
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 w-full h-full"
              >
                <path
                  d="M10,45 Q15,50 10,60"
                  fill="none"
                  stroke="#a0c4e8"
                  strokeWidth="2"
                  opacity="0.6"
                />
                <ellipse
                  cx="23"
                  cy="50"
                  rx="5"
                  ry="3"
                  fill="#a0c4e8"
                  opacity="0.6"
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
            </>
          ) : (
            <>
              {/* 3D Map View */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-green-50 flex items-center justify-center">
                <div className="absolute inset-0 rotate-12 scale-[0.85] perspective-[1000px]">
                  <div 
                    className="w-full h-full transform-3d rotate-x-[45deg] rounded-xl overflow-hidden"
                    style={{
                      background: "radial-gradient(circle at center, #e6ffe6 0%, #c8e6c8 70%, #a0d6a0 100%)",
                      boxShadow: "0 20px 40px rgba(0, 50, 0, 0.2)",
                    }}
                  >
                    {/* Rwanda map elevation */}
                    <div className="absolute inset-0">
                      <div className="absolute top-[35%] left-[48%] w-16 h-16 rounded-full bg-green-200 opacity-50 transform translate-z-[40px]" 
                           style={{ filter: "blur(10px)" }} />
                      <div className="absolute top-[25%] left-[35%] w-20 h-20 rounded-full bg-green-200 opacity-40 transform translate-z-[30px]" 
                           style={{ filter: "blur(12px)" }} />
                      <div className="absolute top-[60%] left-[40%] w-24 h-16 rounded-full bg-green-200 opacity-40 transform translate-z-[25px]" 
                           style={{ filter: "blur(10px)" }} />
                      <div className="absolute top-[45%] left-[70%] w-20 h-24 rounded-full bg-green-200 opacity-30 transform translate-z-[20px]" 
                           style={{ filter: "blur(12px)" }} />
                      <div className="absolute top-[40%] left-[20%] w-16 h-20 rounded-full bg-green-200 opacity-40 transform translate-z-[35px]" 
                           style={{ filter: "blur(10px)" }} />
                    </div>
                    
                    {/* Rwanda outline */}
                    <svg 
                      viewBox="0 0 100 100" 
                      className="absolute inset-0 w-full h-full opacity-60"
                      style={{ filter: "drop-shadow(0px 2px 5px rgba(0, 100, 0, 0.3))" }}
                    >
                      <path
                        d="M15,35 Q20,20 35,25 Q50,15 65,25 Q80,20 75,40 Q85,55 75,70 Q60,80 40,75 Q20,70 15,55 Q10,45 15,35 Z"
                        fill="none"
                        stroke="#006400"
                        strokeWidth="0.8"
                        strokeDasharray="1,1"
                      />
                    </svg>
                    
                    {/* Grid pattern for 3D effect */}
                    <svg 
                      viewBox="0 0 100 100" 
                      className="absolute inset-0 w-full h-full opacity-20"
                    >
                      <defs>
                        <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
                          <path d="M 5 0 L 0 0 0 5" fill="none" stroke="#006400" strokeWidth="0.2"/>
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill="url(#grid)" />
                    </svg>
                  </div>
                </div>
                
                {/* Floating animation pins */}
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
                      className={`absolute transition-all duration-700 ${
                        animatingDistricts[index] 
                          ? "opacity-100 translate-y-0" 
                          : "opacity-0 translate-y-8"
                      }`}
                      style={{
                        left: `${district.coordinates.x}%`,
                        top: `${district.coordinates.y}%`,
                        zIndex: activeDistrict?.name === district.name ? 10 : 1,
                        animation: `float${index % 3 + 1} ${3 + index % 2}s ease-in-out infinite alternate`,
                      }}
                      onMouseEnter={() => setActiveDistrict(district)}
                      onMouseLeave={() => setActiveDistrict(null)}
                    >
                      <div className="flex flex-col items-center cursor-pointer">
                        <div 
                          className={`h-20 w-px bg-gradient-to-b from-transparent via-green-500 to-green-500 opacity-30 ${
                            activeDistrict?.name === district.name ? "scale-y-110" : "scale-y-100"
                          } transition-transform duration-300`}
                        />
                        <div
                          className={`relative flex items-center justify-center ${
                            activeDistrict?.name === district.name
                              ? "scale-150"
                              : "scale-100 hover:scale-125"
                          } transition-transform duration-200`}
                        >
                          <MapPin
                            className={`h-7 w-7 text-green-600 drop-shadow-md ${
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
                          <Card className="absolute top-full mt-2 p-3 bg-white/90 backdrop-blur-sm shadow-lg z-20 w-48 text-center">
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
                    </div>
                  );
                })}
              </div>
              
              {/* Light beam effect */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div 
                  className="absolute -top-[10%] left-1/2 w-[150%] h-[120%] -translate-x-1/2 bg-gradient-to-b from-white via-transparent to-transparent opacity-10 animate-slowPulse"
                  style={{transform: "perspective(1000px) rotateX(60deg)"}}
                />
              </div>
            </>
          )}

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
      
      {/* Add keyframes for floating animation */}
      <style jsx global>{`
        @keyframes float1 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-10px); }
        }
        @keyframes float2 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-8px); }
        }
        @keyframes float3 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-12px); }
        }
        @keyframes slowPulse {
          0% { opacity: 0; }
          50% { opacity: 0.1; }
          100% { opacity: 0; }
        }
        .transform-3d {
          transform-style: preserve-3d;
        }
        .perspective-\[1000px\] {
          perspective: 1000px;
        }
        .rotate-x-\[45deg\] {
          transform: rotateX(45deg);
        }
        .translate-z-\[20px\] {
          transform: translateZ(20px);
        }
        .translate-z-\[25px\] {
          transform: translateZ(25px);
        }
        .translate-z-\[30px\] {
          transform: translateZ(30px);
        }
        .translate-z-\[35px\] {
          transform: translateZ(35px);
        }
        .translate-z-\[40px\] {
          transform: translateZ(40px);
        }
      `}</style>
    </section>
  );
};

export default SchoolMap;
