import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";
import { QueryData } from "@supabase/supabase-js";

/* 
type Recipe = {
  category_id: string;
  created_at: string;
  description: string;
  id: string;
  image_url: string;
  instructions: string;
  name: string;
  rating: number;
  servings: number;
} | null;
 */

export default function DetailsPage() {
  const { id } = useParams();
  console.log(id);
  const [recipe, setRecipe] = useState<RecipeData>([]);

  const getRecipe = async () => {
    const recipe = await supabase
      .from("recipes")
      .select("id, image_url, name")
      .eq("id", id!);
    return recipe;
  };

  useEffect(() => {
    getRecipe().then((result) => setRecipe(result.data![0]));
  }, []);

  type RecipeData = QueryData<ReturnType<typeof getRecipe>>;

  return (
    <div>
      <img src={recipe.image_url} alt={recipe.name} />
    </div>
  );
}
