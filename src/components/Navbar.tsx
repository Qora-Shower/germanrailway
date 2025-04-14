
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Search, Menu, X, User, Home, Gamepad2, Medal, Settings } from "lucide-react";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

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
                <a href="/" className="flex items-center gap-2 text-lg font-medium px-2 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </a>
                <a href="/games" className="flex items-center gap-2 text-lg font-medium px-2 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  <Gamepad2 className="h-5 w-5" />
                  <span>Games</span>
                </a>
                <a href="/leaderboard" className="flex items-center gap-2 text-lg font-medium px-2 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  <Medal className="h-5 w-5" />
                  <span>Leaderboard</span>
                </a>
                <a href="/settings" className="flex items-center gap-2 text-lg font-medium px-2 py-2 rounded-md hover:bg-gray-100 transition-colors">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </a>
              </nav>
            </SheetContent>
          </Sheet>

          <a href="/" className="flex items-center">
            <span className="text-db-red font-bold text-xl">Deutsche Bahn</span>
            <span className="text-db-darkgray font-bold text-xl ml-1">AG</span>
            <span className="text-db-gray font-medium ml-1">Roblox</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-db-darkgray font-medium hover:text-db-red transition-colors">
            Home
          </a>
          <a href="/games" className="text-db-darkgray font-medium hover:text-db-red transition-colors">
            Games
          </a>
          <a href="/leaderboard" className="text-db-darkgray font-medium hover:text-db-red transition-colors">
            Leaderboard
          </a>
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
          <Button className="rounded-full bg-db-red hover:bg-db-darkred">
            <User className="h-5 w-5 mr-2" />
            <span className="hidden sm:inline">Login</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
