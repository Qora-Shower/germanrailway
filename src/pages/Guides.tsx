
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Users, UserRoundCheck, ShieldCheck, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface GuideCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  textColor: string;
}

const guideCards: GuideCard[] = [
  {
    id: "driver",
    title: "Driver Guide",
    description: "Lerne alles über das Fahren von Zügen, Signale zu beachten und pünktlich zu sein. Erfahre mehr über die Technik und wie du in kritischen Situationen richtig reagierst.",
    icon: <User className="h-8 w-8" />,
    color: "bg-db-red",
    textColor: "text-db-red"
  },
  {
    id: "platform",
    title: "Platform Guide",
    description: "Entdecke, wie du Passagieren auf dem Bahnsteig hilfst, Fahrpläne verstehst und den Bahnhofsbetrieb effizient organisierst.",
    icon: <Users className="h-8 w-8" />,
    color: "bg-orange-400",
    textColor: "text-orange-600"
  },
  {
    id: "conductor",
    title: "Conductor Guide",
    description: "Lerne die Grundlagen der Fahrkartenkontrolle, Zugdurchsagen und wie du den Fahrgästen während der Fahrt bestmöglich hilfst.",
    icon: <UserRoundCheck className="h-8 w-8" />,
    color: "bg-amber-400",
    textColor: "text-amber-600"
  },
  {
    id: "signaller",
    title: "Signaller Guide",
    description: "Vertiefe dein Wissen über Signalsysteme, Stellwerksoperationen und die Koordination des Zugverkehrs auf der Strecke.",
    icon: <ShieldCheck className="h-8 w-8" />,
    color: "bg-green-500",
    textColor: "text-green-600"
  },
  {
    id: "supervisor",
    title: "Supervisor Guide",
    description: "Erfahre, wie du Teams leitest, Operationen überwachst und in Notfallsituationen die richtigen Entscheidungen triffst.",
    icon: <Shield className="h-8 w-8" />,
    color: "bg-blue-400",
    textColor: "text-blue-600"
  }
];

const Guides = () => {
  const navigate = useNavigate();

  const handleGuideClick = (guideId: string) => {
    navigate(`/guide/${guideId}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-2">Guides</h1>
          <p className="text-gray-600 mb-8">
            Lerne alles, was du über die verschiedenen Rollen im Bahnnetzwerk wissen musst.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guideCards.map((guide) => (
              <Card key={guide.id} className="border shadow-sm hover:shadow-md transition-all">
                <div className={`${guide.color} p-6 flex justify-center`}>
                  {guide.icon}
                </div>
                <CardContent className="p-6">
                  <h3 className={`text-xl font-bold mb-3 ${guide.textColor}`}>{guide.title}</h3>
                  <p className="text-gray-600 mb-4 h-24">{guide.description}</p>
                  <Button 
                    className="w-full bg-db-red hover:bg-db-darkred text-white"
                    onClick={() => handleGuideClick(guide.id)}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Guides;
