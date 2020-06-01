import * as actionTypes from "./actionTypes"

const defaultState = {
    topicList: [],
    articleList: [
        {
            id: 1,
            title: "关于 UITableView 的 delegate 被 hook 时的问题",
            content: "开发中必不可少的一个环节就是产品经理要求添加的埋点, 从是否需要开发者添加代码的角度, 分为无侵入埋点和事件埋点. 其中 无侵入埋点 SDK...",
            imageUrl: "https://www.sanguosha.com/uploads/201808/5b724144c8de6.jpg"
        }, {
            id: 2,
            title: "关于 UITableView 的 delegate 被 hook 时的问题2",
            content: "开发中必不可少的一个环节就是产品经理要求添加的埋点, 从是否需要开发者添加代码的角度, 分为无侵入埋点和事件埋点. 其中 无侵入埋点 SDK...2",
            imageUrl: "https://www.sanguosha.com/uploads/201808/5b724144c8de6.jpg"
        }, {
            id: 3,
            title: "关于 UITableView 的 delegate 被 hook 时的问题3",
            content: "开发中必不可少的一个环节就是产品经理要求添加的埋点, 从是否需要开发者添加代码的角度, 分为无侵入埋点和事件埋点. 其中 无侵入埋点 SDK...3",
            imageUrl: "https://www.sanguosha.com/uploads/201808/5b724144c8de6.jpg"
        }, {
            id: 4,
            title: "关于 UITableView 的 delegate 被 hook 时的问题4",
            content: "开发中必不可少的一个环节就是产品经理要求添加的埋点, 从是否需要开发者添加代码的角度, 分为无侵入埋点和事件埋点. 其中 无侵入埋点 SDK...4",
            imageUrl: "https://www.sanguosha.com/uploads/201808/5b724144c8de6.jpg"
        }]
};

export default (state = defaultState, action) => {
    let stateNew = JSON.parse(JSON.stringify(state));

    switch (action.type) {
        case actionTypes.GET_TOPIC_LIST:
            stateNew.topicList = action.value;
            break
        default:
            break
    }

    return stateNew;
}