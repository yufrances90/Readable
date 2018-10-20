import React, { Component } from 'react';

import {
    Button,
    Modal,
    Typography
} from '@material-ui/core';

import NewCategoryForm from './NewCategoryForm';

class NewCategoryModal extends Component {

    state = {
        open: false
    }

    handleOpen = () => {
        this.setState({ 
            open: true 
        });
    }
    
    handleClose = () => {
        this.setState({ 
            open: false 
        });
    };

    render() {
        return (
            <div>
                <div 
                    style={{margin: '1em'}}
                >
                    <Button variant="outlined" color="primary" onClick={this.handleOpen}>
                        Add new category
                    </Button>
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={this.state.open}
                        onClose={this.handleClose}
                    >
                        <div className="app-new-category-modal">
                            <NewCategoryForm />
                        </div>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default NewCategoryModal;