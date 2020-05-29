import * as actionTypes from "./actionTypes"

const defaultState = {
    focused: false
};

export default (state = defaultState, action) => {
    if (action.type === actionTypes.SEARCH_FOCUSED) {
        let stateNew = JSON.parse(JSON.stringify(state));
        stateNew.focused = true;
        return stateNew;
    }

    if (action.type === actionTypes.SEARCH_BLUR) {
        let stateNew = JSON.parse(JSON.stringify(state));
        stateNew.focused = false;
        return stateNew;
    }

    return state;
}