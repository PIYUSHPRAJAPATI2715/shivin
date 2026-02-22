import { createBrowserRouter } from "react-router";
import { PropertyHomePage } from "./pages/PropertyHomePage";
import { PropertiesPage } from "./pages/PropertiesPage";
import { PropertyDetailPage } from "./pages/PropertyDetailPage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { ProfilePage } from "./pages/ProfilePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ContactPage } from "./pages/ContactPage";
import { WaitlistPage } from "./pages/WaitlistPage";
import { PostPropertyPage } from "./pages/PostPropertyPage";
import { PropertyLayout } from "./components/PropertyLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PropertyLayout,
    children: [
      { index: true, Component: PropertyHomePage },
      { path: "properties", Component: PropertiesPage },
      { path: "property/:id", Component: PropertyDetailPage },
      { path: "favorites", Component: FavoritesPage },
      { path: "profile", Component: ProfilePage },
      { path: "contact", Component: ContactPage },
      { path: "waitlist", Component: WaitlistPage },
      { path: "post-property", Component: PostPropertyPage },
    ],
  },
  { path: "login", Component: LoginPage },
  { path: "register", Component: RegisterPage },
]);