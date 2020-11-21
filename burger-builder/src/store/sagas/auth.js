import { put } from 'redux-saga/effects';

import * as actionTypes from './actionTypes';

export function* logoutSaga(action) {
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('expirationDate');
  yield localStorage.removeItem('userId');
  yield put();
}