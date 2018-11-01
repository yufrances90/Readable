import React, { Component } from 'react';

import {
    Grid,
    Typography,
    Divider,
    ListItem,
    List
} from '@material-ui/core';

class ListAllCategories extends Component {
    render() {

        const { categories } = this.props;

        return (
            <div>
                <Typography variant="h4">
                    { "Categories".toUpperCase() }
                </Typography>
                <Divider />   
                <List className="app-flex-container">
                    { categories.map(category => (
                        <ListItem 
                            key={category.name} 
                            button
                        >
                             <Typography variant="h6">
                                {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                            </Typography>
                        </ListItem>
                    ))} 
                </List> 
            </div>
        );
    }
}

export default ListAllCategories;