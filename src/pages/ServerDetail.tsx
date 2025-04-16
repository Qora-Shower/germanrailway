
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Server, ArrowLeft, Users, Clock, Calendar } from "lucide-react";
import PlayerCard, { Player, PLAYER_ROLES } from "@/components/PlayerCard";
import ConductorView from "@/components/ConductorView";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";

const ServerDetail = () => {
  const { serverId } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  // In a real app, this would be fetched from an API based on the serverId
  const serverData = {
    id: serverId || "Unknown",
    name: `Server: ${serverId}`,
    players: 15,
    maxPlayers: 30,
    createdAt: new Date().toLocaleDateString(),
    uptime: "3 Stunden 24 Minuten",
    region: "Europa"
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

  // Sample conductor data with German stations
  const conductorData = {
    stationName: "Berlin Hauptbahnhof",
    platforms: ["1", "2", "3", "4", "5"],
    trains: [
      {
        time: "09:38",
        id: "ICE 1511",
        route: "ICE",
        destination: "München Hbf",
        platform: "3",
        trainClass: "ICE 4 - 412 051",
        driver: {
          username: "matsq4",
          rank: "GD"
        }
      },
      {
        time: "09:37",
        id: "RE 18095",
        route: "RE1",
        destination: "Frankfurt (Oder)",
        platform: "2",
        trainClass: "Bombardier Talent 2 - 442 113",
        driver: {
          username: "atsuatsu6923",
          rank: "QD"
        }
      },
      {
        time: "09:36",
        id: "RB 18419",
        route: "RB10",
        destination: "Nauen",
        platform: "3",
        trainClass: "Alstom Coradia Continental - 1440 129",
        driver: {
          username: "Amy191207",
          rank: "GD"
        }
      },
      {
        time: "09:35",
        id: "ICE 1082",
        route: "ICE",
        destination: "Hamburg Hbf",
        platform: "5",
        trainClass: "ICE 3 - 403 021",
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
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Filter players based on search query
  const filterPlayers = (players: Player[]) => {
    if (!searchQuery) return players;
    return players.filter(player => 
      player.username.toLowerCase().includes(searchQuery.toLowerCase())
    );
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
            Zurück zu Servern
          </Button>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
            <div className="flex items-center">
              <Server className="h-6 w-6 mr-2 text-db-red" />
              <h1 className="text-3xl font-bold">{serverData.name}</h1>
            </div>
            
            <SearchBar 
              placeholder="Spieler suchen..."
              onChange={handleSearch}
              className="w-full md:w-72"
            />
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
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-db-red" />
                  Spieler
                </div>
              </h2>
              
              <p className="mb-2">
                {serverData.players} / {serverData.maxPlayers} Spieler online
              </p>
              
              <div className="mb-4 bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-db-red h-2.5 rounded-full" 
                  style={{ width: `${(serverData.players / serverData.maxPlayers) * 100}%` }}
                ></div>
              </div>
              
              <div className="mt-4">
                <Button className="w-full bg-db-red hover:bg-db-darkred">
                  Spiel beitreten
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Spielerrollen</h2>
              
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-[#F2FCE2] rounded text-emerald-800">
                  <strong>Stellwerker:</strong> Kontrolliert Signale und Weichen
                </div>
                <div className="p-2 bg-[#FEF7CD] rounded text-amber-800">
                  <strong>Zugführer/Bahnsteigmitarbeiter:</strong> Fertigt Züge ab und hilft Fahrgästen
                </div>
                <div className="p-2 bg-db-red rounded text-white">
                  <strong>Lokführer:</strong> Bedient die Züge im Netzwerk
                </div>
                <div className="p-2 bg-[#F1F0FB] rounded text-gray-700">
                  <strong>Fahrgast:</strong> Reist im Netzwerk
                </div>
              </div>
            </div>
          </div>
          
          {/* Player sections by role */}
          <div className="space-y-8">
            {Object.entries(PLAYER_ROLES).map(([roleKey, roleData]) => {
              const rolePlayers = filterPlayers(playersByRole[roleKey] || []);
              if (rolePlayers.length === 0) return null;
              
              const germanRoleName = {
                SIGNALLER: "Stellwerker",
                CONDUCTOR: "Zugführer",
                PLATFORM_EMPLOYEE: "Bahnsteigmitarbeiter",
                DRIVER: "Lokführer",
                PASSENGER: "Fahrgast"
              }[roleKey];
              
              return (
                <div key={roleKey}>
                  <h2 className="text-xl font-semibold mb-3">{germanRoleName} ({rolePlayers.length})</h2>
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
              <h2 className="text-xl font-semibold mb-3">Zugführer-Dashboard</h2>
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
