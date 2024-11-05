import { useEffect, useState } from "react";
import RecipePage from "./RecipePage";
import { supabase } from "../lib/supabase";
import Hero from "../components/Hero";

type Recipes =
  | {
      category_id: string;
      created_at: string;
      description: string;
      id: string;
      image_url: string;
      instructions: string;
      name: string;
      rating: number;
      servings: number;
    }[]
  | null;

export default function HomePage() {
  const [mostPopular, setMostPopular] = useState<Recipes>([]);

  const getMostPopularRecipes = async () => {
    const recipes = await supabase
      .from("recipes")
      .select("*")
      .order("rating", { ascending: false })
      .limit(3);
    return recipes;
  };
  useEffect(() => {
    getMostPopularRecipes().then((result) => {
      setMostPopular(result.data);
    });
  }, []);

  return (
    <main>
      <Hero />
      <div className="most-popular">
        {mostPopular?.map((recipe) => (
          <RecipePage key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
}
