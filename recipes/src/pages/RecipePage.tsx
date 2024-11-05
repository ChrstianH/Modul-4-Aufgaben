import { Link } from "react-router-dom";

type Recipe = {
  id: string;
  image_url: string | null;
  name: string;
  description: string;
} | null;

export default function RecipePage(props: { recipe: Recipe }) {
  return (
    <div className="recipe-page">
      <Link to={`/recipe/${props.recipe!.id}`}>
        <img src={props.recipe!.image_url} alt={props.recipe!.name} />
      </Link>
      <div className="recipe-page-lower">
        <h3>{props.recipe?.name}</h3>
        <p>{props.recipe?.description}</p>
        <Link to={`/recipe/${props.recipe!.id}`} className="to-recipe">
          Zum Rezept
        </Link>
      </div>
    </div>
  );
}
