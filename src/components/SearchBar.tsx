
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  initialValue?: string;
  className?: string;
}

const SearchBar = ({
  placeholder = "Search...",
  onChange,
  initialValue = "",
  className
}: SearchBarProps) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className={cn("relative w-full max-w-md mx-auto", className)}>
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-muted-foreground" />
      </div>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="pl-10 pr-4 h-10 rounded-full border-2 focus-visible:ring-offset-0 focus-visible:ring-1"
      />
    </div>
  );
};

export default SearchBar;
