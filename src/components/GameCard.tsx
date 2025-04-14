
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface GameCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
}

const GameCard = ({ id, title, description, image, category, featured = false }: GameCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className={`game-card h-full ${featured ? 'col-span-2' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0 h-full">
        <div className="relative h-full flex flex-col">
          <div className="relative overflow-hidden" style={{ height: featured ? '250px' : '180px' }}>
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-db-red text-white text-xs px-2 py-1 rounded-full">
              {category}
            </div>
          </div>
          
          <div className="p-4 flex-grow flex flex-col">
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p className="text-db-gray text-sm line-clamp-2 mb-4">{description}</p>
            
            <div className="mt-auto">
              <Button className="w-full bg-db-red hover:bg-db-darkred text-white font-medium">
                <Play className="h-4 w-4 mr-2" /> Play Now
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
