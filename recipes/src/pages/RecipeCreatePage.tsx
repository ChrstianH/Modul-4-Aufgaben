import { useRef, useState } from "react";

type Ingredient = {
  name: string;
  quantity: number;
  unit: string;
  additional_info: string | null;
};

export default function RecipeCreatePage() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const nameRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);
  const portionsRef = useRef<HTMLInputElement>(null);
  const instructionsRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);

  const ingrNameRef = useRef<HTMLInputElement>(null);
  const ingrQuantRef = useRef<HTMLInputElement>(null);
  const ingrUnitRef = useRef<HTMLInputElement>(null);
  const ingrInfoRef = useRef<HTMLInputElement>(null);

  const createNewLine: React.MouseEventHandler<HTMLButtonElement> = () => {
    const i_name = ingrNameRef.current!.value;
    const i_quantity = ingrQuantRef.current!.value;
    const i_unit = ingrUnitRef.current!.value;
    const i_info = ingrInfoRef.current!.value;

    const newIngredient: Ingredient = {
      name: i_name,
      quantity: Number(i_quantity),
      unit: i_unit,
      additional_info: i_info,
    };

    const updatedIngredients = [...ingredients, newIngredient];
    setIngredients(updatedIngredients);
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" ref={nameRef} />
        </div>
        <div>
          <label htmlFor="description">Beschreibung</label>
          <input
            type="text"
            name="description"
            id="description"
            ref={descRef}
          />
        </div>
        <div>
          <label htmlFor="portions">Anzahl der Protionen</label>
          <input
            type="number"
            name="portions"
            id="portions"
            ref={portionsRef}
          />
        </div>
        <div>
          <label htmlFor="instructions">Anleitung</label>
          <input
            type="text"
            name="instructions"
            id="instructions"
            ref={instructionsRef}
          />
        </div>
        <div>
          <label htmlFor="category">Kategorie</label>
          <select name="category" id="category" ref={categoryRef}>
            <option value=""></option>
          </select>
        </div>
        <div>
          <h3>Zutaten</h3>
          <div>
            <label htmlFor="ingr_name">Name</label>
            <input
              type="text"
              name="ingr_name"
              id="ingr_name"
              ref={ingrNameRef}
            />
            <label htmlFor="ingr_quantity">Menge</label>
            <input
              type="number"
              name="ingr_quantity"
              id="ingr_quantity"
              ref={ingrQuantRef}
            />
            <label htmlFor="ingr_unit">Einheit</label>
            <input
              type="text"
              name="ingr_unit"
              id="ingr_unit"
              ref={ingrUnitRef}
            />
            <label htmlFor="ingr_info">Zusätzl. Informationen</label>
            <input
              type="text"
              name="ingr_info"
              id="ingr_info"
              ref={ingrInfoRef}
            />
            <button type="button" onClick={createNewLine}>
              ➕
            </button>
          </div>
        </div>
      </form>

      <div>
        <ul>
          {ingredients.map((ingredient: Ingredient) => (
            <li key={ingredient.name}>
              {ingredient.quantity} {ingredient.unit} {ingredient.name}{" "}
              {ingredient.additional_info ?? ""}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
