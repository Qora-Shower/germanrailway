
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Server, ArrowLeft, Users, Clock, Calendar } from "lucide-react";

const ServerDetail = () => {
  const { serverId } = useParams();
  const navigate = useNavigate();
  
  // In a real app, this would be fetched from an API based on the serverId
  const serverData = {
    id: serverId || "Unknown",
    name: `Server: ${serverId}`,
    players: 15,
    maxPlayers: 30,
    createdAt: new Date().toLocaleDateString(),
    uptime: "3 hours 24 minutes",
    region: "Europe"
  };
  
  // Sample player list - in a real app, would be fetched from an API
  const players = [
    { id: 1, username: "Player1", role: "Driver" },
    { id: 2, username: "Player2", role: "Controller" },
    { id: 3, username: "Player3", role: "Passenger" },
    { id: 4, username: "Player4", role: "Driver" },
    { id: 5, username: "Player5", role: "Passenger" },
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/servers")}
            className="mb-6 flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Servers
          </Button>
          
          <div className="flex items-center mb-6">
            <Server className="h-6 w-6 mr-2 text-db-red" />
            <h1 className="text-3xl font-bold">{serverData.name}</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
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
                    <p className="text-gray-500">Created</p>
                    <p className="font-medium">{serverData.createdAt}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-db-red" />
                  <div>
                    <p className="text-gray-500">Uptime</p>
                    <p className="font-medium">{serverData.uptime}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-db-red" />
                  Players
                </div>
              </h2>
              
              <p className="mb-2">
                {serverData.players} / {serverData.maxPlayers} players online
              </p>
              
              <div className="mb-4 bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-db-red h-2.5 rounded-full" 
                  style={{ width: `${(serverData.players / serverData.maxPlayers) * 100}%` }}
                ></div>
              </div>
              
              <div className="mt-4">
                <Button className="w-full bg-db-red hover:bg-db-darkred">
                  Join Game
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Current Players</h2>
              
              {players.length > 0 ? (
                <ul className="divide-y divide-gray-100">
                  {players.map((player) => (
                    <li key={player.id} className="py-2">
                      <div className="flex justify-between">
                        <p className="font-medium">{player.username}</p>
                        <span className="text-gray-500 text-sm">{player.role}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No players online</p>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServerDetail;
