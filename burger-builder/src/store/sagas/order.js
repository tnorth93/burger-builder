import { put } from "redux-saga/effects";

import axios from '../../axios-orders';
import * as actions from '../actions';

export function* purchaseBurgerSaga(action) {
  try {
    const response = yield axios.post('/orders.json?auth=' + token, orderData);
    yield put(actions.)
    
      
  } catch (error) {
    
  }
}

.then(response => {
  dispatch(purchaseBurgerSuccess(response.data.name, orderData));
})
.catch(error => {
  dispatch(purchaseBurgerFail(error));