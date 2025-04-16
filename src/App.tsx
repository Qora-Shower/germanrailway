
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MyStates from "./pages/MyStates";
import Settings from "./pages/Settings";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import JobApplication from "./pages/JobApplication";
import Stations from "./pages/Stations";
import Servers from "./pages/Servers";
import ServerDetail from "./pages/ServerDetail";
import RoutesPage from "./pages/Routes";
import RouteDetail from "./pages/RouteDetail";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouterRoutes>
          <Route path="/" element={<Index />} />
          <Route path="/my-states" element={<MyStates />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job/:jobId" element={<JobDetail />} />
          <Route path="/apply/:jobId" element={<JobApplication />} />
          <Route path="/stations" element={<Stations />} />
          <Route path="/servers" element={<Servers />} />
          <Route path="/server/:serverId" element={<ServerDetail />} />
          <Route path="/routen" element={<RoutesPage />} />
          <Route path="/route/:routeId" element={<RouteDetail />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
