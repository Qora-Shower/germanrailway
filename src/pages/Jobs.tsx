
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";

interface JobCardProps {
  title: string;
  description: string;
  isOpen: boolean;
  onApply: (title: string) => void;
}

const JobCard = ({ title, description, isOpen, onApply }: JobCardProps) => {
  return (
    <Card className="p-6 mb-4">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        {isOpen ? (
          <Badge className="bg-green-500 hover:bg-green-600 flex items-center gap-1">
            <Check size={14} /> Open
          </Badge>
        ) : (
          <Badge className="bg-db-red hover:bg-db-darkred flex items-center gap-1">
            <X size={14} /> Closed
          </Badge>
        )}
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {isOpen && (
        <Button 
          onClick={() => onApply(title)} 
          className="bg-db-red hover:bg-db-darkred text-white"
        >
          <Briefcase className="mr-2 h-4 w-4" /> Apply
        </Button>
      )}
    </Card>
  );
};

const Jobs = () => {
  const [activeJobs, setActiveJobs] = useState<string[]>([]);
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>(['Jobs']);

  const handleApply = (jobTitle: string) => {
    if (!activeJobs.includes(jobTitle)) {
      setActiveJobs([...activeJobs, jobTitle]);
      if (!breadcrumbs.includes(jobTitle)) {
        setBreadcrumbs([...breadcrumbs, jobTitle]);
      }
    }
  };

  const jobs = [
    {
      title: "Game Developer",
      description: "Design and develop exciting Roblox games for the Deutsche Bahn AG community. Experience with Lua programming and Roblox Studio required.",
      isOpen: true,
    },
    {
      title: "Supervisor",
      description: "Oversee operations, train new staff, and ensure all services run according to Deutsche Bahn standards in our Roblox community.",
      isOpen: true,
    },
    {
      title: "Moderator",
      description: "Maintain a positive community environment, enforce rules, and assist players in the Deutsche Bahn AG Roblox experience.",
      isOpen: true,
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center mb-6">
            <Briefcase className="h-6 w-6 mr-2 text-db-red" />
            <h1 className="text-3xl font-bold">Jobs</h1>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mb-8">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-wrap gap-2">
                {breadcrumbs.map((item, index) => (
                  <NavigationMenuItem key={index} className="flex items-center">
                    {index > 0 && <span className="mx-2">&gt;</span>}
                    <NavigationMenuLink className={`flex items-center ${index === 0 ? 'text-db-red' : 'text-gray-700'}`}>
                      {index === 0 && <Briefcase className="mr-1 h-4 w-4" />}
                      {item}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <JobCard 
                key={index}
                title={job.title}
                description={job.description}
                isOpen={job.isOpen}
                onApply={handleApply}
              />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Jobs;
