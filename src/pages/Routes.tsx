
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Routes = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");
  
  // Example routes data - in a real app, this would be fetched from an API
  const routesData = [
    { id: 1, type: "S-Bahn", number: "S1", from: "Oranienburg", to: "Wannsee", via: "Berlin Hbf", duration: "58 min" },
    { id: 2, type: "S-Bahn", number: "S2", from: "Bernau", to: "Blankenfelde", via: "Berlin Hbf", duration: "83 min" },
    { id: 3, type: "RB", number: "RB10", from: "Berlin Hbf", to: "Nauen", via: "Berlin-Spandau", duration: "37 min" },
    { id: 4, type: "RB", number: "RB14", from: "Berlin Hbf", to: "Nauen", via: "Falkensee", duration: "45 min" },
    { id: 5, type: "RE", number: "RE1", from: "Magdeburg Hbf", to: "Frankfurt (Oder)", via: "Berlin Hbf", duration: "2 h 52 min" },
    { id: 6, type: "RE", number: "RE2", from: "Wismar", to: "Cottbus", via: "Berlin", duration: "5 h 1 min" },
    { id: 7, type: "IRE", number: "IRE3", from: "Berlin Hbf", to: "Hamburg Hbf", via: "Wittenberge", duration: "2 h 30 min" },
    { id: 8, type: "EC", number: "EC27", from: "Berlin Hbf", to: "Hamburg Hbf", via: "Wittenberge", duration: "1 h 43 min" },
    { id: 9, type: "IC", number: "IC2035", from: "Norddeich Mole", to: "Leipzig Hbf", via: "Berlin", duration: "8 h 30 min" },
    { id: 10, type: "ICE", number: "ICE500", from: "Berlin Hbf", to: "München Hbf", via: "Nürnberg", duration: "3 h 55 min" },
    { id: 11, type: "ICE", number: "ICE1000", from: "Berlin Hbf", to: "Frankfurt (Main) Hbf", via: "Erfurt", duration: "3 h 29 min" },
    { id: 12, type: "ICE", number: "ICE1600", from: "Hamburg Hbf", to: "München Hbf", via: "Berlin", duration: "5 h 34 min" },
    { id: 101, type: "ICE", number: "ICE101", from: "Berlin Hbf", to: "München Hbf", via: "Halle, Erfurt, Nürnberg", duration: "3 h 52 min" },
  ];

  // Filter routes based on search term and selected filter
  const filteredRoutes = routesData.filter((route) => {
    // Check if the route type matches the selected filter
    const typeMatches = selectedFilter === "all" || route.type.toLowerCase() === selectedFilter;

    // Check if the route number, destination or via matches the search term
    const searchMatches = searchTerm === "" || 
      route.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.to.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.via.toLowerCase().includes(searchTerm.toLowerCase());
    
    return typeMatches && searchMatches;
  });

  const handleRouteClick = (routeId) => {
    navigate(`/route/${routeId}`);
  };

  // Get background color based on route type
  const getRouteColor = (routeType) => {
    switch (routeType) {
      case "S-Bahn":
        return "bg-green-100 border-green-300";
      case "RB":
        return "bg-red-100 border-red-300";
      case "RE":
        return "bg-red-200 border-red-400";
      case "IRE":
        return "bg-orange-100 border-orange-300";
      case "EC":
        return "bg-blue-100 border-blue-300";
      case "IC":
        return "bg-blue-200 border-blue-400";
      case "ICE":
        return "bg-blue-300 border-blue-500";
      default:
        return "bg-gray-100 border-gray-300";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-4">All Routen</h1>
          
          <p className="text-gray-600 mb-8">
            Entdecken Sie alle Zuglinien der Deutschen Bahn in unserem Roblox Spiel. 
            Von der S-Bahn bis zum ICE, erleben Sie authentische Zugstrecken mit echten Zugnummern.
            Klicken Sie auf eine Route für detaillierte Informationen.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Suchen Sie nach Zugnummer, Start, oder Ziel..."
                className="pl-10 pr-4"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Collapsible 
              open={showFilters}
              onOpenChange={setShowFilters}
              className="md:w-auto w-full"
            >
              <CollapsibleTrigger asChild>
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 w-full md:w-auto"
                >
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="bg-white p-4 rounded-md border mt-2 w-full md:absolute md:right-0 md:z-10 md:min-w-[250px] md:shadow-md">
                <div className="space-y-2">
                  <h3 className="font-medium mb-4">Zugtypen</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    <Toggle
                      pressed={selectedFilter === "all"}
                      onPressedChange={() => setSelectedFilter("all")}
                      variant="outline"
                      className={`min-w-24 ${selectedFilter === "all" ? "bg-db-red text-white hover:text-white hover:bg-db-darkred" : ""}`}
                    >
                      Alle
                    </Toggle>
                    <Toggle
                      pressed={selectedFilter === "s-bahn"}
                      onPressedChange={() => setSelectedFilter("s-bahn")}
                      variant="outline"
                      className={`min-w-24 ${selectedFilter === "s-bahn" ? "bg-green-500 text-white hover:text-white hover:bg-green-600" : ""}`}
                    >
                      S-Bahn
                    </Toggle>
                    <Toggle
                      pressed={selectedFilter === "rb"}
                      onPressedChange={() => setSelectedFilter("rb")}
                      variant="outline"
                      className={`min-w-24 ${selectedFilter === "rb" ? "bg-red-500 text-white hover:text-white hover:bg-red-600" : ""}`}
                    >
                      RB
                    </Toggle>
                    <Toggle
                      pressed={selectedFilter === "re"}
                      onPressedChange={() => setSelectedFilter("re")}
                      variant="outline"
                      className={`min-w-24 ${selectedFilter === "re" ? "bg-red-600 text-white hover:text-white hover:bg-red-700" : ""}`}
                    >
                      RE
                    </Toggle>
                    <Toggle
                      pressed={selectedFilter === "ire"}
                      onPressedChange={() => setSelectedFilter("ire")}
                      variant="outline"
                      className={`min-w-24 ${selectedFilter === "ire" ? "bg-orange-500 text-white hover:text-white hover:bg-orange-600" : ""}`}
                    >
                      IRE
                    </Toggle>
                    <Toggle
                      pressed={selectedFilter === "ec"}
                      onPressedChange={() => setSelectedFilter("ec")}
                      variant="outline"
                      className={`min-w-24 ${selectedFilter === "ec" ? "bg-blue-400 text-white hover:text-white hover:bg-blue-500" : ""}`}
                    >
                      EC
                    </Toggle>
                    <Toggle
                      pressed={selectedFilter === "ic"}
                      onPressedChange={() => setSelectedFilter("ic")}
                      variant="outline"
                      className={`min-w-24 ${selectedFilter === "ic" ? "bg-blue-500 text-white hover:text-white hover:bg-blue-600" : ""}`}
                    >
                      IC
                    </Toggle>
                    <Toggle
                      pressed={selectedFilter === "ice"}
                      onPressedChange={() => setSelectedFilter("ice")}
                      variant="outline"
                      className={`min-w-24 ${selectedFilter === "ice" ? "bg-blue-600 text-white hover:text-white hover:bg-blue-700" : ""}`}
                    >
                      ICE
                    </Toggle>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRoutes.map((route) => (
              <div 
                key={route.id} 
                className={`rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer border ${getRouteColor(route.type)}`}
                onClick={() => handleRouteClick(route.id)}
              >
                <div className="flex justify-between items-start">
                  <span className={`font-bold text-lg ${route.type === "ICE" ? "text-blue-700" : ""}`}>
                    {route.number}
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                    {route.type}
                  </span>
                </div>
                <div className="mt-2 space-y-1">
                  <p className="text-sm">
                    <span className="font-medium">Von:</span> {route.from}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Nach:</span> {route.to}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Via:</span> {route.via}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Fahrzeit:</span> {route.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {filteredRoutes.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">Keine Routen gefunden.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Routes;
