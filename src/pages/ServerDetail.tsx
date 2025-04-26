
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Server, ArrowLeft, Users, Clock, Calendar, Train, MapPin, AlertTriangle, ExternalLink, X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import PlayerTrainCard from "@/components/PlayerTrainCard";
import PlayerInfo from "@/components/PlayerInfo";
import { useState } from "react";

const ServerDetail = () => {
  const { serverId } = useParams();
  const navigate = useNavigate();
  const [showAllTrains, setShowAllTrains] = useState(false);
  
  // In a real app, this would be fetched from an API based on the serverId
  const serverData = {
    id: serverId || "Unknown",
    name: `Server: ${serverId}`,
    players: 9,
    maxPlayers: 30,
    createdAt: new Date().toLocaleDateString(),
    uptime: "3 Stunden 24 Minuten",
    region: "Europa"
  };
  
  // Sample train data for different player roles
  const trainRoutes = [
    {
      id: "ICE 1511",
      routeNumber: "R088",
      type: "ICE",
      from: "Berlin Hbf",
      to: "Basel SBB",
      via: "Magdeburg Hbf, Freiburg Hbf",
      trainUnit: "ICE 4 - 412 051",
      currentStation: "Magdeburg Hbf",
      nextStation: "Freiburg Hbf",
      platform: "3",
      delay: 2,
      status: "active" as "active", // Type assertion to ensure it matches the TrainRoute interface
      stops: [
        { name: "Berlin Hbf", time: "09:36", platform: "14", departed: true },
        { name: "Magdeburg Hbf", time: "10:48", platform: "3", current: true },
        { name: "Freiburg Hbf", time: "13:05", platform: "7", next: true },
        { name: "Basel SBB", time: "14:20", platform: "12" }
      ]
    },
    {
      id: "RE 1",
      routeNumber: "R001",
      type: "RE",
      from: "Magdeburg Hbf",
      to: "Berlin Hbf",
      trainUnit: "Bombardier Talent 2 - 442 113",
      currentStation: "Brandenburg Hbf",
      platform: "2",
      status: "cancelled" as "cancelled", // Type assertion to ensure it matches the TrainRoute interface
      stops: []
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/servers")}
          className="mb-6 flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück zu Servern
        </Button>
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
          <div className="flex items-center">
            <Server className="h-6 w-6 mr-2 text-db-red" />
            <h1 className="text-3xl font-bold">{serverData.name}</h1>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <h2 className="text-lg font-semibold mb-4">Server Information</h2>
            
            <div className="space-y-4">
              <div>
                <p className="text-gray-500">Server ID</p>
                <p className="font-medium">{serverData.id}</p>
              </div>
              
              <div>
                <p className="text-gray-500">Region</p>
                <p className="font-medium">{serverData.region}</p>
              </div>
              
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-db-red" />
                <div>
                  <p className="text-gray-500">Erstellt</p>
                  <p className="font-medium">{serverData.createdAt}</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-db-red" />
                <div>
                  <p className="text-gray-500">Laufzeit</p>
                  <p className="font-medium">{serverData.uptime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <ScrollArea className="h-[600px] w-full rounded-md">
          <div className="space-y-4">
            {trainRoutes.slice(0, showAllTrains ? undefined : 1).map((train) => (
              <PlayerTrainCard key={train.id} train={train} />
            ))}
          </div>
        </ScrollArea>
        
        <Button 
          variant="outline" 
          onClick={() => setShowAllTrains(!showAllTrains)}
          className="w-full mt-4"
        >
          {showAllTrains ? "Show Less" : "Show All Trains"}
        </Button>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServerDetail;
