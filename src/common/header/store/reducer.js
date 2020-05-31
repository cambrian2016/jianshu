import * as actionTypes from "./actionTypes"

const defaultState = {
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
};

export default (state = defaultState, action) => {
    let stateNew = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case actionTypes.SEARCH_FOCUSED:
            stateNew.focused = true;
            break;

        case actionTypes.SEARCH_BLUR:
            stateNew.focused = false;
            break;

        case actionTypes.CHANGE_LIST:
            stateNew.list = action.value;
            stateNew.page = action.page;
            stateNew.totalPage = action.totalPage;
            break;

        case actionTypes.CHANGE_SEARCH_INFO:
            if (stateNew.page < stateNew.totalPage) {
                stateNew.page++;
            } else {
                stateNew.page = 1;
            }
            break;

        case actionTypes.MOUSE_ENTER:
            stateNew.mouseIn = true;
            break;

        case actionTypes.MOUSE_LEAVE:
            stateNew.mouseIn = false;
            break;
        default:
            break
    }

    return stateNew;
}