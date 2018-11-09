import React, { Component } from 'react';

import {
    Typography, 
    Divider,
    IconButton
} from '@material-ui/core';
import { 
    Delete 
} from '@material-ui/icons';

import { formatDate } from '../utils/utility';

import EditPostModal from './EditPostModal';

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
                    <EditPostModal
                        title={post.title}
                        body={post.body} 
                    />
                    <IconButton>
                        <Delete />
                    </IconButton>
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