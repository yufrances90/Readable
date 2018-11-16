import React, { Component } from 'react';

import PCPost from './PCPost';

import {
    List,
    ListItem
} from '@material-ui/core';

class ListPostsPCBody extends Component {
    render() {

        const {
            posts,
            history
        } = this.props;

        return (
            <div>
                { 
                    posts.length <= 0 &&
                    <p>No post is available for this category. Please try later!</p>
                }
                {
                    posts.length > 0 &&
                    <List className="app-flex-container">
                        {posts.map(post => (
                            <ListItem key={post.id}>
                                <PCPost post={post} history={history} />
                            </ListItem>
                        ))}
                    </List>
                }
            </div>
        );
    }
}

export default ListPostsPCBody;