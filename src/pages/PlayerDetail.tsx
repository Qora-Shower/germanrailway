
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Train, Flag, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PLAYER_ROLES } from "@/components/PlayerCard";

const PlayerDetail = () => {
  const { playerId } = useParams();
  const navigate = useNavigate();
  
  // In a real app, this would be fetched from an API based on the playerId
  const playerData = {
    id: Number(playerId) || 1,
    username: "Spieler" + playerId,
    avatar: "/lovable-uploads/06a3d8f0-56b5-4a6a-8895-17ec0c7a0425.png",
    role: "DRIVER" as keyof typeof PLAYER_ROLES,
  };

  // Abhängig von der Spielerrolle verschiedene Daten anzeigen
  const getRoleSpecificData = () => {
    switch (playerData.role) {
      case "DRIVER":
        return {
          trainId: "RE1",
          trainType: "RegionalExpress",
          trainClass: "IC 2061 - Triebwagen Talent 2",
          trainUnit: "442 113",
          trainSpeed: "160 km/h",
          nextStop: "Berlin Hbf",
          route: "Magdeburg Hbf nach Frankfurt (Oder)",
          currentDelay: 2,
          delayReason: "Signalstörung bei Berlin-Spandau.",
          departureTime: "10:42:16",
          stations: [
            { name: "Magdeburg Hbf", time: "09:36", departed: true, delay: 0, duration: 0 },
            { name: "Burg", time: "09:53", departed: true, delay: 0, duration: 17 },
            { name: "Genthin", time: "10:07", departed: true, delay: 0, duration: 14 },
            { name: "Brandenburg Hbf", time: "10:35", departed: true, delay: 0, duration: 28 },
            { name: "Berlin-Spandau", time: "10:57", departed: false, estimated: "10:59", duration: 22 },
            { name: "Berlin Hbf", time: "11:04", departed: false, estimated: "11:06", duration: 7 },
            { name: "Berlin Ostbahnhof", time: "11:12", departed: false, duration: 8 },
            { name: "Berlin-Lichtenberg", time: "11:19", departed: false, duration: 7 },
            { name: "Frankfurt (Oder)", time: "12:15", departed: false, duration: 56 }
          ]
        };
      case "PASSENGER":
        return null; // Keine Daten für Passagiere
      default:
        return {
          trainId: "ICE 576",
          trainType: "InterCityExpress",
          trainClass: "ICE 4 - BR 412",
          trainUnit: "412 038",
          trainSpeed: "250 km/h",
          nextStop: "Hannover Hbf",
          route: "München Hbf nach Hamburg Hbf",
          currentDelay: 5,
          delayReason: "Verzögerung bei der Abfahrt in München.",
          departureTime: "09:27:16",
          stations: [
            { name: "München Hbf", time: "09:22", departed: true, delay: 5, duration: 0 },
            { name: "Nürnberg Hbf", time: "10:10", departed: true, delay: 5, duration: 48 },
            { name: "Würzburg Hbf", time: "10:48", departed: true, delay: 4, duration: 38 },
            { name: "Hannover Hbf", time: "12:31", departed: false, estimated: "12:35", duration: 103 },
            { name: "Hamburg Hbf", time: "13:54", departed: false, duration: 83 }
          ]
        };
    }
  };

  const roleData = getRoleSpecificData();
  const role = PLAYER_ROLES[playerData.role];
  
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück
          </Button>
          
          <div className="flex items-center mb-6">
            <Badge className={`${role.bgColor} mr-3 py-1 px-3`}>
              {role.abbreviation}
            </Badge>
            <h1 className="text-2xl font-bold">{playerData.username}</h1>
          </div>
          
          {roleData ? (
            <Card className="border-2 border-db-red overflow-hidden shadow-lg">
              <div className="bg-db-darkred text-white p-6">
                <h1 className="text-2xl sm:text-3xl font-bold">{roleData.trainId} {roleData.route}</h1>
                <div className="flex items-center mt-2">
                  <Train className="h-5 w-5 mr-2" />
                  <p className="font-medium">{roleData.trainType}</p>
                </div>
                <div className="mt-2">
                  <p className="text-sm">{roleData.trainClass}</p>
                  <p className="text-sm mt-1">
                    # {roleData.trainUnit} <span className="ml-2">⚡ {roleData.trainSpeed}</span>
                  </p>
                </div>
                
                <div className="mt-4 flex items-center">
                  <Train className="h-5 w-5 mr-2" />
                  <p className="text-xl">Nächster Halt: {roleData.nextStop}</p>
                </div>
              </div>
              
              {roleData.currentDelay > 0 && (
                <div className="bg-amber-950 text-amber-500 p-4 flex items-start">
                  <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
                  <div>
                    <p>Diese Verbindung hat {roleData.currentDelay} Minuten Verspätung.</p>
                    {roleData.delayReason && (
                      <p className="mt-2">Grund: {roleData.delayReason}</p>
                    )}
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <div className="relative">
                  {roleData.stations.map((station, index) => {
                    const isActive = index === 0 || 
                                    (roleData.stations[index-1].departed && !station.departed);
                    return (
                    <div key={index} className="flex mb-6 relative">
                      <div className="mr-6 text-right w-16">
                        <span className={station.departed ? "text-emerald-600 font-semibold" : "text-gray-500"}>
                          {station.time}
                        </span>
                        {station.estimated && !station.departed && (
                          <div className="text-xs text-amber-600 font-semibold">Est. {station.estimated}</div>
                        )}
                        {station.duration > 0 && (
                          <div className="text-xs text-gray-400 mt-1">+{station.duration} min</div>
                        )}
                      </div>
                      
                      <div className="flex flex-col items-center">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center z-10 ${
                          station.departed 
                            ? "bg-emerald-500 text-white" 
                            : isActive 
                              ? "bg-db-red text-white ring-4 ring-db-red/20" 
                              : "bg-gray-300"
                        }`}>
                          {station.departed ? <Flag className="h-3 w-3" /> : index === 0 ? "•" : "•"}
                        </div>
                        {index < roleData.stations.length - 1 && (
                          <div className={`h-full w-0.5 absolute top-6 ml-3 ${
                            station.departed ? "bg-emerald-500" : "bg-gray-300"
                          }`}></div>
                        )}
                      </div>
                      
                      <div className="ml-4 flex-grow">
                        <p className={`font-medium ${
                          station.departed 
                            ? "text-emerald-700" 
                            : isActive 
                              ? "text-db-red" 
                              : "text-gray-700"
                        }`}>
                          {station.name}
                        </p>
                        
                        {station.departed && (
                          <div className="text-sm text-gray-600">
                            <Clock className="h-3 w-3 inline mr-1" />
                            Abgefahren um {roleData.departureTime}
                            {station.delay && station.delay > 0 && (
                              <span className="text-amber-600 ml-2">(Verspätung: {station.delay} Min.)</span>
                            )}
                          </div>
                        )}
                        
                        {index === 0 && (
                          <div className="mt-2">
                            <div className="text-sm text-gray-500">
                              Zug wurde von {playerData.username} gefahren
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )})}
                </div>
              </div>
            </Card>
          ) : (
            <Card className="border shadow-lg p-8 text-center">
              <div className="flex flex-col items-center justify-center py-12">
                <Train className="h-16 w-16 text-gray-300 mb-4" />
                <h2 className="text-2xl font-semibold text-gray-700">Keine Zugdaten verfügbar</h2>
                <p className="mt-2 text-gray-500 max-w-md">
                  Für Passagiere werden keine aktiven Zugverbindungen angezeigt. 
                  Passagiere können nur mit Zügen reisen, die von Fahrern gesteuert werden.
                </p>
              </div>
            </Card>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PlayerDetail;
