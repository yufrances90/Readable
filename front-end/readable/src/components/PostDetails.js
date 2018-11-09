import React, { Component } from 'react';

import {
    Typography, 
    Divider
} from '@material-ui/core';

import { formatDate } from '../utils/utility';

class PostDetails extends Component {
    render() {

        const { post } = this.props;

        return (
            <div>
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
            </div>
        );
    }
}

export default PostDetails;