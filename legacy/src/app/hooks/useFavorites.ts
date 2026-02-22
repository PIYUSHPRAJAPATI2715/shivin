import { useState, useEffect } from "react";
import { favoritesApi } from "../services/api";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Initial load
    setLoading(true);
    setFavorites(favoritesApi.getAll());
    setLoading(false);

    // Listen for changes
    const handleChange = () => {
      setFavorites(favoritesApi.getAll());
    };

    window.addEventListener("favoritesChanged", handleChange);
    window.addEventListener("storage", handleChange);

    return () => {
      window.removeEventListener("favoritesChanged", handleChange);
      window.removeEventListener("storage", handleChange);
    };
  }, []);

  const toggleFavorite = (propertyId: string) => {
    return favoritesApi.toggle(propertyId);
  };

  const isFavorite = (propertyId: string) => {
    return favorites.includes(propertyId);
  };

  return { favorites, toggleFavorite, isFavorite };
}
