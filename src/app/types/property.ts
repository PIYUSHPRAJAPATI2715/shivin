export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  type: "House" | "Apartment" | "Villa" | "Condo" | "Townhouse";
  bedrooms: number;
  bathrooms: number;
  area: number; // in sqft
  image: string;
  images?: string[];
  featured?: boolean;
  description?: string;
  amenities?: string[];
  yearBuilt?: number;
  parking?: number;
}

export interface FilterOptions {
  priceRange: [number, number];
  propertyTypes: string[];
  bedrooms: number | null;
  bathrooms: number | null;
}
