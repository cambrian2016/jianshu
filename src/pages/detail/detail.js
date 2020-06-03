import React, {Component} from "react";
import style from './detail.module.css'
import * as actionCreators from "../detail/store/actionCreators";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom'

class Detail extends Component {

    componentDidMount() {
        console.log("this.props.match.params.id  =  "+this.props.match.params.id);
        this.props.handleGetDetail(this.props.match.params.id);
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
        detail: state.detail.detail,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleGetDetail(id) {
            dispatch(actionCreators.getDetail(id));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Detail));









