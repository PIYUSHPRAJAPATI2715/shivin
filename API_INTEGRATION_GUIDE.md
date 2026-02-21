# Shiven Real Estate Web Application

A modern, animated real estate web application built with React, TypeScript, Tailwind CSS, and Motion (Framer Motion).

## Features

✨ **Modern UI/UX**
- Beautiful gradient-based design with indigo/purple color scheme
- Smooth animations and transitions using Motion (Framer Motion)
- Fully responsive design with mobile-first approach
- Mobile bottom navigation for easy access

🏠 **Property Management**
- Browse and search properties
- Advanced filtering (price, type, bedrooms, bathrooms)
- Property detail pages with full information
- Favorites/wishlist functionality

🎨 **Pages**
- Home - Hero section with featured properties
- Properties - Browse all properties with filters
- Property Detail - Complete property information
- Favorites - Saved properties
- Profile - User profile and settings

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router** - Navigation
- **Tailwind CSS v4** - Styling
- **Motion (Framer Motion)** - Animations
- **Lucide React** - Icons
- **Radix UI** - Accessible components

## Project Structure

```
src/
├── app/
│   ├── components/       # Reusable UI components
│   │   ├── ui/          # Base UI components (shadcn)
│   │   ├── Layout.tsx
│   │   ├── PropertyCard.tsx
│   │   ├── SearchBar.tsx
│   │   ├── FilterPanel.tsx
│   │   └── LoadingStates.tsx
│   ├── pages/           # Page components
│   │   ├── HomePage.tsx
│   │   ├── PropertiesPage.tsx
│   │   ├── PropertyDetailPage.tsx
│   │   ├── FavoritesPage.tsx
│   │   └── ProfilePage.tsx
│   ├── services/        # API services
│   │   └── api.ts
│   ├── hooks/           # Custom React hooks
│   │   └── useFavorites.ts
│   ├── types/           # TypeScript types
│   │   └── property.ts
│   ├── data/            # Mock data (will be replaced with API)
│   │   └── properties.ts
│   ├── routes.tsx       # React Router configuration
│   └── App.tsx          # Main app component
└── styles/              # Global styles
```

## API Integration Guide

### Current State
The app currently uses **mock data** with simulated API delays. All API calls are in `/src/app/services/api.ts`.

### Integrating Your Backend

#### 1. Update API Configuration

In `/src/app/services/api.ts`, update the `API_BASE_URL`:

```typescript
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/api";
```

Create a `.env` file:
```
REACT_APP_API_URL=https://your-api-domain.com/api
```

#### 2. Enable API Calls

The `propertyApi` service has TODO comments showing where to uncomment real API calls:

```typescript
// Current (Mock):
const { properties } = await import("../data/properties");
return new Promise((resolve) => {
  setTimeout(() => resolve(properties), 500);
});

// Change to (Real API):
return apiClient.get<Property[]>("/properties");
```

#### 3. API Endpoints Expected

The app expects the following REST API endpoints:

**Properties**
- `GET /api/properties` - Get all properties
- `GET /api/properties/:id` - Get property by ID
- `GET /api/properties/search?q={query}` - Search properties
- `POST /api/properties/filter` - Filter properties
  ```json
  {
    "priceRange": [0, 5000000],
    "propertyTypes": ["House", "Villa"],
    "bedrooms": 3,
    "bathrooms": 2
  }
  ```
- `GET /api/properties/featured` - Get featured properties

**Favorites** (Optional - currently using localStorage)
- `GET /api/favorites` - Get user's favorites
- `POST /api/favorites/:propertyId` - Add to favorites
- `DELETE /api/favorites/:propertyId` - Remove from favorites

#### 4. Property Data Model

```typescript
interface Property {
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
```

#### 5. Authentication (Future)

To add authentication:

1. Update `ApiClient` class to include auth headers:
```typescript
private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const token = localStorage.getItem("authToken");
  
  const config: RequestInit = {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  };
  // ... rest of the code
}
```

2. Create auth service for login/register
3. Add protected routes in `routes.tsx`

## Running the Application

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

```
REACT_APP_API_URL=https://your-api-domain.com/api
```

## Features to Implement with Backend

- [ ] User authentication and registration
- [ ] Property management (CRUD for admin)
- [ ] Contact agent functionality
- [ ] Tour scheduling
- [ ] User saved searches
- [ ] Property recommendations
- [ ] Real-time notifications
- [ ] Image upload for properties
- [ ] Payment integration
- [ ] Document management

## Notes

- All components use Tailwind CSS v4 with custom theme in `/src/styles/theme.css`
- Animations are powered by Motion (Framer Motion)
- Mobile navigation uses bottom tab bar on small screens
- Desktop uses top header navigation
- Favorites are currently stored in localStorage but can be moved to backend

## Support

For questions or issues, please refer to the inline code documentation or create an issue in the repository.
