
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-16">
        <div className="text-center px-4">
          <div className="text-db-red font-bold text-9xl mb-4">404</div>
          <h1 className="text-4xl font-bold mb-4 text-db-darkgray">Oops! Website not found 😔</h1>
          <p className="text-xl text-db-gray mb-8 max-w-md mx-auto">
            Looks like this train has departed from a different platform. Let's get you back on track!
          </p>
          <Button
            className="bg-db-red hover:bg-db-darkred text-white font-medium inline-flex items-center"
            size="lg"
            onClick={() => window.location.href = "/"}
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Return back to Station
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
