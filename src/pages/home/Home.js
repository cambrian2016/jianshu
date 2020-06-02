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

    constructor(props) {
        super(props);

        this.windowScroll=this.windowScroll.bind(this);
    }


    handleBackTop() {
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.windowScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.windowScroll);
    }

    windowScroll() {
        if (this.props.showBackTopBoolean && (document.documentElement.scrollTop < 400)) {
            this.props.changeShowBackTop(false);
        } else if ((!this.props.showBackTopBoolean) && (document.documentElement.scrollTop > 400)) {
            this.props.changeShowBackTop(true);
        }
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
        changeShowBackTop(showBoolean) {
            dispatch(actionCreators.getChangeShowBackTopAction(showBoolean));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);








