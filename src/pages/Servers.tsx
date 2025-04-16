
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";

const Servers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Example server data - in a real app, this would be fetched from an API
  const serversData = [
    { id: "JK48L92M", name: "Server: JK48L92M", players: 12, maxPlayers: 30 },
    { id: "P03X7YTR", name: "Server: P03X7YTR", players: 23, maxPlayers: 30 },
    { id: "A67BN45Z", name: "Server: A67BN45Z", players: 8, maxPlayers: 30 },
    { id: "QW34RT56", name: "Server: QW34RT56", players: 19, maxPlayers: 30 },
    { id: "ZX89CV34", name: "Server: ZX89CV34", players: 5, maxPlayers: 30 },
    { id: "BN67M456", name: "Server: BN67M456", players: 27, maxPlayers: 30 }
  ];

  // Filter servers based on search term
  const filteredServers = serversData.filter(server => 
    server.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    server.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleServerClick = (serverId: string) => {
    navigate(`/server/${serverId}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-4">Servers</h1>
          
          <p className="text-gray-600 mb-8">
            Browse all active Deutsche Bahn AG Roblox game servers. 
            Click on a server to view detailed information.
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
              <div 
                key={server.id} 
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleServerClick(server.id)}
              >
                <h3 className="text-lg font-semibold">{server.name}</h3>
                <p className="text-gray-500 text-sm">Players: {server.players}/{server.maxPlayers}</p>
                <div className="mt-2 bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div 
                    className="bg-db-red h-2 rounded-full" 
                    style={{ width: `${(server.players / server.maxPlayers) * 100}%` }}
                  ></div>
                </div>
              </div>
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
