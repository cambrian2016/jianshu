import * as actionTypes from "./actionTypes"

const defaultState = {
    detail: {
        title: "",
        content: ""
    },
};

export default (state = defaultState, action) => {
    let stateNew = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case actionTypes.GET_DETAIL:
            stateNew.detail = action.value;
            break

        default:
            break
    }

    return stateNew;
}