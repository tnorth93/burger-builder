import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  ingredients: null,
  totalPrice: 3,
  error: false,
};

const INGREDIENT_PRICES = {
  lettuce: 0.25,
  cheese: 0.5,
  meat: 1.75,
  bacon: 1.5,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
      const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
      const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      }
      return updateObject(state, updatedState)
    case actionTypes.REMOVE_INGREDIENT:
      const updatedIng = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1};
      const updatedIngs = updateObject(state.ingredients, updatedIng);
      const updatedSt = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      }
      return updateObject(state, updatedSt)
    case actionTypes.SET_INGREDIENTS:
      return updateObject(state, {
        ingredients: {
          lettuce: action.ingredients.lettuce,
          bacon: action.ingredients.bacon,
          cheese: action.ingredients.cheese,
          meat: action.ingredients.meat,
        },
        totalPrice: 3,
        error: false,
      });
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return updateObject(state, { error: true });
    default:
      return state;
  }
};

export default reducer;