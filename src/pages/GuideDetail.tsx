
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/card";
import { ArrowLeft, User, Users, UserRoundCheck, ShieldCheck, Shield } from "lucide-react";

interface GuideContent {
  title: string;
  color: string;
  icon: React.ReactNode;
  requiredPoints: number;
  requiredExperience: string;
  sections: {
    title: string;
    content: string;
    image?: string;
  }[];
}

const guides: Record<string, GuideContent> = {
  "driver": {
    title: "Driver Guide",
    color: "text-db-red",
    icon: <User className="h-8 w-8" />,
    requiredPoints: 500,
    requiredExperience: "Mindestens 10 Stunden Fahrzeit als Passagier",
    sections: [
      {
        title: "Grundlagen des Zugfahrens",
        content: "Als Zugführer bist du verantwortlich für die sichere Beförderung von Passagieren von A nach B. Du musst die Signale beachten, die Geschwindigkeitsbegrenzungen einhalten und pünktlich sein. Die Deutsche Bahn legt großen Wert auf Sicherheit und Pünktlichkeit. Deine Hauptaufgaben umfassen das Starten und Stoppen des Zuges, die Überwachung der Systeme während der Fahrt und die Kommunikation mit dem Stellwerk und anderen Bahnmitarbeitern."
      },
      {
        title: "Signale verstehen",
        content: "Signale sind das A und O im Bahnverkehr. Du musst alle Arten von Signalen kennen und verstehen, was sie bedeuten. Es gibt Hauptsignale, Vorsignale, Langsamfahrsignale und viele mehr. Jedes Signal hat eine spezifische Bedeutung und du musst sofort darauf reagieren können. Ein rotes Signal bedeutet immer 'Halt', ein grünes Signal 'Fahrt' und ein gelbes Signal 'Fahrt mit Vorsicht' oder 'erwarte Halt am nächsten Signal'."
      },
      {
        title: "Zugtypen und ihre Besonderheiten",
        content: "Als Fahrer musst du mit verschiedenen Zugtypen vertraut sein. ICE, IC, RE, RB, S-Bahn - jeder hat seine eigenen technischen Spezifikationen und Besonderheiten. ICE-Züge sind Hochgeschwindigkeitszüge, die besondere Aufmerksamkeit erfordern, während S-Bahnen häufiger halten und in dichteren Taktzeiten fahren."
      },
      {
        title: "Verhalten bei Störungen",
        content: "Störungen können jederzeit auftreten. Als Fahrer musst du wissen, wie du in solchen Situationen reagierst. Bei technischen Problemen, Signalstörungen oder Unfällen ist es wichtig, Ruhe zu bewahren und nach Protokoll zu handeln. Informiere sofort das Stellwerk und folge den Anweisungen."
      },
      {
        title: "Karriereentwicklung",
        content: "Als Fahrer kannst du verschiedene Qualifikationen erwerben. Mit mehr Erfahrung kannst du zum Ausbilder werden und neue Fahrer schulen. Auch eine Spezialisierung auf bestimmte Zugtypen ist möglich."
      }
    ]
  },
  "platform": {
    title: "Platform Employee Guide",
    color: "text-orange-600",
    icon: <Users className="h-8 w-8" />,
    requiredPoints: 300,
    requiredExperience: "Grundkenntnisse im Bahnbetrieb",
    sections: [
      {
        title: "Aufgaben am Bahnsteig",
        content: "Als Bahnsteigmitarbeiter bist du die erste Anlaufstelle für Passagiere. Deine Hauptaufgaben umfassen die Information der Reisenden über Abfahrtszeiten und Gleisänderungen, die Hilfestellung beim Ein- und Aussteigen sowie die Überwachung des Bahnsteigs."
      },
      {
        title: "Umgang mit Passagieren",
        content: "Der Umgang mit Passagieren erfordert Geduld und Freundlichkeit. Du musst in der Lage sein, auf Fragen zu antworten und bei Problemen zu helfen. Achte besonders auf Personen mit eingeschränkter Mobilität und biete ihnen deine Hilfe an."
      },
      {
        title: "Sicherheit am Bahnsteig",
        content: "Die Sicherheit am Bahnsteig hat oberste Priorität. Achte darauf, dass Passagiere hinter der Sicherheitslinie warten und sich nicht zu nah an die Bahnsteigkante stellen. Bei einfahrenden Zügen solltest du besonders wachsam sein."
      }
    ]
  },
  "conductor": {
    title: "Conductor Guide",
    color: "text-amber-600",
    icon: <UserRoundCheck className="h-8 w-8" />,
    requiredPoints: 400,
    requiredExperience: "Kundenservice-Erfahrung",
    sections: [
      {
        title: "Fahrkartenkontrolle",
        content: "Als Schaffner ist die Fahrkartenkontrolle deine Hauptaufgabe. Du musst alle Arten von Tickets kennen und überprüfen können. Bei ungültigen Tickets musst du entsprechend handeln und gegebenenfalls ein erhöhtes Beförderungsentgelt erheben."
      },
      {
        title: "Durchsagen im Zug",
        content: "Informative Durchsagen sind wichtig für die Passagiere. Du informierst über die nächsten Halte, Anschlüsse und eventuelle Verspätungen. Sprich deutlich und langsam, damit alle Passagiere dich verstehen können."
      },
      {
        title: "Umgang mit schwierigen Situationen",
        content: "Manchmal musst du mit schwierigen Passagieren oder unerwarteten Situationen umgehen. Bleib ruhig und höflich, auch wenn Passagiere unfreundlich werden. Bei Konflikten versuche zu deeskalieren und hole dir bei Bedarf Unterstützung."
      }
    ]
  },
  "signaller": {
    title: "Signaller Guide",
    color: "text-green-600",
    icon: <ShieldCheck className="h-8 w-8" />,
    requiredPoints: 600,
    requiredExperience: "Verständnis für Bahnsysteme und Signaltechnik",
    sections: [
      {
        title: "Grundlagen der Signalgebung",
        content: "Als Stellwerker bist du für die Sicherheit des Zugverkehrs verantwortlich. Du steuerst die Signale und Weichen und sorgst dafür, dass Züge sicher und pünktlich fahren können. Die Signalgebung folgt strengen Regeln, die du genau kennen musst."
      },
      {
        title: "Arbeit im Stellwerk",
        content: "Im Stellwerk überwachst du den Zugverkehr auf deinem Abschnitt. Du siehst, wo sich die Züge befinden, stellst Fahrstraßen ein und kommunizierst mit den Fahrern. Bei modernen elektronischen Stellwerken nutzt du Computer zur Steuerung."
      },
      {
        title: "Verhalten bei Störungen",
        content: "Bei Signalstörungen oder anderen Problemen musst du schnell und richtig reagieren. Du informierst die betroffenen Züge und triffst Maßnahmen, um die Sicherheit zu gewährleisten. In bestimmten Situationen kann es notwendig sein, auf Ersatzverfahren zurückzugreifen."
      }
    ]
  },
  "supervisor": {
    title: "Supervisor Guide",
    color: "text-blue-600",
    icon: <Shield className="h-8 w-8" />,
    requiredPoints: 1000,
    requiredExperience: "Mindestens 6 Monate Erfahrung in einer anderen Bahnrolle",
    sections: [
      {
        title: "Führungsaufgaben",
        content: "Als Supervisor bist du für die Überwachung und Koordination der verschiedenen Bahnrollen verantwortlich. Du stellst sicher, dass alle ihre Aufgaben ordnungsgemäß erfüllen und greifst bei Problemen ein."
      },
      {
        title: "Qualitätskontrolle",
        content: "Die Überwachung der Servicequalität ist eine deiner Hauptaufgaben. Du kontrollierst die Pünktlichkeit der Züge, die Sauberkeit der Bahnhöfe und die Freundlichkeit des Personals. Bei Abweichungen von den Standards ergreifst du Maßnahmen zur Verbesserung."
      },
      {
        title: "Krisenmanagement",
        content: "In Krisensituationen übernimmst du die Führung. Bei größeren Störungen, Unfällen oder anderen Notfällen koordinierst du die Maßnahmen und arbeitest mit externen Diensten wie der Polizei oder Feuerwehr zusammen. Deine Entscheidungen müssen schnell und richtig sein."
      }
    ]
  }
};

