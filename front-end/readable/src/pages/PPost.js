import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
    LinearProgress,
    Grid
} from '@material-ui/core';

import { get as getPostById } from '../api/posts';
import { getByPostId as getCommentsByPostId } from '../api/comments';
import { getInitialData } from '../api/shared';
import { getAllCategories } from '../actions/categories';
import { viewPostDetailsByID, getAllPosts } from '../actions/posts';
import { getCommentsByPostID } from '../actions/comments';

import PostDetails from '../components/PostDetails';
import ListComments from '../components/ListComments';

class PPost extends Component {

    componentDidMount() {

        const { location } = this.props;

        const { postId } = location.state;

        this.props.handleGetPost(postId);
        this.props.handleGetCommentsByPostId(postId);
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
                        <PostDetails post={post} />
                        <br />
                        <br />
                        <br />
                        <br />
                        <ListComments comments={commentList} />
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
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PPost);