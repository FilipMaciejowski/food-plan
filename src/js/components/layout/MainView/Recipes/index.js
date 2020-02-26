import React, { useEffect } from "react";
import { Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getRecipes, recipeDelete, recipeEdit } from "../../../../../redux/actions/recipes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";


const Recipes = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes);

  useEffect(() => {
    dispatch(getRecipes());
  }, []);

  const editRecipe = (recipe) =>{
    const editName=prompt("Plese, edit your name");
    const editDescription=prompt("Please, edit description");
    let newData = Object.assign(recipe);
    newData.name = editName;
    newData.description = editDescription; 
    dispatch(recipeEdit(newData));
  };

  return (
    <div className="recipes__content-container">
      <div className="recipes__content__view">
        <div className="recipes__content__view-header">
          <h1>list of recipes</h1>
          <Link to="/foodplan/recipes/add" className="icon-plus">
            <FontAwesomeIcon className="recipes-icon-plus" icon={faPlusSquare} />
          </Link>
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
              <td>
                <FontAwesomeIcon
                  className="icon-edit"
                  icon={faEdit}
                  onClick={() => editRecipe(recipe)}
                />
                <FontAwesomeIcon
                  className="icon-delete"
                  icon={faTrashAlt}
                  onClick={() => dispatch(recipeDelete(recipe.id))}
                />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Recipes;
