import React, { Component } from 'react';

import {
    Typography,
    Divider
} from '@material-ui/core';

import PPComment from './PPComment';
import AddCommentModal from './AddCommentModal';

class ListComments extends Component {
    render() {

        const { comments } = this.props;

        return (
            <div>
                <Typography variant="h5">
                    Comments
                    <AddCommentModal />
                </Typography>
                <Divider />
                <div style={{marginTop: '1em'}}>
                    {
                        comments && comments.length <= 0 &&
                        <p>There is no comment for this post at the moment.</p>
                    }
                    {comments && comments.map(comment => (
                        <PPComment comment={comment} key={comment.id} />
                    ))}
                </div>
            </div>
        );
    }
}

export default ListComments;