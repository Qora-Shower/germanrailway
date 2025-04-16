
import React from 'react';
import { Flag, Info } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface Train {
  time: string;
  id: string;
  route: string;
  destination: string;
  platform: string;
  trainClass: string;
  driver: {
    username: string;
    rank: string;
  };
  guard?: {
    username: string;
    rank: string;
  };
}

interface ConductorViewProps {
  stationName: string;
  platforms: string[];
  trains: Train[];
}

const ConductorView: React.FC<ConductorViewProps> = ({
  stationName,
  platforms,
  trains
}) => {
  return (
    <div className="space-y-6">
      <Card className="border-2 border-db-red">
        <CardHeader className="bg-db-darkred text-white py-4">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold">Züge abfertigen in {stationName}</h2>
          </div>
          <div className="flex items-center mt-2">
            <Flag className="h-4 w-4 mr-2" />
            <p>Gleis {platforms.join(', ')}</p>
          </div>
        </CardHeader>
        
        <CardContent className="p-0 divide-y divide-gray-100">
          {trains.map((train, index) => (
            <div key={index} className="p-4 hover:bg-gray-50">
              <div className="flex items-center">
                <div className="w-16 text-lg font-semibold text-db-red">{train.time}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Flag className="h-4 w-4 text-db-red" />
                    <span className="font-bold">{train.id}</span>
                    <span className="text-gray-600">nach {train.destination}</span>
                  </div>
                  <div className="text-sm mt-1">Gleis {train.platform}</div>
                  <div className="text-xs text-gray-500 mt-1">{train.trainClass}</div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
                    <div className="flex items-center">
                      <Info className="h-3 w-3 mr-1 text-gray-500" />
                      <span className="text-xs text-gray-600">Fahrer:</span>
                      <Badge className="ml-2 bg-db-red text-white text-xs">
                        {train.driver.rank}
                      </Badge>
                      <span className="ml-1 text-sm">{train.driver.username}</span>
                    </div>
                    
                    {train.guard && (
                      <div className="flex items-center ml-0 sm:ml-4">
                        <Info className="h-3 w-3 mr-1 text-gray-500" />
                        <span className="text-xs text-gray-600">Schaffner:</span>
                        <Badge className="ml-2 bg-db-red text-white text-xs">
                          {train.guard.rank}
                        </Badge>
                        <span className="ml-1 text-sm">{train.guard.username}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ConductorView;
