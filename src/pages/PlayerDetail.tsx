
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Train, Flag, AlertTriangle, Users, Signal, Info, MapPin, ExternalLink } from "lucide-react";
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
      case "SIGNALLER":
        return {
          stationName: "Berlin Hauptbahnhof",
          area: "Berlin Mitte",
          activeTrains: [
            {
              id: "ICE 576",
              driver: "SpeedDemon",
              nextStop: "Berlin Hbf",
              estimatedArrival: "11:05",
              platform: "5",
              delay: 0
            },
            {
              id: "RE1",
              driver: "TrainPilot33",
              nextStop: "Berlin Hbf",
              estimatedArrival: "11:06",
              platform: "2",
              delay: 2
            },
            {
              id: "RB10",
              driver: "SteadyDriver44",
              nextStop: "Berlin-Spandau",
              estimatedArrival: "11:15",
              platform: "3",
              delay: 1
            }
          ]
        };
      case "CONDUCTOR":
        return {
          stationName: "Berlin Hauptbahnhof",
          trainId: "ICE 576",
          trainRoute: "München Hbf nach Hamburg Hbf",
          nextStop: "Berlin Hbf",
          departsAt: "11:05",
          currentDelay: 0,
          platform: "5",
          driver: "SpeedDemon"
        };
      case "PASSENGER":
        return {
          currentTrain: {
            id: "S1",
            type: "S-Bahn",
            from: "Oranienburg",
            to: "Wannsee",
            nextStop: "Berlin Hbf",
            arrivesAt: "11:10",
            currentDelay: 3
          }
        };
      default:
        return null;
    };
  }

  const roleData = getRoleSpecificData();
  const role = PLAYER_ROLES[playerData.role];
  
  const renderRoleSpecificView = () => {
    switch (playerData.role) {
      case "DRIVER":
        return renderDriverView();
      case "SIGNALLER":
        return renderSignallerView();
      case "CONDUCTOR":
        return renderConductorView();
      case "PASSENGER":
        return renderPassengerView();
      default:
        return (
          <Card className="border-0 shadow-lg p-8 text-center bg-[#0a112b]">
            <div className="flex flex-col items-center justify-center py-12">
              <Train className="h-16 w-16 text-gray-600 mb-4" />
              <h2 className="text-2xl font-semibold text-white">Keine Daten verfügbar</h2>
              <p className="mt-2 text-gray-400 max-w-md">
                Für diesen Spieler stehen keine weiteren Informationen zur Verfügung.
              </p>
            </div>
          </Card>
        );
    }
  };

  const renderDriverView = () => {
    if (!roleData) return null;
    
    return (
      <Card className="border-0 overflow-hidden shadow-lg bg-[#0a112b]">
        <div className="bg-db-red text-white p-6">
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
            <div className="absolute left-[25px] top-2 bottom-6 w-0.5 bg-gray-700"></div>
            {roleData.stations.map((station, index) => {
              const isActive = index === 0 || 
                              (roleData.stations[index-1].departed && !station.departed);
              return (
              <div key={index} className="flex mb-8 relative">
                <div className="mr-6 text-right w-16">
                  <span className={station.departed ? "text-emerald-400 font-semibold" : "text-gray-400"}>
                    {station.time}
                  </span>
                  {station.estimated && !station.departed && (
                    <div className="text-xs text-amber-500 font-semibold">Est. {station.estimated}</div>
                  )}
                  {station.duration > 0 && (
                    <div className="text-xs text-gray-500 mt-1">+{station.duration} min</div>
                  )}
                </div>
                
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                  <div className={`h-5 w-5 rounded-full flex items-center justify-center z-10 border-2 ${
                    station.departed 
                      ? "bg-emerald-700 border-emerald-500 text-white" 
                      : isActive 
                        ? "bg-db-red border-db-red text-white ring-4 ring-db-red/20" 
                        : "bg-gray-800 border-gray-600"
                  }`}>
                    {station.departed ? <Flag className="h-3 w-3" /> : ""}
                  </div>
                </div>
                
                <div className="ml-10 flex-grow">
                  <p className={`font-medium ${
                    station.departed 
                      ? "text-emerald-400" 
                      : isActive 
                        ? "text-db-red" 
                        : "text-white"
                  }`}>
                    {station.name}
                  </p>
                  
                  {station.departed && (
                    <div className="text-sm text-gray-400">
                      <Clock className="h-3 w-3 inline mr-1" />
                      Abgefahren um {roleData.departureTime}
                      {station.delay && station.delay > 0 && (
                        <span className="text-amber-500 ml-2">(Verspätung: {station.delay} Min.)</span>
                      )}
                    </div>
                  )}
                  
                  {index === 0 && (
                    <div className="mt-2">
                      <div className="text-sm text-gray-400">
                        Zug wird von {playerData.username} gefahren
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )})}
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <div></div>
              <Button variant="link" className="text-blue-400 p-0">
                <span className="underline mr-1">Details Information</span>
                <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  };

  const renderSignallerView = () => {
    if (!roleData) return null;
    
    return (
      <Card className="border-0 overflow-hidden shadow-lg bg-[#0a112b]">
        <div className="bg-emerald-700 text-white p-6">
          <h1 className="text-2xl sm:text-3xl font-bold">Stellwerk: {roleData.stationName}</h1>
          <div className="flex items-center mt-2">
            <Signal className="h-5 w-5 mr-2" />
            <p className="font-medium">Signalbereich {roleData.area}</p>
          </div>
        </div>
        
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center text-white">
            <Train className="h-5 w-5 mr-2 text-emerald-400" />
            <span>Aktive Züge im Bereich</span>
          </h2>
          
          <div className="space-y-4">
            {roleData.activeTrains.map((train, index) => (
              <div key={index} className="p-4 bg-[#091029] rounded-lg border border-gray-800 hover:bg-[#0c1433] transition-colors cursor-pointer">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-lg text-white">{train.id}</p>
                    <p className="text-sm text-gray-400">Fahrer: {train.driver}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-white">Gleis {train.platform}</p>
                    <p className="text-sm">
                      Ankunft: {train.estimatedArrival}
                      {train.delay > 0 && (
                        <span className="text-amber-500 ml-1">(+{train.delay})</span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <div></div>
              <Button variant="link" className="text-blue-400 p-0">
                <span className="underline mr-1">Details Information</span>
                <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  };

  const renderConductorView = () => {
    if (!roleData) return null;
    
    return (
      <Card className="border-0 overflow-hidden shadow-lg bg-[#0a112b]">
        <div className="bg-amber-600 text-white p-6">
          <h1 className="text-2xl sm:text-3xl font-bold">{roleData.trainId}</h1>
          <p className="mt-1">{roleData.trainRoute}</p>
          <div className="flex items-center mt-4">
            <Train className="h-5 w-5 mr-2" />
            <p className="font-medium">Nächster Halt: {roleData.nextStop}</p>
            <span className="ml-3 px-2 py-0.5 bg-white text-amber-600 rounded text-sm">Gleis {roleData.platform}</span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="p-3 bg-[#091029] rounded-lg border border-gray-800">
              <p className="text-gray-400 text-sm">Abfahrt:</p>
              <p className="font-medium text-white">{roleData.departsAt}</p>
            </div>
            <div className="p-3 bg-[#091029] rounded-lg border border-gray-800">
              <p className="text-gray-400 text-sm">Lokführer:</p>
              <p className="font-medium text-white">{roleData.driver}</p>
            </div>
            <div className="p-3 bg-[#091029] rounded-lg border border-gray-800">
              <p className="text-gray-400 text-sm">Verspätung:</p>
              <p className={`font-medium ${roleData.currentDelay > 0 ? "text-amber-500" : "text-emerald-400"}`}>
                {roleData.currentDelay > 0 ? `+${roleData.currentDelay} Min.` : "Pünktlich"}
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-[#091029] rounded-lg border border-gray-800">
            <div className="flex items-center justify-center">
              <Users className="h-8 w-8 mr-3 text-amber-500" />
              <h2 className="text-xl font-semibold text-white">Zugführer: {playerData.username}</h2>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <div></div>
              <Button variant="link" className="text-blue-400 p-0">
                <span className="underline mr-1">Details Information</span>
                <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  };

  const renderPassengerView = () => {
    if (!roleData || !roleData.currentTrain) return (
      <Card className="border-0 shadow-lg p-8 text-center bg-[#0a112b]">
        <div className="flex flex-col items-center justify-center py-12">
          <Train className="h-16 w-16 text-gray-600 mb-4" />
          <h2 className="text-2xl font-semibold text-white">Keine Zugdaten verfügbar</h2>
          <p className="mt-2 text-gray-400 max-w-md">
            Für Passagiere werden keine aktiven Zugverbindungen angezeigt, wenn sie nicht in einem Zug sitzen. 
            Passagiere können mit Zügen reisen, die von Fahrern gesteuert werden.
          </p>
        </div>
      </Card>
    );
    
    const train = roleData.currentTrain;
    let headerColor = "";
    
    switch (train.type) {
      case "S-Bahn":
        headerColor = "bg-green-600";
        break;
      case "RB":
      case "RE":
        headerColor = "bg-db-red";
        break;
      case "IRE":
        headerColor = "bg-orange-600";
        break;
      case "IC":
      case "ICE":
        headerColor = "bg-blue-800";
        break;
      default:
        headerColor = "bg-gray-700";
    }
    
    return (
      <Card className="border-0 overflow-hidden shadow-lg bg-[#0a112b]">
        <div className={`${headerColor} text-white p-6`}>
          <h1 className="text-2xl sm:text-3xl font-bold">{train.id}</h1>
          <p className="mt-1">{train.from} → {train.to}</p>
          <div className="flex items-center mt-4">
            <Train className="h-5 w-5 mr-2" />
            <p className="font-medium">Nächster Halt: {train.nextStop}</p>
            {train.currentDelay > 0 && (
              <span className="ml-2 px-2 py-0.5 bg-amber-500 text-white text-xs rounded">
                +{train.currentDelay} Min.
              </span>
            )}
          </div>
        </div>
        
        <div className="p-6">
          <div className="p-6 bg-[#091029] rounded-lg border border-gray-800 mb-6">
            <div className="text-center">
              <p className="text-gray-400 mb-2">Sie reisen als Fahrgast</p>
              <h2 className="text-xl font-semibold text-white">{playerData.username}</h2>
              <p className="mt-4 text-sm text-gray-400">
                Ankunft in {train.nextStop}: {train.arrivesAt} Uhr
              </p>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <div></div>
              <Button variant="link" className="text-blue-400 p-0">
                <span className="underline mr-1">Details Information</span>
                <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </Card>
    );
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-[#040816] text-white">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück
          </Button>
          
          <div className="flex items-center mb-6">
            <Badge className={`${role.bgColor} ${role.textColor} ${role.borderColor} mr-3 py-1 px-3`}>
              {role.abbreviation}
            </Badge>
            <h1 className="text-2xl font-bold text-white">{playerData.username}</h1>
          </div>
          
          {renderRoleSpecificView()}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PlayerDetail;
