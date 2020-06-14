import React, {Component} from "react";
import {connect} from "react-redux";
import * as actionCreators from "./store/actionCreators";
import * as loginActionCreators from "../../pages/login/store/actionCreators";

import style from './header.module.css'
import {Link} from "react-router-dom";

import mainLogo from "../../res/image/main_logo.png"
import headerAa from "../../res/image/header_aa.png"
import headerMagnifier from "../../res/image/header_magnifier.png"
import headerPen from "../../res/image/header_pen.png"
import headerSpin from "../../res/image/header_spin.png"

class Header extends Component {

    constructor(props) {
        super(props);

        this.getSearchInfo = this.getSearchInfo.bind(this);
    }


    getSearchInfo() {
        let searchInfoItemTemp = [];
        for (let i = (this.props.page - 1) * 10; (i < (this.props.page - 1) * 10 + 10) && (i < this.props.list.length); i++) {
            searchInfoItemTemp.push(this.props.list[i]);
        }

        if (this.props.focused || this.props.mouseIn) {
            return (
                <div className={style.searchInfo}
                     onMouseEnter={this.props.handleMouseEnter}
                     onMouseLeave={this.props.handleMouseLeave}>
                    <div className={style.searchInfoTitle}>
                        热门搜索
                        <span className={style.searchInfoTitleSwitch}
                              onClick={this.props.handleChangeSearchInfo}>换一批</span>
                        <div className={style.spinDiv}><img className={style.spinImg} src={headerSpin}/></div>
                    </div>
                    <div>
                        {
                            searchInfoItemTemp.map((item) =>
                                <a className={style.searchInfoItem} key={item}>{item}</a>
                            )
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
                <Link to={"/"}>
                    <div className={style.logo}>
                        <img src={mainLogo} className={style.logoImage} alt="logo"/>
                    </div>
                </Link>

                <div className={style.nav}>
                    <div className={style.navHome + " " + style.NavItem}>首页</div>
                    <div className={style.navApp + " " + style.NavItem}>下载App</div>
                    {
                        this.props.loginBoolean ? <div className={style.navLogin + " " + style.NavItem}
                                                       onClick={this.props.handleSignOut}>退出</div> :
                            <Link to={"/login"}>
                                <div className={style.navLogin + " " + style.NavItem}>登录</div>
                            </Link>
                    }
                    <div className={style.navAa + " " + style.NavItem}>
                        <img src={headerAa} className={style.aaImage} alt="logo"/>
                    </div>
                    <div className={style.navSearch}>
                        <input className={(this.props.focused || this.props.mouseIn) ? style.searchFocus : style.search}
                               placeholder="搜索"
                               onFocus={this.props.handleInputFocus.bind(this, this.props.list)}
                               onBlur={this.props.handleInputBlur}/>
                        <img src={headerMagnifier} className={style.magnifierImage} alt="logo"/>

                        {this.getSearchInfo()}
                    </div>
                </div>

                <div className={style.addition}>
                    <Link to={"/write"}>
                        <button className={style.written + " " + style.button}>
                            <img src={headerPen} className={style.penImage} alt="logo"/>
                            写文章
                        </button>
                    </Link>
                    <button className={style.register + " " + style.button}>注册</button>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        focused: state.header.focused,
        mouseIn: state.header.mouseIn,
        list: state.header.list,
        page: state.header.page,
        totalPage: state.header.totalPage,
        loginBoolean: state.login.loginBoolean
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            dispatch(actionCreators.searchFocusAction());
            if (list.length === 0) {
                dispatch(actionCreators.getList());
            }
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlurAction());
        },
        handleChangeSearchInfo() {
            dispatch(actionCreators.changeSearchInfoAction());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnterAction());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeaveAction());
        },
        handleSignOut() {
            dispatch(loginActionCreators.signOutAction());
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);