import React, {Component} from "react";

import style from "../../pages/home/home.module.css"
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";

import homeBanner from "../../statics/banner.png"
import * as actionCreators from "./store/actionCreators";
import {connect} from "react-redux";

class Home extends Component {


    handleBackTop() {
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        this.bindEvents();
    }

    bindEvents() {
        window.addEventListener("scroll", this.props.windowScroll());
    }


    render() {
        return (
            <div className={style.home}>
                <div className={style.homeLeft}>
                    <img className={style.bannerImg} src={homeBanner}/>
                    <Topic/>
                    <List/>
                </div>
                <div className={style.homeRight}>
                    <Recommend/>
                    <Writer/>
                </div>
                {
                    this.props.showBackTopBoolean ?
                        <div className={style.backTop} onClick={this.handleBackTop}>顶部</div> : null
                }

            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        showBackTopBoolean: state.home.showBackTopBoolean
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        windowScroll(event) {
            console.log("aa");
        },

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);








