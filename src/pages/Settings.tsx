
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Bell, Globe, Eye, EyeOff, Languages } from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const Settings = () => {
  const [showRealTimeActivity, setShowRealTimeActivity] = useState(true);
  const [hideMyStates, setHideMyStates] = useState(false);
  const [enableEmailNotifications, setEnableEmailNotifications] = useState(true);
  const [enableGameUpdates, setEnableGameUpdates] = useState(true);
  const [enableEventReminders, setEnableEventReminders] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [translateOption, setTranslateOption] = useState("none");
  const [selectedLanguage, setSelectedLanguage] = useState("Deutsch");

  const handleSaveChanges = () => {
    toast.success("Einstellungen wurden gespeichert");
  };

  const handleAutomaticTranslation = () => {
    setTranslateOption("auto");
    toast.success("Automatische Übersetzung aktiviert");
    // In a real app, we would detect the user's language here
  };

  const handleManualTranslationSelect = (language: string) => {
    setTranslateOption("manual");
    setSelectedLanguage(language);
    toast.success(`Manuelle Übersetzung auf ${language} aktiviert`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Einstellungen</h1>
          
          <div className="space-y-8">
            <Card className="border shadow-md p-6 bg-white">
              <h2 className="text-xl font-semibold mb-6">Konto</h2>
              
              <div className="flex items-center justify-between py-3 border-b">
                <div>
                  <p className="font-medium">Verbundenes Konto</p>
                  <p className="text-gray-500 text-sm">Dein mit Deutsche Bahn AG Roblox verbundenes Konto</p>
                </div>
                <div className="flex items-center">
                  <img 
                    src="/lovable-uploads/a457f883-f052-4d89-b2fd-67be6b7822e6.png"
                    alt="Roblox Account" 
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <span className="font-medium">RobloxUser123</span>
                </div>
              </div>
            </Card>
            
            <Card className="border shadow-md p-6 bg-white">
              <h2 className="text-xl font-semibold mb-6">Privacy</h2>
              <p className="text-gray-600 mb-6">
                Es ist wichtig für uns, dass du die Kontrolle über deine Daten hast. 
                Hier kannst du festlegen, welche Informationen andere sehen können und 
                wie deine Aktivitäten auf unserer Plattform angezeigt werden.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium">Echtzeit-Aktivität anzeigen</p>
                    <p className="text-gray-500 text-sm">Zeigt anderen, wenn du online bist</p>
                  </div>
                  <Switch 
                    checked={showRealTimeActivity} 
                    onCheckedChange={setShowRealTimeActivity}
                    className="data-[state=checked]:bg-db-red"
                  />
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium">Meine States verbergen</p>
                    <p className="text-gray-500 text-sm">Verbirgt deine Statistiken vor anderen Spielern</p>
                  </div>
                  <Switch 
                    checked={hideMyStates} 
                    onCheckedChange={setHideMyStates}
                    className="data-[state=checked]:bg-db-red"
                  />
                </div>
              </div>
            </Card>
            
            <Card className="border shadow-md p-6 bg-white">
              <h2 className="text-xl font-semibold mb-6">Benachrichtigungen</h2>
              <p className="text-gray-600 mb-6">
                Bleibe informiert über wichtige Ereignisse und Updates. Du kannst hier festlegen, 
                welche Benachrichtigungen du erhalten möchtest.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium">E-Mail Benachrichtigungen</p>
                    <p className="text-gray-500 text-sm">Erhalte wichtige Updates per E-Mail</p>
                  </div>
                  <Switch 
                    checked={enableEmailNotifications} 
                    onCheckedChange={setEnableEmailNotifications}
                    className="data-[state=checked]:bg-db-red"
                  />
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium">Spiel-Updates</p>
                    <p className="text-gray-500 text-sm">Erhalte Benachrichtigungen über neue Features und Updates</p>
                  </div>
                  <Switch 
                    checked={enableGameUpdates} 
                    onCheckedChange={setEnableGameUpdates}
                    className="data-[state=checked]:bg-db-red"
                  />
                </div>
                
                <div className="flex items-center justify-between py-2">
                  <div>
                    <p className="font-medium">Event-Erinnerungen</p>
                    <p className="text-gray-500 text-sm">Erhalte Erinnerungen über bevorstehende Events</p>
                  </div>
                  <Switch 
                    checked={enableEventReminders} 
                    onCheckedChange={setEnableEventReminders}
                    className="data-[state=checked]:bg-db-red"
                  />
                </div>
              </div>
            </Card>
            
            <Card className="border shadow-md p-6 bg-white">
              <h2 className="text-xl font-semibold mb-6">Darstellung</h2>
              <p className="text-gray-600 mb-6">
                Passe das Erscheinungsbild der Website an deine Präferenzen an.
              </p>
              
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="font-medium">Dunkler Modus</p>
                  <p className="text-gray-500 text-sm">Aktiviert ein dunkles Farbschema für die Website</p>
                </div>
                <Switch 
                  checked={darkMode} 
                  onCheckedChange={setDarkMode}
                  className="data-[state=checked]:bg-db-red"
                />
              </div>
            </Card>
            
            <Card className="border shadow-md p-6 bg-white">
              <h2 className="text-xl font-semibold mb-6">Translate Website</h2>
              <p className="text-gray-600 mb-6">
                Stelle die Sprache der Website nach deinen Bedürfnissen ein.
              </p>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button 
                    variant={translateOption === "auto" ? "default" : "outline"}
                    className={translateOption === "auto" ? "bg-db-red hover:bg-db-darkred" : ""}
                    onClick={handleAutomaticTranslation}
                  >
                    <Globe className="mr-2 h-4 w-4" />
                    Translate Automatically
                  </Button>
                  
                  <Select onValueChange={handleManualTranslationSelect} value={selectedLanguage}>
                    <SelectTrigger 
                      className={`${translateOption === "manual" ? "border-db-red ring-1 ring-db-red" : ""}`}
                    >
                      <SelectValue placeholder="Translate Manually" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Deutsch">Deutsch</SelectItem>
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="Español">Español</SelectItem>
                      <SelectItem value="Français">Français</SelectItem>
                      <SelectItem value="Italiano">Italiano</SelectItem>
                      <SelectItem value="日本語">日本語</SelectItem>
                      <SelectItem value="한국어">한국어</SelectItem>
                      <SelectItem value="Nederlands">Nederlands</SelectItem>
                      <SelectItem value="Polski">Polski</SelectItem>
                      <SelectItem value="Português">Português</SelectItem>
                      <SelectItem value="Русский">Русский</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {translateOption === "manual" && (
                  <div className="p-3 bg-gray-100 rounded-md">
                    <p className="text-sm text-gray-600">
                      Auf allen Seiten wird jetzt ein Übersetzungsbutton für {selectedLanguage} angezeigt.
                    </p>
                  </div>
                )}
              </div>
            </Card>
            
            <div className="flex justify-end">
              <Button 
                className="bg-db-red hover:bg-db-darkred" 
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
