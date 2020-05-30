import * as actionTypes from "./actionTypes"

const defaultState = {
    focused: false,
    list:[]
};

export default (state = defaultState, action) => {
    let stateNew = JSON.parse(JSON.stringify(state));

    switch (action.type ) {
        case actionTypes.SEARCH_FOCUSED:
            stateNew.focused = true;
            break

        case actionTypes.SEARCH_BLUR:
            stateNew.focused = false;
            break

        case actionTypes.CHANGE_LIST:
            stateNew.list=action.value;
            break

        default:
            break
    }

    return stateNew;
}