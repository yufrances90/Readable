import React, { Component } from 'react';

import {
    Typography,
    Divider,
    IconButton,
    Tooltip
} from '@material-ui/core';
import { Sort } from '@material-ui/icons'

class ListPostsPC extends Component {

    handleClick(event) {

        console.log(event.target);

        this.props.handleSelectSortMethod("timestamp");
    }

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
                    <Tooltip title="Sort by">
                        <IconButton onClick={this.handleClick.bind(this)}>
                            <Sort />
                        </IconButton>
                    </Tooltip>
                </Typography>
                <Divider />
            </div>
        );
    }
}

export default ListPostsPC;