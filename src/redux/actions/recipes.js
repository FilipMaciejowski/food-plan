import axios from "axios";

const RECIPES_FETCHED = "RECIPES_FETCHED";
const RECIPE_ADDED = "RECIPE_ADDED";

const recipesFetched = recipes => ({
  type: RECIPES_FETCHED,
  payload: recipes
});

const recipeAdded = recipe => ({
  type: RECIPE_ADDED,
  payload: recipe
});

const getRecipes = () => dispatch => {
  axios
    .get("http://localhost:3000/recipes")
    .then(res => dispatch(recipesFetched(res.data)));
};

const addRecipe = recipe => dispatch => {
  axios
    .post("http://localhost:3000/recipes", recipe)
    .then(res => dispatch(recipeAdded(res.data)))
};

export { RECIPES_FETCHED, RECIPE_ADDED, getRecipes, addRecipe };
