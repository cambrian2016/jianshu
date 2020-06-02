import React, {Component} from "react";
import style from "./list.module.css"
import {connect} from "react-redux";
import * as actionCreators from "../store/actionCreators";

class List extends Component {

    componentDidMount() {
        this.props.handleGetTopicList();
    }

    render() {
        return (
            <div>
                {
                    this.props.list.map((item) => {
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
                <div className={style.loadMore} onClick={this.props.handleLoadMore}>更多文章</div>
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
    return {
        handleGetTopicList() {
            dispatch(actionCreators.getArticleList());
        },
        handleLoadMore(){
            dispatch(actionCreators.getLoadMoreList());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
