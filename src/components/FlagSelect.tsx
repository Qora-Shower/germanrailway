
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const languages = [
  { code: "en-GB", name: "English (United Kingdom)", flag: "🇬🇧" },
  { code: "en-US", name: "English (United States)", flag: "🇺🇸" },
  { code: "en-AU", name: "English (Australia)", flag: "🇦🇺" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
  { code: "pl", name: "Polski", flag: "🇵🇱" }
];

interface FlagSelectProps {
  value: string;
  onValueChange: (value: string) => void;
  darkMode?: boolean;
}

const FlagSelect = ({ value, onValueChange, darkMode }: FlagSelectProps) => {
  const selectedLanguage = languages.find(lang => lang.code === value) || languages[0];

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
              {selectedLanguage.flag}
            </div>
            <span className="font-medium">{selectedLanguage.name}</span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className={`rounded-xl border-2 ${
        darkMode 
          ? "bg-gray-800 border-gray-600" 
          : "bg-white border-gray-200"
      }`}>
        {languages.map((language) => (
          <SelectItem 
            key={language.code} 
            value={language.code}
            className={`cursor-pointer transition-colors ${
              darkMode 
                ? "text-white hover:bg-gray-700 focus:bg-gray-700" 
                : "hover:bg-gray-50 focus:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center text-sm">
                {language.flag}
              </div>
              <span>{language.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default FlagSelect;
