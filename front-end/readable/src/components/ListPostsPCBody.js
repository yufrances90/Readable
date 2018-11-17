import React, { Component } from 'react';

import ListPosts from './ListPosts';

class ListPostsPCBody extends Component {

    state = {
        toHome: false
    }

    render() {

        const {
            posts,
            history,
            handleDeletePostByID,
            handleVoteButtonClickForPost
        } = this.props;

        const { toHome } = this.state;

        return (
            <div>
                { 
                    posts.length <= 0 &&
                    <p>No post is available for this category. Please try later!</p>
                }
                {
                    posts.length > 0 &&
                    <ListPosts
                        posts={posts}
                        history={history}
                        toHome={toHome}
                        handleDeletePostByID={handleDeletePostByID}
                        handleVoteButtonClickForPost={handleVoteButtonClickForPost} 
                    />
                }
            </div>
        );
    }
}

export default ListPostsPCBody;