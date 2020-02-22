import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
// import { useSelector, useDispatch } from "react-redux";

// import { getRecipes } from "../../../../../redux/actions/recipes";

// const Recipes = () => {
//   const dispatch = useDispatch();
//   const recipes = useSelector(state => state.recipes);

//   useEffect(() => {
//     dispatch(getRecipes());
//   }, []);

//   return (
//     <div>
//       <p>Recipes</p>
//       <ul>
//         {recipes.map(recipe => (
//           <li>{recipe.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Recipes;

const Recipe = () => {


  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="add__recipe__container">
      <div className="add__recipe__header">
        <h1>new recipe</h1>
        <button classname="add__recipe__button">Save and close</button>
      </div>

      <div className="add__recipe__input">
        <form onSubmit={() => onSubmit}>
          <label>
            Recipe's name
            <input
              className="recipe__name-input"
              type="text"
              placeholder="add recipe's name"
            />
          </label>
          <label>
            Recipe's description
            <textarea
              rows="6"
              className="recipe__decsription-input"
              type="text"
              placeholder="add recipe's description"
            />
          </label>
        </form>
      </div>

      <div className="add__recipe__content-container">
        <div className="add__recipe__content">
          <div className="add__recipe__content-header">
            <h1>instructions</h1>
            <div className="add__recipe__content-fill">
              <form onSubmit={() => onSubmit}>
                <label>
                  <textarea
                    rows="5"
                    placeholder="add a new instruction"
                    type="text"
                  />
                </label>
              </form>
              <FontAwesomeIcon className="icon-1" icon={faPlusSquare} />
            </div>
          </div>
          <div className="add__recipe__content-list">
            <ul className="add__recipe__content-list">
              <li className="instructions-element">Turn on the oven</li>
            </ul>
          </div>
        </div>

        <div className="add__recipe__content">
          <div className="add__recipe__content-header">
            <h1>ingredients</h1>
            <div className="add__recipe__content-fill">
              <form onSubmit={() => onSubmit}>
                <label>
                  <textarea placeholder="add an new ingredient" type="text" />
                </label>
              </form>
              <FontAwesomeIcon className="icon-2" icon={faPlusSquare} />
            </div>
          </div>
          <div className="add__recipe__content-list">
            <ul>
              <li className="ingridients-element">Couliflower 2</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;