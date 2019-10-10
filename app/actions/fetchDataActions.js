/*
 * Reducer actions related with login
 */
import * as types from './types';

export function requestFetchingData() {
    return {
        type: types.FETCH_DATA_REQUEST
    };
}

export function fetchingDataFailed(response) {
    return {
        type: types.FETCH_DATA_FAILED,
        response
    };
}

export function onFetchingDataResponse(response) {
    return {
        type: types.FETCH_DATA_RESPONSE,
        response
    };
}


export function enableLoader() {
    return {
        type: types.DATA_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.DATA_DISABLE_LOADER
    };
}