const GuideDetail = () => {
  const { guideId } = useParams<{ guideId: string }>();
  const navigate = useNavigate();
  
  const guide = guideId ? guides[guideId] : null;
  
  if (!guide) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Guide nicht gefunden</h1>
            <button 
              className="bg-db-red text-white px-4 py-2 rounded-md"
              onClick={() => navigate('/guides')}
            >
              Zurück zu Guides
            </button>
          </div>
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
          <button 
            onClick={() => navigate('/guides')} 
            className="flex items-center text-gray-600 hover:text-db-red mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zu Guides
          </button>
          
          <div className="flex items-center mb-8">
            <div className={`${guide.color.replace('text', 'bg')} p-3 rounded-full mr-4`}>
              {guide.icon}
            </div>
            <h1 className={`text-4xl font-bold ${guide.color}`}>{guide.title}</h1>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl font-semibold mb-4">Voraussetzungen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-md">
                <p className="font-semibold">Benötigte Punkte</p>
                <p className="text-2xl mt-2">{guide.requiredPoints}</p>
              </div>
              <div className="p-4 border rounded-md">
                <p className="font-semibold">Erfahrung</p>
                <p className="text-lg mt-2">{guide.requiredExperience}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            {guide.sections.map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                <p className="text-gray-700 whitespace-pre-line">{section.content}</p>
                {section.image && (
                  <img 
                    src={section.image} 
                    alt={section.title} 
                    className="mt-6 w-full rounded-md object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GuideDetail;
