
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, ChevronDown, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Stations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState<string | null>(null);

  // List of German states
  const germanStates = [
    "Baden-Württemberg",
    "Bayern",
    "Berlin",
    "Brandenburg",
    "Bremen",
    "Hamburg",
    "Hessen",
    "Mecklenburg-Vorpommern",
    "Niedersachsen",
    "Nordrhein-Westfalen",
    "Rheinland-Pfalz",
    "Saarland",
    "Sachsen",
    "Sachsen-Anhalt",
    "Schleswig-Holstein",
    "Thüringen"
  ];

  // Example stations data - in a real app, this would be fetched from an API
  const stationsData = [
    { id: 1, name: "Berlin Hauptbahnhof", state: "Berlin" },
    { id: 2, name: "München Hauptbahnhof", state: "Bayern" },
    { id: 3, name: "Hamburg Hauptbahnhof", state: "Hamburg" },
    { id: 4, name: "Frankfurt Hauptbahnhof", state: "Hessen" },
    { id: 5, name: "Köln Hauptbahnhof", state: "Nordrhein-Westfalen" },
    { id: 6, name: "Stuttgart Hauptbahnhof", state: "Baden-Württemberg" },
    { id: 7, name: "Magdeburg Hauptbahnhof", state: "Sachsen-Anhalt" },
    { id: 8, name: "Erfurt Hauptbahnhof", state: "Thüringen" },
    { id: 9, name: "Burg (bei Magdeburg)", state: "Sachsen-Anhalt" },
    { id: 10, name: "Dessau Hauptbahnhof", state: "Sachsen-Anhalt" }
  ];

  // Filter stations based on search term and selected state
  const filteredStations = stationsData.filter(station => {
    const matchesSearch = station.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState ? station.state === selectedState : true;
    return matchesSearch && matchesState;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-4">Stations</h1>
          
          <p className="text-gray-600 mb-8">
            Browse all available stations in the Deutsche Bahn AG Roblox network. 
            You can filter stations by federal state or search for specific stations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search stations..."
                className="pl-10 pr-4"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 whitespace-nowrap">
                  {selectedState || "Filter by State"} 
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 max-h-80 overflow-y-auto">
                <DropdownMenuItem 
                  onClick={() => setSelectedState(null)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <X className="h-4 w-4" />
                  Reset Selection
                </DropdownMenuItem>
                
                {germanStates.map((state) => (
                  <DropdownMenuItem 
                    key={state} 
                    onClick={() => setSelectedState(state)}
                    className="cursor-pointer"
                  >
                    {state}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          {selectedState && (
            <div className="mb-4 flex items-center">
              <span className="text-sm text-gray-500 mr-2">Filtered by:</span>
              <div className="bg-gray-100 rounded-full px-3 py-1 text-sm flex items-center">
                {selectedState}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="ml-1 h-5 w-5 p-0" 
                  onClick={() => setSelectedState(null)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStations.map((station) => (
              <div 
                key={station.id} 
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold">{station.name}</h3>
                <p className="text-gray-500 text-sm">{station.state}</p>
              </div>
            ))}
          </div>
          
          {filteredStations.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No stations found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Stations;
