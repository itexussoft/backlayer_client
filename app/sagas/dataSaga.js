/* Redux saga class
 * logins the user into the app
 * requires email and password.
 */
import { put, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { Alert } from 'react-native';
import fetchData from 'app/api/methods/fetchData';
import * as dataActions from 'app/actions/fetchDataActions';
import * as navigationActions from 'app/actions/navigationActions';

// Our worker Saga that logins the user
export default function* dataAsync(action) {
    // yield put(loginActions.enableLoader());

    //how to call api
    const response = yield call(fetchData);
    //mock response
    // const response = { success: true, data: { id: 1 } };

    if (response.success) {
        yield put(dataActions.onFetchingDataResponse(response));
        yield put(dataActions.disableLoader());
        // yield call(navigationActions.navigateToHome);
    } else {
        yield put(dataActions.fetchingDataFailed(response));
        yield put(dataActions.disableLoader());
        setTimeout(() => {
            Alert.alert('Error', response.message);
        }, 200);
    }
}
