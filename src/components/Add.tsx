import { useState } from "react";
import List from "./List";

function Add() {
  const [ingredientsList, setNewIngredients] = useState<string[]>([]);
  function handleClick(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredients = formData.get("ingredients") as string;
    if (newIngredients.trim()) {
      setNewIngredients((prev) => [...prev, newIngredients]);
    }
  }
  return (
    <>
      <div>
        <form
          onSubmit={handleClick}
          className="flex mx-auto gap-2 items-center justify-center m-20"
        >
          <input
            type="text"
            name="ingredients"
            placeholder="e.g. oregano"
            aria-label="Input Ingredients"
            className="w-full min-w-70 max-w-150 p-3 text-base text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-xl shadow-sm outline-none transition-all duration-200 ease-in-out focus:border-emerald-900 focus:ring-4 focus:ring-emerald-100"
          />

          <button className="text-white font-bold bg-black p-3 rounded-xl px-9 max-w-60 min-w-55">
            + Add Ingredient
          </button>
        </form>
        <List newIngredientsData={ingredientsList} />
      </div>
    </>
  );
}

export default Add;
