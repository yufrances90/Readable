import React, { Component } from 'react';

import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    IconButton,
    Grid,
    Tooltip
} from '@material-ui/core';
import {
    Edit,
    Delete,
    Favorite,
    FavoriteBorder,
    ThumbUpAlt,
    ThumbDownAlt
} from '@material-ui/icons';

import { formatDate } from '../utils/utility';
import { VoteOptions } from '../constants/shared';

class PCPost extends Component {

    state = {
        upVote: false,
        downVote: false
    }

    handleClick(event) {

        event.preventDefault();

        const { history, post, toHome } = this.props;

        history.push({
            pathname: `${post.category}/${post.id}`,
            state: {
                postId: post.id,
                toHome
            }
        });
    }

    handleToggleLikeButton(event, option) {

        event.preventDefault();

        const { post, handleVoteButtonClickForPost } = this.props;

        handleVoteButtonClickForPost(post.id, option);

        // window.location.reload();
    }

    determineLikeButtonIcon() {

        const { liked } = this.state;

        return liked? <Favorite /> : <FavoriteBorder />;
    }

    render() {

        const { post, handleDeletePostByID } = this.props;

        return (
            <div>
                <Card 
                    style={{ 
                        width: 450, 
                        height: 140,
                        borderLeft: "3px solid blue" 
                    }} 
                >
                    <CardContent>
                        <Typography variant="h6">
                            {post.title}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            {post.author} |  {formatDate(post.timestamp)} | 
                            comments: {post.commentCount} | 
                            votes: {post.voteScore}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Grid 
                            justify="space-between"
                            container
                        >
                            <Grid item>
                                <Tooltip title="View post details">
                                    <Button 
                                        size="small"
                                        onClick={this.handleClick.bind(this)}
                                    >
                                        Learn More 
                                    </Button>
                                </Tooltip>
                            </Grid>
                            <Grid>
                                <Tooltip title="Edit">
                                    <IconButton>
                                        <Edit />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete">
                                    <IconButton onClick={event => handleDeletePostByID(event, post.id)}>
                                        <Delete />
                                    </IconButton>
                                </Tooltip>
                                <IconButton onClick={event => this.handleToggleLikeButton(event, VoteOptions.UP_VOTE)}>
                                    <ThumbUpAlt />
                                </IconButton>
                                <IconButton onClick={event => this.handleToggleLikeButton(event, VoteOptions.DOWN_VOTE)}>
                                    <ThumbDownAlt />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default PCPost;