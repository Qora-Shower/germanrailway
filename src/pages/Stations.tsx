
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, ChevronDown, X, Train, Users, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

const Stations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const navigate = useNavigate();

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

  // Enhanced station data with more information
  const stationsData = [
    { 
      id: 1, 
      name: "Berlin Hauptbahnhof", 
      state: "Berlin", 
      platforms: 14,
      platformStaff: 8,
      routes: 12,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Berlin_Hauptbahnhof_DB_Museum.jpg/1200px-Berlin_Hauptbahnhof_DB_Museum.jpg"
    },
    { 
      id: 2, 
      name: "München Hauptbahnhof", 
      state: "Bayern", 
      platforms: 32,
      platformStaff: 12,
      routes: 15,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/M%C3%BCnchen_Hauptbahnhof_Querbahnsteighalle.jpg/1200px-M%C3%BCnchen_Hauptbahnhof_Querbahnsteighalle.jpg"
    },
    { 
      id: 3, 
      name: "Hamburg Hauptbahnhof", 
      state: "Hamburg", 
      platforms: 18,
      platformStaff: 10,
      routes: 14,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Hauptbahnhof_Hamburg_-_Wandelhalle%2C_von_S%C3%BCdsteg_-_panoramio.jpg/1200px-Hauptbahnhof_Hamburg_-_Wandelhalle%2C_von_S%C3%BCdsteg_-_panoramio.jpg"
    },
    { 
      id: 4, 
      name: "Frankfurt Hauptbahnhof", 
      state: "Hessen", 
      platforms: 25,
      platformStaff: 14,
      routes: 18,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Frankfurt_Main_Hauptbahnhof.jpg/1200px-Frankfurt_Main_Hauptbahnhof.jpg"
    },
    { 
      id: 5, 
      name: "Köln Hauptbahnhof", 
      state: "Nordrhein-Westfalen", 
      platforms: 11,
      platformStaff: 8,
      routes: 10,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/K%C3%B6ln_Hauptbahnhof_-_Empfangsgeb%C3%A4ude%2C_Nordseite_mit_Dom-1-2.jpg/1200px-K%C3%B6ln_Hauptbahnhof_-_Empfangsgeb%C3%A4ude%2C_Nordseite_mit_Dom-1-2.jpg"
    },
    { 
      id: 6, 
      name: "Stuttgart Hauptbahnhof", 
      state: "Baden-Württemberg", 
      platforms: 16,
      platformStaff: 9,
      routes: 12,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Stuttgart_Hauptbahnhof_1.jpg/1200px-Stuttgart_Hauptbahnhof_1.jpg"
    },
    { 
      id: 7, 
      name: "Magdeburg Hauptbahnhof", 
      state: "Sachsen-Anhalt", 
      platforms: 10,
      platformStaff: 6,
      routes: 8,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Magdeburger_Hauptbahnhof_Front.JPG/1200px-Magdeburger_Hauptbahnhof_Front.JPG"
    },
    { 
      id: 8, 
      name: "Erfurt Hauptbahnhof", 
      state: "Thüringen", 
      platforms: 10,
      platformStaff: 5,
      routes: 6,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Erfurt_Hbf%2C_Zugang_Nordseite.JPG/1200px-Erfurt_Hbf%2C_Zugang_Nordseite.JPG"
    },
    { 
      id: 9, 
      name: "Burg (bei Magdeburg)", 
      state: "Sachsen-Anhalt", 
      platforms: 3,
      platformStaff: 2,
      routes: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Burg_bei_Magdeburg%2C_Bahnhof.jpg/1200px-Burg_bei_Magdeburg%2C_Bahnhof.jpg"
    },
    { 
      id: 10, 
      name: "Dessau Hauptbahnhof", 
      state: "Sachsen-Anhalt", 
      platforms: 5,
      platformStaff: 3,
      routes: 4,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Dessau_Hauptbahnhof-Frontansicht.jpg/1200px-Dessau_Hauptbahnhof-Frontansicht.jpg"
    },
    { 
      id: 11, 
      name: "Freiburg (Breisgau) Hauptbahnhof", 
      state: "Baden-Württemberg", 
      platforms: 8,
      platformStaff: 4,
      routes: 6,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Freiburg_Breisgau_Hauptbahnhof_new_hall_210304.jpg/1200px-Freiburg_Breisgau_Hauptbahnhof_new_hall_210304.jpg"
    }
  ];

  // Filter stations based on search term and selected state
  const filteredStations = stationsData.filter(station => {
    const matchesSearch = station.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState ? station.state === selectedState : true;
    return matchesSearch && matchesState;
  });

  const handleStationClick = (stationId: number) => {
    navigate(`/station/${stationId}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center space-x-3 mb-6">
            <Train className="h-8 w-8 text-db-red" />
            <h1 className="text-3xl font-bold">Bahnhöfe</h1>
          </div>
          
          <p className="text-gray-600 mb-8 max-w-2xl">
            Durchsuche alle verfügbaren Bahnhöfe im Deutschen Bahn AG Roblox-Netzwerk.
            Du kannst nach Bundesland filtern oder nach bestimmten Bahnhöfen suchen.
          </p>
          
          <div className="bg-white p-6 rounded-xl shadow-sm mb-10">
            <div className="relative flex items-center mb-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Bahnhof suchen..."
                  className="pl-10 pr-24 h-12 rounded-full border-2 border-gray-200 shadow-sm focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-db-red"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="flex items-center gap-1 bg-gray-50 hover:bg-gray-100 rounded-full px-3 h-8">
                        <ChevronDown className="h-4 w-4 text-gray-500" />
                        <span className="text-gray-500">Filter</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 max-h-80 overflow-y-auto bg-white shadow-lg rounded-lg border border-gray-200">
                      <DropdownMenuItem 
                        onClick={() => setSelectedState(null)}
                        className="flex items-center gap-2 cursor-pointer py-2"
                      >
                        <X className="h-4 w-4" />
                        Alle Bundesländer
                      </DropdownMenuItem>
                      
                      {germanStates.map((state) => (
                        <DropdownMenuItem 
                          key={state} 
                          onClick={() => setSelectedState(state)}
                          className="cursor-pointer py-2"
                        >
                          {state}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
            
            {selectedState && (
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">Gefiltert nach:</span>
                <Badge className="bg-db-red hover:bg-db-darkred text-white flex items-center gap-1 px-3 py-1">
                  {selectedState}
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="ml-1 h-5 w-5 p-0 text-white hover:bg-transparent hover:text-white" 
                    onClick={() => setSelectedState(null)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStations.map((station) => (
              <Card 
                key={station.id} 
                className="overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer bg-white"
                onClick={() => handleStationClick(station.id)}
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={station.image} 
                    alt={station.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{station.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{station.state}</p>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-gray-50 p-2 rounded-lg text-center">
                      <p className="text-xs text-gray-500">Gleise</p>
                      <p className="font-semibold">{station.platforms}</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded-lg text-center">
                      <p className="text-xs text-gray-500">Personal</p>
                      <p className="font-semibold">{station.platformStaff}</p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded-lg text-center">
                      <p className="text-xs text-gray-500">Routen</p>
                      <p className="font-semibold">{station.routes}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-db-red hover:text-db-darkred hover:bg-gray-50 flex items-center text-sm"
                    >
                      Details <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredStations.length === 0 && (
            <div className="text-center py-16 bg-white rounded-lg shadow-sm">
              <p className="text-gray-500">Keine Bahnhöfe gefunden, die deinen Kriterien entsprechen.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Stations;
