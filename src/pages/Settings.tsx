
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Bell, Globe, Eye, EyeOff, Languages, User, Shield, Palette, MessageSquare } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import FlagSelect from "@/components/FlagSelect";

const Settings = () => {
  const [showRealTimeActivity, setShowRealTimeActivity] = useState(true);
  const [hideMyStates, setHideMyStates] = useState(false);
  const [enableEmailNotifications, setEnableEmailNotifications] = useState(true);
  const [enableGameUpdates, setEnableGameUpdates] = useState(true);
  const [enableEventReminders, setEnableEventReminders] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en-GB");

  // Apply dark mode to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = '#ffffff';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    }
  }, [darkMode]);

  const handleSaveChanges = () => {
    toast.success("Einstellungen wurden gespeichert");
  };

  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    toast.success("Sprache wurde geändert");
  };

  const cardClass = `border-0 shadow-xl rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
    darkMode 
      ? "bg-gray-900 border-gray-700" 
      : "bg-white"
  }`;

  const textClass = darkMode ? "text-white" : "text-gray-900";
  const subtextClass = darkMode ? "text-gray-300" : "text-gray-600";
  const bgClass = darkMode ? "bg-black" : "bg-gradient-to-br from-gray-50 to-gray-100";

  return (
    <div className={`flex flex-col min-h-screen transition-all duration-300 ${bgClass}`}>
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className={`text-5xl font-bold mb-4 ${textClass}`}>Einstellungen</h1>
            <p className={`text-xl ${subtextClass}`}>Passe deine Präferenzen an und verwalte dein Konto</p>
          </div>
          
          <div className="grid gap-8">
            {/* Account Section */}
            <Card className={cardClass}>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-db-red rounded-xl">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold ${textClass}`}>Konto</h2>
                    <p className={subtextClass}>Verwalte deine Konto-Informationen</p>
                  </div>
                </div>
                
                <div className={`p-6 rounded-xl ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`font-semibold text-lg ${textClass}`}>Verbundenes Konto</p>
                      <p className={`text-sm ${subtextClass}`}>Dein mit Deutsche Bahn AG Roblox verbundenes Konto</p>
                    </div>
                    <div className="flex items-center">
                      <img 
                        src="/lovable-uploads/a457f883-f052-4d89-b2fd-67be6b7822e6.png"
                        alt="Roblox Account" 
                        className="w-10 h-10 rounded-full mr-4 ring-2 ring-db-red"
                      />
                      <span className={`font-semibold ${textClass}`}>RobloxUser123</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Privacy Section */}
            <Card className={cardClass}>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-green-500 rounded-xl">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold ${textClass}`}>Datenschutz</h2>
                    <p className={subtextClass}>Kontrolliere deine Privatsphäre-Einstellungen</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className={`p-6 rounded-xl ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Eye className={`h-5 w-5 ${textClass}`} />
                        <div>
                          <p className={`font-semibold ${textClass}`}>Echtzeit-Aktivität anzeigen</p>
                          <p className={`text-sm ${subtextClass}`}>Zeigt anderen, wenn du online bist</p>
                        </div>
                      </div>
                      <Switch 
                        checked={showRealTimeActivity} 
                        onCheckedChange={setShowRealTimeActivity}
                        className="data-[state=checked]:bg-db-red"
                      />
                    </div>
                  </div>
                  
                  <div className={`p-6 rounded-xl ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <EyeOff className={`h-5 w-5 ${textClass}`} />
                        <div>
                          <p className={`font-semibold ${textClass}`}>Meine Statistiken verbergen</p>
                          <p className={`text-sm ${subtextClass}`}>Verbirgt deine Statistiken vor anderen Spielern</p>
                        </div>
                      </div>
                      <Switch 
                        checked={hideMyStates} 
                        onCheckedChange={setHideMyStates}
                        className="data-[state=checked]:bg-db-red"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Notifications Section */}
            <Card className={cardClass}>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500 rounded-xl">
                    <Bell className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold ${textClass}`}>Benachrichtigungen</h2>
                    <p className={subtextClass}>Wähle, welche Benachrichtigungen du erhalten möchtest</p>
                  </div>
                </div>
                
                <div className="grid gap-4">
                  <div className={`p-6 rounded-xl ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className={`font-semibold ${textClass}`}>E-Mail Benachrichtigungen</p>
                        <p className={`text-sm ${subtextClass}`}>Erhalte wichtige Updates per E-Mail</p>
                      </div>
                      <Switch 
                        checked={enableEmailNotifications} 
                        onCheckedChange={setEnableEmailNotifications}
                        className="data-[state=checked]:bg-db-red"
                      />
                    </div>
                  </div>
                  
                  <div className={`p-6 rounded-xl ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className={`font-semibold ${textClass}`}>Spiel-Updates</p>
                        <p className={`text-sm ${subtextClass}`}>Erhalte Benachrichtigungen über neue Features</p>
                      </div>
                      <Switch 
                        checked={enableGameUpdates} 
                        onCheckedChange={setEnableGameUpdates}
                        className="data-[state=checked]:bg-db-red"
                      />
                    </div>
                  </div>
                  
                  <div className={`p-6 rounded-xl ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className={`font-semibold ${textClass}`}>Event-Erinnerungen</p>
                        <p className={`text-sm ${subtextClass}`}>Erhalte Erinnerungen über bevorstehende Events</p>
                      </div>
                      <Switch 
                        checked={enableEventReminders} 
                        onCheckedChange={setEnableEventReminders}
                        className="data-[state=checked]:bg-db-red"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Appearance Section */}
            <Card className={cardClass}>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-500 rounded-xl">
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold ${textClass}`}>Darstellung</h2>
                    <p className={subtextClass}>Passe das Erscheinungsbild der Website an</p>
                  </div>
                </div>
                
                <div className={`p-6 rounded-xl ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className={`font-semibold ${textClass}`}>Dunkler Modus</p>
                      <p className={`text-sm ${subtextClass}`}>Aktiviert ein dunkles Farbschema für die gesamte Website</p>
                    </div>
                    <Switch 
                      checked={darkMode} 
                      onCheckedChange={setDarkMode}
                      className="data-[state=checked]:bg-db-red"
                    />
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Language Section */}
            <Card className={cardClass}>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-orange-500 rounded-xl">
                    <Languages className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold ${textClass}`}>Sprache</h2>
                    <p className={subtextClass}>Wähle deine bevorzugte Sprache für die Website</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <FlagSelect 
                    value={selectedLanguage}
                    onValueChange={handleLanguageChange}
                    darkMode={darkMode}
                  />
                  
                  <div className={`p-4 rounded-xl ${darkMode ? "bg-gray-800" : "bg-blue-50"}`}>
                    <p className={`text-sm ${subtextClass}`}>
                      Die Sprachänderung wird nach dem Speichern auf die gesamte Website angewendet.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Save Button */}
            <div className="flex justify-center pt-8">
              <Button 
                className="bg-db-red hover:bg-db-darkred text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" 
                onClick={handleSaveChanges}
              >
                Änderungen speichern
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Settings;
