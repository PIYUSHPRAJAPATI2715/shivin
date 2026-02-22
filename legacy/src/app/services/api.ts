import { Property } from "../types/property";
import { properties as staticProperties } from "../data/properties";

// Property API Service
export const propertyApi = {
  // Get all properties
  getAll: async (): Promise<Property[]> => {
    return staticProperties;
  },

  // Get property by ID
  getById: async (id: string): Promise<Property | undefined> => {
    return staticProperties.find((p) => p.id === id);
  },

  // Search properties
  search: async (query: string): Promise<Property[]> => {
    return staticProperties.filter(
      (p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.location.toLowerCase().includes(query.toLowerCase())
    );
  },

  // Filter properties
  filter: async (filters: {
    priceRange?: [number, number];
    propertyTypes?: string[];
    bedrooms?: number;
    bathrooms?: number;
  }): Promise<Property[]> => {
    let filtered = staticProperties;

    if (filters.priceRange) {
      filtered = filtered.filter(
        (p) =>
          p.price >= filters.priceRange![0] &&
          p.price <= filters.priceRange![1]
      );
    }

    if (filters.propertyTypes && filters.propertyTypes.length > 0) {
      filtered = filtered.filter((p) =>
        filters.propertyTypes!.includes(p.type)
      );
    }

    if (filters.bedrooms) {
      filtered = filtered.filter((p) => p.bedrooms >= (filters.bedrooms || 0));
    }

    if (filters.bathrooms) {
      filtered = filtered.filter((p) => p.bathrooms >= (filters.bathrooms || 0));
    }

    return filtered;
  },

  // Get featured properties
  getFeatured: async (): Promise<Property[]> => {
    return staticProperties.filter((p) => p.featured);
  },
};

// Favorites API Service
export const favoritesApi = {
  getAll: (): string[] => {
    const favorites = localStorage.getItem("favorites");
    return favorites ? JSON.parse(favorites) : [];
  },

  add: (propertyId: string): void => {
    const favorites = favoritesApi.getAll();
    if (!favorites.includes(propertyId)) {
      favorites.push(propertyId);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      window.dispatchEvent(new Event("favoritesChanged"));
    }
  },

  remove: (propertyId: string): void => {
    const favorites = favoritesApi.getAll();
    const updated = favorites.filter((id) => id !== propertyId);
    localStorage.setItem("favorites", JSON.stringify(updated));
    window.dispatchEvent(new Event("favoritesChanged"));
  },

  toggle: (propertyId: string): boolean => {
    const favorites = favoritesApi.getAll();
    const isFavorite = favorites.includes(propertyId);

    if (isFavorite) {
      favoritesApi.remove(propertyId);
      return false;
    } else {
      favoritesApi.add(propertyId);
      return true;
    }
  },

  isFavorite: (propertyId: string): boolean => {
    return favoritesApi.getAll().includes(propertyId);
  },
};
