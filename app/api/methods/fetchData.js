import Api from 'app/api';
import ApiConstants from '../ApiConstants';

export default function fetchData() {
    return Api(
        ApiConstants.FETCH_DATA,
        null,
        'get',
        null
    );
}
