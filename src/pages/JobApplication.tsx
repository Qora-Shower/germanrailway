
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, Send, AlertCircle, ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";

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
    
    // Simulating email submission
    const emailAddress = "deutsche.bahn.rbx@gmail.com";
    const emailSubject = `Job Application: ${jobTitle}`;
    const emailBody = `
      Roblox Username: ${data.robloxUsername}
      Discord Username: ${data.discordUsername}
      
      Experience:
      ${data.experience}
      
      Motivation:
      ${data.motivation}
      
      Availability:
      ${data.availability}
    `;
    
    // In a real application, you would use a server-side API to send an email
    // For now, we'll simulate it with a timeout and show a success message
    setTimeout(() => {
      console.log("Application submitted to:", emailAddress);
      console.log("Email subject:", emailSubject);
      console.log("Email body:", emailBody);
      
      toast.success("Bewerbung erfolgreich abgeschickt!");
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
            <h1 className="text-3xl font-bold">Ungültiger Job</h1>
          </div>
          <p>Die gesuchte Stelle existiert leider nicht.</p>
          <Button 
            onClick={() => navigate("/jobs")}
            className="mt-4 bg-db-red hover:bg-db-darkred text-white"
          >
            Zurück zu Jobs
          </Button>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <Button 
            onClick={() => navigate(`/job/${jobId}`)}
            variant="ghost" 
            className="flex items-center mb-6 hover:bg-gray-100"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Zurück zur Jobbeschreibung
          </Button>
          
          <div className="bg-gray-100 p-4 rounded-xl mb-8 flex items-center">
            <Briefcase className="h-6 w-6 mr-3 text-db-red" />
            <div className="text-gray-700 font-medium cursor-pointer" onClick={() => navigate("/jobs")}>Jobs</div>
            <div className="mx-3 text-gray-400">/</div>
            <div className="text-gray-700 font-medium cursor-pointer" onClick={() => navigate(`/job/${jobId}`)}>{jobTitle}</div>
            <div className="mx-3 text-gray-400">/</div>
            <div className="text-db-red font-medium">Bewerben</div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="border-b border-gray-100 p-6">
                <div className="flex items-center">
                  <Briefcase className="h-8 w-8 mr-3 text-db-red" />
                  <h1 className="text-2xl font-bold">Bewerbung für {jobTitle}</h1>
                </div>
              </div>
              
              <div className="p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 gap-6">
                      <FormField
                        control={form.control}
                        name="robloxUsername"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Roblox Benutzername</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Dein Roblox Benutzername" 
                                {...field} 
                                required 
                                className="focus-visible:ring-db-red focus-visible:border-db-red"
                              />
                            </FormControl>
                            <FormDescription>Dein Roblox Benutzername für Verifizierungszwecke.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="discordUsername"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Discord Benutzername</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="username#0000" 
                                {...field} 
                                required 
                                className="focus-visible:ring-db-red focus-visible:border-db-red"
                              />
                            </FormControl>
                            <FormDescription>Wir nutzen Discord für die Kommunikation.</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <Separator />
                    
                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Relevante Erfahrung</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Beschreibe deine relevante Erfahrung..." 
                              className="min-h-[120px] focus-visible:ring-db-red focus-visible:border-db-red" 
                              {...field} 
                              required 
                            />
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
                          <FormLabel>Warum möchtest du Teil unseres Teams werden?</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Erzähle uns, warum du dich bewerben möchtest..." 
                              className="min-h-[120px] focus-visible:ring-db-red focus-visible:border-db-red" 
                              {...field} 
                              required 
                            />
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
                          <FormLabel>Deine Verfügbarkeit</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Teile uns mit, wann du verfügbar bist..." 
                              className="min-h-[120px] focus-visible:ring-db-red focus-visible:border-db-red" 
                              {...field} 
                              required 
                            />
                          </FormControl>
                          <FormDescription>
                            Bitte gib an, an welchen Tagen und zu welchen Uhrzeiten du verfügbar bist.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex justify-end pt-4">
                      <Button 
                        type="submit" 
                        className="bg-db-red hover:bg-db-darkred text-white px-8 py-3"
                        disabled={submitting}
                      >
                        {submitting ? (
                          <>Wird verarbeitet...</>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" /> Bewerbung absenden
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JobApplication;
