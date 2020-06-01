import * as actionTypes from "./actionTypes";
import Axios from "axios";


const changeList=(data)=>({
    type: actionTypes.CHANGE_LIST,
    value:data,
    page:1,
    totalPage:Math.ceil(data.length/10)
});


export const searchFocusAction = () => ({
    type: actionTypes.SEARCH_FOCUSED
})

export const searchBlurAction = () => ({
    type: actionTypes.SEARCH_BLUR
})

export const getList = () => {
    return (dispatch) => {
        Axios.get("/api/headerList.json").then((response) => {
            const data = response.data;

            dispatch(changeList(data.data));
        }).catch(() => {
            console.log("error");
        });
    }
}

export const changeSearchInfoAction = () => ({
    type: actionTypes.CHANGE_SEARCH_INFO
})

export const mouseEnterAction = () => ({
    type: actionTypes.MOUSE_ENTER
})

export const mouseLeaveAction = () => ({
    type: actionTypes.MOUSE_LEAVE
})