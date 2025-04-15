
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import GameCard from "./GameCard";

interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface FeaturedGamesProps {
  games: Game[];
}

const FeaturedGames = ({ games }: FeaturedGamesProps) => {
  return (
    <div className="w-full mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-db-darkgray">Usefull Info</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon" className="rounded-full border-db-red text-db-red hover:bg-db-lightgray">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full border-db-red text-db-red hover:bg-db-lightgray">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.slice(0, 3).map((game) => (
          <GameCard 
            key={game.id}
            id={game.id}
            title={game.title}
            description={game.description}
            image={game.image}
            category={game.category}
            featured={game.id === games[0].id}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedGames;
