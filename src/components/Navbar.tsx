
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, User, Home, Settings, LogOut, FileSpreadsheet, Briefcase, Server, Train, Route, FileText, Shield, BookOpen } from "lucide-react";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  // Roblox login URL
  const robloxLoginUrl = "https://authorize.roblox.com/?client_id=3633418418761126744&response_type=code&redirect_uri=https%3A%2F%2Fauth.germanrailway.lovable.app%2Fsignin-oidc&scope=openid+profile&state=CfDJ8MJ8sZSakrROmoO_zN2-eZeCTDBiWyfM8ETzwSoM9CPIXrmYfeg8o8XLdwYkZuFCavmYn3BZpAlDVGg2lJ4WYPD6nlwN7MSSU20WZbFZcNzhRnq8r3xP_iagBAt5wxb1ArrWQfmxxgR3slSteRkrJCDoYhyEnm4ace8rlk6Ugs-G&nonce=638803110765483281.YmY3YmFjMGItNmNlNy00OGY3LTkzNmUtNTBhMzBhY2ZkZjNhMzc2YjQwY2EtOGE3Ni00Yzg5LTgxZWItOTFjYzY4NDI0OGM5&code_challenge=PvOZIMSUDfNMgh0-lfizAEhUFG5EU0f8lU3b5lckktE&code_challenge_method=S256&step=accountConfirm";

  // Simulating Roblox login
  const handleLogin = () => {
    window.open(robloxLoginUrl, "_blank");
    // This is just a simulation - in a real app we would wait for OAuth callback
    setIsLoggedIn(true);
    setUsername("RobloxUser123");
    setAvatarUrl("/lovable-uploads/a457f883-f052-4d89-b2fd-67be6b7822e6.png");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setAvatarUrl("");
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 relative">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="flex items-center gap-2 text-lg font-medium px-2 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </Link>
                <Link to="/jobs" className="flex items-center gap-2 text-lg font-medium px-2 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  <Briefcase className="h-5 w-5" />
                  <span>Jobs</span>
                </Link>
                <Link to="/stations" className="flex items-center gap-2 text-lg font-medium px-2 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  <Train className="h-5 w-5" />
                  <span>Stations</span>
                </Link>
                <Link to="/servers" className="flex items-center gap-2 text-lg font-medium px-2 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  <Server className="h-5 w-5" />
                  <span>Servers</span>
                </Link>
                <Link to="/routen" className="flex items-center gap-2 text-lg font-medium px-2 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  <Route className="h-5 w-5" />
                  <span>Routen</span>
                </Link>
                <Link to="/training" className="flex items-center gap-2 text-lg font-medium px-2 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  <BookOpen className="h-5 w-5" />
                  <span>Training</span>
                </Link>
                <Link to="/terms" className="flex items-center gap-2 text-lg font-medium px-2 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  <FileText className="h-5 w-5" />
                  <span>ToS</span>
                </Link>
                <Link to="/privacy" className="flex items-center gap-2 text-lg font-medium px-2 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  <Shield className="h-5 w-5" />
                  <span>Privacy Policy</span>
                </Link>
                {isLoggedIn && (
                  <Link to="/my-states" className="flex items-center gap-2 text-lg font-medium px-2 py-2 rounded-md hover:bg-gray-100 transition-colors">
                    <FileSpreadsheet className="h-5 w-5" />
                    <span>My States</span>
                  </Link>
                )}
                <Link to="/settings" className="flex items-center gap-2 text-lg font-medium px-2 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link to="/" className="flex items-center">
            <span className="text-db-darkgray font-bold text-xl ml-1">Deutsche Bahn AG Roblox</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-db-darkgray font-medium hover:text-db-red transition-colors">
            Home
          </Link>
          <Link to="/jobs" className="text-db-darkgray font-medium hover:text-db-red transition-colors">
            <div className="flex items-center">
              <Briefcase className="mr-1 h-4 w-4" />
              Jobs
            </div>
          </Link>
          <Link to="/stations" className="text-db-darkgray font-medium hover:text-db-red transition-colors">
            <div className="flex items-center">
              <Train className="mr-1 h-4 w-4" />
              Stations
            </div>
          </Link>
          <Link to="/servers" className="text-db-darkgray font-medium hover:text-db-red transition-colors">
            <div className="flex items-center">
              <Server className="mr-1 h-4 w-4" />
              Servers
            </div>
          </Link>
          <Link to="/routen" className="text-db-darkgray font-medium hover:text-db-red transition-colors">
            <div className="flex items-center">
              <Route className="mr-1 h-4 w-4" />
              Routen
            </div>
          </Link>
          <Link to="/training" className="text-db-darkgray font-medium hover:text-db-red transition-colors">
            <div className="flex items-center">
              <BookOpen className="mr-1 h-4 w-4" />
              Training
            </div>
          </Link>
          <Link to="/terms" className="text-db-darkgray font-medium hover:text-db-red transition-colors">
            <div className="flex items-center">
              <FileText className="mr-1 h-4 w-4" />
              ToS
            </div>
          </Link>
          <Link to="/privacy" className="text-db-darkgray font-medium hover:text-db-red transition-colors">
            <div className="flex items-center">
              <Shield className="mr-1 h-4 w-4" />
              Privacy Policy
            </div>
          </Link>
        </nav>

        {/* User */}
        <div className="flex items-center">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative flex items-center gap-2 rounded-full hover:bg-gray-100">
                  <Avatar className="h-8 w-8 border border-gray-200 rounded-full overflow-hidden">
                    <AvatarImage src={avatarUrl} alt={username} />
                    <AvatarFallback>{username.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <span className="hidden sm:inline font-medium">{username}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <Link to="/my-states">
                  <DropdownMenuItem className="cursor-pointer">
                    <FileSpreadsheet className="mr-2 h-4 w-4" />
                    <span>My States</span>
                  </DropdownMenuItem>
                </Link>
                <Link to="/settings">
                  <DropdownMenuItem className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button className="rounded-full bg-db-red hover:bg-db-darkred" onClick={handleLogin}>
              <User className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">Login</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
