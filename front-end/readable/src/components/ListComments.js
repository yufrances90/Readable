import React, { Component } from 'react';

import {
    Typography,
    Divider
} from '@material-ui/core';

import PPComment from './PPComment';
import AddCommentModal from './AddCommentModal';

class ListComments extends Component {
    render() {

        const { 
            comments, 
            handleAddNewComment,
            postId,
            handleClickCommentUpdate,
            handleDeleteButtonClick 
        } = this.props;

        return (
            <div>
                <Typography variant="h5">
                    Comments
                    <AddCommentModal 
                        handleAddNewComment={handleAddNewComment}
                        postId={postId} 
                    />
                </Typography>
                <Divider />
                <div style={{marginTop: '1em'}}>
                    {
                        comments && comments.length <= 0 &&
                        <p>There is no comment for this post at the moment.</p>
                    }
                    {comments && comments.map(comment => (
                        <PPComment 
                            comment={comment} 
                            key={comment.id}
                            handleClickCommentUpdate={handleClickCommentUpdate}
                            handleDeleteButtonClick={handleDeleteButtonClick} 
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default ListComments;