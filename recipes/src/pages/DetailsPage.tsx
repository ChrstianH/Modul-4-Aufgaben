import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";
import { QueryData } from "@supabase/supabase-js";
import DetailsHero from "../components/DetailsHero";

export default function DetailsPage() {
  const { id } = useParams();
  console.log(id);
  const [recipe, setRecipe] = useState<RecipeData | null>(null);

  const getRecipe = async () => {
    const recipe = await supabase
      .from("recipes")
      .select("id, image_url, name, instructions, ingredients(*)")
      .eq("id", id!)
      .single();
    return recipe;
  };

  useEffect(() => {
    getRecipe().then((result) => setRecipe(result.data));
  }, []);

  type RecipeData = QueryData<ReturnType<typeof getRecipe>>;

  if (!recipe) return;

  return (
    <div>
      <DetailsHero name={recipe?.name} image_url={recipe?.image_url} />{" "}
    </div>
  );
}
