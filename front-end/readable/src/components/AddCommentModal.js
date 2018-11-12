import React, { Component, Fragment } from 'react';

import { 
    IconButton,
    Modal 
} from '@material-ui/core';
import {
    AddCommentRounded
} from '@material-ui/icons';
import AddCommentForm from './AddCommentForm';

class AddCommentModal extends Component {

    state = {
        open: false,
      };
    
    handleOpen() {
        this.setState({ 
            open: true 
        });
    };
    
    handleClose() {
        this.setState({ 
            open: false 
        });
    };

    render() {

        const { open } = this.state;

        const { handleAddNewComment, postId } = this.props;

        return (
            <Fragment>
                <IconButton onClick={this.handleOpen.bind(this)}>
                    <AddCommentRounded />
                </IconButton>
                <Modal 
                    open={open}
                    onClose={this.handleClose.bind(this)}
                >
                    <div className="app-modal">
                        <AddCommentForm 
                            handleAddNewComment={handleAddNewComment}
                            postId={postId} 
                        />
                    </div>
                </Modal>
            </Fragment>
        );
    }
}

export default AddCommentModal;