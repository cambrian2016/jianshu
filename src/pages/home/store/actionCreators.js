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

const getRecommendListAction = (data) => ({
    type: actionTypes.GET_RECOMMEND_LIST,
    value: data.recommendList
})


export const getTopicList = () => {
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
    return (dispatch) => {
        Axios.get("/api/articleList.json").then((response) => {
            const data = response.data;
            dispatch(getArticleListAction(data.data));
        }).catch(() => {
            console.log("error");
        });
    }
}

export const getRecommendList = () => {
    return (dispatch) => {
        Axios.get("/api/recommendList.json").then((response) => {
            const data = response.data;
            console.log(data);
            dispatch(getRecommendListAction(data.data));
        }).catch(() => {
            console.log("error");
        });
    }
}

