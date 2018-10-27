import React, { Component } from 'react';

import { Divider } from '@material-ui/core';

import ListPostsPCHeader from './ListPostsPCHeader';

class ListPostsPC extends Component {

    render() {

        const { 
            selectedCategory,
            handleSelectSortMethod 
        } = this.props;

        return (
            <div>
                <ListPostsPCHeader
                    selectedCategory={selectedCategory}
                    handleSelectSortMethod={handleSelectSortMethod}
                />
                <Divider />
            </div>
        );
    }
}

export default ListPostsPC;