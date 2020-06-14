import {combineReducers} from "redux";

import {Reducer as headerReducer} from '../common/header'
import {Reducer as homeReducer} from '../pages/home'
import {Reducer as detailReducer} from '../pages/detail'
import {Reducer as loginReducer} from '../pages/login'


const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
});

export default reducer;