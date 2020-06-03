import * as actionTypes from "./actionTypes";
import Axios from "axios";

export const changeUserNameAction = (value) => ({
    type: actionTypes.CHANGE_USER_NAME,
    value: value
})

export const changePasswordAction = (value) => ({
    type: actionTypes.CHANGE_PASSWORD,
    value: value
})

export const loginSuccessAction = () => ({
    type: actionTypes.LOGIN_SUCCESS,
})

export const login = (userName, password) => {
    return (dispatch) => {
        Axios.get("/api/login.json?userName=" + userName + "&password=" + password).then((response) => {
            const data = response.data;

            if (data.data === "登录成功") {
                dispatch(loginSuccessAction());
            } else {
                alert("登录失败");
            }
        }).catch(() => {
            console.log("error");
        });
    }
}


