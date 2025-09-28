
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  
  // Enhanced train data with more realistic information
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
      driver: "TrainMaster88",
      status: "active" as "active",
      onTimePerformance: 94,
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
      driver: "RegionalPro42",
      status: "cancelled" as "cancelled",
      onTimePerformance: 0,
      stops: []
    },
    {
      id: "S1",
      routeNumber: "S001",
      type: "S-Bahn",
      from: "Wannsee",
      to: "Oranienburg",
      trainUnit: "BR 481 - 481 001",
      currentStation: "Friedrichstraße",
      nextStation: "Hackescher Markt",
      platform: "1",
      delay: 0,
      driver: "SBahnExpert",
      status: "active" as "active",
      onTimePerformance: 98,
      stops: [
        { name: "Wannsee", time: "14:23", platform: "1", departed: true },
        { name: "Nikolassee", time: "14:26", platform: "2", departed: true },
        { name: "Friedrichstraße", time: "14:52", platform: "1", current: true },
        { name: "Hackescher Markt", time: "14:54", platform: "2", next: true },
        { name: "Oranienburg", time: "15:23", platform: "3" }
      ]
    }
  ];

  // Mock player data organized by roles
  const playersByRole = {
    drivers: [
      { name: "TrainMaster88", train: "ICE 1511", experience: "Expert", onlineTime: "2h 15m" },
      { name: "RegionalPro42", train: "RE 1", experience: "Advanced", onlineTime: "1h 45m" },
      { name: "SBahnExpert", train: "S1", experience: "Expert", onlineTime: "3h 12m" }
    ],
    conductors: [
      { name: "TicketChecker99", train: "ICE 1511", experience: "Intermediate", onlineTime: "1h 30m" }
    ],
    platformStaff: [
      { name: "PlatformPro21", station: "Berlin Hbf", experience: "Advanced", onlineTime: "2h 45m" },
      { name: "StationHelper", station: "Magdeburg Hbf", experience: "Beginner", onlineTime: "45m" },
      { name: "ServiceExpert", station: "Freiburg Hbf", experience: "Expert", onlineTime: "4h 20m" }
    ],
    signallers: [
      { name: "SignalMaster42", location: "Stellwerk Berlin", experience: "Expert", onlineTime: "3h 50m" }
    ],
    passengers: [
      { name: "Reisender123", experience: "Casual", onlineTime: "25m" },
      { name: "Pendler456", experience: "Regular", onlineTime: "1h 15m" }
    ]
  };

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Server Information */}
          <Card className="bg-gradient-to-br from-db-red to-red-600 text-white">
            <CardHeader className="pb-2">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Server className="h-5 w-5" />
                Server Info
              </h2>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-white/80 text-sm">Server ID</p>
                <p className="font-bold text-lg">{serverData.id}</p>
              </div>
              <div>
                <p className="text-white/80 text-sm">Region</p>
                <p className="font-medium">{serverData.region}</p>
              </div>
            </CardContent>
          </Card>

          {/* Player Statistics */}
          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardHeader className="pb-2">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Users className="h-5 w-5" />
                Spieler
              </h2>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{serverData.players}</div>
              <div className="text-white/80 text-sm">von {serverData.maxPlayers} online</div>
            </CardContent>
          </Card>

          {/* Uptime */}
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardHeader className="pb-2">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Laufzeit
              </h2>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{serverData.uptime}</div>
              <div className="text-white/80 text-sm">seit {serverData.createdAt}</div>
            </CardContent>
          </Card>

          {/* Performance */}
          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardHeader className="pb-2">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Performance
              </h2>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98%</div>
              <div className="text-white/80 text-sm">Pünktlichkeit</div>
            </CardContent>
          </Card>
        </div>

        {/* Players by Role */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Aktive Fahrer</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {playersByRole.drivers.map((driver, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-db-red text-white rounded-full flex items-center justify-center font-bold">
                        {driver.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{driver.name}</p>
                        <p className="text-sm text-gray-600">{driver.train}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-db-red">{driver.experience}</p>
                      <p className="text-xs text-gray-500">{driver.onlineTime}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Bahnhofspersonal</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {playersByRole.platformStaff.map((staff, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                        {staff.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium">{staff.name}</p>
                        <p className="text-sm text-gray-600">{staff.station}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-orange-600">{staff.experience}</p>
                      <p className="text-xs text-gray-500">{staff.onlineTime}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Train Routes with Enhanced Display */}
        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Train className="h-5 w-5 text-db-red" />
              Aktive Zugverbindungen
            </h2>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[600px] w-full">
              <div className="space-y-4">
                {trainRoutes.slice(0, showAllTrains ? undefined : 1).map((train) => (
                  <div key={train.id} className="border rounded-lg p-4 bg-white shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                          train.type === 'ICE' ? 'bg-db-red text-white' :
                          train.type === 'RE' ? 'bg-blue-600 text-white' :
                          'bg-green-600 text-white'
                        }`}>
                          {train.id}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{train.from} → {train.to}</h3>
                          <p className="text-sm text-gray-600">Fahrer: {train.driver}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`px-2 py-1 rounded text-sm font-medium ${
                          train.status === 'active' ? 'bg-green-100 text-green-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {train.status === 'active' ? 'Aktiv' : 'Ausgefallen'}
                        </div>
                        {train.status === 'active' && (
                          <div className="mt-1">
                            <span className={`text-sm ${train.delay === 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {train.delay === 0 ? 'Pünktlich' : `+${train.delay} min`}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {train.stops.length > 0 && (
                      <div className="border-t pt-4">
                        <h4 className="font-semibold mb-2">Fahrplan</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                          {train.stops.map((stop, index) => (
                            <div key={index} className={`p-2 rounded text-sm ${
                              stop.current ? 'bg-blue-100 border-blue-300 border-2' :
                              stop.departed ? 'bg-gray-100 text-gray-600' :
                              stop.next ? 'bg-yellow-100 border-yellow-300 border-2' :
                              'bg-white border border-gray-200'
                            }`}>
                              <div className="font-medium">{stop.name}</div>
                              <div className="text-xs text-gray-600">
                                {stop.time} • Gleis {stop.platform}
                              </div>
                              {stop.current && <div className="text-xs text-blue-600 font-medium">Aktuell</div>}
                              {stop.next && <div className="text-xs text-yellow-600 font-medium">Nächster Halt</div>}
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-3 flex justify-between items-center text-sm">
                          <span className="text-gray-600">Pünktlichkeit: <span className="font-medium text-green-600">{train.onTimePerformance}%</span></span>
                          <span className="text-gray-600">Aktuelle Station: <span className="font-medium">{train.currentStation}</span></span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
        
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
