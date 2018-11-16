import React, { Component } from 'react';

import { 
    List, 
    ListItem, 
    Typography,
    Divider,
    InputLabel,
    Select,
    MenuItem,
    Button
} from '@material-ui/core';

import { Link } from 'react-router-dom';

import { sortMethodMenuItems } from '../constants/shared';

class ListAllPosts extends Component {

    state = {
        sortMethod: ''
    }

    handleChange(event) {

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    getSortedPosts() {

        const { posts } = this.props;

        const { sortMethod } = this.state;

        switch(sortMethod) {
            case 'timestamp':
                posts.sort((a, b) => b.timestamp - a.timestamp);
                return posts;
            case 'voteScore':
                posts.sort((a, b) => b.voteScore - a.voteScore);
                return posts;
            default:
                return posts;
        }
    }


    render() {

        const { sortMethod } = this.state;

        return (
            <div>
                <Typography variant="h4">
                    { "posts".toUpperCase() }
                    <span
                        style={{marginLeft: '0.5em'}}
                    >
                        <InputLabel 
                            htmlFor="sort-method"
                            style={{marginRight: '0.5em'}}
                        >
                            Sort by
                        </InputLabel>
                        <Select 
                            value={sortMethod}
                            onChange={this.handleChange.bind(this)}
                            inputProps={{
                                name: 'sortMethod',
                                id: 'sort-method',
                            }}
                        >
                            {sortMethodMenuItems.map(sMethod => (
                                <MenuItem key={sMethod.key} value={sMethod.key}>
                                    {sMethod.value}
                                </MenuItem>
                            ))}
                        </Select>
                        <Button 
                            variant="outlined"
                            style={{marginLeft: '1em'}} 
                            color="secondary"
                        >
                            <Link 
                                to={{
                                    pathname: "/post/new/add",
                                    state: {
                                        toHome: true
                                    }
                                }} 
                                className="app-link" 
                            >
                                Create New Post
                            </Link>
                        </Button>
                    </span>
                </Typography>
                <br />
                <Divider />
                <List className="app-flex-container">
                    {this.getSortedPosts().map(post => (
                        <ListItem button key={post.id}>
                            <Link
                                to={{
                                    pathname: `${post.category}/${post.id}`,
                                    state: {
                                        postId: post.id,
                                        toHome: true
                                    }
                                }}
                                className="app-link"
                            >
                                {post.title}
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}

export default ListAllPosts;