/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/actions/types';

const initialState = {
    isLoggedIn: false,
    id: -1,
    email: '',
    password: ''
};

export const loginReducer = createReducer(initialState, {
    [types.LOGIN_REQUEST](state, action) {
        return {
            ...state,
            email: action.email,
            password: action.password
        };
    },
    [types.LOGIN_LOADING_ENDED](state) {
        return { ...state };
    },
    [types.LOGIN_RESPONSE](state, action) {
        return {
            ...state
        };
    },
    [types.LOGIN_FAILED](state) {
        return {
            ...state,
            isLoggedIn: false
        };
    }
});
