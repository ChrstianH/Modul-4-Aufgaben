import { Link } from "react-router-dom";

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

export default function RecipePage(props: { recipe: Recipe }) {
  return (
    <div>
      <Link to={`/recipe/${props.recipe?.id}`}>
        <img src={props.recipe?.image_url} alt={props.recipe?.name} />
      </Link>
    </div>
  );
}
