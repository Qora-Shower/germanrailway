
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
    username: "Player" + playerId,
    avatar: "/lovable-uploads/06a3d8f0-56b5-4a6a-8895-17ec0c7a0425.png",
    role: "DRIVER" as keyof typeof PLAYER_ROLES,
    groupRank: "Senior Driver",
    joinDate: "2023-05-15",
    trainId: "1A63",
    trainType: "AirLink R056",
    trainClass: "Class 802 (Double) with 10 coaches",
    trainUnit: "Unit 802034 + 802033",
    trainSpeed: "125 mph",
    nextStop: "Airport Parkway",
    route: "Leighton Stepford Road to Airport Central",
    currentDelay: 1,
    delayReason: "The train was delayed on a previous service.",
    departureTime: "09:37:16",
    stations: [
      { name: "Leighton Stepford Road", time: "09:36", departed: true, delay: 1 },
      { name: "Airport Parkway", time: "09:41", departed: false, estimated: "09:42" },
      { name: "Airport Central", time: "09:45", departed: false }
    ]
  };

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
            Back
          </Button>
          
          <Card className="border-2 border-db-red overflow-hidden">
            <div className="bg-db-darkred text-white p-6">
              <h1 className="text-2xl sm:text-3xl font-bold">{playerData.trainId} {playerData.route}</h1>
              <div className="flex items-center mt-2">
                <Train className="h-5 w-5 mr-2" />
                <p className="font-medium">{playerData.trainType}</p>
              </div>
              <div className="mt-2">
                <p className="text-sm">{playerData.trainClass}</p>
                <p className="text-sm mt-1">
                  # {playerData.trainUnit} <span className="ml-2">⚡ {playerData.trainSpeed}</span>
                </p>
              </div>
              
              <div className="mt-4 flex items-center">
                <Train className="h-5 w-5 mr-2" />
                <p className="text-xl">The next stop is {playerData.nextStop}.</p>
              </div>
            </div>
            
            {playerData.currentDelay > 0 && (
              <div className="bg-amber-950 text-amber-500 p-4 flex items-start">
                <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <p>This service is running {playerData.currentDelay} minute late.</p>
                  {playerData.delayReason && (
                    <p className="mt-2">This service started {playerData.currentDelay} minute late because {playerData.delayReason}</p>
                  )}
                </div>
              </div>
            )}
            
            <div className="p-6">
              <div className="relative">
                {playerData.stations.map((station, index) => (
                  <div key={index} className="flex mb-6 relative">
                    <div className="mr-6 text-right w-16">
                      <span className={station.departed ? "text-emerald-600" : "text-gray-500"}>
                        {station.time}
                      </span>
                      {station.estimated && !station.departed && (
                        <div className="text-xs text-amber-600">Est. {station.estimated}</div>
                      )}
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center z-10 ${station.departed ? "bg-emerald-500 text-white" : "bg-gray-300"}`}>
                        {station.departed ? <Flag className="h-3 w-3" /> : index === playerData.stations.length - 1 ? "•" : "•"}
                      </div>
                      {index < playerData.stations.length - 1 && (
                        <div className={`h-full w-0.5 absolute top-6 ml-3 ${index === 0 ? "bg-emerald-500" : "bg-gray-300"}`}></div>
                      )}
                    </div>
                    
                    <div className="ml-4 flex-grow">
                      <p className={`font-medium ${station.departed ? "text-emerald-700" : "text-gray-700"}`}>
                        {station.name}
                      </p>
                      
                      {station.departed && (
                        <div className="text-sm text-gray-600">
                          <Clock className="h-3 w-3 inline mr-1" />
                          Departed at {playerData.departureTime}
                          {station.delay && station.delay > 0 && (
                            <span className="text-amber-600 ml-2">(Delay: {station.delay} minute)</span>
                          )}
                        </div>
                      )}
                      
                      {index === 0 && (
                        <div className="mt-2">
                          <div className="flex items-center mt-1">
                            <Badge className={`${role.bgColor} mr-2`}>
                              {role.abbreviation}
                            </Badge>
                            <span className="text-sm">{playerData.username}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PlayerDetail;
