import { QueryData } from "@supabase/supabase-js";
import Hero from "../components/Hero";
import { supabase } from "../lib/supabase";
import RecipePage from "./RecipePage";
import { useEffect, useState } from "react";
import MostPopular from "../components/MostPopular";

export default function RecipesPage() {
  const [mostRecent, setMostRecent] = useState<RecipesData>([]);

  const getMostRecentRecipes = async () => {
    const recipes = await supabase
      .from("recipes")
      .select("id, image_url, name, description")
      .order("created_at", { ascending: false })
      .limit(3);
    return recipes;
  };
  useEffect(() => {
    getMostRecentRecipes().then((result) => setMostRecent(result.data ?? []));
  }, []);

  type RecipesData = QueryData<ReturnType<typeof getMostRecentRecipes>>;

  return (
    <div>
      <Hero />
      <MostPopular />

      <div className="most-recent">
        <h3>Die neuesten Rezepte</h3>

        {mostRecent?.map((recipe) => (
          <RecipePage recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
