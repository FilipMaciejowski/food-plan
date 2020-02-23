import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipes } from "../../../../../redux/actions/recipes";

const Recipes = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes);

  useEffect(() => {
    dispatch(getRecipes());
  }, []);

  return (
    <div>
      <p>Recipestest</p>
      <div>
        {recipes.map(recipe => (
          <ul>
            <li>{recipe.id}</li>
            <li>{recipe.name}</li>
            <li>{recipe.description}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Recipes;

