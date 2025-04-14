
import { useState } from "react";
import GameCard from "./GameCard";
import GameCategories from "./GameCategories";

interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface GameGridProps {
  games: Game[];
}

const GameGrid = ({ games }: GameGridProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  const categories = ["All", ...Array.from(new Set(games.map(game => game.category)))];
  
  const filteredGames = activeCategory === "All" 
    ? games 
    : games.filter(game => game.category === activeCategory);

  return (
    <div className="w-full mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-db-darkgray mb-6">Explore Games</h2>
      
      <GameCategories 
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredGames.map((game) => (
          <GameCard
            key={game.id}
            id={game.id}
            title={game.title}
            description={game.description}
            image={game.image}
            category={game.category}
          />
        ))}
      </div>
    </div>
  );
};

export default GameGrid;
