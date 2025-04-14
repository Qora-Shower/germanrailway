
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedGames from "@/components/FeaturedGames";
import GameGrid from "@/components/GameGrid";
import Footer from "@/components/Footer";

const Index = () => {
  // Sample game data - in a real app, this would come from an API
  const games = [
    {
      id: "1",
      title: "Train Conductor Challenge",
      description: "Manage train arrivals and departures across Germany's busiest stations.",
      image: "https://images.unsplash.com/photo-1516199423456-1f1e91b06f25?q=80&w=1000",
      category: "Simulation"
    },
    {
      id: "2",
      title: "Track Builder",
      description: "Design and build your own railway network connecting major German cities.",
      image: "https://images.unsplash.com/photo-1552986037-cf7b9eebd374?q=80&w=1000",
      category: "Strategy"
    },
    {
      id: "3",
      title: "Station Manager",
      description: "Run a busy Deutsche Bahn station and keep all operations running smoothly.",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1000",
      category: "Management"
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
      title: "Railway Tycoon",
      description: "Build your own railway empire from scratch and compete with other companies.",
      image: "https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d?q=80&w=1000",
      category: "Strategy"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <div className="container mx-auto px-4 py-12">
          <FeaturedGames games={games.slice(0, 3)} />
          <GameGrid games={games} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
