import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import AboutUsPage from "./pages/AboutUsPage";
import DetailsPage from "./pages/DetailsPage";
import RecipeCreatePage from "./pages/RecipeCreatePage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/recipes",
          element: <RecipesPage />,
        },
        {
          path: "/about_us",
          element: <AboutUsPage />,
        },
        {
          path: "/recipe/:id",
          element: <DetailsPage />,
        },
        {
          path: "/add-recipes",
          element: <RecipeCreatePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
