import axios from '../../axios-orders';
import { put } from "redux-saga/effects";

export function* initIngredientsSaga(action) {
  yield put 
    axios.get('https://react-my-burger-f8687.firebaseio.com/ingredients.json')
      .then(response => {
        dispatch(setIngredients(response.data));
      })
      .catch(error => {
        dispatch(fetchIngredientsFailed())
      });
}