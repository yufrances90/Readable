import React, { Component } from 'react';

import {
    Typography,
    Divider
} from '@material-ui/core';

class ListPostsPC extends Component {
    render() {

        const { selectedCategory } = this.props;

        return (
            <div>
                <Typography 
                    variant="h3" 
                    style={{
                        paddingTop: '0.5em', 
                        paddingBottom: '0.5em',
                        paddingLeft: '0.5em'
                    }}
                >
                    {selectedCategory.toUpperCase()}
                </Typography>
                <Divider />
            </div>
        );
    }
}

export default ListPostsPC;