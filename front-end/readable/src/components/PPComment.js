import React, { Component } from 'react';

import { 
    Typography,
    Grid,
    IconButton 
} from '@material-ui/core';
import {
    Edit,
    Delete,
    FavoriteBorder,
    Favorite
} from '@material-ui/icons';

import { formatDate } from '../utils/utility';

class PPComment extends Component {

    state = {
        liked: false
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

    render() {

        const { comment } = this.props;

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
                        <Typography variant="body2">
                            {comment.body}
                        </Typography>
                        <span style={{float: 'right'}}>
                            <IconButton>
                                <Edit />
                            </IconButton>
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