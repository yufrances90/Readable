import React, { Component } from 'react';

import { 
    List, 
    ListItem, 
    Typography,
    Divider,
    InputLabel,
    Select,
    MenuItem
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

        const sortedPosts = posts;

        return sortedPosts;
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
                                        postId: post.id
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