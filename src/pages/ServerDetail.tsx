
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Server, ArrowLeft, Users, Clock, Calendar } from "lucide-react";
import PlayerCard, { Player, PLAYER_ROLES } from "@/components/PlayerCard";
import ConductorView from "@/components/ConductorView";

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
  
  // Sample player list organized by role - in a real app, would be fetched from an API
  const playersByRole: Record<string, Player[]> = {
    SIGNALLER: [
      { id: 1, username: "SwitchOperator42", role: "SIGNALLER" },
    ],
    CONDUCTOR: [
      { id: 2, username: "TrainMaster99", role: "CONDUCTOR" },
      { id: 3, username: "RailwayExpert", role: "CONDUCTOR" },
    ],
    PLATFORM_EMPLOYEE: [
      { id: 4, username: "StationHelper21", role: "PLATFORM_EMPLOYEE" },
    ],
    DRIVER: [
      { id: 5, username: "SpeedDemon", role: "DRIVER", avatar: "/lovable-uploads/06a3d8f0-56b5-4a6a-8895-17ec0c7a0425.png" },
      { id: 6, username: "TrainPilot33", role: "DRIVER" },
    ],
    PASSENGER: [
      { id: 7, username: "TravellerOne", role: "PASSENGER" },
      { id: 8, username: "RailEnthusiast", role: "PASSENGER" },
      { id: 9, username: "CommuterDaily", role: "PASSENGER" },
    ],
  };

  // Sample conductor data
  const conductorData = {
    stationName: "Edgemead",
    platforms: ["1", "2", "3"],
    trains: [
      {
        time: "09:38",
        id: "2T11 R038",
        route: "R038",
        destination: "Leighton City",
        platform: "3",
        trainClass: "170421 Class 170/4",
        driver: {
          username: "matsq4",
          rank: "GD"
        }
      },
      {
        time: "09:37",
        id: "2L34 R024",
        route: "R024",
        destination: "Llyn-by-the-Sea",
        platform: "2",
        trainClass: "357315 Class 357",
        driver: {
          username: "atsuatsu6923",
          rank: "QD"
        }
      },
      {
        time: "09:36",
        id: "9V09 R026",
        route: "R026",
        destination: "Stepford Victoria",
        platform: "3",
        trainClass: "68060 + 68059 Class 68",
        driver: {
          username: "Amy191207",
          rank: "GD"
        }
      },
      {
        time: "09:35",
        id: "2W81 R038",
        route: "R038",
        destination: "Westwyvern",
        platform: "2",
        trainClass: "350391 Class 350",
        driver: {
          username: "Alya4Desire",
          rank: "GD"
        },
        guard: {
          username: "max573p",
          rank: "GD"
        }
      }
    ]
  };
  
  const handleViewPlayerDetails = (playerId: number) => {
    navigate(`/player/${playerId}`);
  };

  // Determine if there's a conductor in the server
  const hasConductor = playersByRole.CONDUCTOR && playersByRole.CONDUCTOR.length > 0;
  
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
              <h2 className="text-lg font-semibold mb-4">Player Roles</h2>
              
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-[#F2FCE2] rounded text-emerald-800">
                  <strong>Signaller:</strong> Controls signals and points
                </div>
                <div className="p-2 bg-[#FEF7CD] rounded text-amber-800">
                  <strong>Conductor/Platform Employee:</strong> Dispatches trains and assists passengers
                </div>
                <div className="p-2 bg-db-red rounded text-white">
                  <strong>Driver:</strong> Operates trains through the network
                </div>
                <div className="p-2 bg-[#F1F0FB] rounded text-gray-700">
                  <strong>Passenger:</strong> Travels on the network
                </div>
              </div>
            </div>
          </div>
          
          {/* Player sections by role */}
          <div className="space-y-8">
            {Object.entries(PLAYER_ROLES).map(([roleKey, roleData]) => {
              const rolePlayers = playersByRole[roleKey] || [];
              if (rolePlayers.length === 0) return null;
              
              return (
                <div key={roleKey}>
                  <h2 className="text-xl font-semibold mb-3">{roleData.name}s ({rolePlayers.length})</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {rolePlayers.map(player => (
                      <PlayerCard 
                        key={player.id} 
                        player={player}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Conductor View if applicable */}
          {hasConductor && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-3">Conductor Dashboard</h2>
              <ConductorView 
                stationName={conductorData.stationName}
                platforms={conductorData.platforms}
                trains={conductorData.trains}
              />
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServerDetail;
