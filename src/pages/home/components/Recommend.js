import React, {Component} from "react";
import style from "./recommend.module.css"
import * as actionCreators from "../store/actionCreators";
import {connect} from "react-redux";

class Recommend extends Component {

    componentDidMount() {
        this.props.handleGetRecommendList();
    }

    render() {
        return (
            <div>
                <div className={style.recommendWrapper}>
                    {
                        this.props.list.map((item) => (
                            <div className={style.recommendItem} key={item.id}>
                                <img className={style.recommendImage}
                                     src={item.imageUrl}/>
                            </div>
                        ))
                    }

                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        list: state.home.recommendList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleGetRecommendList() {
            dispatch(actionCreators.getRecommendList());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);