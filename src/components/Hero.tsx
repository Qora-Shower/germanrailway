
import { Button } from "@/components/ui/button";
import { Gamepad2, Award, Users } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-db-darkgray to-db-gray py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white z-10 animate-fade-in mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to <span className="text-db-red">Bahn</span>Spiele<span className="text-db-red">Welt</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 opacity-90">
              Experience the excitement of train adventures through fun and challenging games!
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-db-red hover:bg-db-darkred text-white">
                <Gamepad2 className="mr-2 h-5 w-5" />
                Play Now
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
            
            <div className="flex gap-8 mt-10">
              <div className="flex items-center gap-2">
                <Gamepad2 className="h-6 w-6 text-db-red" />
                <div>
                  <p className="font-bold text-2xl">15+</p>
                  <p className="text-sm text-gray-200">Fun Games</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Award className="h-6 w-6 text-db-red" />
                <div>
                  <p className="font-bold text-2xl">50+</p>
                  <p className="text-sm text-gray-200">Achievements</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Users className="h-6 w-6 text-db-red" />
                <div>
                  <p className="font-bold text-2xl">10K+</p>
                  <p className="text-sm text-gray-200">Players</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-10">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1516199423456-1f1e91b06f25?q=80&w=1000" 
                alt="Deutsche Bahn Train Game" 
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-bold text-lg">Train Conductor Challenge</p>
                <p className="text-sm opacity-80">Top Featured Game</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
