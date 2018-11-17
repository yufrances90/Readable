import React, { Component } from 'react';

import { Grid } from '@material-ui/core';

import PCPost from './PCPost';

class ListPosts extends Component {

    render() {

        const { 
            posts, 
            toHome, 
            history, 
            handleDeletePostByID,
            handleVoteButtonClickForPost 
        } = this.props;

        return (
            <Grid container>
                {posts.map(post => (
                    <Grid item xs={6} key={post.id}>
                        <PCPost 
                            post={post} 
                            history={history}
                            toHome={toHome}
                            handleDeletePostByID={handleDeletePostByID}
                            handleVoteButtonClickForPost={handleVoteButtonClickForPost} 
                        />
                        <br />
                    </Grid>
                ))}
            </Grid>
        );
    }
}

export default ListPosts;