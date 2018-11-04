import React, { Component } from 'react';

import {
    Grid,
    Typography,
    Divider,
    ListItem,
    List
} from '@material-ui/core';

import { Link } from 'react-router-dom';

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
                            <Link 
                                to={{
                                    pathname: `${category.path}`,
                                    state: {
                                        selectedCategory: category.name
                                    }
                                }} 
                                className="app-link" 
                            >
                                <Typography variant="h6">
                                    {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                                </Typography>
                            </Link>
                        </ListItem>
                    ))} 
                </List> 
            </div>
        );
    }
}

export default ListAllCategories;