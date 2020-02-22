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
      <p>Recipes</p>
      <ul>
        {recipes.map(recipe => (
          <li>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
