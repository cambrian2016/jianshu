import React, {Component} from "react";
import style from './detail.module.css'
import * as actionCreators from "../detail/store/actionCreators";
import {connect} from "react-redux";

class Detail extends Component {

    componentDidMount() {
        this.props.handleGetDetail();
    }

    render() {
        return (
            <div className={style.detailWrapper}>
                <div className={style.detailTitle}>{this.props.detail.title}</div>
                <div className={style.contentText} dangerouslySetInnerHTML={{__html: this.props.detail.content}}>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        detail: state.detail.detail
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleGetDetail() {
            dispatch(actionCreators.getDetail());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);









