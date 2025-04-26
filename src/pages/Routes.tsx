
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Filter, ChevronDown, Train } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const Routes = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  
  // Example routes data - in a real app, this would be fetched from an API
  const routesData = [
    { id: 1, routeNumber: "R001", type: "S-Bahn", number: "S1", from: "Oranienburg", to: "Wannsee", via: "Berlin Hbf", duration: "58 min" },
    { id: 2, routeNumber: "R002", type: "S-Bahn", number: "S2", from: "Bernau", to: "Blankenfelde", via: "Berlin Hbf", duration: "83 min" },
    { id: 3, routeNumber: "R003", type: "RB", number: "RB10", from: "Berlin Hbf", to: "Nauen", via: "Berlin-Spandau", duration: "37 min" },
    { id: 4, routeNumber: "R004", type: "RB", number: "RB14", from: "Berlin Hbf", to: "Nauen", via: "Falkensee", duration: "45 min" },
    { id: 5, routeNumber: "R005", type: "RE", number: "RE1", from: "Magdeburg Hbf", to: "Frankfurt (Oder)", via: "Berlin Hbf", duration: "2 h 52 min" },
    { id: 6, routeNumber: "R006", type: "RE", number: "RE2", from: "Wismar", to: "Cottbus", via: "Berlin", duration: "5 h 1 min" },
    { id: 7, routeNumber: "R007", type: "IRE", number: "IRE3", from: "Berlin Hbf", to: "Hamburg Hbf", via: "Wittenberge", duration: "2 h 30 min" },
    { id: 8, routeNumber: "R008", type: "EC", number: "EC27", from: "Berlin Hbf", to: "Hamburg Hbf", via: "Wittenberge", duration: "1 h 43 min" },
    { id: 9, routeNumber: "R009", type: "IC", number: "IC2035", from: "Norddeich Mole", to: "Leipzig Hbf", via: "Berlin", duration: "8 h 30 min" },
    { id: 10, routeNumber: "R010", type: "ICE", number: "ICE500", from: "Berlin Hbf", to: "München Hbf", via: "Nürnberg", duration: "3 h 55 min" },
    { id: 11, routeNumber: "R011", type: "ICE", number: "ICE1000", from: "Berlin Hbf", to: "Frankfurt (Main) Hbf", via: "Erfurt", duration: "3 h 29 min" },
    { id: 12, routeNumber: "R012", type: "ICE", number: "ICE1600", from: "Hamburg Hbf", to: "München Hbf", via: "Berlin", duration: "5 h 34 min" },
    { id: 101, routeNumber: "R101", type: "ICE", number: "ICE101", from: "Berlin Hbf", to: "München Hbf", via: "Halle, Erfurt, Nürnberg", duration: "3 h 52 min" },
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
      route.via.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.routeNumber.toLowerCase().includes(searchTerm.toLowerCase());
    
    return typeMatches && searchMatches;
  });

  const handleRouteClick = (routeId) => {
    navigate(`/route/${routeId}`);
  };

  // Get header color based on route type
  const getRouteHeaderColor = (routeType) => {
    switch (routeType) {
      case "S-Bahn":
        return "bg-green-600 text-white";
      case "RB":
      case "RE":
        return "bg-db-red text-white";
      case "IRE":
        return "bg-orange-500 text-white";
      case "EC":
      case "IC":
        return "bg-blue-700 text-white";
      case "ICE":
        return "bg-blue-800 text-white";
      default:
        return "bg-gray-700 text-white";
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-4">Alle Routen</h1>
          
          <p className="text-gray-600 mb-8">
            Entdecken Sie alle Zuglinien der Deutschen Bahn in unserem Roblox Spiel. 
            Von der S-Bahn bis zum ICE, erleben Sie authentische Zugstrecken mit echten Zugnummern.
            Klicken Sie auf eine Route für detaillierte Informationen.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <SearchBar
              placeholder="Suchen Sie nach Zugnummer, Start, oder Ziel..."
              onChange={(value) => setSearchTerm(value)}
              className="flex-grow"
              withFilter={
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1 ml-2 rounded-full border-gray-300 flex items-center">
                      <Filter className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">{selectedFilter === "all" ? "Alle" : selectedFilter.toUpperCase()}</span>
                      <ChevronDown className="h-3.5 w-3.5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem 
                      onClick={() => setSelectedFilter("all")}
                      className="cursor-pointer"
                    >
                      Alle
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => setSelectedFilter("s-bahn")}
                      className="cursor-pointer"
                    >
                      S-Bahn
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => setSelectedFilter("rb")}
                      className="cursor-pointer"
                    >
                      RB
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => setSelectedFilter("re")}
                      className="cursor-pointer"
                    >
                      RE
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => setSelectedFilter("ire")}
                      className="cursor-pointer"
                    >
                      IRE
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => setSelectedFilter("ec")}
                      className="cursor-pointer"
                    >
                      EC
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => setSelectedFilter("ic")}
                      className="cursor-pointer"
                    >
                      IC
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => setSelectedFilter("ice")}
                      className="cursor-pointer"
                    >
                      ICE
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              }
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRoutes.map((route) => (
              <Card 
                key={route.id} 
                className="db-route-card cursor-pointer"
                onClick={() => handleRouteClick(route.id)}
              >
                <div className="border-b border-gray-100">
                  <div className={`px-4 py-3 rounded-t-lg flex justify-between items-center ${getRouteHeaderColor(route.type)}`}>
                    <div className="text-lg font-medium">
                      {route.routeNumber}
                    </div>
                    <div className="text-lg font-medium">
                      {route.number}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold">Von:</div>
                        <div className="font-medium">{route.from}</div>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-right">Nach:</div>
                        <div className="font-medium">{route.to}</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Via:</div>
                      <div className="text-sm">{route.via}</div>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center">
                        <Train className="w-4 h-4 mr-1" />
                        <span className="text-sm font-semibold">{route.duration}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Details ansehen
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
