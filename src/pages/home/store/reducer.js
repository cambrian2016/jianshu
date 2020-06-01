import * as actionTypes from "./actionTypes"

const defaultState = {
    topicList: [],
    articleList: []
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
        default:
            break
    }

    return stateNew;
}