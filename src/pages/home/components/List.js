import React, {Component} from "react";
import style from "./list.module.css"
import {connect} from "react-redux";

class List extends Component {

    render() {
        return (
            <div>
                {
                    this.props.list.map(
                        (item) => {
                            return (
                                <div className={style.listItem} key={item.title}>
                                    <div className={style.listInfo}>
                                        <div className={style.listTitle}> {item.title}</div>
                                        <div className={style.listContent}>
                                            {item.content}
                                        </div>
                                    </div>
                                    <img className={style.listImage} src={item.imageUrl}
                                         alt={"logo"}/>
                                </div>
                            );

                        }
                    )
                }
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.home.articleList
    }
};

const mapDispatchToProps = (dispatch) => {
    return null;
};

export default connect(mapStateToProps, null)(List);
