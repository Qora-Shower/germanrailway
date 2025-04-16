
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, Book } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

const roles = [
  { id: "all", name: "All", color: "bg-gray-200 text-gray-700" },
  { id: "driver", name: "Driver", color: "bg-db-red text-white" },
  { id: "platform-employee", name: "Platform Employee", color: "bg-orange-400 text-white" },
  { id: "conductor", name: "Conductor", color: "bg-amber-400 text-amber-800" },
  { id: "signaller", name: "Signaller", color: "bg-green-500 text-white" }
];

interface Training {
  id: number;
  title: string;
  author: string;
  authorBadge: string;
  role: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  dateCreated: string;
  participants: number;
  host?: string;
  coHost?: string;
  scheduledTime?: string;
  scheduledDate?: string;
}

const trainings: Training[] = [
  {
    id: 1,
    title: "Grundlagen der Signalgebung",
    author: "SignalMaster42",
    authorBadge: "SV",
    role: "signaller",
    duration: "45 min",
    level: "Beginner",
    dateCreated: "2025-03-15",
    participants: 156,
    host: "SignalPro99",
    coHost: "StationMaster22",
    scheduledTime: "15:30",
    scheduledDate: "25.04.2025"
  },
  {
    id: 2,
    title: "Fortgeschrittene Fahrmanöver",
    author: "TrainPilot33",
    authorBadge: "SV",
    role: "driver",
    duration: "60 min",
    level: "Advanced",
    dateCreated: "2025-03-28",
    participants: 87,
    host: "ICEDriver88",
    coHost: "SpeedMaster44",
    scheduledTime: "17:00",
    scheduledDate: "26.04.2025"
  },
  {
    id: 3,
    title: "Fahrgastabfertigung auf dem Bahnsteig",
    author: "PlatformPro21",
    authorBadge: "SV",
    role: "platform-employee",
    duration: "30 min",
    level: "Beginner",
    dateCreated: "2025-04-02",
    participants: 124,
    host: "PlatformExpert",
    coHost: "ServicePro55",
    scheduledTime: "14:15",
    scheduledDate: "27.04.2025"
  },
  {
    id: 4,
    title: "Zugabfertigung und Fahrkartenkontrolle",
    author: "ConductorExpert",
    authorBadge: "SV",
    role: "conductor",
    duration: "40 min",
    level: "Intermediate",
    dateCreated: "2025-04-05",
    participants: 92,
    host: "TicketProfi",
    coHost: "TrainManager11",
    scheduledTime: "10:30",
    scheduledDate: "28.04.2025"
  },
  {
    id: 5,
    title: "ICE Führung: Technik und Standards",
    author: "ICEDriver99",
    authorBadge: "SV",
    role: "driver",
    duration: "75 min",
    level: "Advanced",
    dateCreated: "2025-04-10",
    participants: 67,
    host: "ICEMaster77",
    coHost: "TrainTech23",
    scheduledTime: "16:45",
    scheduledDate: "29.04.2025"
  },
  {
    id: 6,
    title: "Notfallsituationen im Stellwerk",
    author: "SignalEmergency",
    authorBadge: "SV",
    role: "signaller",
    duration: "50 min",
    level: "Advanced",
    dateCreated: "2025-04-11",
    participants: 43,
    host: "EmergencyPro",
    coHost: "SafetyExpert",
    scheduledTime: "13:00",
    scheduledDate: "30.04.2025"
  }
];

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

const Training = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const navigate = useNavigate();

  const filteredTrainings = trainings.filter(training => {
    const matchesSearch = training.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          training.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === "all" || training.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  const handleTrainingClick = (trainingId: number) => {
    // In a real app, this would navigate to a detailed view of the training
    console.log(`Training clicked: ${trainingId}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Training</h1>
              <p className="text-gray-600">
                Verbessere deine Fähigkeiten mit unseren speziellen Trainingseinheiten für alle Rollen im Bahnnetzwerk.
              </p>
            </div>
            <Button 
              className="bg-db-red hover:bg-db-darkred text-white flex items-center gap-2"
              onClick={() => navigate("/guides")}
            >
              <Book className="h-4 w-4" />
              Guides
            </Button>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <SearchBar 
              placeholder="Training oder Trainer suchen..."
              onChange={(value) => setSearchTerm(value)}
              className="w-full md:w-auto max-w-full md:max-w-md"
              withFilter={
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-7 gap-1 rounded-full ml-2 border-gray-300">
                      {roles.find(r => r.id === selectedRole)?.name || "All"}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {roles.map((role) => (
                      <DropdownMenuItem 
                        key={role.id}
                        onClick={() => setSelectedRole(role.id)}
                        className="cursor-pointer"
                      >
                        <div className={`w-2 h-2 rounded-full ${role.color} mr-2`}></div>
                        {role.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              }
            />
            
            <div className="flex gap-2">
              <Button variant="default" className="bg-db-red hover:bg-db-darkred text-sm">
                Neuste zuerst
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTrainings.map((training) => (
              <Card 
                key={training.id}
                className="border overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleTrainingClick(training.id)}
              >
                <div className={`p-4 ${getRoleBadgeClass(training.role)}`}>
                  <div className="flex justify-between items-start">
                    <Badge className="bg-blue-200 text-blue-800 hover:bg-blue-300">
                      {training.authorBadge}
                    </Badge>
                    <Badge className={`${getLevelBadgeClass(training.level)}`}>
                      {training.level}
                    </Badge>
                  </div>
                  <h3 className="font-bold text-lg mt-3">{training.title}</h3>
                  <div className="flex items-center mt-1">
                    <span className="text-sm font-medium">von {training.author}</span>
                  </div>
                </div>
                
                <div className="p-4 bg-white">
                  <div className="mb-2">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <span className="font-semibold text-sm">Host:</span> {training.host}
                      </div>
                      <div>
                        <span className="font-semibold text-sm">Co-Host:</span> {training.coHost}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-semibold text-sm">Datum:</span> {training.scheduledDate}
                      </div>
                      <div>
                        <span className="font-semibold text-sm">Zeit:</span> {training.scheduledTime} Uhr
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm border-t pt-2">
                    <div className="flex items-center">
                      <span>{training.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <span>{training.participants} Teilnehmer</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {filteredTrainings.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">Keine Trainings gefunden.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Training;
