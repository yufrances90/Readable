import React, { Component } from 'react';

import { 
    Typography,
    Grid,
    IconButton,
    TextField,
    Tooltip 
} from '@material-ui/core';
import {
    Edit,
    Delete,
    FavoriteBorder,
    Favorite,
    Done,
    Close
} from '@material-ui/icons';

import { formatDate } from '../utils/utility';
import { VoteOptions } from '../constants/shared';

class PPComment extends Component {

    state = {
        liked: false,
        enableEdit: false,
        commentBody: this.props.comment.body
    }

    handleToggleFavoriteButton(event) {
        
        event.preventDefault();

        this.setState((prevState) => {
            return {
                liked: !prevState.liked
            };
        });

        const option = (this.state.liked)? VoteOptions.DOWN_VOTE : VoteOptions.UP_VOTE;

        this.props.handleVoteButtonClick(this.props.comment.id, option);
    }

    determineVoteIcon() {

        const { liked } = this.state;

        return liked? <Favorite /> : <FavoriteBorder />
    }

    handleChangeEditMode(event) {
        
        event.preventDefault();

        this.setState((prevState) => {
            return {
                enableEdit: !prevState.enableEdit
            }
        })
    }

    handleUpdateComment(event) {
        this.setState({
            commentBody: event.target.value
        });
    }

    handleDoneButtonClick(event) {

        this.handleChangeEditMode(event);

        this.props.handleClickCommentUpdate(this.props.comment.id, this.state.commentBody);
    }

    render() {

        const { comment, handleDeleteButtonClick } = this.props;

        const { enableEdit, commentBody } = this.state;

        return (
            <div>
                <Grid container>
                    <Grid 
                        item 
                        xs={4} 
                        style={{borderRight: '1px solid lightgray'}}
                    >
                        <Typography variant="body1" color="textSecondary">
                            {comment.author} |  {formatDate(comment.timestamp)} | 
                            <br />
                            votes: {comment.voteScore}
                        </Typography>
                    </Grid>
                    <Grid 
                        item xs={8} 
                        style={{paddingLeft: '1em'}}
                    >
                        {
                            !enableEdit && 
                            <Typography variant="body2">
                                {comment.body}
                            </Typography>
                        }
                        {
                            enableEdit && 
                            <TextField 
                                value={commentBody}
                                style={{width: '100%'}}
                                multiline
                                rows={5} 
                                onChange={this.handleUpdateComment.bind(this)}
                            />
                        }
                        {
                            !enableEdit && 
                            <span style={{float: 'right'}}>
                                <Tooltip title="Edit">
                                    <IconButton
                                        onClick={this.handleChangeEditMode.bind(this)}
                                    >
                                        <Edit />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete">
                                    <IconButton
                                        onClick={event => handleDeleteButtonClick(event, comment.id)}
                                    >
                                        <Delete />
                                    </IconButton>
                                </Tooltip>
                                <IconButton
                                    onClick={this.handleToggleFavoriteButton.bind(this)}
                                >
                                    {this.determineVoteIcon()}
                                </IconButton>
                            </span>
                        }
                        {
                            enableEdit && 
                            <span style={{float: 'right'}}>
                                <Tooltip title="Done">
                                    <IconButton
                                        onClick={this.handleDoneButtonClick.bind(this)}
                                    >
                                        <Done />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Cancel">
                                    <IconButton
                                        onClick={this.handleChangeEditMode.bind(this)}
                                    >
                                        <Close />
                                    </IconButton>
                                </Tooltip>
                            </span>
                        }
                    </Grid>
                </Grid>
                <br />
            </div>
        );
    }
}

export default PPComment;