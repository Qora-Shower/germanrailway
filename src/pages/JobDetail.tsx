
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";

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
      minRank: "Driver"
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
      minRank: "Conductor"
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
      minRank: "Conductor"
    }
  };
  
  const job = jobs[jobId as keyof typeof jobs];
  
  if (!job) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-4">Job Not Found</h1>
          <p>Sorry, the job you're looking for doesn't exist.</p>
          <Button 
            onClick={() => navigate("/jobs")}
            className="mt-4 bg-db-red hover:bg-db-darkred text-white"
          >
            Return to Jobs
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
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center mb-6">
            <Briefcase className="h-6 w-6 mr-2 text-db-red" />
            <h1 className="text-3xl font-bold">{job.title}</h1>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-8">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-wrap gap-2">
                <NavigationMenuItem className="flex items-center">
                  <NavigationMenuLink 
                    className="flex items-center text-db-red"
                    onClick={() => navigate("/jobs")}
                  >
                    <Briefcase className="mr-1 h-4 w-4" />
                    Jobs
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="flex items-center">
                  <span className="mx-2">&gt;</span>
                  <NavigationMenuLink className="flex items-center text-gray-700">
                    {job.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-gray-600 mb-6 text-lg">{job.description}</p>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="text-gray-700">{responsibility}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Requirements</h2>
              <ul className="list-disc pl-6 space-y-2">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="text-gray-700">{requirement}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-10">
              <h2 className="text-xl font-semibold mb-2">Minimum Rank Required</h2>
              <p className="text-gray-700">{job.minRank}</p>
            </div>
            
            <Button 
              onClick={handleApplyNow}
              className="bg-db-red hover:bg-db-darkred text-white px-8 py-6 text-lg"
            >
              <Briefcase className="mr-2 h-5 w-5" /> Apply Now
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JobDetail;
