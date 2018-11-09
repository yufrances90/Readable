import React, { Component } from 'react';

import { 
    Grid,
    Typography, 
    Divider
} from '@material-ui/core';

import { formatDate } from '../utils/utility';

import ListComments from './ListComments';

class PostDetails extends Component {
    render() {

        const { post } = this.props;

        return (
            <div>
                <Grid container>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h3">
                            {post.title}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            {post.author} |  {formatDate(post.timestamp)} | 
                            comments: {post.commentCount} | 
                            votes: {post.voteScore}
                        </Typography>
                        <Divider />
                        <p>
                            {post.body}
                        </p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <ListComments />
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default PostDetails;