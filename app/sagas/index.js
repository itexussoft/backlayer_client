/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from './loginSaga';
import dataSaga from './dataSaga';

export default function* watch() {
    yield all([takeEvery(types.LOGIN_REQUEST, loginSaga)]);
    yield all([takeEvery(types.FETCH_DATA_REQUEST, dataSaga)]);
}
