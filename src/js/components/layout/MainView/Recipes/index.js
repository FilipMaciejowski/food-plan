import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipes } from "../../../../../redux/actions/recipes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const Recipes = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes);

  useEffect(() => {
    dispatch(getRecipes());
  }, []);

  return (
    <div className="recipes__content-container">
      <div className="recipes__content__view">
        <div className="recipes__content__view-header">
          <h1>list of the recipes</h1>
          <FontAwesomeIcon
                className="icon-plus"
                icon={faPlusSquare}
          />
        </div>
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
    </div>
  );
};

export default Recipes;

