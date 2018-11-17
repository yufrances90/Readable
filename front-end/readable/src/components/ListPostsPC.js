import React, { Component } from 'react';

import { 
    Divider,
    CircularProgress,
    Tooltip
} from '@material-ui/core';

import ListPostsPCHeader from './ListPostsPCHeader';
import ListPostsPCBody from './ListPostsPCBody';

class ListPostsPC extends Component {

    render() {

        const { 
            selectedCategory,
            handleSelectSortMethod,
            posts,
            history,
            handleDeletePostByID,
            handleVoteButtonClickForPost,
            handleUpdatePostByID
        } = this.props;

        return (
            <div>
                <ListPostsPCHeader
                    selectedCategory={selectedCategory}
                    handleSelectSortMethod={handleSelectSortMethod}
                />
                <Divider />
                {
                    !posts && 
                    <div className="app-circular-progress">
                        <Tooltip 
                            title="Error: Internal Error(No post is available)!."
                            placement="right"
                        >
                            <CircularProgress color="primary" /> 
                        </Tooltip>
                    </div>
                }
                { 
                    posts && 
                    <div style={{paddingTop: '1em', paddingLeft: '1em'}}>
                        <ListPostsPCBody
                            posts={posts} 
                            history={history}
                            handleDeletePostByID={handleDeletePostByID}
                            handleVoteButtonClickForPost={handleVoteButtonClickForPost}
                            handleUpdatePostByID={handleUpdatePostByID}
                        />
                    </div>
                }
            </div>
        );
    }
}

export default ListPostsPC;