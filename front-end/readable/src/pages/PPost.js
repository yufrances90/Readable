import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
    LinearProgress
} from '@material-ui/core';

import { get as getPostById } from '../api/posts';
import { getInitialData } from '../api/shared';
import { getAllCategories } from '../actions/categories';
import { viewPostDetailsByID, getAllPosts } from '../actions/posts';

class PPost extends Component {

    componentDidMount() {

        const { location } = this.props;

        const { postId } = location.state;

        this.props.handleGetPost(postId);
    }

    render() {

        const { post } = this.props;

        if (!post) {
            return <LinearProgress />
        }

        return (
            <div>
                Hello from PPost
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
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PPost);