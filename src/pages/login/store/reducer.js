import * as actionTypes from "./actionTypes"

const defaultState = {
    loginBoolean: false,
    userName: "admin",
    password: "123"
};

export default (state = defaultState, action) => {
    let stateNew = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case actionTypes.CHANGE_USER_NAME:
            stateNew.userName = action.value;
            break;

        case actionTypes.CHANGE_PASSWORD:
            stateNew.password = action.value;
            break;

        case actionTypes.LOGIN_SUCCESS:
            stateNew.loginBoolean=true;
            console.log("userName= "+stateNew.userName+", password= "+stateNew.password);
            break

        default:
            break
    }

    return stateNew;
}