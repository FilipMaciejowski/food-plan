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
          <FontAwesomeIcon className="icon-plus" icon={faPlusSquare} />
        </div>
        <table className="recipes__content__table">
          <tr className="recipes__content__table-header">
            <th>id</th>
            <th>name</th>
            <th>description</th>
           <th className="table__header__cell-actions">actions</th>
          </tr>
          {recipes.map(recipe => (
            <tr className="recipes__content__table-cell">
              <td>{recipe.id}</td>
              <td>{recipe.name}</td>
              <td>{recipe.description}</td>
              <td>add-minus</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Recipes;
