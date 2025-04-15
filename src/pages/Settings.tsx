
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Settings = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8">Settings</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
                <p className="text-gray-600 mb-2">Connected Account:</p>
                <div className="flex items-center">
                  <img 
                    src="/lovable-uploads/a457f883-f052-4d89-b2fd-67be6b7822e6.png"
                    alt="Roblox Account" 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <span>RobloxUser123</span>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="email-notifications" className="mr-2" />
                    <label htmlFor="email-notifications">Email Notifications</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="game-updates" className="mr-2" />
                    <label htmlFor="game-updates">Game Updates</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="event-reminders" className="mr-2" />
                    <label htmlFor="event-reminders">Event Reminders</label>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Website Preferences</h2>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="dark-mode" className="mr-2" />
                    <label htmlFor="dark-mode">Dark Mode</label>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <button className="bg-db-red hover:bg-db-darkred text-white px-4 py-2 rounded-md transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Settings;
