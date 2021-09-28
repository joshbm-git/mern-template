import { useState } from 'react';

function AddRecipe(props) {
  const { addRecipe } = props;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [time, setTime] = useState("");

  // Conditional rendering
  return (
    <>
      <h3>Add Recipe</h3>

      <input onChange={(event) => setTitle(event.target.value)} type="text" />
      <input onChange={(event) => setDescription(event.target.value)} type="text" />
      <input onChange={(event) => setIngredients(event.target.value)} type="text" />
      <input onChange={(event) => setTime(event.target.value)} type="text" />

      <button type="button" onClick={(event) => {
        const ingArray = ingredients.split(" ");
        addRecipe(title, description, ingArray, time);
      }}>Add Recipe
      </button>
    </>
  );
}

export default AddRecipe;
