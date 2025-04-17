
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import { Server, Users, User, AlertCircle } from "lucide-react";
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
      status: "active"
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
      status: "active" 
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
      maintenanceMsg: "Server restart in 15 minutes"
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
      status: "active"
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
      status: "active"
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
      status: "full"
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
    <div className="flex flex-col min-h-screen">
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
                className="rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200 hover:border-db-red cursor-pointer overflow-hidden"
                onClick={() => handleServerClick(server.id)}
              >
                <CardHeader className="p-4 border-b border-gray-100 bg-gray-50">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold">{server.id}</h3>
                    <Badge className={getStatusColor(server.status)}>
                      {server.status === 'active' ? 'Active' : 
                       server.status === 'maintenance' ? 'Maintenance' : 'Full'}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-4">
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
                  
                  {/* Player types breakdown */}
                  <div className="grid grid-cols-5 gap-2 mt-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="bg-blue-100 text-blue-800 p-1 px-2 rounded-md text-xs font-medium mb-1 w-full">
                        Driver
                      </div>
                      <span className="text-sm font-bold">{server.playerTypes.driver}</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="bg-green-100 text-green-800 p-1 px-2 rounded-md text-xs font-medium mb-1 w-full">
                        Staff
                      </div>
                      <span className="text-sm font-bold">{server.playerTypes.platformStaff}</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="bg-purple-100 text-purple-800 p-1 px-2 rounded-md text-xs font-medium mb-1 w-full">
                        Conductor
                      </div>
                      <span className="text-sm font-bold">{server.playerTypes.conductor}</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="bg-yellow-100 text-yellow-800 p-1 px-2 rounded-md text-xs font-medium mb-1 w-full">
                        Signal
                      </div>
                      <span className="text-sm font-bold">{server.playerTypes.signaller}</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="bg-gray-100 text-gray-800 p-1 px-2 rounded-md text-xs font-medium mb-1 w-full">
                        Passenger
                      </div>
                      <span className="text-sm font-bold">{server.playerTypes.passenger}</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="px-4 py-3 border-t border-gray-100 bg-gray-50 flex justify-between items-center">
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-1 text-gray-500" />
                    <span className="text-gray-600">{server.players} players online</span>
                  </div>
                  
                  {server.maintenanceMsg && (
                    <div className="flex items-center text-sm text-yellow-600">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      <span>{server.maintenanceMsg}</span>
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
