
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, ArrowLeft, Check, Users, CalendarClock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const JobDetail = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  
  // This would come from an API in a real app
  const jobs = {
    "game-developer": {
      title: "Game Developer",
      description: "Design and develop exciting Roblox games for the Deutsche Bahn AG community. Experience with Lua programming and Roblox Studio required.",
      responsibilities: [
        "Create and maintain engaging games for our Roblox platform",
        "Implement game mechanics that represent Deutsche Bahn operations",
        "Optimize game performance and address bugs",
        "Collaborate with the design team on new features"
      ],
      requirements: [
        "Proficiency in Lua programming language",
        "Experience with Roblox Studio",
        "Understanding of game development principles",
        "Ability to work in a team environment"
      ],
      minRank: "Driver",
      icon: "Briefcase"
    },
    "supervisor": {
      title: "Supervisor",
      description: "Oversee operations, train new staff, and ensure all services run according to Deutsche Bahn standards in our Roblox community.",
      responsibilities: [
        "Monitor and manage staff activities in the Roblox environment",
        "Train new team members on Deutsche Bahn procedures",
        "Handle user inquiries and resolve disputes",
        "Report on community health and engagement metrics"
      ],
      requirements: [
        "Previous leadership experience in Roblox communities",
        "Excellent communication skills",
        "Knowledge of Deutsche Bahn operations (preferred)",
        "Ability to work flexible hours"
      ],
      minRank: "Conductor",
      icon: "Users"
    },
    "moderator": {
      title: "Moderator",
      description: "Maintain a positive community environment, enforce rules, and assist players in the Deutsche Bahn AG Roblox experience.",
      responsibilities: [
        "Enforce community guidelines and rules",
        "Assist new players with questions and guidance",
        "Monitor chat channels for inappropriate content",
        "Report issues to senior staff members"
      ],
      requirements: [
        "Familiarity with Roblox platform",
        "Professional communication skills",
        "Patient and helpful attitude",
        "Available to moderate during peak hours"
      ],
      minRank: "Conductor",
      icon: "Shield"
    }
  };
  
  const job = jobs[jobId as keyof typeof jobs];
  
  if (!job) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-4">Job nicht gefunden</h1>
          <Button 
            onClick={() => navigate("/jobs")}
            className="mt-4 bg-db-red hover:bg-db-darkred text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Zurück zu Jobs
          </Button>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleApplyNow = () => {
    navigate(`/apply/${jobId}`);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <Button 
            onClick={() => navigate("/jobs")}
            variant="ghost" 
            className="flex items-center mb-6 hover:bg-gray-100"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Zurück zu Jobs
          </Button>
          
          <div className="bg-gray-100 p-4 rounded-xl mb-8 flex items-center">
            <Briefcase className="h-6 w-6 mr-3 text-db-red" />
            <div className="text-gray-700 font-medium">Jobs</div>
            <div className="mx-3 text-gray-400">/</div>
            <div className="text-db-red font-medium">{job.title}</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-10">
            <div className="border-b border-gray-100 py-8 px-8">
              <h1 className="text-3xl font-bold">{job.title}</h1>
              <p className="text-gray-600 mt-2 text-lg">{job.description}</p>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h2 className="flex items-center text-xl font-semibold mb-4">
                    <Check className="h-5 w-5 mr-2 text-green-500" /> 
                    Verantwortlichkeiten
                  </h2>
                  <ul className="space-y-3">
                    {job.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-gray-700">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="flex items-center text-xl font-semibold mb-4">
                    <Check className="h-5 w-5 mr-2 text-green-500" /> 
                    Anforderungen
                  </h2>
                  <ul className="space-y-3">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <Separator className="mb-8" />
              
              <div className="mb-10">
                <h2 className="text-xl font-semibold mb-4">Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-gray-50 border-none shadow-none">
                    <CardContent className="p-4 flex items-center">
                      <Users className="h-10 w-10 p-2 rounded-full bg-db-red/10 text-db-red mr-4" />
                      <div>
                        <p className="text-sm text-gray-500">Mindestrang</p>
                        <p className="font-medium">{job.minRank}</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-50 border-none shadow-none">
                    <CardContent className="p-4 flex items-center">
                      <CalendarClock className="h-10 w-10 p-2 rounded-full bg-db-red/10 text-db-red mr-4" />
                      <div>
                        <p className="text-sm text-gray-500">Art</p>
                        <p className="font-medium">Freiwillig</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gray-50 border-none shadow-none">
                    <CardContent className="p-4 flex items-center">
                      <Briefcase className="h-10 w-10 p-2 rounded-full bg-db-red/10 text-db-red mr-4" />
                      <div>
                        <p className="text-sm text-gray-500">Status</p>
                        <Badge className="bg-green-500 hover:bg-green-600 mt-1">Offen</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button 
                  onClick={handleApplyNow}
                  className="bg-db-red hover:bg-db-darkred text-white px-8 py-6 text-lg shadow-sm"
                >
                  <Briefcase className="mr-2 h-5 w-5" /> Jetzt bewerben
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JobDetail;
