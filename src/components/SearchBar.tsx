
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  initialValue?: string;
  className?: string;
  variant?: 'default' | 'modern';
  icon?: React.ReactNode;
  withFilter?: React.ReactNode;
}

const SearchBar = ({
  placeholder = "Suchen...",
  onChange,
  initialValue = "",
  className,
  variant = 'modern',
  icon,
  withFilter
}: SearchBarProps) => {
  const [value, setValue] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div 
      className={cn(
        "relative w-full transition-all duration-200", 
        variant === 'modern' ? "max-w-md" : "max-w-md",
        isFocused && variant === 'modern' ? "scale-[1.02]" : "",
        className
      )}
    >
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        {icon || <Search className={cn("h-4 w-4", isFocused ? "text-db-red" : "text-muted-foreground")} />}
      </div>
      
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn(
          "transition-all duration-200",
          variant === 'modern' 
            ? "pl-10 pr-4 h-10 rounded-full border-2 border-gray-200 shadow-sm focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-db-red focus-visible:border-db-red"
            : "pl-10 pr-4 h-10 rounded-md border focus-visible:ring-1"
        )}
      />
      
      {withFilter && (
        <div className="absolute inset-y-0 right-2 flex items-center">
          {withFilter}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
