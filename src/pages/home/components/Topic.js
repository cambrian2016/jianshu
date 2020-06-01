import React, {Component} from "react";
import style from "../../home/components/topic.module.css"

import * as actionCreators from "../../home/store/actionCreators";
import {connect} from "react-redux";

class Topic extends Component {

    constructor(props) {
        super(props);

    }


    componentDidMount() {

    }


    render() {
        return (
            <div className={style.topic}>
                <div onClick={this.props.handleGetTopicList}>this is a button</div>
                {
                    this.props.list.map((item) => {
                        return (
                            <div className={style.topicItem} key={item.title}>
                                <img className={style.topicImg}
                                     src={item.imageUrl}/>
                                {item.title}
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.home.topicList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleGetTopicList() {
            console.log("handleGetTopicList1")
            dispatch(actionCreators.getTopicList);
            console.log("handleGetTopicList12")

        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Topic);