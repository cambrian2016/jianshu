import React, {Component} from "react";
import style from "../../home/components/topic.module.css"

import * as actionCreators from "../../home/store/actionCreators";
import {connect} from "react-redux";

class Topic extends Component {

    componentDidMount() {
        this.props.handleGetTopicList();
    }

    render() {
        return (
            <div className={style.topic}>
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
            dispatch(actionCreators.getTopicList());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Topic);