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
        name: ''
    }

    handleChange(event) {
        this.setState({
            name: event.target.value
        })
    }

    render() {
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
                        value={this.state.name}
                        onChange={this.handleChange.bind(this)}
                        margin="normal"
                    />
                </FormControl>
                <Button style={{marginTop: '2.3em'}}>
                    Create
                </Button>
            </form>
        );
    }
}

export default NewCategoryForm;