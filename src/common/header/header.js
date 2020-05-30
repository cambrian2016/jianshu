import React, {Component} from "react";
import {connect} from "react-redux";
import * as actionCreators from "./store/actionCreators";

import style from './header.module.css'
import logo from '../../statics/logo.png'
import Aa from '../../statics/Aa.png'
import Magnifier from '../../statics/magnifier.png'
import Pen from '../../statics/pen.png'


class Header extends Component {

    constructor(props) {
        super(props);

        this.getSearchInfo = this.getSearchInfo.bind(this);
    }


    getSearchInfo() {
        if (this.props.focused) {
            return (
                <div className={style.searchInfo}>
                    <div className={style.searchInfoTitle}>
                        热门搜索
                        <span className={style.searchInfoTitleSwitch}>换一批</span>
                    </div>
                    <div>
                        {
                            this.props.list.map((item) => (
                                <a className={style.searchInfoItem} key={item}>{item}</a>
                            ))
                        }
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <div className={style.header}>
                <a className={style.logo} href={"/"}><img src={logo} className={style.logoImage} alt="logo"/></a>
                <div className={style.nav}>
                    <div className={style.navHome + " " + style.NavItem}>首页</div>
                    <div className={style.navApp + " " + style.NavItem}>下载App</div>
                    <div className={style.navLogin + " " + style.NavItem}>登录</div>
                    <div className={style.navAa + " " + style.NavItem}>
                        <img src={Aa} className={style.aaImage} alt="logo"/>
                    </div>
                    <div className={style.navSearch}>

                        <input className={this.props.focused ? style.searchFocus : style.search} placeholder="搜索"
                               onFocus={this.props.handleInputFocus} onBlur={this.props.handleInputBlur}/>
                        <img src={Magnifier} className={style.magnifierImage} alt="logo"/>

                        {this.getSearchInfo()}
                    </div>

                </div>
                <div className={style.addition}>
                    <button className={style.written + " " + style.button}>
                        <img src={Pen} className={style.penImage} alt="logo"/>
                        写文章
                    </button>

                    <button className={style.register + " " + style.button}>注册</button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        focused: state.header.focused,
        list: state.header.list
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocusAction());
            dispatch(actionCreators.getList());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlurAction());
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);