
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedGames from "@/components/FeaturedGames";
import GameGrid from "@/components/GameGrid";
import Footer from "@/components/Footer";
import SpecialGameCard from "@/components/SpecialGameCard";

const Index = () => {
  // Sample game data - in a real app, this would come from an API
  const games = [
    {
      id: "1",
      title: "Trainings Sessions",
      description: "Starts your career here",
      image: "https://images.unsplash.com/photo-1516199423456-1f1e91b06f25?q=80&w=1000",
      category: "Training"
    },
    {
      id: "2",
      title: "Sneak Peaks",
      description: "Be decided to see the next unique Sneak peak.",
      image: "https://images.unsplash.com/photo-1552986037-cf7b9eebd374?q=80&w=1000",
      category: "Sneak Peak"
    },
    {
      id: "3",
      title: "Station",
      description: "Learn about some Germans Station here.",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1000",
      category: "Station"
    },
    {
      id: "4",
      title: "DB Quiz Master",
      description: "Test your knowledge of German railway history, trains, and routes.",
      image: "https://images.unsplash.com/photo-1568144628871-ccbb00fc297c?q=80&w=1000",
      category: "Quiz"
    },
    {
      id: "5",
      title: "Rail Adventure",
      description: "Embark on an epic journey across Germany with challenges at each station.",
      image: "https://images.unsplash.com/photo-1532105956626-9569c03602f6?q=80&w=1000",
      category: "Adventure"
    },
    {
      id: "6",
      title: "Signal Master",
      description: "Learn how to manage complex signaling systems on busy track sections.",
      image: "https://images.unsplash.com/photo-1518784095377-c38a8c0f1ea4?q=80&w=1000",
      category: "Educational"
    },
    {
      id: "7",
      title: "High Speed Challenge",
      description: "Drive an ICE high-speed train through challenging routes across Germany.",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1000",
      category: "Simulation"
    },
    {
      id: "8",
      title: "Training",
      description: "Join railway empire from scratch and compete with other companies.",
      image: "https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d?q=80&w=1000",
      category: "Training"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Deutsche Bahn AG Roblox</h2>
            <div className="max-w-4xl mx-auto">
              <SpecialGameCard
                title="Deutsche Bahn AG Roblox"
                description="Explore the exciting world of German railways in this immersive Roblox experience!"
                image="/lovable-uploads/2c2747d7-8de1-4fd0-97c1-28b433fd142f.png"
                gameLink="https://www.roblox.com/de/games/116725111473963/Deutsche-Bahn-AG-Roblox"
                groupLink="https://www.roblox.com/de/communities/33684346/DB-Deutsche-Bahn-AG"
                discordLink="https://discord.gg/64uatkS9Zm"
              />
            </div>
          </div>
          
          <FeaturedGames games={games.slice(0, 3)} />
          <GameGrid games={games} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
