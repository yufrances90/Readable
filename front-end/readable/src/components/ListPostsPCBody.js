import React, { Component } from 'react';

import PCPost from './PCPost';

import {
    Grid
} from '@material-ui/core';

class ListPostsPCBody extends Component {

    state = {
        toHome: false
    }

    render() {

        const {
            posts,
            history
        } = this.props;

        const { toHome } = this.state;

        return (
            <div>
                { 
                    posts.length <= 0 &&
                    <p>No post is available for this category. Please try later!</p>
                }
                {
                    posts.length > 0 &&
                    <Grid container>
                        {posts.map(post => (
                            <Grid item xs={6} key={post.id}>
                                <PCPost 
                                    post={post} 
                                    history={history}
                                    toHome={toHome} 
                                />
                            </Grid>
                        ))}
                    </Grid>
                }
            </div>
        );
    }
}

export default ListPostsPCBody;