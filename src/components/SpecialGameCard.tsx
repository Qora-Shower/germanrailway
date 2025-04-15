
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface SpecialGameCardProps {
  title: string;
  description: string;
  image: string;
  gameLink: string;
  groupLink: string;
  discordLink: string;
}

const SpecialGameCard = ({
  title,
  description,
  image,
  gameLink,
  groupLink,
  discordLink
}: SpecialGameCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-5">{description}</p>
        
        <div className="space-y-3">
          <a 
            href={gameLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block"
          >
            <Button className="w-full bg-db-red hover:bg-db-darkred text-white flex items-center justify-center">
              <ExternalLink className="mr-2 h-4 w-4" />
              Play
            </Button>
          </a>
          
          <a 
            href={groupLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block"
          >
            <Button 
              variant="outline" 
              className="w-full border-db-red text-db-red hover:bg-db-red hover:text-white flex items-center justify-center"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Join Group
            </Button>
          </a>
          
          <a 
            href={discordLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block"
          >
            <Button 
              variant="outline" 
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center justify-center"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Join Discord
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpecialGameCard;
