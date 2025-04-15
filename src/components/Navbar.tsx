
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Search, Menu, X, User, Home, Gamepad2, Medal, Settings, LogOut, FileSpreadsheet } from "lucide-react";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  // Simulating Roblox login
  const handleLogin = () => {
    // In a real implementation, this would redirect to Roblox OAuth
    console.log("Logging in with Roblox...");
    // Simulating successful login
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
                <Link to="/games" className="flex items-center gap-2 text-lg font-medium px-2 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  <Gamepad2 className="h-5 w-5" />
                  <span>Games</span>
                </Link>
                <Link to="/leaderboard" className="flex items-center gap-2 text-lg font-medium px-2 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  <Medal className="h-5 w-5" />
                  <span>Leaderboard</span>
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
          <Link to="/games" className="text-db-darkgray font-medium hover:text-db-red transition-colors">
            Games
          </Link>
          <Link to="/leaderboard" className="text-db-darkgray font-medium hover:text-db-red transition-colors">
            Leaderboard
          </Link>
        </nav>

        {/* Search and User */}
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search games..."
              className="px-4 py-2 pr-10 rounded-full bg-db-lightgray border-none focus:outline-none focus:ring-2 focus:ring-db-red"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 text-db-gray h-4 w-4" />
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative flex items-center gap-2 rounded-full hover:bg-gray-100">
                  <Avatar className="h-8 w-8 border border-gray-200">
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
