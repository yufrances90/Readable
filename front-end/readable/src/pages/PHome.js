import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Grid } from '@material-ui/core';

import { 
    deleteById,
    vote as votePostById
} from '../api/posts';
import { getInitialData } from '../api/shared';
import { getAllCategories } from '../actions/categories';
import { 
    getAllPosts,
    deletePostByID,
    votePostByID 
} from '../actions/posts';

import ListAll from '../components/ListAll';

class PHome extends Component {

    componentDidMount() {

        const { categories } = this.props;
        
        this.props.handleReceiveData();
    }

    handleDeletePostByID(event, postId) {

        const { history } = this.props;

        event.preventDefault();

        this.props.handleDeletePost(postId);

        history.push("/");
    }

    handleVoteButtonClickForPost(postId, option) {
        this.props.handleVotePost(postId, option);
    }

    render() {

        const { 
            categories, 
            posts, 
            history
        } = this.props;

        return (
            
            <Grid container>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={8}>
                    <ListAll
                        categories={categories}
                        posts={posts}
                        history={history}
                        handleDeletePostByID={this.handleDeletePostByID.bind(this)}
                        handleVoteButtonClickForPost={this.handleVoteButtonClickForPost.bind(this)}
                    />
                </Grid>
            </Grid>
        );
    }
}

function mapStatetoProps({ categories, posts }) {
    return {
        categories,
        posts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleReceiveData: () => {
            getInitialData()
            .then(({ categories, posts }) => {
                dispatch(getAllCategories(categories))
                dispatch(getAllPosts(posts));
            })
        },
        handleDeletePost: (postId) => {
            deleteById(postId)
            .then((post) => {
                dispatch(deletePostByID(post.id));
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

export default connect(mapStatetoProps, mapDispatchToProps)(PHome);