
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-db-darkgray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-db-red font-bold text-xl">Bahn</span>
              <span className="text-white font-bold text-xl">Spiele</span>
              <span className="text-gray-300 font-medium ml-1">Welt</span>
            </div>
            <p className="text-gray-300 mb-4">
              Discover the exciting world of Deutsche Bahn through interactive games and challenges.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-db-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-db-red transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-db-red transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-db-red transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Games</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Train Conductor</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Track Builder</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Station Manager</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">DB Quiz</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Rail Adventure</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Stay updated with the latest games and features.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-db-red w-full"
              />
              <button className="bg-db-red hover:bg-db-darkred text-white px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} BahnSpieleWelt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
