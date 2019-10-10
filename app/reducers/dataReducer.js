/* Data Reducer
 * handles data states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    data: [],
    errors: []
};

export const dataReducer = createReducer(initialState, {
    [types.FETCH_DATA_REQUEST](state) {
        return { ...state };
    },
    [types.FETCH_DATA_RESPONSE](state, action) {
        return {
            ...state,
            data: action.response.data
        };
    },
    [types.FETCH_DATA_FAILED](state, action) {
        return {
            ...state,
            errors: action.response.message
        };
    }
});

// export const getFetchedData = state => state.data;
