import { Search, MapPin, SlidersHorizontal } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { motion } from "motion/react";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  onFilterClick?: () => void;
  showFilterButton?: boolean;
}

export function SearchBar({ onSearch, onFilterClick, showFilterButton = false }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="w-full"
    >
      <div className="flex gap-2 bg-white rounded-2xl border-0 p-2 shadow-lg">
        <div className="flex-1 flex items-center px-4 bg-muted/30 rounded-xl">
          <MapPin className="h-5 w-5 text-indigo-600 mr-3" />
          <Input
            placeholder="Search location, property..."
            className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {showFilterButton && (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              type="button"
              size="lg"
              variant="outline"
              onClick={onFilterClick}
              className="rounded-xl"
            >
              <SlidersHorizontal className="h-5 w-5" />
            </Button>
          </motion.div>
        )}

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            type="submit"
            size="lg"
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl shadow-lg"
          >
            <Search className="h-5 w-5 md:mr-2" />
            <span className="hidden md:inline">Search</span>
          </Button>
        </motion.div>
      </div>
    </motion.form>
  );
}
