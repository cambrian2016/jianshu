import * as actionTypes from "./actionTypes";
import Axios from "axios";

const getTopicListAction = (data) => ({
    type: actionTypes.GET_TOPIC_LIST,
    value: data.topicList
})

export const getTopicList = () => {
    return (dispatch) => {
        Axios.get("/api/headerList.json").then((response) => {
            const data = response.data;
            console.log(data);
            dispatch(getTopicListAction(data.data));
        }).catch(() => {
            console.log("error");
        });
    }
}

