import React from "react";
import {connect} from "react-redux";
import * as actionCreators from "./store/actionCreators";

import style from './header.module.css'
import logo from '../../statics/logo.png'
import Aa from '../../statics/Aa.png'
import Magnifier from '../../statics/magnifier.png'
import Pen from '../../statics/pen.png'

const Header = (props) => {
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

                    <input className={props.focused ? style.searchFocus : style.search} placeholder="搜索"
                           onFocus={props.handleInputFocus} onBlur={props.handleInputBlur}/>
                    <img src={Magnifier} className={style.magnifierImage} alt="logo"/>
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

// class Header extends Component {
//
//     render() {
//         return (
//             <div className={style.header}>
//                 <a className={style.logo} href={"/"}><img src={logo} className={style.logoImage} alt="logo"/></a>
//                 <div className={style.nav}>
//                     <div className={style.navHome + " " + style.NavItem}>首页</div>
//                     <div className={style.navApp + " " + style.NavItem}>下载App</div>
//                     <div className={style.navLogin + " " + style.NavItem}>登录</div>
//                     <div className={style.navAa + " " + style.NavItem}>
//                         <img src={Aa} className={style.aaImage} alt="logo"/>
//                     </div>
//                     <div className={style.navSearch}>
//
//                         <input className={this.props.focused ? style.searchFocus : style.search} placeholder="搜索"
//                                onFocus={this.props.handleInputFocus} onBlur={this.props.handleInputBlur}/>
//
//                         <img src={Magnifier} className={style.magnifierImage} alt="logo"/>
//                     </div>
//
//                 </div>
//                 <div className={style.addition}>
//                     <button className={style.written + " " + style.button}>
//                         <img src={Pen} className={style.penImage} alt="logo"/>
//                         写文章
//                     </button>
//
//                     <button className={style.register + " " + style.button}>注册</button>
//                 </div>
//             </div>
//         );
//     }
// }

const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = actionCreators.searchFocusAction();
            dispatch(action);
        },
        handleInputBlur() {
            const action = actionCreators.searchBlurAction();
            dispatch(action);
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);