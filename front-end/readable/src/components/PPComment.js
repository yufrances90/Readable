import React, { Component } from 'react';

import { 
    Typography,
    Grid 
} from '@material-ui/core';

import { formatDate } from '../utils/utility';

class PPComment extends Component {
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
                    </Grid>
                </Grid>
                <br />
            </div>
        );
    }
}

export default PPComment;