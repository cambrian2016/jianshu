import React, {Component} from "react";
import style from './login.module.css'
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'

class Login extends Component {

    render() {
        return (
            <div className={style.loginWrapper}>
                <div className={style.loginBox}>
                    <input className={style.input} placeholder={"账号"}/>
                    <input className={style.input} placeholder={"密码"}/>
                    <input className={style.loginButton} type={"button"} value={"登录"}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));









