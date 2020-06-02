import * as actionTypes from "./actionTypes"

const defaultState = {
    topicList: [],
    articleList: [],
    recommendList: [],
    loadMoreList: [],
    showBackTopBoolean: true
};

export default (state = defaultState, action) => {
    let stateNew = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case actionTypes.GET_TOPIC_LIST:
            stateNew.topicList = action.value;
            break

        case actionTypes.GET_ARTICLE_LIST:
            stateNew.articleList = action.value;
            break

        case actionTypes.GET_RECOMMEND_LIST:
            stateNew.recommendList = action.value;
            break

        case actionTypes.GET_LOAD_MORE_LIST:
            let loadMoreList = action.value;
            stateNew.articleList = stateNew.articleList.concat(loadMoreList);
            break

        case actionTypes.CHANGE_SHOW_BACK_TOP:
            stateNew.showBackTopBoolean = action.value;
            break
        default:
            break
    }

    return stateNew;
}