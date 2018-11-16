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
import { VoteOptions } from '../constants/shared';

import EditPostModal from './EditPostModal';

class PostDetails extends Component {

    state = {
        liked: false
    }

    handleToggleLikeButton(event) {

        event.preventDefault();

        this.setState((prevState) => {
            return {
                liked: !prevState.liked
            }
        });

        const { handleVoteButtonClickForPost, post } = this.props;

        const { liked } = this.state;
       
        const option = liked? VoteOptions.DOWN_VOTE : VoteOptions.UP_VOTE;

        handleVoteButtonClickForPost(post.id, option);
    }

    determineLikeButtonIcon() {
        return (this.state.liked)? <Favorite /> : <FavoriteBorder />
    }

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
                    <IconButton
                        onClick={this.handleToggleLikeButton.bind(this)} 
                    >
                       {this.determineLikeButtonIcon()}
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