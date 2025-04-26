
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import { Server, Users, User, AlertCircle, Clock, MapPin } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Servers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Example server data - in a real app, this would be fetched from an API
  const serversData = [
    { 
      id: "JK48L92M", 
      name: "Server: JK48L92M", 
      players: 12, 
      maxPlayers: 30,
      playerTypes: {
        passenger: 5,
        driver: 2,
        platformStaff: 3,
        conductor: 1,
        signaller: 1
      },
      status: "active",
      region: "Europe",
      uptime: "3h 24m",
      createdAt: "2023-04-25"
    },
    { 
      id: "P03X7YTR", 
      name: "Server: P03X7YTR", 
      players: 23, 
      maxPlayers: 30,
      playerTypes: {
        passenger: 14,
        driver: 3,
        platformStaff: 2,
        conductor: 2,
        signaller: 2
      },
      status: "active",
      region: "Europe",
      uptime: "6h 12m",
      createdAt: "2023-04-25"
    },
    { 
      id: "A67BN45Z", 
      name: "Server: A67BN45Z", 
      players: 8, 
      maxPlayers: 30,
      playerTypes: {
        passenger: 3,
        driver: 2,
        platformStaff: 1,
        conductor: 1,
        signaller: 1
      },
      status: "maintenance",
      maintenanceMsg: "Server restart in 15 minutes",
      region: "Europe",
      uptime: "12h 45m",
      createdAt: "2023-04-24"
    },
    { 
      id: "QW34RT56", 
      name: "Server: QW34RT56", 
      players: 19, 
      maxPlayers: 30,
      playerTypes: {
        passenger: 10,
        driver: 3,
        platformStaff: 3,
        conductor: 2,
        signaller: 1
      },
      status: "active",
      region: "Europe",
      uptime: "4h 18m",
      createdAt: "2023-04-25"
    },
    { 
      id: "ZX89CV34", 
      name: "Server: ZX89CV34", 
      players: 5, 
      maxPlayers: 30,
      playerTypes: {
        passenger: 2,
        driver: 1,
        platformStaff: 1,
        conductor: 0,
        signaller: 1
      },
      status: "active",
      region: "Europe",
      uptime: "1h 35m",
      createdAt: "2023-04-26"
    },
    { 
      id: "BN67M456", 
      name: "Server: BN67M456", 
      players: 27, 
      maxPlayers: 30,
      playerTypes: {
        passenger: 18,
        driver: 4,
        platformStaff: 2,
        conductor: 2,
        signaller: 1
      },
      status: "full",
      region: "Europe",
      uptime: "8h 20m",
      createdAt: "2023-04-24"
    }
  ];

  // Filter servers based on search term
  const filteredServers = serversData.filter(server => 
    server.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    server.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleServerClick = (serverId: string) => {
    navigate(`/server/${serverId}`);
  };

  // Get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'full':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center mb-4">
            <Server className="h-6 w-6 mr-2 text-db-red" />
            <h1 className="text-3xl font-bold">Servers</h1>
          </div>
          
          <p className="text-gray-600 mb-8">
            Browse all active Deutsche Bahn AG Roblox game servers. 
            Click on a server to view detailed information about players and game status.
          </p>
          
          <div className="mb-8">
            <SearchBar 
              placeholder="Search servers by ID or name..." 
              onChange={setSearchTerm}
              initialValue={searchTerm}
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServers.map((server) => (
              <Card 
                key={server.id} 
                className="db-server-card cursor-pointer transition-all hover:translate-y-[-2px]"
                onClick={() => handleServerClick(server.id)}
              >
                <CardHeader className="p-4 pb-2 flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold">{server.id}</h3>
                    <div className="flex items-center text-gray-500 mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{server.region}</span>
                    </div>
                  </div>
                  <Badge className={getStatusColor(server.status)}>
                    {server.status === 'active' ? 'Active' : 
                     server.status === 'maintenance' ? 'Maintenance' : 'Full'}
                  </Badge>
                </CardHeader>
                
                <CardContent className="p-4 pt-2">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600">Players</span>
                      <span className="text-sm font-medium">{server.players}/{server.maxPlayers}</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          server.players / server.maxPlayers > 0.8 ? 'bg-yellow-500' : 'bg-db-red'
                        }`}
                        style={{ width: `${(server.players / server.maxPlayers) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Player roles statistics */}
                  <div className="grid grid-cols-5 gap-1 mt-4">
                    <div className="flex flex-col items-center">
                      <div className="bg-db-red text-white px-2 py-1 rounded-t-md text-xs font-medium w-full text-center">
                        Driver
                      </div>
                      <div className="bg-gray-100 py-1 w-full text-center font-bold text-sm">
                        {server.playerTypes.driver}
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="bg-amber-500 text-white px-2 py-1 rounded-t-md text-xs font-medium w-full text-center">
                        Staff
                      </div>
                      <div className="bg-gray-100 py-1 w-full text-center font-bold text-sm">
                        {server.playerTypes.platformStaff}
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="bg-purple-600 text-white px-2 py-1 rounded-t-md text-xs font-medium w-full text-center">
                        Conductor
                      </div>
                      <div className="bg-gray-100 py-1 w-full text-center font-bold text-sm">
                        {server.playerTypes.conductor}
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="bg-green-600 text-white px-2 py-1 rounded-t-md text-xs font-medium w-full text-center">
                        Signaller
                      </div>
                      <div className="bg-gray-100 py-1 w-full text-center font-bold text-sm">
                        {server.playerTypes.signaller}
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="bg-gray-600 text-white px-2 py-1 rounded-t-md text-xs font-medium w-full text-center">
                        Passenger
                      </div>
                      <div className="bg-gray-100 py-1 w-full text-center font-bold text-sm">
                        {server.playerTypes.passenger}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{server.uptime}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{server.players} online</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="px-4 py-3 border-t border-gray-100 flex justify-between items-center bg-gray-50 rounded-b-lg">
                  {server.maintenanceMsg ? (
                    <div className="flex items-center text-sm text-yellow-600">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span>{server.maintenanceMsg}</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-sm text-db-red font-medium">
                      View Server Details
                    </div>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {filteredServers.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No servers found matching your search.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Servers;
