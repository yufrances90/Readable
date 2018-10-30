import React, { Component } from 'react';

import { 
    List, 
    ListItem, 
    Typography,
    Divider
} from '@material-ui/core';

class ListAllPosts extends Component {
    render() {

        const { posts } = this.props;

        return (
            <div>
                <Typography variant="h4" style={{ textAlign: "center" }}>
                    { "posts".toUpperCase() }
                </Typography>
                <Divider />
                <List>
                    {posts.map(post => (
                        <ListItem button key={post.id}>
                            {post.title}
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}

export default ListAllPosts;