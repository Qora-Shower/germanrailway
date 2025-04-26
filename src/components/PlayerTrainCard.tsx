
import { Card } from "@/components/ui/card";
import { Train, Clock, MapPin, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Stop {
  name: string;
  time: string;
  platform: string;
  departed?: boolean;
  current?: boolean;
  next?: boolean;
}

interface TrainRoute {
  id: string;
  routeNumber: string;
  type: string;
  from: string;
  to: string;
  via?: string;
  trainUnit: string;
  currentStation: string;
  nextStation?: string;
  platform: string;
  delay?: number;
  status: "active" | "cancelled" | string;
  stops: Stop[];
}

interface PlayerTrainCardProps {
  train: TrainRoute;
}

const PlayerTrainCard: React.FC<PlayerTrainCardProps> = ({ train }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "ICE":
        return "border-blue-800";
      case "RE":
        return "border-db-red";
      case "RB":
        return "border-red-600";
      case "S":
        return "border-green-600";
      default:
        return "border-gray-600";
    }
  };

  return (
    <Card className="p-0 overflow-hidden bg-white">
      <div className={cn(
        "border-2 rounded-lg",
        getTypeColor(train.type)
      )}>
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Train className="h-5 w-5 text-db-red" />
              <div>
                <h3 className="text-lg font-bold">{train.id}</h3>
                <p className="text-sm text-gray-500">{train.routeNumber}</p>
              </div>
            </div>
            {train.status === "cancelled" && (
              <div className="flex items-center text-red-600">
                <X className="h-5 w-5 mr-1" />
                <span className="font-medium">Cancelled</span>
              </div>
            )}
          </div>
          
          <div className="mt-3 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">From</p>
              <p className="font-medium">{train.from}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">To</p>
              <p className="font-medium">{train.to}</p>
            </div>
          </div>
          
          {train.via && (
            <div className="mt-2">
              <p className="text-sm text-gray-500">Via</p>
              <p className="text-sm">{train.via}</p>
            </div>
          )}
        </div>
        
        {train.status !== "cancelled" && (
          <div className="p-4">
            <div className="space-y-4">
              {train.stops.map((stop, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-16">
                    <span className={cn(
                      "text-sm font-medium",
                      stop.departed ? "text-gray-400" : "text-gray-900"
                    )}>
                      {stop.time}
                    </span>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex items-center gap-2">
                      <div className={cn(
                        "h-3 w-3 rounded-full",
                        stop.current ? "bg-green-500" :
                        stop.departed ? "bg-gray-300" :
                        "bg-blue-500"
                      )} />
                      <div className="flex-grow">
                        <p className={cn(
                          "font-medium",
                          stop.departed ? "text-gray-400" : "text-gray-900"
                        )}>
                          {stop.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          Platform {stop.platform}
                        </p>
                      </div>
                    </div>
                    {index < train.stops.length - 1 && (
                      <div className="ml-1.5 h-8 w-0.5 bg-gray-200" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default PlayerTrainCard;
