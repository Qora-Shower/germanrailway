
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MyStates = () => {
  // In a real implementation, this would fetch data from Roblox API
  const playerCharacter = {
    username: "RobloxUser123",
    avatar: "/lovable-uploads/a457f883-f052-4d89-b2fd-67be6b7822e6.png",
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8">My States</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center flex-col sm:flex-row">
              <div className="border-4 border-db-red rounded-lg overflow-hidden mb-4 sm:mb-0 sm:mr-6">
                <img 
                  src={playerCharacter.avatar} 
                  alt={playerCharacter.username} 
                  className="w-48 h-48 object-cover"
                />
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-2">{playerCharacter.username}</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600">Rank:</p>
                    <p className="font-medium">Passenger</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Experience:</p>
                    <p className="font-medium">120 hours</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Achievements:</p>
                    <p className="font-medium">12 badges earned</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-500">No recent activity to display.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MyStates;
