import React, { Component } from 'react';

import { 
    Divider,
    CircularProgress,
    Tooltip
} from '@material-ui/core';

import ListPostsPCHeader from './ListPostsPCHeader';

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
                <div className="app-circular-progress">
                    {
                        !posts && 
                        <Tooltip 
                            title="Please select sort method."
                            placement="right"
                        >
                            <CircularProgress color="primary" /> 
                        </Tooltip>
                    }
                </div>
            </div>
        );
    }
}

export default ListPostsPC;