
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Clock, MapPin, Train } from "lucide-react";

const RouteDetail = () => {
  const { routeId } = useParams();
  const navigate = useNavigate();

  // Example routes data - in a real app, this would be fetched from an API
  const routesData = [
    { 
      id: 1, 
      type: "S-Bahn", 
      number: "S1", 
      from: "Oranienburg", 
      to: "Wannsee", 
      via: "Berlin Hbf", 
      duration: "58 min",
      description: "Die S1 verbindet den Norden und Süden Berlins. Sie fährt vom brandenburgischen Oranienburg über die Berliner Innenstadt bis nach Wannsee.",
      stops: [
        "Oranienburg", "Lehnitz", "Borgsdorf", "Birkenwerder", "Hohen Neuendorf", 
        "Frohnau", "Hermsdorf", "Waidmannslust", "Wittenau", "Wilhelmsruh", 
        "Schönholz", "Wollankstraße", "Bornholmer Straße", "Gesundbrunnen", "Nordbahnhof",
        "Oranienburger Straße", "Friedrichstraße", "Brandenburger Tor", "Potsdamer Platz", 
        "Anhalter Bahnhof", "Yorckstraße", "Schöneberg", "Friedenau", "Feuerbachstraße", 
        "Rathaus Steglitz", "Botanischer Garten", "Lichterfelde West", "Sundgauer Straße", "Zehlendorf", "Wannsee"
      ]
    },
    { 
      id: 2, 
      type: "S-Bahn", 
      number: "S2", 
      from: "Bernau", 
      to: "Blankenfelde", 
      via: "Berlin Hbf", 
      duration: "83 min",
      description: "Die S2 ist eine wichtige Nord-Süd-Verbindung und verbindet Bernau im Norden mit Blankenfelde im Süden.",
      stops: [
        "Bernau", "Bernau-Friedenstal", "Zepernick", "Röntgental", "Buch", 
        "Karow", "Blankenburg", "Pankow", "Bornholmer Straße", "Gesundbrunnen", 
        "Nordbahnhof", "Oranienburger Straße", "Friedrichstraße", "Unter den Linden", "Potsdamer Platz", 
        "Anhalter Bahnhof", "Yorckstraße", "Südkreuz", "Priesterweg", "Attilastraße", 
        "Marienfelde", "Buckower Chaussee", "Schichauweg", "Mahlow", "Blankenfelde"
      ]
    },
    { 
      id: 3, 
      type: "RB", 
      number: "RB10", 
      from: "Berlin Hbf", 
      to: "Nauen", 
      via: "Berlin-Spandau", 
      duration: "37 min",
      description: "Die RB10 verbindet Berlin mit dem brandenburgischen Nauen und ist Teil des Regionalverkehrs.",
      stops: ["Berlin Hbf", "Berlin-Spandau", "Falkensee", "Brieselang", "Nauen"]
    },
    { 
      id: 4, 
      type: "RB", 
      number: "RB14", 
      from: "Berlin Hbf", 
      to: "Nauen", 
      via: "Falkensee", 
      duration: "45 min",
      description: "Die RB14 fährt von Berlin Hauptbahnhof nach Nauen und hält an allen Zwischenstationen.",
      stops: ["Berlin Hbf", "Berlin-Jungfernheide", "Berlin-Charlottenburg", "Berlin-Spandau", "Falkensee", "Brieselang", "Nauen"]
    },
    { 
      id: 5, 
      type: "RE", 
      number: "RE1", 
      from: "Magdeburg Hbf", 
      to: "Frankfurt (Oder)", 
      via: "Berlin Hbf", 
      duration: "2 h 52 min",
      description: "Der RE1 ist eine wichtige Ost-West-Verbindung und verbindet Magdeburg mit Frankfurt (Oder) über Berlin.",
      stops: [
        "Magdeburg Hbf", "Burg", "Genthin", "Brandenburg Hbf", "Potsdam Hbf", 
        "Berlin-Wannsee", "Berlin-Charlottenburg", "Berlin Hbf", "Berlin Ostbahnhof", 
        "Berlin-Ostkreuz", "Erkner", "Fürstenwalde (Spree)", "Briesen (Mark)", "Frankfurt (Oder)"
      ]
    },
    { 
      id: 6, 
      type: "RE", 
      number: "RE2", 
      from: "Wismar", 
      to: "Cottbus", 
      via: "Berlin", 
      duration: "5 h 1 min",
      description: "Der RE2 verbindet Wismar an der Ostsee mit Cottbus in der Lausitz und durchquert dabei Berlin.",
      stops: [
        "Wismar", "Bad Kleinen", "Schwerin Hbf", "Ludwigslust", "Wittenberge", 
        "Nauen", "Berlin-Spandau", "Berlin Hbf", "Berlin Ostkreuz", "Königs Wusterhausen", 
        "Lübben (Spreewald)", "Lübbenau (Spreewald)", "Vetschau", "Cottbus"
      ]
    },
    { 
      id: 7, 
      type: "IRE", 
      number: "IRE3", 
      from: "Berlin Hbf", 
      to: "Hamburg Hbf", 
      via: "Wittenberge", 
      duration: "2 h 30 min",
      description: "Der IRE3 ist ein Interregio-Express zwischen Berlin und Hamburg mit wenigen Zwischenhalten.",
      stops: ["Berlin Hbf", "Berlin-Spandau", "Wittenberge", "Ludwigslust", "Hamburg Hbf"]
    },
    { 
      id: 8, 
      type: "EC", 
      number: "EC27", 
      from: "Berlin Hbf", 
      to: "Hamburg Hbf", 
      via: "Wittenberge", 
      duration: "1 h 43 min",
      description: "Der EC27 ist ein EuroCity-Zug zwischen Berlin und Hamburg und Teil eines internationalen Zuglaufs.",
      stops: ["Berlin Hbf", "Berlin-Spandau", "Wittenberge", "Hamburg Hbf"]
    },
    { 
      id: 9, 
      type: "IC", 
      number: "IC2035", 
      from: "Norddeich Mole", 
      to: "Leipzig Hbf", 
      via: "Berlin", 
      duration: "8 h 30 min",
      description: "Der IC2035 verbindet die Nordseeküste bei Norddeich mit Leipzig über Hannover, Braunschweig und Berlin.",
      stops: [
        "Norddeich Mole", "Norden", "Emden", "Leer", "Oldenburg", "Bremen", 
        "Hannover Hbf", "Braunschweig Hbf", "Magdeburg Hbf", "Berlin Hbf", "Lutherstadt Wittenberg", "Leipzig Hbf"
      ]
    },
    { 
      id: 10, 
      type: "ICE", 
      number: "ICE500", 
      from: "Berlin Hbf", 
      to: "München Hbf", 
      via: "Nürnberg", 
      duration: "3 h 55 min",
      description: "Der ICE500 verbindet die Hauptstadt Berlin mit München über die Schnellfahrstrecke.",
      stops: ["Berlin Hbf", "Berlin Südkreuz", "Lutherstadt Wittenberg", "Erfurt Hbf", "Bamberg", "Nürnberg Hbf", "München Hbf"]
    },
    { 
      id: 11, 
      type: "ICE", 
      number: "ICE1000", 
      from: "Berlin Hbf", 
      to: "Frankfurt (Main) Hbf", 
      via: "Erfurt", 
      duration: "3 h 29 min",
      description: "Der ICE1000 verbindet Berlin mit Frankfurt am Main über die Schnellfahrstrecke durch Thüringen.",
      stops: ["Berlin Hbf", "Berlin Südkreuz", "Halle (Saale) Hbf", "Erfurt Hbf", "Gotha", "Eisenach", "Fulda", "Hanau Hbf", "Frankfurt (Main) Hbf"]
    },
    { 
      id: 12, 
      type: "ICE", 
      number: "ICE1600", 
      from: "Hamburg Hbf", 
      to: "München Hbf", 
      via: "Berlin", 
      duration: "5 h 34 min",
      description: "Der ICE1600 verbindet Hamburg mit München über Berlin und bietet eine schnelle Nord-Süd-Verbindung.",
      stops: ["Hamburg Hbf", "Berlin Hbf", "Leipzig Hbf", "Nürnberg Hbf", "München Hbf"]
    },
  ];
  
  const route = routesData.find(route => route.id === Number(routeId));

  if (!route) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/routen')}
            className="mb-4"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Zurück zu allen Routen
          </Button>
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold mb-4">Route nicht gefunden</h1>
            <p className="text-gray-600">Die gesuchte Route existiert nicht.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Helper function to determine the route color
  const getRouteColor = (routeType) => {
    switch (routeType) {
      case "S-Bahn":
        return "bg-green-100 border-green-300 text-green-800";
      case "RB":
        return "bg-red-100 border-red-300 text-red-800";
      case "RE":
        return "bg-red-200 border-red-400 text-red-800";
      case "IRE":
        return "bg-orange-100 border-orange-300 text-orange-800";
      case "EC":
        return "bg-blue-100 border-blue-300 text-blue-800";
      case "IC":
        return "bg-blue-200 border-blue-400 text-blue-800";
      case "ICE":
        return "bg-blue-300 border-blue-500 text-blue-800";
      default:
        return "bg-gray-100 border-gray-300 text-gray-800";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/routen')}
            className="mb-4"
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Zurück zu allen Routen
          </Button>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-db-red">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRouteColor(route.type)}`}>
                    {route.type}
                  </span>
                  <h1 className="text-3xl font-bold">{route.number}</h1>
                </div>
                <p className="text-gray-600 mt-2">
                  {route.from} → {route.to}
                </p>
              </div>
              
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md">
                <Clock className="h-5 w-5 text-gray-600" />
                <span className="font-medium">{route.duration}</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Beschreibung</h2>
              <p className="text-gray-700">{route.description}</p>
            </div>
            
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Haltestellen
              </h2>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                <ul className="space-y-6">
                  {route.stops.map((stop, index) => (
                    <li key={index} className="ml-10 relative">
                      <div className={`absolute -left-10 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border-2 
                        ${index === 0 || index === route.stops.length - 1 ? 'bg-db-red border-db-red' : 'bg-white border-gray-400'}`}>
                      </div>
                      <div className="flex items-center">
                        <Train className={`h-4 w-4 mr-2 ${index === 0 || index === route.stops.length - 1 ? 'text-db-red' : 'text-gray-500'}`} />
                        <span className={index === 0 || index === route.stops.length - 1 ? 'font-medium' : ''}>
                          {stop}
                        </span>
                        {index === 0 && <span className="ml-2 text-xs bg-db-red text-white px-2 py-0.5 rounded">Start</span>}
                        {index === route.stops.length - 1 && <span className="ml-2 text-xs bg-db-red text-white px-2 py-0.5 rounded">Ziel</span>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RouteDetail;
