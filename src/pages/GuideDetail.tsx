
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription,
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";

const GuideDetail = () => {
  const { guideId } = useParams();
  const navigate = useNavigate();

  // Example guide data - in a real app, this would be fetched from an API
  const guidesData = [
    { 
      id: "1", 
      title: "Getting Started with Deutsche Bahn AG Roblox", 
      description: "A comprehensive guide for new players to understand the basics of the game.",
      content: "Welcome to Deutsche Bahn AG Roblox! This guide will walk you through the basics of the game, including how to drive trains, manage stations, and interact with other players."
    },
    { 
      id: "2", 
      title: "Advanced Train Driving Techniques", 
      description: "Learn advanced techniques to drive trains more efficiently and safely.",
      content: "This guide covers advanced train driving techniques, such as how to manage speed, handle curves, and deal with emergencies."
    },
    { 
      id: "3", 
      title: "Station Management Guide", 
      description: "A detailed guide on how to effectively manage your stations.",
      content: "This guide provides a detailed overview of station management, including how to hire staff, maintain equipment, and ensure passenger satisfaction."
    }
  ];
  
  const guide = guidesData.find(guide => guide.id === guideId);

  if (!guide) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/guides')}
            className="mb-4"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to all Guides
          </Button>
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold mb-4">Guide not found</h1>
            <p className="text-gray-600">The requested guide does not exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/guides')}
            className="mb-4"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to all Guides
          </Button>
          
          <Card className="w-full">
            <CardHeader>
              <CardTitle>{guide.title}</CardTitle>
              <CardDescription>{guide.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{guide.content}</p>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GuideDetail;
