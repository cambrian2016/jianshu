import * as actionTypes from "./actionTypes";
import Axios from "axios";

const getTopicListAction = (data) => ({
    type: actionTypes.GET_TOPIC_LIST,
    value: data.topicList
})

const getArticleListAction = (data) => ({
    type: actionTypes.GET_ARTICLE_LIST,
    value: data.articleList
})


export const getTopicList = () => {
    console.log("getTopicList");
    return (dispatch) => {
        Axios.get("/api/topicList.json").then((response) => {
            const data = response.data;
            dispatch(getTopicListAction(data.data));
        }).catch(() => {
            console.log("error");
        });
    }
}


export const getArticleList = () => {
    console.log("getTopicList");
    return (dispatch) => {
        Axios.get("/api/articleList.json").then((response) => {
            const data = response.data;
            console.log(data);
            dispatch(getArticleListAction(data.data));
        }).catch(() => {
            console.log("error");
        });
    }
}

