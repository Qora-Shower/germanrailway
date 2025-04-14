
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface GameCategoriesProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const GameCategories = ({ categories, activeCategory, onCategoryChange }: GameCategoriesProps) => {
  return (
    <div className="w-full mb-8">
      <h2 className="text-2xl font-bold text-db-darkgray mb-4">Categories</h2>
      <div className="hidden md:block">
        <Tabs defaultValue={activeCategory} onValueChange={onCategoryChange} className="w-full">
          <TabsList className="w-full justify-start bg-db-lightgray h-auto p-1 space-x-1">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="data-[state=active]:bg-white data-[state=active]:text-db-red data-[state=active]:shadow-sm py-2 px-4"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      
      <div className="flex md:hidden overflow-x-auto pb-2 gap-2">
        {categories.map((category) => (
          <Button 
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            className={activeCategory === category ? "bg-db-red text-white" : "bg-white text-db-gray border-db-gray"}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default GameCategories;
