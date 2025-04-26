
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, AlertTriangle } from "lucide-react";

interface PlayerInfoProps {
  role: string;
  location?: string;
  data: any;
}

const PlayerInfo: React.FC<PlayerInfoProps> = ({ role, location, data }) => {
  if (role === "PASSENGER") {
    return (
      <Card className="p-4">
        <div className="flex items-center gap-2 text-amber-600">
          <AlertTriangle className="h-5 w-5" />
          <p>No detailed data available - Passenger at {location}</p>
        </div>
      </Card>
    );
  }

  // ... implement other role views based on role type (SIGNALLER, PLATFORM_STAFF, CONDUCTOR)
  
  return null;
};

export default PlayerInfo;
