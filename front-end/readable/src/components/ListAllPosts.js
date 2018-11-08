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
                    {this.props.posts.map(post => (
                        <ListItem button key={post.id}>
                            <Link
                                to={{
                                    pathname: `${post.category}/${post.id}`,
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