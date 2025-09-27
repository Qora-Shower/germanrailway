
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpecialGameCard from "@/components/SpecialGameCard";
import Hero from "@/components/Hero";
import { Play, Users, Star, Gamepad2, ArrowRight, Download, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-primary border-primary/20">
                Why Choose DB Roblox?
              </Badge>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Experience Railway Excellence
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Immerse yourself in authentic German railway operations with cutting-edge simulation technology
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Realistic Simulation</h3>
                <p className="text-muted-foreground">Experience authentic train operations with detailed physics and realistic controls</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
                <p className="text-muted-foreground">Join thousands of railway enthusiasts in multiplayer experiences</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Professional Training</h3>
                <p className="text-muted-foreground">Learn real railway procedures and safety protocols</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="animate-fade-in">
                <div className="text-3xl font-bold text-primary mb-2">500K+</div>
                <div className="text-muted-foreground">Active Players</div>
              </div>
              <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Game Modes</div>
              </div>
              <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
              <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Game Showcase */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4 text-primary border-primary/20">
                  Featured Experience
                </Badge>
                <h2 className="text-4xl font-bold mb-6">Deutsche Bahn AG Roblox</h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
                  The ultimate German railway simulation experience. Master authentic operations, explore detailed routes, and become a certified virtual conductor.
                </p>
              </div>
              
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg border">
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
          </div>
        </section>

        {/* Featured Games Grid */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-primary border-primary/20">
                Game Library
              </Badge>
              <h2 className="text-4xl font-bold mb-6">Discover More Experiences</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From training modules to advanced simulations, explore our comprehensive railway gaming ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {games.slice(0, 6).map((game, index) => (
                <div 
                  key={game.id} 
                  className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border group animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={game.image} 
                      alt={game.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                      {game.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {game.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {game.description}
                    </p>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Play className="w-4 h-4 mr-2" />
                      Play Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" variant="outline" className="group">
                View All Games
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Railway Journey?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join the Deutsche Bahn community today and experience the future of railway simulation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group">
                <Download className="w-5 h-5 mr-2" />
                Play on Roblox
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Users className="w-5 h-5 mr-2" />
                Join Community
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
