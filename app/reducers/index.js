/* 
 * combines all th existing reducers
 */
import * as dataReducer from './dataReducer';
import * as loginReducer from './loginReducer';
import * as loadingReducer from './loadingReducer';

export default Object.assign(dataReducer, loginReducer, loadingReducer);