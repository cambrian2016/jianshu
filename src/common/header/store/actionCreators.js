import * as actionTypes from "./actionTypes";
import axios from 'axios';


const changeList=(data)=>({
    type: actionTypes.CHANGE_LIST,
    value:data
});


export const searchFocusAction = () => ({
    type: actionTypes.SEARCH_FOCUSED
})

export const searchBlurAction = () => ({
    type: actionTypes.SEARCH_BLUR
})

export const getList = () => {
    return (dispatch) => {
        axios.get("/api/headerList.json").then((response) => {
            const data = response.data;

            dispatch(changeList(data.data));
        }).catch(() => {
            console.log("error");
        });
    }
}

