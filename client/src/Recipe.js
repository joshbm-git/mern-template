function Recipe(props) {
  const { id, getRecipe } = props;
  const recipe = getRecipe(id);

  // Conditional rendering
  if (recipe === undefined) {
    return <p>Nothing here</p>;
  } else return (
    <>
      <h3>Recipe: {recipe.title}</h3>

      <p>{recipe.description}</p>

      <p>{recipe.ingredients}</p>

      <p>{recipe.time}</p>
    </>
  );
}

export default Recipe;
