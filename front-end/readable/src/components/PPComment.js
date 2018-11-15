import React, { Component } from 'react';

import { 
    Typography,
    Grid,
    IconButton,
    TextField 
} from '@material-ui/core';
import {
    Edit,
    Delete,
    FavoriteBorder,
    Favorite,
    Done
} from '@material-ui/icons';

import { formatDate } from '../utils/utility';

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
        })
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

        const { comment } = this.props;

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
                        <span style={{float: 'right'}}>
                            {
                                !enableEdit && 
                                <IconButton
                                    onClick={this.handleChangeEditMode.bind(this)}
                                >
                                    <Edit />
                                </IconButton>
                            }
                            {
                                enableEdit && 
                                <IconButton
                                    onClick={this.handleDoneButtonClick.bind(this)}
                                >
                                    <Done />
                                </IconButton>
                            }
                            <IconButton>
                                <Delete />
                            </IconButton>
                            <IconButton
                                onClick={this.handleToggleFavoriteButton.bind(this)}
                            >
                                {this.determineVoteIcon()}
                            </IconButton>
                        </span>
                    </Grid>
                </Grid>
                <br />
            </div>
        );
    }
}

export default PPComment;