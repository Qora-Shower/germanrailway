
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>
          
          <div className="prose max-w-none">
            <p className="mb-4">
              Letzte Aktualisierung: 16. April 2025
            </p>
            
            <p className="mb-4">
              Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. In dieser Datenschutzerklärung 
              informieren wir Sie darüber, welche Daten wir erheben, wie wir sie verwenden und welche Rechte Sie haben.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Verantwortliche Stelle</h2>
            <p className="mb-4">
              Verantwortlich für die Erhebung und Verarbeitung Ihrer personenbezogenen Daten ist:
            </p>
            <p className="mb-4">
              Deutsche Bahn AG Roblox<br />
              Magdeburg<br />
              Deutschland<br />
              E-Mail: deutsche.bahn.rbx@gmail.com 
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p className="mb-4">
              Wenn Sie unsere Website besuchen oder unsere Roblox-Erfahrung nutzen, können folgende Arten von Daten erfasst werden:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Informationen über Ihren Roblox-Account (Benutzername, ID)</li>
              <li>Technische Daten wie IP-Adresse, Browsertyp und -version, Betriebssystem</li>
              <li>Nutzungsdaten wie besuchte Seiten, Interaktionen, Spielstatistiken</li>
              <li>Kommunikationsdaten aus dem Chat oder Foren</li>
              <li>Freiwillig bereitgestellte Informationen z.B. bei Bewerbungen oder Feedback</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Zweck der Datenverarbeitung</h2>
            <p className="mb-4">
              Wir verarbeiten Ihre personenbezogenen Daten für folgende Zwecke:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Bereitstellung und Verbesserung unserer Dienste</li>
              <li>Personalisierung Ihrer Nutzererfahrung</li>
              <li>Kommunikation mit Ihnen bezüglich Updates oder Änderungen</li>
              <li>Bearbeitung von Bewerbungen für Rollenspiel-Positionen</li>
              <li>Durchsetzung unserer Nutzungsbedingungen und Sicherheit unserer Plattform</li>
              <li>Analyse und Verbesserung unserer Website und Spielerfahrung</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Rechtsgrundlage der Verarbeitung</h2>
            <p className="mb-4">
              Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage folgender Rechtsgrundlagen:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</li>
              <li>Zur Erfüllung eines Vertrages oder vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO)</li>
              <li>Zur Erfüllung rechtlicher Verpflichtungen (Art. 6 Abs. 1 lit. c DSGVO)</li>
              <li>Zur Wahrung berechtigter Interessen (Art. 6 Abs. 1 lit. f DSGVO)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Weitergabe von Daten</h2>
            <p className="mb-4">
              Ihre personenbezogenen Daten werden grundsätzlich nicht an Dritte weitergegeben, es sei denn:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Sie haben Ihre ausdrückliche Einwilligung dazu erteilt</li>
              <li>Die Weitergabe ist zur Erfüllung eines Vertrages notwendig</li>
              <li>Es besteht eine gesetzliche Verpflichtung zur Weitergabe</li>
              <li>Die Weitergabe ist zur Wahrung berechtigter Interessen erforderlich</li>
            </ul>
            <p className="mb-4">
              Wir arbeiten mit folgenden externen Dienstleistern zusammen:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Roblox Corporation (Spielplattform)</li>
              <li>Cloud-Hosting-Anbieter für unsere Website</li>
              <li>Analyse-Tools zur Verbesserung unseres Angebots</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Datensicherheit</h2>
            <p className="mb-4">
              Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre personenbezogenen Daten 
              gegen zufällige oder vorsätzliche Manipulation, Verlust, Zerstörung oder gegen den Zugriff unberechtigter 
              Personen zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Dauer der Speicherung</h2>
            <p className="mb-4">
              Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die Zwecke, für die sie erhoben wurden, 
              erforderlich ist oder gesetzliche Aufbewahrungsfristen dies vorschreiben. Anschließend werden die Daten gelöscht 
              oder anonymisiert, sodass ein Personenbezug nicht mehr hergestellt werden kann.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Ihre Rechte</h2>
            <p className="mb-4">
              Sie haben folgende Rechte bezüglich der Verarbeitung Ihrer personenbezogenen Daten:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
              <li>Recht auf Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
              <li>Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Cookies und Analysedienste</h2>
            <p className="mb-4">
              Wir verwenden Cookies und ähnliche Technologien, um die Nutzung unserer Website zu erleichtern und zu verbessern. 
              Cookies sind kleine Dateien, die auf Ihrem Gerät gespeichert werden und Informationen über Ihre Aktivitäten auf 
              unserer Website enthalten können.
            </p>
            <p className="mb-4">
              Sie können Ihren Browser so einstellen, dass er Sie über das Setzen von Cookies informiert oder Cookies 
              automatisch ablehnt. Bitte beachten Sie, dass bei Deaktivierung von Cookies einige Funktionen unserer 
              Website möglicherweise nicht mehr vollständig zur Verfügung stehen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Änderungen der Datenschutzerklärung</h2>
            <p className="mb-8">
              Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit unter Beachtung der geltenden 
              Datenschutzvorschriften zu ändern. Die aktuelle Version ist stets auf unserer Website verfügbar.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
