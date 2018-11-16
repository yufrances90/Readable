import React, { Component } from 'react';

import {
    Typography, 
    Divider,
    IconButton
} from '@material-ui/core';
import { 
    Delete,
    Favorite,
    FavoriteBorder 
} from '@material-ui/icons';

import { formatDate } from '../utils/utility';

import EditPostModal from './EditPostModal';

class PostDetails extends Component {

    render() {

        const { 
            post,
            handleUpdatePostByID,
            handleDeletePostByID 
        } = this.props;

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
                        handleUpdatePostByID={handleUpdatePostByID}
                    />
                    <IconButton
                        onClick={event => handleDeletePostByID(event, post.id)}
                    >
                        <Delete />
                    </IconButton>
                    <IconButton>
                        <FavoriteBorder />
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