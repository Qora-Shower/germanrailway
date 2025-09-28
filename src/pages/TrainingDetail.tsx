import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Users, Calendar, User, Award, BookOpen, Video, Play } from "lucide-react";

interface TrainingDetails {
  id: number;
  title: string;
  author: string;
  authorBadge: string;
  role: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  dateCreated: string;
  participants: number;
  maxParticipants: number;
  host: string;
  coHost: string;
  scheduledTime: string;
  scheduledDate: string;
  description: string;
  requirements: string[];
  objectives: string[];
  price: string;
  difficulty: number;
  rating: number;
  completionRate: number;
}

const TrainingDetail = () => {
  const { trainingId } = useParams();
  const navigate = useNavigate();

  // Mock data - in real app would fetch from API
  const trainingDetails: TrainingDetails = {
    id: parseInt(trainingId || "1"),
    title: "Grundlagen der Signalgebung",
    author: "SignalMaster42",
    authorBadge: "SV",
    role: "signaller",
    duration: "45 min",
    level: "Beginner",
    dateCreated: "2025-03-15",
    participants: 156,
    maxParticipants: 200,
    host: "SignalPro99",
    coHost: "StationMaster22",
    scheduledTime: "15:30",
    scheduledDate: "25.04.2025",
    description: "Ein umfassendes Training zu den Grundlagen der Signalgebung im deutschen Bahnnetz. Lernen Sie die wichtigsten Signale und deren Bedeutung für einen sicheren Bahnbetrieb.",
    requirements: [
      "Grundkenntnisse im Bahnbetrieb",
      "Aktiver Roblox Account",
      "Mikrofon für Kommunikation",
      "Deutsche Sprache"
    ],
    objectives: [
      "Verstehen der Hauptsignale",
      "Erkennen von Vorsignalen",
      "Rangier- und Zusatzsignale",
      "Praktische Anwendung im Spiel"
    ],
    price: "Kostenlos",
    difficulty: 2,
    rating: 4.8,
    completionRate: 89
  };

  const getRoleBadgeClass = (role: string) => {
    switch (role) {
      case "driver":
        return "bg-db-red text-white";
      case "platform-employee":
        return "bg-orange-400 text-white";
      case "conductor":
        return "bg-amber-400 text-amber-800";
      case "signaller":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800 border-green-200";
      case "Intermediate":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Advanced":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/training")}
          className="mb-6 flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Zurück zu Training
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <Card className="overflow-hidden">
              <div className={`p-6 ${getRoleBadgeClass(trainingDetails.role)}`}>
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-blue-200 text-blue-800 hover:bg-blue-300">
                    {trainingDetails.authorBadge}
                  </Badge>
                  <Badge className={`${getLevelBadgeClass(trainingDetails.level)}`}>
                    {trainingDetails.level}
                  </Badge>
                </div>
                <h1 className="text-3xl font-bold mb-2">{trainingDetails.title}</h1>
                <p className="text-lg opacity-90">von {trainingDetails.author}</p>
              </div>
            </Card>

            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Beschreibung
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{trainingDetails.description}</p>
              </CardContent>
            </Card>

            {/* Learning Objectives */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Lernziele
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {trainingDetails.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-db-red rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Voraussetzungen</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {trainingDetails.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Training Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Training Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Dauer</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-db-red" />
                    <span className="font-medium">{trainingDetails.duration}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Teilnehmer</span>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-db-red" />
                    <span className="font-medium">{trainingDetails.participants}/{trainingDetails.maxParticipants}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Bewertung</span>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">{trainingDetails.rating}/5.0</span>
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <div key={star} className={`w-3 h-3 ${star <= Math.floor(trainingDetails.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                          ⭐
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Abschlussrate</span>
                  <span className="font-medium">{trainingDetails.completionRate}%</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Schwierigkeit</span>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map((level) => (
                      <div key={level} className={`w-2 h-2 rounded-full ${level <= trainingDetails.difficulty ? 'bg-db-red' : 'bg-gray-300'}`}></div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Preis</span>
                  <span className="font-medium text-green-600">{trainingDetails.price}</span>
                </div>
              </CardContent>
            </Card>

            {/* Schedule Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Nächster Termin
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Datum</p>
                  <p className="font-medium">{trainingDetails.scheduledDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Zeit</p>
                  <p className="font-medium">{trainingDetails.scheduledTime} Uhr</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Host</p>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-db-red" />
                    <span className="font-medium">{trainingDetails.host}</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Co-Host</p>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="font-medium">{trainingDetails.coHost}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-db-red hover:bg-db-darkred text-white flex items-center gap-2">
                <Play className="h-4 w-4" />
                Training beitreten
              </Button>
              <Button variant="outline" className="w-full flex items-center gap-2">
                <Video className="h-4 w-4" />
                Vorschau ansehen
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TrainingDetail;