import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";
import { QueryData } from "@supabase/supabase-js";

export default function DetailsPage() {
  const { id } = useParams();
  console.log(id);
  const [recipe, setRecipe] = useState<RecipeData>([]);

  const getRecipe = async () => {
    const recipe = await supabase
      .from("recipes")
      .select("id, image_url, name, ingredients(*)")
      .eq("id", id!);
    return recipe;
  };

  useEffect(() => {
    getRecipe().then((result) => setRecipe(result.data!));
  }, []);

  type RecipeData = QueryData<ReturnType<typeof getRecipe>>;

  return (
    <div>
      <img src={recipe[0].image_url!} alt={recipe[0].name} />
    </div>
  );
}
