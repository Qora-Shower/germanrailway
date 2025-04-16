
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export interface PlayerRole {
  name: 'Signaller' | 'Conductor' | 'Platform Employees' | 'Driver' | 'Passenger';
  abbreviation: string;
  bgColor: string;
  germanName: string;
}

export const PLAYER_ROLES: Record<string, PlayerRole> = {
  SIGNALLER: {
    name: 'Signaller',
    abbreviation: 'SG',
    bgColor: 'bg-[#F2FCE2] text-emerald-800 border-emerald-200',
    germanName: 'Fahrdienstleiter'
  },
  CONDUCTOR: {
    name: 'Conductor',
    abbreviation: 'CD',
    bgColor: 'bg-[#FEF7CD] text-amber-800 border-amber-200',
    germanName: 'Schaffner'
  },
  PLATFORM_EMPLOYEE: {
    name: 'Platform Staff',
    abbreviation: 'PS',
    bgColor: 'bg-[#FEF7CD] text-amber-800 border-amber-200',
    germanName: 'Bahnsteigmitarbeiter'
  },
  DRIVER: {
    name: 'Driver',
    abbreviation: 'D',
    bgColor: 'bg-db-red text-white border-red-700',
    germanName: 'Lokführer'
  },
  PASSENGER: {
    name: 'Passenger',
    abbreviation: 'PG',
    bgColor: 'bg-[#F1F0FB] text-gray-700 border-gray-300',
    germanName: 'Fahrgast'
  }
};

export interface Player {
  id: number;
  username: string;
  avatar?: string;
  role: keyof typeof PLAYER_ROLES;
  groupRank?: string;
}

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  const navigate = useNavigate();
  const role = PLAYER_ROLES[player.role];

  const handleClick = () => {
    navigate(`/player/${player.id}`);
  };

  return (
    <Card 
      className={`border cursor-pointer hover:shadow-md transition-all ${role.bgColor}`}
      onClick={handleClick}
    >
      <CardContent className="p-4 flex items-center gap-3">
        <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
          <AvatarImage src={player.avatar || '/placeholder.svg'} alt={player.username} />
          <AvatarFallback>{player.username.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        
        <div className="flex-grow">
          <p className="font-medium">{player.username}</p>
          <div className="flex items-center gap-1">
            <Badge variant="outline" className="text-xs">
              {role.germanName}
            </Badge>
            <span className="text-xs font-semibold ml-1 bg-white bg-opacity-50 px-1 rounded">
              {role.abbreviation}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
