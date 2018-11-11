import React, { Component } from 'react';

import { 
    Typography, 
    Divider,
    TextField,
    Button 
} from '@material-ui/core';

class AddCommentForm extends Component {

    state = {
        author: '',
        body: ''
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {

        const { author, body } = this.state;

        return (
            <form>
                <Typography variant="h6">
                    Add New Comment
                </Typography>
                <Divider />
                <br />
                <TextField
                    label="Author"
                    name="author" 
                    value={author}
                    onChange={this.handleChange.bind(this)}
                    style={{width: "50%"}}
                />
                <TextField
                    label="Body"
                    name="body" 
                    value={body}
                    onChange={this.handleChange.bind(this)}
                    style={{width: "100%"}}
                    multiline
                    rows={5}
                />
                <br />
                <br />
                <Button
                    variant="outlined" 
                    color="primary" 
                    style={{ left: '43%' }}
                >
                    Submit
                </Button>
            </form>
        );
    }
}

export default AddCommentForm;