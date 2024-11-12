import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { QueryData } from "@supabase/supabase-js";

export default function DetailsHero(props: { recipe_id: string }) {
  const [recipe, setRecipe] = useState<RecipeData | null>(null);

  const getRecipe = async () => {
    const singleRecipe = await supabase
      .from("recipes")
      .select(
        "id, image_url, name, instructions, ingredients(name, unit, quantity)"
      )
      .eq("id", props.recipe_id)
      .single();
    console.log(singleRecipe);
    return singleRecipe;
  };

  useEffect(() => {
    getRecipe().then((result) => setRecipe(result.data));
  }, []);

  type RecipeData = QueryData<ReturnType<typeof getRecipe>>;

  if (!recipe) return;

  const background = recipe.image_url;

  const imgStyle = {
    backgroundImage: `url(${background}`,
  };
  console.log(imgStyle);
  return (
    <div className="details-hero" style={imgStyle}>
      <h2 className="details-hero-text">{recipe?.name}</h2>
    </div>
  );
}
