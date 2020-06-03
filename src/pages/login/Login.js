import React, {Component} from "react";
import style from './login.module.css'
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import * as actionCreators from './store/actionCreators'
import {Redirect} from "react-router-dom";

class Login extends Component {

    render() {
        if (this.props.loginBoolean) {
            return <Redirect to={"/"}/>;
        } else {
            return (
                <div className={style.loginWrapper}>
                    <div className={style.loginBox}>
                        <input className={style.input} placeholder={"账号"} value={this.props.userName}
                               onChange={this.props.handleChangeUserName}/>
                        <input className={style.input} placeholder={"密码"} value={this.props.password}
                               onChange={this.props.handleChangePassword} type={"password"}/>
                        <input className={style.loginButton} type={"button"} value={"登录"}
                               onClick={this.props.handleLogin.bind(this, this.props.userName, this.props.password)}/>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.login.userName,
        password: state.login.password,
        loginBoolean: state.login.loginBoolean
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeUserName(event) {
            dispatch(actionCreators.changeUserNameAction(event.target.value));
        },
        handleChangePassword(event) {
            dispatch(actionCreators.changePasswordAction(event.target.value));
        },
        handleLogin(userName, password) {
            dispatch(actionCreators.login(userName, password));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));









