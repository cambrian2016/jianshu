// import * as actionTypes from "./actionTypes"

const defaultState = {
    topicList: [{
        id: 1,
        title: "社会热点",
        imageUrl: "http://www.sanguosha.com/uploads/201610/580f157998cab.jpg"
    }, {
        id: 2,
        title: "手绘",
        imageUrl: "http://www.sanguosha.com/uploads/201610/581032f3496a5.jpg"
    }]
};

export default (state = defaultState, action) => {
    let stateNew = JSON.parse(JSON.stringify(state));

    switch (action.type) {

        default:
            break
    }

    return stateNew;
}