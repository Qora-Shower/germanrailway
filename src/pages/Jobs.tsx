
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';

interface JobCardProps {
  title: string;
  description: string;
  isOpen: boolean;
  onApply: (title: string) => void;
}

const JobCard = ({ title, description, isOpen, onApply }: JobCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between bg-white">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          {isOpen ? (
            <Badge className="bg-green-500 hover:bg-green-600 flex items-center gap-1">
              <Check size={14} /> Offen
            </Badge>
          ) : (
            <Badge className="bg-db-red hover:bg-db-darkred flex items-center gap-1">
              <X size={14} /> Geschlossen
            </Badge>
          )}
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="flex justify-end">
          {isOpen ? (
            <Button 
              onClick={() => onApply(title)} 
              variant="ghost"
              className="text-db-red hover:text-db-darkred hover:bg-gray-50 flex items-center"
            >
              Details <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          ) : (
            <Button 
              disabled
              variant="ghost"
              className="text-gray-400 cursor-not-allowed"
            >
              <X className="mr-2 h-4 w-4" /> Geschlossen
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const Jobs = () => {
  const navigate = useNavigate();
  const [activeJob, setActiveJob] = useState<string | null>(null);
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>(['Jobs']);

  const handleApply = (jobTitle: string) => {
    setActiveJob(jobTitle);
    setBreadcrumbs(['Jobs', jobTitle]);
    // Navigate to the job detail page
    const formattedJobTitle = jobTitle.toLowerCase().replace(/\s+/g, '-');
    navigate(`/job/${formattedJobTitle}`);
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
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center mb-8">
            <Briefcase className="h-8 w-8 mr-3 text-db-red" />
            <h1 className="text-3xl font-bold">Karriere bei DB Roblox</h1>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl mb-8">
            <div className="flex items-center">
              <Briefcase className="h-5 w-5 mr-2 text-db-red" />
              <div className="text-db-red font-medium">Jobs</div>
              {breadcrumbs.length > 1 && (
                <>
                  <div className="mx-3 text-gray-400">/</div>
                  <div className="text-gray-700">{breadcrumbs[1]}</div>
                </>
              )}
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mb-10">
            <div className="bg-white p-6 rounded-xl shadow-sm mb-10">
              <h2 className="text-2xl font-semibold mb-4">Werde Teil unseres Teams</h2>
              <p className="text-gray-600 mb-4">
                Die Deutsche Bahn AG Roblox-Community sucht motivierte Mitglieder, die dabei helfen möchten, 
                unser virtuelles Bahnnetzwerk zu erweitern und zu verbessern. Entdecke offene Positionen 
                und finde die perfekte Rolle für dich.
              </p>
              <p className="text-gray-600">
                Als Mitglied unseres Teams erhältst du die Möglichkeit, an der Entwicklung einer der 
                größten Roblox-Bahncommunities mitzuwirken und wertvolle Erfahrungen zu sammeln.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mb-6">Offene Positionen</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <JobCard 
                    title={job.title}
                    description={job.description}
                    isOpen={job.isOpen}
                    onApply={handleApply}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Jobs;
