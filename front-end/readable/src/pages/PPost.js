import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
    LinearProgress,
    Grid
} from '@material-ui/core';

import { Redirect } from 'react-router-dom';

import { 
    get as getPostById,
    edit,
    deleteById,
    vote as votePostById
} from '../api/posts';
import { 
    getByPostId as getCommentsByPostId,
    add as addComment,
    edit as editComment,
    deleteById as deleteCommentById,
    vote as voteCommentById
} from '../api/comments';
import { getInitialData } from '../api/shared';
import { getAllCategories } from '../actions/categories';
import { 
    viewPostDetailsByID, 
    getAllPosts,
    editPostDetailsByID,
    deletePostByID,
    votePostByID 
} from '../actions/posts';
import { 
    getCommentsByPostID,
    addNewComment,
    editCommentDetailsByID,
    deleteCommentByID,
    voteCommentByID 
} from '../actions/comments';

import { createNewComment } from '../utils/helpers';

import PostDetails from '../components/PostDetails';
import ListComments from '../components/ListComments';

class PPost extends Component {

    componentDidMount() {

        const { location } = this.props;

        const { postId } = location.state;

        this.props.handleGetPost(postId);
        this.props.handleGetCommentsByPostId(postId);
    }

    handleUpdatePostByID(event, postId, title, body) {

        event.preventDefault();

        this.props.handleUpdatePost(postId, title, body);
    }

    handleDeletePostByID(event, postId) {

        event.preventDefault();

        const { history, location, post } = this.props;

        this.props.handleDeletePost(postId);

        const { toHome } = location.state;

        const address = (!toHome)? `/${post.category}` : "/";

        history.push({
            pathname: address
        });
    }

    handleAddNewComment(event, parentId, body, author) {

        event.preventDefault();

        const comment = createNewComment(parentId, body, author);

        this.props.handleAddNewCommentWithPostId(comment);
    }

    handleClickCommentUpdate(commentId, commentBody) {

        const timestamp = Date.now();

        const { handleUpdateComment } = this.props;

        this.props.handleUpdateComment(commentId, timestamp, commentBody);
    }

    handleDeleteButtonClick(event, commentId) {

        event.preventDefault();

        this.props.handleDeleteComment(commentId);
    }

    handleVoteButtonClick(commentId, option) {
        this.props.handleVoteComment(commentId, option);
    }

    handleVoteButtonClickForPost(postId, option) {
        this.props.handleVotePost(postId, option);
    }

    render() {

        const { post, comments } = this.props;

        const commentList = comments.list;

        if (!post) {
            return <LinearProgress />
        }

        return (
            <div>
                <Grid container>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <PostDetails 
                            post={post}
                            handleUpdatePostByID={this.handleUpdatePostByID.bind(this)}
                            handleDeletePostByID={this.handleDeletePostByID.bind(this)}
                            handleVoteButtonClickForPost={this.handleVoteButtonClickForPost.bind(this)}
                        />
                        <br />
                        <br />
                        <br />
                        <br />
                        <ListComments 
                            comments={commentList} 
                            handleAddNewComment={this.handleAddNewComment.bind(this)}
                            postId={post.id}
                            handleClickCommentUpdate={this.handleClickCommentUpdate.bind(this)}
                            handleDeleteButtonClick={this.handleDeleteButtonClick.bind(this)}
                            handleVoteButtonClick={this.handleVoteButtonClick.bind(this)}
                        />
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps({ posts, comments }) {
    return {
        post: posts.post,
        comments
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleGetPost: (postId) => {
            getPostById(postId)
            .then((post) => {
                dispatch(viewPostDetailsByID(post));
            }) 
        },
        handleGetCommentsByPostId: (postId) => {
            getCommentsByPostId(postId)
            .then((comments) => {
                dispatch(getCommentsByPostID(postId, comments));
            })
        },
        handleUpdatePost: (postId, title, body) => {
            edit(postId, title, body)
            .then((post) => {
                dispatch(editPostDetailsByID(post));
            })
        },
        handleDeletePost: (postId) => {
            deleteById(postId)
            .then((post) => {
                dispatch(deletePostByID(post.id));
            })
        },
        handleAddNewCommentWithPostId: (comment) => {
            addComment(comment)
            .then((data) => {
                dispatch(addNewComment(data));
            })
        },
        handleUpdateComment: (commentId, timestamp, commentBody) => {
            editComment(commentId, timestamp, commentBody)
            .then((data) => {
                dispatch(editCommentDetailsByID(data));
            })
        },
        handleDeleteComment: (commentId) => {
            deleteCommentById(commentId)
            .then((comment) => {
                dispatch(deleteCommentByID(comment.id));
            })
        },
        handleVoteComment: (commentId, option) => {
            voteCommentById(commentId, option)
            .then((comment) => {
                dispatch(voteCommentByID(comment, option));
            })
        },
        handleVotePost: (postId, option) => {
            votePostById(postId, option)
            .then((post) => {
                dispatch(votePostByID(post, option));
            })
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PPost);