
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const cities = [
  { code: "london", name: "London", country: "United Kingdom", flag: "🇬🇧", utc: "+0" },
  { code: "berlin", name: "Berlin", country: "Germany", flag: "🇩🇪", utc: "+1" },
  { code: "paris", name: "Paris", country: "France", flag: "🇫🇷", utc: "+1" },
  { code: "madrid", name: "Madrid", country: "Spain", flag: "🇪🇸", utc: "+1" },
  { code: "rome", name: "Rome", country: "Italy", flag: "🇮🇹", utc: "+1" },
  { code: "amsterdam", name: "Amsterdam", country: "Netherlands", flag: "🇳🇱", utc: "+1" },
  { code: "vienna", name: "Vienna", country: "Austria", flag: "🇦🇹", utc: "+1" },
  { code: "zurich", name: "Zurich", country: "Switzerland", flag: "🇨🇭", utc: "+1" },
  { code: "stockholm", name: "Stockholm", country: "Sweden", flag: "🇸🇪", utc: "+1" },
  { code: "copenhagen", name: "Copenhagen", country: "Denmark", flag: "🇩🇰", utc: "+1" },
  { code: "warsaw", name: "Warsaw", country: "Poland", flag: "🇵🇱", utc: "+1" },
  { code: "prague", name: "Prague", country: "Czech Republic", flag: "🇨🇿", utc: "+1" },
  { code: "budapest", name: "Budapest", country: "Hungary", flag: "🇭🇺", utc: "+1" },
  { code: "moscow", name: "Moscow", country: "Russia", flag: "🇷🇺", utc: "+3" },
  { code: "tokyo", name: "Tokyo", country: "Japan", flag: "🇯🇵", utc: "+9" },
  { code: "seoul", name: "Seoul", country: "South Korea", flag: "🇰🇷", utc: "+9" },
  { code: "beijing", name: "Beijing", country: "China", flag: "🇨🇳", utc: "+8" },
  { code: "new-york", name: "New York", country: "United States", flag: "🇺🇸", utc: "-5" },
  { code: "los-angeles", name: "Los Angeles", country: "United States", flag: "🇺🇸", utc: "-8" },
  { code: "chicago", name: "Chicago", country: "United States", flag: "🇺🇸", utc: "-6" },
  { code: "toronto", name: "Toronto", country: "Canada", flag: "🇨🇦", utc: "-5" },
  { code: "vancouver", name: "Vancouver", country: "Canada", flag: "🇨🇦", utc: "-8" },
  { code: "sydney", name: "Sydney", country: "Australia", flag: "🇦🇺", utc: "+11" },
  { code: "melbourne", name: "Melbourne", country: "Australia", flag: "🇦🇺", utc: "+11" },
  { code: "singapore", name: "Singapore", country: "Singapore", flag: "🇸🇬", utc: "+8" },
  { code: "dubai", name: "Dubai", country: "UAE", flag: "🇦🇪", utc: "+4" },
  { code: "mumbai", name: "Mumbai", country: "India", flag: "🇮🇳", utc: "+5:30" },
  { code: "delhi", name: "Delhi", country: "India", flag: "🇮🇳", utc: "+5:30" },
  { code: "bangkok", name: "Bangkok", country: "Thailand", flag: "🇹🇭", utc: "+7" },
  { code: "istanbul", name: "Istanbul", country: "Turkey", flag: "🇹🇷", utc: "+3" },
  { code: "sao-paulo", name: "São Paulo", country: "Brazil", flag: "🇧🇷", utc: "-3" },
  { code: "mexico-city", name: "Mexico City", country: "Mexico", flag: "🇲🇽", utc: "-6" },
  { code: "buenos-aires", name: "Buenos Aires", country: "Argentina", flag: "🇦🇷", utc: "-3" },
  { code: "cape-town", name: "Cape Town", country: "South Africa", flag: "🇿🇦", utc: "+2" },
  { code: "cairo", name: "Cairo", country: "Egypt", flag: "🇪🇬", utc: "+2" }
];

interface CitySelectProps {
  value: string;
  onValueChange: (value: string) => void;
  darkMode?: boolean;
}

const CitySelect = ({ value, onValueChange, darkMode }: CitySelectProps) => {
  const selectedCity = cities.find(city => city.code === value) || cities[0];

  const getCurrentTime = (utc: string) => {
    const now = new Date();
    const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000);
    let offset = 0;
    
    if (utc.includes(':')) {
      const [hours, minutes] = utc.replace('+', '').replace('-', '').split(':');
      offset = (parseInt(hours) * 60 + parseInt(minutes)) * 60000;
      if (utc.startsWith('-')) offset = -offset;
    } else {
      offset = parseInt(utc) * 3600000;
    }
    
    const cityTime = new Date(utcTime + offset);
    return cityTime.toLocaleTimeString('de-DE', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className={`w-full rounded-xl border-2 transition-all ${
        darkMode 
          ? "bg-gray-800 border-gray-600 text-white hover:border-db-red" 
          : "bg-white border-gray-200 hover:border-db-red"
      }`}>
        <SelectValue>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center text-sm">
              {selectedCity.flag}
            </div>
            <span className="font-medium">
              {selectedCity.name} {getCurrentTime(selectedCity.utc)} (UTC{selectedCity.utc})
            </span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className={`rounded-xl border-2 ${
        darkMode 
          ? "bg-gray-800 border-gray-600" 
          : "bg-white border-gray-200"
      }`}>
        {cities.map((city) => (
          <SelectItem 
            key={city.code} 
            value={city.code}
            className={`cursor-pointer transition-colors ${
              darkMode 
                ? "text-white hover:bg-gray-700 focus:bg-gray-700" 
                : "hover:bg-gray-50 focus:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center text-sm">
                {city.flag}
              </div>
              <span>
                {city.name} {getCurrentTime(city.utc)} (UTC{city.utc})
              </span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CitySelect;
