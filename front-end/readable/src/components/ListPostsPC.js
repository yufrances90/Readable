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
            posts
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
                            title="Please select sort method."
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
                        />
                    </div>
                }
            </div>
        );
    }
}

export default ListPostsPC;