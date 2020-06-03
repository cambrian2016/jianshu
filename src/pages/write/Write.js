import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import {Redirect} from "react-router-dom";

class Write extends Component {

    render() {
        if (this.props.loginBoolean) {
            return <div>写文章页面</div>
        } else {
            return <Redirect to={"/login"}/>;
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
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Write));









