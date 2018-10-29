import React, { Component } from 'react';

import PCPost from './PCPost';

class ListPostsPCBody extends Component {
    render() {

        const {
            posts
        } = this.props;

        return (
            <div>
                {posts.map(post => (
                    <PCPost post={post} />
                ))}
            </div>
        );
    }
}

export default ListPostsPCBody;