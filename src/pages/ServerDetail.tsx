
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Server, ArrowLeft, Users, Clock, Calendar, Train, MapPin, AlertTriangle, ExternalLink } from "lucide-react";
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
    players: 9,
    maxPlayers: 30,
    createdAt: new Date().toLocaleDateString(),
    uptime: "3 Stunden 24 Minuten",
    region: "Europa"
  };
  
  // Sample player list organized by role - in a real app, would be fetched from an API
  const playersByRole = {
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

  // Platform staff data
  const platformStaffData = [
    {
      location: "Berlin Hauptbahnhof",
      platforms: "Platforms 1, 2, 3, 4, 5",
      staff: { username: "StationHelper21", rank: "GD" }
    },
    {
      location: "Berlin Südkreuz",
      platforms: "Platforms 1, 2, 3, 4",
      staff: { username: "PlatformGuide33", rank: "CD" }
    },
    {
      location: "Frankfurt (Main) Hbf",
      platforms: "Platforms 1, 2, 3, 4, 5, 6, 7, 8, 9, 10",
      staff: { username: "TrainAssistant99", rank: "SD" }
    }
  ];

  // Train services data
  const trainServicesData = [
    {
      id: "ICE 1511",
      destination: "München Hbf",
      type: "ICE",
      calling: [
        { station: "Berlin Hbf", scheduledTime: "09:36", actualTime: "09:36", departed: true },
        { station: "Berlin Südkreuz", scheduledTime: "09:42", actualTime: "09:42", departed: true },
        { station: "Leipzig Hbf", scheduledTime: "10:48", actualTime: "10:50", departed: false },
        { station: "Erfurt Hbf", scheduledTime: "11:28", departed: false },
        { station: "Nürnberg Hbf", scheduledTime: "13:05", departed: false },
        { station: "München Hbf", scheduledTime: "14:20", departed: false }
      ],
      coaches: 8,
      hasFirstClass: true,
      driver: { username: "SpeedDemon", rank: "SD" },
      delayed: true,
      delayMinutes: 2
    },
    {
      id: "RE 1",
      destination: "Frankfurt (Oder)",
      type: "RE",
      calling: [
        { station: "Berlin Hbf", scheduledTime: "09:37", actualTime: "09:37", departed: true },
        { station: "Berlin Ostbahnhof", scheduledTime: "09:44", actualTime: "09:44", departed: false },
        { station: "Berlin-Lichtenberg", scheduledTime: "09:51", departed: false },
        { station: "Erkner", scheduledTime: "10:05", departed: false },
        { station: "Fürstenwalde", scheduledTime: "10:24", departed: false },
        { station: "Frankfurt (Oder)", scheduledTime: "11:03", departed: false }
      ],
      coaches: 6,
      hasFirstClass: false,
      driver: { username: "TrainPilot33", rank: "QD" },
      delayed: false
    },
    {
      id: "S1",
      destination: "Wannsee",
      type: "S-Bahn",
      calling: [
        { station: "Oranienburg", scheduledTime: "09:24", actualTime: "09:24", departed: true },
        { station: "Lehnitz", scheduledTime: "09:28", actualTime: "09:30", departed: true },
        { station: "Borgsdorf", scheduledTime: "09:32", actualTime: "09:34", departed: true },
        { station: "Birkenwerder", scheduledTime: "09:36", actualTime: "09:38", departed: true },
        { station: "Hohen Neuendorf", scheduledTime: "09:39", departed: false },
        { station: "Frohnau", scheduledTime: "09:42", departed: false }
      ],
      coaches: 4,
      hasFirstClass: false,
      driver: { username: "BahnDriver45", rank: "CD" },
      delayed: true,
      delayMinutes: 2
    }
  ];

  // Upcoming stations data
  const upcomingStationsData = [
    { name: "Berlin Hbf", trains: 24, nextArrival: "09:45", nextDeparture: "09:48" },
    { name: "Berlin Südkreuz", trains: 18, nextArrival: "09:42", nextDeparture: "09:44" },
    { name: "Frankfurt (Main) Hbf", trains: 16, nextArrival: "09:50", nextDeparture: "09:55" },
    { name: "München Hbf", trains: 15, nextArrival: "10:05", nextDeparture: "10:10" },
    { name: "Hamburg Hbf", trains: 14, nextArrival: "09:55", nextDeparture: "10:00" },
    { name: "Köln Hbf", trains: 12, nextArrival: "10:15", nextDeparture: "10:20" },
    { name: "Stuttgart Hbf", trains: 10, nextArrival: "10:25", nextDeparture: "10:30" },
    { name: "Leipzig Hbf", trains: 9, nextArrival: "10:48", nextDeparture: "10:55" },
    { name: "Nürnberg Hbf", trains: 8, nextArrival: "11:05", nextDeparture: "11:10" },
    { name: "Hannover Hbf", trains: 7, nextArrival: "11:15", nextDeparture: "11:20" }
  ];

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
        id: "RE 1",
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
          rank: "CD"
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
          rank: "LD"
        },
        guard: {
          username: "max573p",
          rank: "LD"
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

  // Get total player count by role
  const getPlayerCountByRole = (role: string) => {
    return playersByRole[role]?.length || 0;
  };

  // Get train service header background color based on type
  const getTrainHeaderColor = (type: string) => {
    switch (type) {
      case "S-Bahn":
        return "bg-green-600";
      case "RB":
        return "bg-red-600";
      case "RE":
        return "bg-db-red";
      case "ICE":
        return "bg-blue-800";
      default:
        return "bg-blue-600";
    }
  };

  // Determine if there's a conductor in the server
  const hasConductor = playersByRole.CONDUCTOR && playersByRole.CONDUCTOR.length > 0;
  
  return (
    <div className="flex flex-col min-h-screen bg-[#040816] text-white">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/servers")}
            className="mb-6 flex items-center text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zu Servern
          </Button>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
            <div className="flex items-center">
              <Server className="h-6 w-6 mr-2 text-white" />
              <h1 className="text-3xl font-bold">{serverData.name}</h1>
            </div>
            
            <SearchBar 
              placeholder="Spieler suchen..."
              onChange={handleSearch}
              className="w-full md:w-72 rounded-full bg-[#0a112b] border-0"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#0a112b] rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Server Information</h2>
              
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400">Server ID</p>
                  <p className="font-medium">{serverData.id}</p>
                </div>
                
                <div>
                  <p className="text-gray-400">Region</p>
                  <p className="font-medium">{serverData.region}</p>
                </div>
                
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-db-red" />
                  <div>
                    <p className="text-gray-400">Erstellt</p>
                    <p className="font-medium">{serverData.createdAt}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-db-red" />
                  <div>
                    <p className="text-gray-400">Laufzeit</p>
                    <p className="font-medium">{serverData.uptime}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0a112b] rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-white" />
                  Spieler
                </div>
              </h2>
              
              <p className="mb-2">
                {serverData.players} / {serverData.maxPlayers} Spieler online
              </p>
              
              <div className="mb-4 bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-db-red h-2.5 rounded-full" 
                  style={{ width: `${(serverData.players / serverData.maxPlayers) * 100}%` }}
                ></div>
              </div>
              
              {/* Role distribution */}
              <div className="space-y-2 mt-4">
                <div className="flex justify-between items-center bg-[#091029] p-2 rounded">
                  <span className="text-green-400">Signallers</span>
                  <span className="bg-[#050a1a] text-white px-3 py-1 rounded-full text-xs">
                    {getPlayerCountByRole("SIGNALLER")}
                  </span>
                </div>
                <div className="flex justify-between items-center bg-[#091029] p-2 rounded">
                  <span className="text-amber-500">Conductors</span>
                  <span className="bg-[#050a1a] text-white px-3 py-1 rounded-full text-xs">
                    {getPlayerCountByRole("CONDUCTOR")}
                  </span>
                </div>
                <div className="flex justify-between items-center bg-[#091029] p-2 rounded">
                  <span className="text-amber-500">Platform Staff</span>
                  <span className="bg-[#050a1a] text-white px-3 py-1 rounded-full text-xs">
                    {getPlayerCountByRole("PLATFORM_EMPLOYEE")}
                  </span>
                </div>
                <div className="flex justify-between items-center bg-[#091029] p-2 rounded">
                  <span className="text-db-red">Drivers</span>
                  <span className="bg-[#050a1a] text-white px-3 py-1 rounded-full text-xs">
                    {getPlayerCountByRole("DRIVER")}
                  </span>
                </div>
                <div className="flex justify-between items-center bg-[#091029] p-2 rounded">
                  <span className="text-gray-300">Passengers</span>
                  <span className="bg-[#050a1a] text-white px-3 py-1 rounded-full text-xs">
                    {getPlayerCountByRole("PASSENGER")}
                  </span>
                </div>
              </div>
              
              <div className="mt-4">
                <Button className="w-full bg-db-red hover:bg-db-darkred">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Spiel beitreten
                </Button>
              </div>
            </div>
            
            <div className="bg-[#0a112b] rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Spielerrollen</h2>
              
              <div className="space-y-2 text-sm">
                <div className="p-2 bg-[#162235] rounded text-green-400">
                  <strong>Signaller:</strong> Kontrolliert Signale und Weichen
                </div>
                <div className="p-2 bg-[#162235] rounded text-amber-500">
                  <strong>Conductor/Platform Staff:</strong> Fertigt Züge ab und hilft Fahrgästen
                </div>
                <div className="p-2 bg-[#162235] rounded text-db-red">
                  <strong>Driver:</strong> Bedient die Züge im Netzwerk
                </div>
                <div className="p-2 bg-[#162235] rounded text-gray-300">
                  <strong>Passenger:</strong> Reist im Netzwerk
                </div>
              </div>
            </div>
          </div>
          
          {/* Platform Staff Section */}
          <Card className="bg-[#0a112b] border-0 rounded-lg shadow-md mb-8 overflow-hidden">
            <div className="p-6 border-b border-gray-700 flex items-center">
              <div className="mr-2 p-1 rounded-lg bg-amber-500">
                <Users className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold">Platform Staff</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {platformStaffData.map((station, index) => (
                  <div key={index} className="p-4 bg-[#091029] rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">{station.location}</h3>
                        <p className="text-gray-400">{station.platforms}</p>
                        <div className="mt-2 flex items-center">
                          <div className="bg-amber-500 text-white text-xs px-2 py-1 rounded-md mr-2">
                            {station.staff.rank}
                          </div>
                          <span>{station.staff.username}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          
          {/* Train Services Section */}
          <Card className="bg-[#0a112b] border-0 rounded-lg shadow-md mb-8 overflow-hidden">
            <div className="p-6 border-b border-gray-700 flex items-center">
              <div className="mr-2 p-1 rounded-lg bg-db-red">
                <Train className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-xl font-semibold">Train Services</h2>
            </div>
            <div className="p-0">
              <div className="space-y-4 divide-y divide-gray-800">
                {trainServicesData.map((train, index) => (
                  <div key={index} className="overflow-hidden">
                    <div className={`p-4 ${getTrainHeaderColor(train.type)}`}>
                      <div className="flex items-center gap-3">
                        <Train className="h-5 w-5 text-white" />
                        <h3 className="text-lg font-medium text-white">{train.id} {train.destination}</h3>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="mb-4">
                        <h4 className="text-white mb-1">Calling at:</h4>
                        <div className="space-y-2">
                          {train.calling.slice(0, 3).map((stop, stopIndex) => (
                            <div key={stopIndex} className="flex justify-between">
                              <span className="text-white">{stop.station}</span>
                              <div>
                                {stop.departed ? (
                                  <span className="text-green-400">{stop.actualTime}</span>
                                ) : (
                                  <div className="flex items-center">
                                    <span className={stop.actualTime ? "text-amber-400 line-through mr-2" : "text-gray-400"}>
                                      {stop.scheduledTime}
                                    </span>
                                    {stop.actualTime && <span className="text-amber-400">{stop.actualTime}</span>}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-300">
                        This train has {train.coaches} coaches. 
                        {train.hasFirstClass ? " First class is available." : " There is no first class accommodation on this train."}
                      </div>
                      
                      {train.delayed && (
                        <div className="mt-3 p-2 bg-amber-900/30 border border-amber-700 rounded flex items-center">
                          <AlertTriangle className="h-4 w-4 text-amber-500 mr-2" />
                          <span className="text-amber-500">This train is running {train.delayMinutes} minutes late</span>
                        </div>
                      )}
                      
                      <div className="mt-4 flex items-center justify-between border-t border-gray-700 pt-3">
                        <div className="flex items-center">
                          <div className={`mr-2 text-xs px-2 py-1 rounded ${
                            train.driver.rank === "SD" ? "bg-db-red" : 
                            train.driver.rank === "GD" ? "bg-amber-500" : 
                            "bg-blue-600"
                          }`}>
                            {train.driver.rank}
                          </div>
                          <span>{train.driver.username}</span>
                        </div>
                        
                        <Button variant="link" className="text-blue-400 underline p-0">
                          Details Information
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          
          {/* Player sections by role */}
          <div className="space-y-8 mb-8">
            <h2 className="text-2xl font-bold">Spielerliste</h2>
            {Object.entries(PLAYER_ROLES).map(([roleKey, roleData]) => {
              const rolePlayers = filterPlayers(playersByRole[roleKey] || []);
              if (rolePlayers.length === 0) return null;
              
              const germanRoleName = {
                SIGNALLER: "Signaller",
                CONDUCTOR: "Conductor",
                PLATFORM_EMPLOYEE: "Platform Staff",
                DRIVER: "Driver",
                PASSENGER: "Passenger"
              }[roleKey];
              
              return (
                <div key={roleKey}>
                  <h3 className="text-xl font-semibold mb-3 text-white">{germanRoleName} ({rolePlayers.length})</h3>
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
          
          {/* Upcoming Stations */}
          <Card className="bg-[#0a112b] border-0 rounded-lg shadow-md mb-8 overflow-hidden">
            <div className="p-6 border-b border-gray-700">
              <h2 className="text-xl font-semibold flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Nächste Stationen mit hohem Verkehrsaufkommen
              </h2>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {upcomingStationsData.map((station, index) => (
                  <div key={index} className="p-4 bg-[#091029] rounded-lg">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium">{station.name}</h3>
                      <div className="bg-[#050a1a] text-white px-3 py-1 rounded-full text-xs">
                        {station.trains} Züge
                      </div>
                    </div>
                    <div className="mt-2 text-sm grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-gray-400">Nächste Ankunft</p>
                        <p className="text-white">{station.nextArrival}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Nächste Abfahrt</p>
                        <p className="text-white">{station.nextDeparture}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          
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
