import Hero from "../components/Hero";
import { supabase } from "../lib/supabase";
import RecipePage from "./RecipePage";
import { useEffect, useState } from "react";

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

export default function RecipesPage() {
  const [mostPopular, setMostPopular] = useState<Recipes>([]);
  const [mostRecent, setMostRecent] = useState<Recipes>([]);

  const getMostPopularRecipes = async () => {
    const recipes = await supabase
      .from("recipes")
      .select("*")
      .order("rating", { ascending: false })
      .limit(3);
    return recipes;
  };
  const getMostRecentRecipes = async () => {
    const recipes = await supabase
      .from("recipes")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(3);
    return recipes;
  };
  useEffect(() => {
    getMostPopularRecipes().then((result) => {
      setMostPopular(result.data);
    });
  }, []);
  useEffect(() => {
    getMostRecentRecipes().then((result) => {
      setMostRecent(result.data);
    });
  }, []);

  return (
    <div>
      <Hero />

      <div className="most-popular">
        {mostPopular?.map((recipe) => (
          <RecipePage recipe={recipe} />
        ))}
      </div>

      <div className="most-recent">
        {mostRecent?.map((recipe) => (
          <RecipePage recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
