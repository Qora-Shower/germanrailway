
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
    navigate(`/training/${trainingId}`);
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
                className="group border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden hover:-translate-y-1"
                onClick={() => handleTrainingClick(training.id)}
              >
                {/* Modern gradient header */}
                <div className={`relative p-6 ${getRoleBadgeClass(training.role)} bg-gradient-to-br from-current to-opacity-80`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm">
                        {training.authorBadge}
                      </Badge>
                      <Badge className="bg-white/90 text-gray-800 hover:bg-white border-0">
                        {training.level}
                      </Badge>
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-white leading-tight">{training.title}</h3>
                    <div className="flex items-center gap-2 text-white/90">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-xs font-medium">{training.author.charAt(0)}</span>
                      </div>
                      <span className="text-sm font-medium">von {training.author}</span>
                    </div>
                  </div>
                </div>
                
                {/* Modern content section */}
                <div className="p-6 bg-white">
                  {/* Host information with modern styling */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Host</p>
                      <p className="text-sm font-semibold text-gray-900 mt-1">{training.host}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Co-Host</p>
                      <p className="text-sm font-semibold text-gray-900 mt-1">{training.coHost}</p>
                    </div>
                  </div>
                  
                  {/* Schedule with modern design */}
                  <div className="bg-gradient-to-r from-db-red/5 to-transparent rounded-lg p-4 mb-4 border-l-4 border-db-red">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Datum</p>
                        <p className="text-sm font-bold text-gray-900">{training.scheduledDate}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Zeit</p>
                        <p className="text-sm font-bold text-db-red">{training.scheduledTime} Uhr</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-gray-600">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-blue-600">⏱</span>
                      </div>
                      <span className="text-sm font-medium">{training.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-green-600">👥</span>
                      </div>
                      <span className="text-sm font-medium">{training.participants} Teilnehmer</span>
                    </div>
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-black/0 group-hover:from-black/5 group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
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
