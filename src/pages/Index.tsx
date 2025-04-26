
import { useState } from "react";
import Navbar from "@/components/Navbar";
import FeaturedGames from "@/components/FeaturedGames";
import GameGrid from "@/components/GameGrid";
import Footer from "@/components/Footer";
import SpecialGameCard from "@/components/SpecialGameCard";
import Hero from "@/components/Hero";

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
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 text-center border-b border-gray-100">
              <h1 className="text-4xl font-bold mb-4 text-db-red">Deutsche Bahn AG Roblox</h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Explore the exciting world of German railways through interactive Roblox games and challenges.
                Join our community of train enthusiasts and railroad professionals!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="btn-db flex items-center">
                  <span className="mr-2">Explore Games</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                <button className="bg-white text-db-red border border-db-red hover:bg-gray-50 px-4 py-2 rounded-md transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="w-full max-w-5xl mx-auto p-6">
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
          
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-db-red">Featured Experiences</h2>
              <button className="text-db-red hover:underline flex items-center">
                View All
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {games.slice(0, 3).map((game) => (
                <div key={game.id} className="game-card bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={game.image} 
                      alt={game.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="bg-white text-db-red text-xs font-bold px-3 py-1 rounded-full">
                        {game.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                    <p className="text-gray-600 mb-4">{game.description}</p>
                    <button className="text-db-red font-medium hover:underline">Play Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-db-red">All Games</h2>
              <div className="flex items-center bg-white rounded-lg border border-gray-200 p-2">
                <button className="px-3 py-1 rounded-md bg-db-red text-white mr-2">All</button>
                <button className="px-3 py-1 rounded-md hover:bg-gray-100 mr-2">Simulation</button>
                <button className="px-3 py-1 rounded-md hover:bg-gray-100">Training</button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {games.map((game) => (
                <div key={game.id} className="game-card bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={game.image} 
                      alt={game.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-3 text-white">
                        <h3 className="font-bold">{game.title}</h3>
                        <p className="text-sm text-white/80">{game.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
