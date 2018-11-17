import React, { Component, Fragment } from 'react';

import {
    IconButton,
    Modal
} from '@material-ui/core';
import { Edit } from '@material-ui/icons';

import EditPostForm from './EditPostForm';

class EditPostModal extends Component {

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

        const {
            postId, 
            title, 
            body, 
            handleUpdatePostByID 
        } = this.props;

        return (
            <Fragment>
                <IconButton onClick={this.handleOpen.bind(this)}>
                    <Edit />
                </IconButton>
                <Modal
                    open={open}
                    onClose={this.handleClose.bind(this)}
                >
                    <div className="app-modal">
                        <EditPostForm 
                            title={title}
                            body={body}
                            postId={postId}
                            handleUpdatePostByID={handleUpdatePostByID}
                        />
                    </div>
                </Modal>
            </Fragment>
        );
    }
}

export default EditPostModal;