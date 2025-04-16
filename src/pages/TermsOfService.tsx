
import { ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-6">Nutzungsbedingungen</h1>
          
          <div className="prose max-w-none">
            <p className="mb-4">
              Letzte Aktualisierung: 16. April 2025
            </p>
            
            <p className="mb-4">
              Willkommen bei Deutsche Bahn AG Roblox. Diese Nutzungsbedingungen regeln Ihre Nutzung unserer Webseite und unseres Roblox-Spiels. 
              Durch die Nutzung unserer Dienste erklären Sie sich mit diesen Bedingungen einverstanden. Bitte lesen Sie diese sorgfältig durch.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Akzeptanz der Nutzungsbedingungen</h2>
            <p className="mb-4">
              Durch den Zugriff auf und die Nutzung unserer Dienste stimmen Sie zu, an diese Nutzungsbedingungen gebunden zu sein. 
              Wenn Sie mit irgendeinem Teil dieser Bedingungen nicht einverstanden sind, dürfen Sie unsere Dienste nicht nutzen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Änderungen der Nutzungsbedingungen</h2>
            <p className="mb-4">
              Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern oder zu ersetzen. 
              Die aktuellste Version wird immer auf unserer Website verfügbar sein. Es liegt in Ihrer Verantwortung, 
              diese Bedingungen regelmäßig auf Änderungen zu überprüfen. Ihre fortgesetzte Nutzung der Dienste nach 
              der Veröffentlichung von Änderungen stellt Ihre Zustimmung zu diesen Änderungen dar.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Zugang zu den Diensten</h2>
            <p className="mb-4">
              Um auf bestimmte Funktionen unserer Dienste zugreifen zu können, müssen Sie möglicherweise ein Roblox-Konto 
              registrieren. Sie sind dafür verantwortlich, die Vertraulichkeit Ihres Kontos zu wahren, und Sie sind 
              für alle Aktivitäten verantwortlich, die unter Ihrem Konto stattfinden.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Verhaltensregeln</h2>
            <p className="mb-4">
              Bei der Nutzung unserer Dienste müssen Sie folgende Verhaltensregeln einhalten:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Respektieren Sie andere Nutzer und deren Privatsphäre</li>
              <li>Verwenden Sie keine anstößige, beleidigende oder diskriminierende Sprache</li>
              <li>Teilen Sie keine persönlichen Informationen anderer Nutzer ohne deren Zustimmung</li>
              <li>Stören Sie nicht den normalen Betrieb des Spiels oder der Website</li>
              <li>Nutzen Sie keine Exploits, Cheats oder Hacks</li>
              <li>Befolgen Sie alle Anweisungen von Moderatoren und Administratoren</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Geistiges Eigentum</h2>
            <p className="mb-4">
              Alle Inhalte, Funktionen und Eigenschaften unserer Dienste, einschließlich, aber nicht beschränkt auf Texte, 
              Grafiken, Logos, Icons, Bilder, Audio-Clips, digitale Downloads und Softwaresammlungen, sind Eigentum von 
              Deutsche Bahn AG Roblox, seinen Lizenzgebern oder anderen Inhaltsanbietern und sind durch deutsches 
              und internationales Urheberrecht, Marken, Patente, Geschäftsgeheimnisse und andere Gesetze zum geistigen 
              Eigentum oder Eigentumsrechte geschützt.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Beendigung</h2>
            <p className="mb-4">
              Wir können Ihren Zugang zu unseren Diensten jederzeit ohne vorherige Ankündigung aus irgendeinem 
              Grund beenden oder aussetzen, einschließlich, aber nicht beschränkt auf, einen Verstoß gegen diese Nutzungsbedingungen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Haftungsbeschränkung</h2>
            <p className="mb-4">
              In keinem Fall haftet Deutsche Bahn AG Roblox, seine Direktoren, Mitarbeiter, Partner, Agenten, 
              Lieferanten oder verbundenen Unternehmen für indirekte, zufällige, besondere, Folge- oder Strafschäden, 
              einschließlich ohne Einschränkung, Verlust von Gewinnen, Daten, Nutzung, Goodwill oder andere immaterielle 
              Verluste, die aus Ihrer Nutzung oder Unfähigkeit zur Nutzung der Dienste resultieren.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Einhaltung der Roblox-Nutzungsbedingungen</h2>
            <p className="mb-4">
              Unsere Dienste basieren auf der Roblox-Plattform, daher müssen Sie auch die Nutzungsbedingungen von 
              Roblox einhalten. Diese finden Sie unter:
            </p>
            
            <div className="flex items-center mb-6">
              <Button variant="outline" className="flex items-center" asChild>
                <a href="https://en.help.roblox.com/hc/en-us/articles/115004647846-Roblox-Terms-of-Use" target="_blank" rel="noopener noreferrer">
                  Roblox Nutzungsbedingungen
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Geltendes Recht</h2>
            <p className="mb-4">
              Diese Nutzungsbedingungen und Ihre Nutzung der Dienste unterliegen den Gesetzen der Bundesrepublik 
              Deutschland und werden in Übereinstimmung mit diesen ausgelegt, ohne Berücksichtigung von Kollisionsnormen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Kontakt</h2>
            <p className="mb-8">
              Fragen zu den Nutzungsbedingungen sollten an uns unter info@db-roblox.de gerichtet werden.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
