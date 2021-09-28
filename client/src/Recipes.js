import { Link } from "@reach/router";
import AddRecipe from "./AddRecipe";

function Recipes(props) {
  const { data, addRecipe } = props;

  return (
    <>

<h3>All Recipes</h3>
      <ol>
        {
          // All recipes
          data.map( recipe => <li>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li> )
        }
      </ol>


      <h3>Recipes with garlic</h3>
      {
        // Recipes with garlic
        data.filter(recipe => recipe.ingredients.includes("garlic")).map( recipe => 
      <li>
        <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
      </li> )


      }
      <AddRecipe addRecipe={addRecipe}/>
    </>
  );
}



export default Recipes;
