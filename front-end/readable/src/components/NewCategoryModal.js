import React, { Component } from 'react';

import {
    Button,
    Modal,
    Typography,
    Dialog
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

        const { categories, handleClickCreateBtn } = this.props;

        return (
            <div>
                <div 
                    style={{margin: '1em'}}
                >
                    <Button variant="outlined" color="primary" onClick={this.handleOpen}>
                        Add new category
                    </Button>
                    <Modal
                        open={this.state.open}
                        onClose={this.handleClose}
                    >
                        <div className="app-new-category-modal">
                            <NewCategoryForm 
                                categories={categories}
                                handleClickCreateBtn={handleClickCreateBtn}
                            />
                        </div>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default NewCategoryModal;