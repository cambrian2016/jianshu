import React, {Component} from "react";

import style from "../../pages/home/home.module.css"
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";

import homeBanner from "../../statics/banner.png"

class Home extends Component {

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
            </div>
        );
    }
}

export default Home;









