
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export interface PlayerRole {
  name: 'Signaller' | 'Conductor' | 'Platform Employee' | 'Driver' | 'Passenger';
  abbreviation: string;
  bgColor: string;
}

export const PLAYER_ROLES: Record<string, PlayerRole> = {
  SIGNALLER: {
    name: 'Signaller',
    abbreviation: 'SG',
    bgColor: 'bg-[#F2FCE2] text-emerald-800 border-emerald-200'
  },
  CONDUCTOR: {
    name: 'Conductor',
    abbreviation: 'CO',
    bgColor: 'bg-[#FEF7CD] text-amber-800 border-amber-200'
  },
  PLATFORM_EMPLOYEE: {
    name: 'Platform Employee',
    abbreviation: 'PE',
    bgColor: 'bg-[#FEF7CD] text-amber-800 border-amber-200'
  },
  DRIVER: {
    name: 'Driver',
    abbreviation: 'DR',
    bgColor: 'bg-db-red text-white border-red-700'
  },
  PASSENGER: {
    name: 'Passenger',
    abbreviation: 'PS',
    bgColor: 'bg-[#F1F0FB] text-gray-700 border-gray-300'
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
    // In a real app, this would navigate to a player detail page
    navigate(`/player/${player.id}`);
  };

  return (
    <Card 
      className={`border cursor-pointer hover:shadow-md transition-all ${role.bgColor}`}
      onClick={handleClick}
    >
      <CardContent className="p-4 flex items-center gap-3">
        <Avatar className="h-10 w-10 border-2 border-white">
          <AvatarImage src={player.avatar || '/placeholder.svg'} alt={player.username} />
          <AvatarFallback>{player.username.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        
        <div className="flex-grow">
          <p className="font-medium">{player.username}</p>
          <div className="flex items-center gap-1">
            <Badge variant="outline" className="text-xs">
              {role.name}
            </Badge>
            {player.groupRank && (
              <span className="text-xs text-gray-500">{role.abbreviation}</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
