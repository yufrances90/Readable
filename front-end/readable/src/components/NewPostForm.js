import React, { Component } from 'react';

import {
    TextField,
    CircularProgress,
    Grid,
    MenuItem,
    Button,
    Typography
} from '@material-ui/core';

class NewPostForm extends Component {

    state = {
        title: '',
        body: '',
        author: '',
        selectedCategory: ''
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick(event) {
        
        event.preventDefault();

        const {
            title,
            body,
            author,
            selectedCategory
        } = this.state;

        const { handleSubmitForm, history, toHome } = this.props;

        handleSubmitForm(title, body, author, selectedCategory);

        const address = toHome? "/" : `/${selectedCategory}`;

        history.push({
            pathname: address,
            state: {
                selectedCategory
            }
        });
    }

    render() {

        const { categories } = this.props;

        if (categories.length === 0) {
            return (
                <div className="app-circular-progress">
                    <CircularProgress />
                </div>
            );
        }

        const {
            title,
            body,
            author,
            selectedCategory
        } = this.state;

        return (
            <form>
                <Typography variant="h5">
                    Create New Post
                </Typography>
                <br />
                <Grid container spacing={8}>
                    <Grid item xs={4}>
                        <TextField 
                            name="title"
                            label="Title"
                            value={title}
                            onChange={this.handleChange.bind(this)}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField 
                            name="author"
                            label="Author"
                            value={author}
                            onChange={this.handleChange.bind(this)}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            select
                            label="Category"
                            value={selectedCategory}
                            onChange={this.handleChange.bind(this)}
                            helperText="Please select category"
                            name="selectedCategory"
                        >
                            {categories.map(category => (
                                <MenuItem key={category.name} value={category.name}>
                                    {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            name="body"
                            label="Body"
                            value={body}
                            onChange={this.handleChange.bind(this)}
                            style={{ width: '85%' }}
                            rows={5}
                            multiline
                        />
                    </Grid>
                </Grid>
                <br />
                <br />
                <br />
                <Button
                    variant="outlined"
                    style={{left: '35%'}}
                    onClick={this.handleClick.bind(this)}
                    disabled={selectedCategory === ''}
                >
                    Create 
                </Button>
            </form>
        );
    }
}

export default NewPostForm;