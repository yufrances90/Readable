import React, { Component } from 'react';

import { 
    List, 
    ListItem, 
    Typography,
    Divider,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Grid
} from '@material-ui/core';

import { Link } from 'react-router-dom';

import { sortMethodMenuItems } from '../constants/shared';
import PCPost from './PCPost';

class ListAllPosts extends Component {

    state = {
        sortMethod: '',
        toHome: true
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

        const { sortMethod, toHome } = this.state;

        const { history } = this.props;

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
                <br />
                <br />
                <Grid container>
                    {this.getSortedPosts().map(post => (
                        <Grid item xs={6} key={post.id}>
                            <PCPost post={post} history={history} toHome={toHome} />
                            <br />
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}

export default ListAllPosts;