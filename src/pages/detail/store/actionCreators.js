import * as actionTypes from "./actionTypes";
import Axios from "axios";

const getDetailAction = (data) => ({
    type: actionTypes.GET_DETAIL,
    value: data
})

export const getDetail = () => {
    return (dispatch) => {
        Axios.get("/api/detail.json").then((response) => {
            const data = response.data;
            dispatch(getDetailAction(data.data));
        }).catch(() => {
            console.log("error");
        });
    }
}
