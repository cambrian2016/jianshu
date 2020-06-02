import React, {Component} from "react";
import {connect} from "react-redux";
import * as actionCreators from "./store/actionCreators";

import style from './header.module.css'

import logo from '../../statics/logo.png'
import Aa from '../../statics/aa.png'
import Magnifier from '../../statics/magnifier.png'
import Pen from '../../statics/pen.png'
import spin from '../../statics/spin.png'
import {Link} from "react-router-dom";


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
                        <div className={style.spinDiv}><img className={style.spinImg} src={spin}/></div>
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
                        <img src={logo} className={style.logoImage} alt="logo"/>
                    </div>
                </Link>

                <div className={style.nav}>
                    <div className={style.navHome + " " + style.NavItem}>首页</div>
                    <div className={style.navApp + " " + style.NavItem}>下载App</div>
                    <div className={style.navLogin + " " + style.NavItem}>登录</div>
                    <div className={style.navAa + " " + style.NavItem}>
                        <img src={Aa} className={style.aaImage} alt="logo"/>
                    </div>
                    <div className={style.navSearch}>

                        <input className={(this.props.focused || this.props.mouseIn) ? style.searchFocus : style.search}
                               placeholder="搜索"
                               onFocus={this.props.handleInputFocus.bind(this, this.props.list)}
                               onBlur={this.props.handleInputBlur}/>
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
        mouseIn: state.header.mouseIn,
        list: state.header.list,
        page: state.header.page,
        totalPage: state.header.totalPage
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
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);