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
        hasError: false,
        categoryList: []
    }

    componentDidMount() {

        const { categories } = this.props;
        
        if (categories.length > 0) {
            this.setState({
                categoryList: categories.map(category => category.name)
            })
        }
    }

    handleChange(event) {
        this.setState({
            name: event.target.value,
            hasError: false
        })
    }

    handleClick(event) {

        event.preventDefault();

        const { name, categoryList } = this.state;

        if (categoryList.includes(name)) {
            
            alert("Error: Sorry, no duplicated categories is allowed!")

            this.setState({
                hasError: true
            });
        } 
    }

    render() {

        const { name, hasError } = this.state;

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
                    disabled={hasError}
                >
                    Create
                </Button>
            </form>
        );
    }
}

export default NewCategoryForm;