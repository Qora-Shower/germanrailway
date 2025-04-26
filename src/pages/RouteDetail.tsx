import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent,
  CardHeader
} from "@/components/ui/card";
import { ChevronLeft, Clock, MapPin, Train, Info, ArrowRight, Home } from "lucide-react";

const RouteDetail = () => {
  const { routeId } = useParams();
  const navigate = useNavigate();

  // Example routes data - in a real app, this would be fetched from an API
  const routesData = [
    { 
      id: 1, 
      routeNumber: "R001",
      type: "S-Bahn", 
      number: "S1", 
      from: "Oranienburg", 
      to: "Wannsee", 
      via: "Berlin Hbf", 
      duration: "58 min",
      description: "Die S1 verbindet den Norden und Süden Berlins. Sie fährt vom brandenburgischen Oranienburg über die Berliner Innenstadt bis nach Wannsee.",
      hasDepot: true,
      depotName: "Depot Oranienburg",
      stops: [
        { name: "Oranienburg", time: 0 },
        { name: "Lehnitz", time: 6 },
        { name: "Borgsdorf", time: 4 },
        { name: "Birkenwerder", time: 3 },
        { name: "Hohen Neuendorf", time: 3 },
        { name: "Frohnau", time: 3 },
        { name: "Hermsdorf", time: 3 },
        { name: "Waidmannslust", time: 2 },
        { name: "Wittenau", time: 2 },
        { name: "Wilhelmsruh", time: 2 },
        { name: "Schönholz", time: 2 },
        { name: "Wollankstraße", time: 2 },
        { name: "Bornholmer Straße", time: 2 },
        { name: "Gesundbrunnen", time: 2 },
        { name: "Nordbahnhof", time: 2 },
        { name: "Oranienburger Straße", time: 2 },
        { name: "Friedrichstraße", time: 2 },
        { name: "Brandenburger Tor", time: 2 },
        { name: "Potsdamer Platz", time: 2 },
        { name: "Anhalter Bahnhof", time: 2 },
        { name: "Yorckstraße", time: 2 },
        { name: "Schöneberg", time: 3 },
        { name: "Friedenau", time: 2 },
        { name: "Feuerbachstraße", time: 2 },
        { name: "Rathaus Steglitz", time: 2 },
        { name: "Botanischer Garten", time: 2 },
        { name: "Lichterfelde West", time: 2 },
        { name: "Sundgauer Straße", time: 2 },
        { name: "Zehlendorf", time: 2 },
        { name: "Wannsee", time: 3 }
      ],
      returnDepot: false
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
      hasDepot: true,
      depotName: "Depot Bernau",
      stops: [
        { name: "Bernau", time: 0 },
        { name: "Bernau-Friedenstal", time: 3 },
        { name: "Zepernick", time: 5 },
        { name: "Röntgental", time: 3 },
        { name: "Buch", time: 4 },
        { name: "Karow", time: 4 },
        { name: "Blankenburg", time: 3 },
        { name: "Pankow", time: 4 },
        { name: "Bornholmer Straße", time: 3 },
        { name: "Gesundbrunnen", time: 2 },
        { name: "Nordbahnhof", time: 2 },
        { name: "Oranienburger Straße", time: 2 },
        { name: "Friedrichstraße", time: 2 },
        { name: "Unter den Linden", time: 2 },
        { name: "Potsdamer Platz", time: 2 },
        { name: "Anhalter Bahnhof", time: 2 },
        { name: "Yorckstraße", time: 2 },
        { name: "Südkreuz", time: 3 },
        { name: "Priesterweg", time: 3 },
        { name: "Attilastraße", time: 3 },
        { name: "Marienfelde", time: 3 },
        { name: "Buckower Chaussee", time: 4 },
        { name: "Schichauweg", time: 3 },
        { name: "Mahlow", time: 5 },
        { name: "Blankenfelde", time: 5 }
      ],
      returnDepot: false
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
      hasDepot: false,
      depotName: null,
      stops: [
        { name: "Berlin Hbf", time: 0 },
        { name: "Berlin-Spandau", time: 8 },
        { name: "Falkensee", time: 7 },
        { name: "Brieselang", time: 10 },
        { name: "Nauen", time: 12 }
      ],
      returnDepot: false
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
      hasDepot: false,
      depotName: null,
      stops: [
        { name: "Berlin Hbf", time: 0 },
        { name: "Berlin-Jungfernheide", time: 5 },
        { name: "Berlin-Charlottenburg", time: 5 },
        { name: "Berlin-Spandau", time: 7 },
        { name: "Falkensee", time: 7 },
        { name: "Brieselang", time: 10 },
        { name: "Nauen", time: 11 }
      ],
      returnDepot: false
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
      hasDepot: true,
      depotName: "Depot Magdeburg",
      stops: [
        { name: "Magdeburg Hbf", time: 0 },
        { name: "Burg", time: 17 },
        { name: "Genthin", time: 14 },
        { name: "Brandenburg Hbf", time: 28 },
        { name: "Potsdam Hbf", time: 22 },
        { name: "Berlin-Wannsee", time: 7 },
        { name: "Berlin-Charlottenburg", time: 8 },
        { name: "Berlin Hbf", time: 7 },
        { name: "Berlin Ostbahnhof", time: 5 },
        { name: "Berlin-Ostkreuz", time: 5 },
        { name: "Erkner", time: 12 },
        { name: "Fürstenwalde (Spree)", time: 16 },
        { name: "Briesen (Mark)", time: 12 },
        { name: "Frankfurt (Oder)", time: 19 }
      ],
      returnDepot: false
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
      hasDepot: false,
      depotName: null,
      stops: [
        { name: "Wismar", time: 0 },
        { name: "Bad Kleinen", time: 10 },
        { name: "Schwerin Hbf", time: 12 },
        { name: "Ludwigslust", time: 32 },
        { name: "Wittenberge", time: 35 },
        { name: "Nauen", time: 40 },
        { name: "Berlin-Spandau", time: 20 },
        { name: "Berlin Hbf", time: 10 },
        { name: "Berlin Ostkreuz", time: 12 },
        { name: "Königs Wusterhausen", time: 20 },
        { name: "Lübben (Spreewald)", time: 25 },
        { name: "Lübbenau (Spreewald)", time: 15 },
        { name: "Vetschau", time: 15 },
        { name: "Cottbus", time: 15 }
      ],
      returnDepot: false
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
      hasDepot: false,
      depotName: null,
      stops: [
        { name: "Berlin Hbf", time: 0 },
        { name: "Berlin-Spandau", time: 10 },
        { name: "Wittenberge", time: 45 },
        { name: "Ludwigslust", time: 35 },
        { name: "Hamburg Hbf", time: 60 }
      ],
      returnDepot: false
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
      hasDepot: false,
      depotName: null,
      stops: [
        { name: "Berlin Hbf", time: 0 },
        { name: "Berlin-Spandau", time: 8 },
        { name: "Wittenberge", time: 35 },
        { name: "Hamburg Hbf", time: 60 }
      ],
      returnDepot: false
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
      hasDepot: false,
      depotName: null,
      stops: [
        { name: "Norddeich Mole", time: 0 },
        { name: "Norden", time: 8 },
        { name: "Emden", time: 15 },
        { name: "Leer", time: 20 },
        { name: "Oldenburg", time: 35 },
        { name: "Bremen", time: 40 },
        { name: "Hannover Hbf", time: 65 },
        { name: "Braunschweig Hbf", time: 35 },
        { name: "Magdeburg Hbf", time: 50 },
        { name: "Berlin Hbf", time: 90 },
        { name: "Lutherstadt Wittenberg", time: 45 },
        { name: "Leipzig Hbf", time: 37 }
      ],
      returnDepot: false
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
      hasDepot: false,
      depotName: null,
      stops: [
        { name: "Berlin Hbf", time: 0 },
        { name: "Berlin Südkreuz", time: 5 },
        { name: "Lutherstadt Wittenberg", time: 30 },
        { name: "Erfurt Hbf", time: 60 },
        { name: "Bamberg", time: 45 },
        { name: "Nürnberg Hbf", time: 25 },
        { name: "München Hbf", time: 70 }
      ],
      returnDepot: false
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
      hasDepot: false,
      depotName: null,
      stops: [
        { name: "Berlin Hbf", time: 0 },
        { name: "Berlin Südkreuz", time: 5 },
        { name: "Halle (Saale) Hbf", time: 60 },
        { name: "Erfurt Hbf", time: 30 },
        { name: "Gotha", time: 15 },
        { name: "Eisenach", time: 20 },
        { name: "Fulda", time: 40 },
        { name: "Hanau Hbf", time: 45 },
        { name: "Frankfurt (Main) Hbf", time: 14 }
      ],
      returnDepot: false
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
      hasDepot: false,
      depotName: null,
      stops: [
        { name: "Hamburg Hbf", time: 0 },
        { name: "Berlin Hbf", time: 100 },
        { name: "Leipzig Hbf", time: 70 },
        { name: "Nürnberg Hbf", time: 90 },
        { name: "München Hbf", time: 74 }
      ],
      returnDepot: false
    },
    { 
      id: 101, 
      type: "ICE", 
      number: "ICE101", 
      from: "Berlin Hbf", 
      to: "München Hbf", 
      via: "Halle, Erfurt, Nürnberg", 
      duration: "3 h 52 min",
      description: "Der ICE101 ist eine der schnellsten Verbindungen zwischen Berlin und München über die Neubaustrecke.",
      hasDepot: false,
      depotName: null,
      stops: [
        { name: "Berlin Hbf", time: 0 },
        { name: "Berlin Südkreuz", time: 5 },
        { name: "Halle (Saale) Hbf", time: 60 },
        { name: "Erfurt Hbf", time: 30 },
        { name: "Nürnberg Hbf", time: 85 },
        { name: "München Hbf", time: 52 }
      ],
      returnDepot: false
    }
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

  // Create the reverse route for the return journey
  const reverseRoute = {
    ...route,
    from: route.to,
    to: route.from,
    stops: [...route.stops].reverse(),
    depotName: route.returnDepot ? `Depot ${route.to}` : null,
    hasDepot: route.returnDepot
  };

  // Helper function to determine the route color
  const getRouteHeaderColor = (routeType) => {
    switch (routeType) {
      case "S-Bahn":
        return "bg-green-600 text-white";
      case "RB":
      case "RE":
        return "bg-db-red text-white";
      case "IRE":
        return "bg-orange-500 text-white";
      case "EC":
      case "IC":
        return "bg-blue-700 text-white";
      case "ICE":
        return "bg-blue-800 text-white";
      default:
        return "bg-gray-700 text-white";
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
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
          
          <div className="mb-6">
            <h1 className="text-3xl font-bold">{route.routeNumber}: {route.number}</h1>
            <p className="text-xl mt-2">{route.from} <ArrowRight className="inline h-4 w-4" /> {route.to}</p>
          </div>
          
          {/* Route header card */}
          <Card className="rounded-lg shadow-md overflow-hidden bg-white mb-6">
            <CardHeader className={`p-5 ${getRouteHeaderColor(route.type)}`}>
              <div className="flex items-center gap-2">
                <Train className="h-6 w-6" />
                <h2 className="text-2xl font-bold">{route.number}</h2>
              </div>
              <p className="text-lg mt-2">
                {route.from} → {route.to}
              </p>
            </CardHeader>
            
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-gray-700">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Fahrzeit: {route.duration}</span>
                </div>
              </div>
              
              <div className="text-gray-600">
                <p>{route.description}</p>
              </div>
              
              <div className="mt-4 border-t border-gray-200 pt-4">
                <button className="flex items-center text-db-red hover:underline cursor-pointer">
                  <Info className="h-4 w-4 mr-1" />
                  <span className="font-medium">Details Information</span>
                </button>
              </div>
            </CardContent>
          </Card>
          
          {/* Stops card with vertical timeline - INBOUND */}
          <Card className="rounded-lg shadow-md overflow-hidden bg-white mb-6">
            <CardHeader className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Haltestellen (Hinfahrt)
              </h2>
            </CardHeader>
            
            <CardContent className="p-6">
              <div className="relative pl-10">
                {/* Depot marker if applicable */}
                {route.hasDepot && (
                  <div className="absolute left-0 top-0">
                    <div className="timeline-circle border-db-depot text-db-depot">
                      <Home className="h-3 w-3" />
                    </div>
                    <div className="ml-8 mb-6">
                      <span className="text-lg font-medium text-db-depot">
                        {route.depotName}
                      </span>
                    </div>
                  </div>
                )}
                
                {/* Vertical timeline line - properly centered through the circles */}
                <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-gray-300" style={{ zIndex: 1 }}></div>
                
                <ul className="space-y-10 relative" style={{ zIndex: 5 }}>
                  {route.stops.map((stop, index) => {
                    const isStartOrEnd = (index === 0 || index === route.stops.length - 1);
                    const nextStop = route.stops[index + 1];
                    const hasTimeToNextStop = index < route.stops.length - 1 && nextStop?.time;
                    const marginTop = index === 0 && route.hasDepot ? "mt-10" : "";
                    
                    return (
                      <li key={index} className={`relative ${marginTop}`}>
                        {/* Circle marker */}
                        <div className="absolute left-[-28px] top-1/2 transform -translate-y-1/2" style={{ zIndex: 10 }}>
                          <div className={`timeline-circle ${isStartOrEnd ? 'border-db-red' : 'border-gray-400'}`}>
                            {isStartOrEnd && <div className="h-3 w-3 rounded-full bg-db-red"></div>}
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="ml-4">
                          {/* Station name */}
                          <div className="flex items-center">
                            <span className="text-lg font-medium text-gray-800">
                              {stop.name}
                            </span>
                            {index === 0 && 
                              <span className="ml-2 text-xs bg-db-red text-white px-2 py-0.5 rounded">Start</span>
                            }
                            {index === route.stops.length - 1 && 
                              <span className="ml-2 text-xs bg-db-red text-white px-2 py-0.5 rounded">Ziel</span>
                            }
                          </div>
                          
                          {/* Time to next stop */}
                          {hasTimeToNextStop && (
                            <div className="mt-2 text-gray-600 absolute -left-0 top-14 bg-white px-1 text-sm">
                              + {nextStop.time} min
                            </div>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
                
                {/* Return depot marker if applicable */}
                {route.returnDepot && (
                  <div className="absolute left-0 bottom-[-60px]">
                    <div className="timeline-circle border-db-yellow text-db-yellow">
                      <Home className="h-3 w-3" />
                    </div>
                    <div className="ml-8">
                      <span className="text-lg font-medium text-db-yellow">
                        Mögl. Abstellung
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          
          {/* Stops card with vertical timeline - OUTBOUND */}
          <Card className="rounded-lg shadow-md overflow-hidden bg-white">
            <CardHeader className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Haltestellen (Rückfahrt)
              </h2>
            </CardHeader>
            
            <CardContent className="p-6">
              <div className="relative pl-10">
                {/* Depot marker if applicable */}
                {reverseRoute.hasDepot && (
                  <div className="absolute left-0 top-0">
                    <div className="timeline-circle border-db-depot text-db-depot">
                      <Home className="h-3 w-3" />
                    </div>
                    <div className="ml-8 mb-6">
                      <span className="text-lg font-medium text-db-depot">
                        {reverseRoute.depotName}
                      </span>
                    </div>
                  </div>
                )}
                
                {/* Vertical timeline line - properly centered through the circles */}
                <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-gray-300" style={{ zIndex: 1 }}></div>
                
                <ul className="space-y-10 relative" style={{ zIndex: 5 }}>
                  {reverseRoute.stops.map((stop, index) => {
                    const isStartOrEnd = (index === 0 || index === reverseRoute.stops.length - 1);
                    const nextStop = reverseRoute.stops[index + 1];
                    const hasTimeToNextStop = index < reverseRoute.stops.length - 1 && nextStop?.time;
                    const marginTop = index === 0 && reverseRoute.hasDepot ? "mt-10" : "";
                    
                    return (
                      <li key={index} className={`relative ${marginTop}`}>
                        {/* Circle marker */}
                        <div className="absolute left-[-28px] top-1/2 transform -translate-y-1/2" style={{ zIndex: 10 }}>
                          <div className={`timeline-circle ${isStartOrEnd ? 'border-db-red' : 'border-gray-400'}`}>
                            {isStartOrEnd && <div className="h-3 w-3 rounded-full bg-db-red"></div>}
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="ml-4">
                          {/* Station name */}
                          <div className="flex items-center">
                            <span className="text-lg font-medium text-gray-800">
                              {stop.name}
                            </span>
                            {index === 0 && 
                              <span className="ml-2 text-xs bg-db-red text-white px-2 py-0.5 rounded">Start</span>
                            }
                            {index === reverseRoute.stops.length - 1 && 
                              <span className="ml-2 text-xs bg-db-red text-white px-2 py-0.5 rounded">Ziel</span>
                            }
                          </div>
                          
                          {/* Time to next stop */}
                          {hasTimeToNextStop && (
                            <div className="mt-2 text-gray-600 absolute -left-0 top-14 bg-white px-1 text-sm">
                              + {nextStop.time} min
                            </div>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
                
                {/* Return depot marker if applicable */}
                {reverseRoute.returnDepot && (
                  <div className="absolute left-0 bottom-[-60px]">
                    <div className="timeline-circle border-db-yellow text-db-yellow">
                      <Home className="h-3 w-3" />
                    </div>
                    <div className="ml-8">
                      <span className="text-lg font-medium text-db-yellow">
                        Mögl. Abstellung
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RouteDetail;
