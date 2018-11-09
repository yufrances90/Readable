import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
    LinearProgress
} from '@material-ui/core';

import { get as getPostById } from '../api/posts';
import { getByPostId as getCommentsByPostId } from '../api/comments';
import { getInitialData } from '../api/shared';
import { getAllCategories } from '../actions/categories';
import { viewPostDetailsByID, getAllPosts } from '../actions/posts';
import { getCommentsByPostID } from '../actions/comments';

import PostDetails from '../components/PostDetails';

class PPost extends Component {

    componentDidMount() {

        const { location } = this.props;

        const { postId } = location.state;

        this.props.handleGetPost(postId);
        this.props.handleGetCommentsByPostId(postId);
    }

    render() {

        const { post } = this.props;

        if (!post) {
            return <LinearProgress />
        }

        return (
            <div>
                <PostDetails post={post} />
            </div>
        );
    }
}

function mapStateToProps({ posts }) {

    return {
        post: posts.post
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
                console.log(comments);
                // dispatch(getCommentsByPostID(comments));
            })
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PPost);