import * as actionTypes from './actions';

const initialState = {
  ingredients: {
    lettuce: 0,
    cheese: 0,
    meat: 0,
    bacon: 0,
  },
  totalPrice: 3,
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
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
      };
    default:
      return state;
  }
};

export default reducer;