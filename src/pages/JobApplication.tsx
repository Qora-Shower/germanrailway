
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, Send, Users, AlertCircle } from "lucide-react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const JobApplication = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  
  // This would come from an API in a real app
  const jobTitles = {
    "game-developer": "Game Developer",
    "supervisor": "Supervisor",
    "moderator": "Moderator"
  };
  
  const jobTitle = jobTitles[jobId as keyof typeof jobTitles] || "Unknown Job";
  
  const form = useForm({
    defaultValues: {
      robloxUsername: "",
      discordUsername: "",
      experience: "",
      motivation: "",
      availability: ""
    }
  });
  
  const onSubmit = (data: any) => {
    setSubmitting(true);
    
    // Simulating submission process
    setTimeout(() => {
      console.log("Application submitted:", data);
      toast.success("Application submitted successfully!");
      navigate("/jobs");
      setSubmitting(false);
    }, 1500);
  };
  
  if (!jobTitles[jobId as keyof typeof jobTitles]) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="flex items-center mb-6 text-red-500">
            <AlertCircle className="h-6 w-6 mr-2" />
            <h1 className="text-3xl font-bold">Invalid Job</h1>
          </div>
          <p>Sorry, the job application you're looking for doesn't exist.</p>
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
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center mb-6">
            <Briefcase className="h-6 w-6 mr-2 text-db-red" />
            <h1 className="text-3xl font-bold">Apply for {jobTitle}</h1>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg mb-8">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-wrap gap-2">
                <NavigationMenuItem className="flex items-center">
                  <NavigationMenuLink 
                    className="flex items-center text-db-red cursor-pointer"
                    onClick={() => navigate("/jobs")}
                  >
                    <Briefcase className="mr-1 h-4 w-4" />
                    Jobs
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="flex items-center">
                  <span className="mx-2">&gt;</span>
                  <NavigationMenuLink 
                    className="flex items-center text-gray-700 cursor-pointer"
                    onClick={() => navigate(`/job/${jobId}`)}
                  >
                    {jobTitle}
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="flex items-center">
                  <span className="mx-2">&gt;</span>
                  <NavigationMenuLink className="flex items-center text-gray-700">
                    Apply
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="robloxUsername"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Roblox Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your Roblox username" {...field} required />
                      </FormControl>
                      <FormDescription>Your Roblox username for verification purposes.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="discordUsername"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Discord Username</FormLabel>
                      <FormControl>
                        <Input placeholder="username#0000" {...field} required />
                      </FormControl>
                      <FormDescription>We'll use Discord for communication.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Relevant Experience</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Describe your relevant experience..." className="min-h-[120px]" {...field} required />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="motivation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Why do you want to join our team?</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell us why you want to join..." className="min-h-[120px]" {...field} required />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="availability"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Availability</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Let us know your availability..." className="min-h-[120px]" {...field} required />
                      </FormControl>
                      <FormDescription>
                        Please provide details about when you are available to work or volunteer.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="bg-db-red hover:bg-db-darkred text-white w-full sm:w-auto px-8 py-6"
                  disabled={submitting}
                >
                  {submitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" /> Submit Application
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JobApplication;
