import { useEffect, useState } from "react";
import RecipePage from "./RecipePage";
import { supabase } from "../lib/supabase";
import Hero from "../components/Hero";
import { QueryData } from "@supabase/supabase-js";

/* 
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
 */

export default function HomePage() {
  const [mostPopular, setMostPopular] = useState<RecipesData>([]);

  const getMostPopularRecipes = async () => {
    const recipes = await supabase
      .from("recipes")
      .select("id, image_url, name, description")
      .order("rating", { ascending: false })
      .limit(3);
    return recipes;
  };
  useEffect(() => {
    getMostPopularRecipes().then((result) => {
      setMostPopular(result.data ?? []);
    });
  }, []);

  type RecipesData = QueryData<ReturnType<typeof getMostPopularRecipes>>;

  return (
    <main>
      <Hero />
      <div className="most-popular">
        <h3>Die beliebtesten Rezepte</h3>
        <div className="most-popular-cards">
          {mostPopular?.map((recipe) => (
            <RecipePage key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </main>
  );
}
