import React, { Component } from 'react';

import {
    Grid
} from '@material-ui/core';

import { connect } from 'react-redux';

import { add } from '../api/posts';
import { addNewPost } from '../actions/posts';
import { createNewPost } from '../utils/helpers';

import NewPostForm from '../components/NewPostForm';

class PCreate extends Component {

    componentDidMount() {

        const newPost = createNewPost("Hello", "World", "1", "udacity");

        this.props.handleAddNewPost(newPost);
    }

    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={8}>
                        <NewPostForm />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps({ post }) {
    return {
        post
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleAddNewPost: (newPost) => {
            add(newPost)
            .then((post) => {
                dispatch(addNewPost(post))
            })
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PCreate);