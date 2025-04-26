import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Train, MapPin, ArrowLeft, Clock, Users, Route } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const StationDetail = () => {
  const { stationId } = useParams<{ stationId: string }>();
  const navigate = useNavigate();

  // In a real application, you would fetch this data from an API
  const stations = [
    { 
      id: 1, 
      name: "Berlin Hauptbahnhof", 
      state: "Berlin", 
      platforms: 14,
      platformStaff: 8,
      routes: 12,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Berlin_Hauptbahnhof_DB_Museum.jpg/1200px-Berlin_Hauptbahnhof_DB_Museum.jpg",
      description: "Berlin Hauptbahnhof ist der wichtigste Personenbahnhof in Berlin und der größte Turmbahnhof Europas. Er befindet sich im Bezirk Mitte auf dem Stadtgebiet des alten Hamburger und Lehrter Bahnhofs am Europaplatz.",
      address: "Europaplatz 1, 10557 Berlin",
      openingYear: 2006,
      platformDetails: [
        { number: "1-2", staff: "Platform Staff 1" },
        { number: "3-4", staff: "Platform Staff 2" },
        { number: "5-6", staff: "Platform Staff 3" },
        { number: "7-8", staff: "Platform Staff 4" },
        { number: "9-10", staff: "Platform Staff 5" },
        { number: "11-12", staff: "Platform Staff 6" },
        { number: "13-14", staff: "Platform Staff 7 & 8" },
      ],
      connectedRoutes: ["S1", "S2", "S5", "S7", "S9", "RE1", "RE2", "RE7", "IC50"]
    },
    // Other stations would be listed here
  ];

  const station = stations.find(s => s.id === parseInt(stationId || "0"));

  if (!station) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-4">Bahnhof nicht gefunden</h1>
          <Button 
            onClick={() => navigate("/stations")}
            className="mt-4 bg-db-red hover:bg-db-darkred text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Zurück zur Stationsübersicht
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <Button 
            onClick={() => navigate("/stations")}
            variant="ghost" 
            className="flex items-center mb-6 hover:bg-gray-100"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Zurück zur Stationsübersicht
          </Button>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-10">
            <div className="h-64 relative">
              <img 
                src={station.image} 
                alt={station.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end">
                <div className="p-6 text-white">
                  <h1 className="text-3xl font-bold">{station.name}</h1>
                  <div className="flex items-center mt-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <p className="text-white/80">{station.state}, Deutschland</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <Card className="bg-gray-50 border-none shadow-none">
                  <CardContent className="p-4 text-center">
                    <Train className="h-6 w-6 mx-auto mb-2 text-db-red" />
                    <h3 className="text-lg font-medium">Gleise</h3>
                    <p className="text-2xl font-bold">{station.platforms}</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-50 border-none shadow-none">
                  <CardContent className="p-4 text-center">
                    <Users className="h-6 w-6 mx-auto mb-2 text-db-red" />
                    <h3 className="text-lg font-medium">Personal</h3>
                    <p className="text-2xl font-bold">{station.platformStaff}</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-50 border-none shadow-none">
                  <CardContent className="p-4 text-center">
                    <Route className="h-6 w-6 mx-auto mb-2 text-db-red" />
                    <h3 className="text-lg font-medium">Routen</h3>
                    <p className="text-2xl font-bold">{station.routes}</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Über diesen Bahnhof</h2>
                <p className="text-gray-700 leading-relaxed">{station.description}</p>
                
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-db-red" />
                    <span className="text-gray-700">{station.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-db-red" />
                    <span className="text-gray-700">Eröffnet im Jahr {station.openingYear}</span>
                  </div>
                </div>
              </div>
              
              <Separator className="mb-8" />
              
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Gleiszuordnung</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {station.platformDetails.map((platform, index) => (
                    <Card key={index} className="bg-white border border-gray-200">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-medium">Gleis {platform.number}</h3>
                          <Badge className="bg-blue-500 hover:bg-blue-600">{platform.staff}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              <Separator className="mb-8" />
              
              <div>
                <h2 className="text-xl font-bold mb-4">Verbindungen</h2>
                <div className="flex flex-wrap gap-2">
                  {station.connectedRoutes.map((route, index) => {
                    let bgColor = "bg-gray-500";
                    if (route.startsWith("S")) bgColor = "bg-green-600";
                    if (route.startsWith("RE")) bgColor = "bg-red-600";
                    if (route.startsWith("IC")) bgColor = "bg-blue-600";
                    
                    return (
                      <Badge 
                        key={index} 
                        className={`${bgColor} hover:${bgColor} text-white px-3 py-1 text-sm`}
                      >
                        {route}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StationDetail;
