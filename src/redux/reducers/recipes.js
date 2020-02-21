import { RECIPES_FETCHED, RECIPE_ADDED } from "../actions/recipes";

const recipes = (state = [], { type, payload }) => {
  switch (type) {
    case RECIPES_FETCHED:
      return [...payload];
    case RECIPE_ADDED:
      return [...state, payload];
    default: {
      return state;
    }
  }
};

export default recipes;
