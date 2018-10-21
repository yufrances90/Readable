import React, { Component } from 'react';

import {
    TextField,
    Typography,
    Button,
    FormControl,
    Divider
} from '@material-ui/core';

class NewCategoryForm extends Component {

    state = {
        name: '',
        hasError: false
    }

    handleChange(event) {
        this.setState({
            name: event.target.value,
            hasError: false
        })
    }

    handleClick(event) {

        event.preventDefault();

        const { name } = this.state;

        const { handleClickCreateBtn, categories } = this.props;

        const categoryList = categories.map(category => category.name);

        if (categoryList.includes(name)) {
            
            alert("Error: Sorry, no duplicated categories is allowed!")

            this.setState({
                hasError: true,
                name: ''
            });
        } else {
            handleClickCreateBtn(event, name.toLowerCase());
        }
    }

    render() {

        const { name, hasError } = this.state;

        const { categories } = this.props;

        return (
            <form style={{textAlign: "center"}}>
                <Typography variant="h5">
                    Create New Category
                </Typography>
                <Divider />
                <FormControl>
                    <TextField
                        id="category-name"
                        label="New Category"
                        value={name}
                        onChange={this.handleChange.bind(this)}
                        margin="normal"
                        error={hasError}
                    />
                </FormControl>
                <Button 
                    style={{marginTop: '2.3em'}} 
                    onClick={this.handleClick.bind(this)}
                    disabled={name === ''}
                >
                    Create
                </Button>
            </form>
        );
    }
}

export default NewCategoryForm;