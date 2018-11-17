import React, { Component } from 'react';

import {
    Typography,
    TextField,
    Divider,
    Button
} from '@material-ui/core';

class EditPostForm extends Component {

    state = {
        title: this.props.title,
        body: this.props.body
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {

        const { title, body } = this.state;

        const { handleUpdatePostByID, postId } = this.props;

        return (
            <form>
                <Typography variant="h6">
                    Edit Post
                </Typography>
                <Divider />
                <br />
                <TextField
                    label="Title"
                    name="title"
                    value={title}
                    onChange={this.handleChange.bind(this)}
                    style={{width: "100%"}}
                />
                <br />
                <br />
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
                    onClick={event => handleUpdatePostByID(event, postId, title, body)}
                >
                    Submit
                </Button>
            </form>
        );
    }
}

export default EditPostForm;