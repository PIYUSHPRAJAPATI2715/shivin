import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { FilterOptions } from "../types/property";
import { motion } from "motion/react";

interface FilterPanelProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
}

export function FilterPanel({ filters, onFiltersChange }: FilterPanelProps) {
  const propertyTypes = ["House", "Apartment", "Villa", "Condo", "Townhouse"];

  const handlePriceChange = (value: number[]) => {
    onFiltersChange({ ...filters, priceRange: [value[0], value[1]] as [number, number] });
  };

  const handlePropertyTypeToggle = (type: string) => {
    const newTypes = filters.propertyTypes.includes(type)
      ? filters.propertyTypes.filter((t) => t !== type)
      : [...filters.propertyTypes, type];
    onFiltersChange({ ...filters, propertyTypes: newTypes });
  };

  const handleBedroomsChange = (bedrooms: number | null) => {
    onFiltersChange({ ...filters, bedrooms });
  };

  const handleBathroomsChange = (bathrooms: number | null) => {
    onFiltersChange({ ...filters, bathrooms });
  };

  const handleReset = () => {
    onFiltersChange({
      priceRange: [0, 5000000],
      propertyTypes: [],
      bedrooms: null,
      bathrooms: null,
    });
  };

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          <span>Filters</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        {/* Price Range */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-3"
        >
          <Label>Price Range</Label>
          <div className="pt-2 px-2">
            <Slider
              min={0}
              max={5000000}
              step={100000}
              value={[filters.priceRange[0], filters.priceRange[1]]}
              onValueChange={handlePriceChange}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-medium text-indigo-600">
              ${(filters.priceRange[0] / 1000).toFixed(0)}K
            </span>
            <span className="font-medium text-purple-600">
              ${(filters.priceRange[1] / 1000).toFixed(0)}K
            </span>
          </div>
        </motion.div>

        {/* Property Type */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="space-y-3"
        >
          <Label>Property Type</Label>
          <div className="space-y-3">
            {propertyTypes.map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                className="flex items-center space-x-3"
              >
                <Checkbox
                  id={type}
                  checked={filters.propertyTypes.includes(type)}
                  onCheckedChange={() => handlePropertyTypeToggle(type)}
                  className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-indigo-500 data-[state=checked]:to-purple-600"
                />
                <label
                  htmlFor={type}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {type}
                </label>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bedrooms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="space-y-3"
        >
          <Label>Bedrooms</Label>
          <div className="grid grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5].map((num, index) => (
              <motion.div
                key={num}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant={filters.bedrooms === num ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleBedroomsChange(filters.bedrooms === num ? null : num)}
                  className={
                    filters.bedrooms === num
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
                      : ""
                  }
                >
                  {num}+
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bathrooms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="space-y-3"
        >
          <Label>Bathrooms</Label>
          <div className="grid grid-cols-5 gap-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <motion.div
                key={num}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant={filters.bathrooms === num ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleBathroomsChange(filters.bathrooms === num ? null : num)}
                  className={
                    filters.bathrooms === num
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
                      : ""
                  }
                >
                  {num}+
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button variant="outline" className="w-full" onClick={handleReset}>
            Reset Filters
          </Button>
        </motion.div>
      </CardContent>
    </Card>
  );
}
