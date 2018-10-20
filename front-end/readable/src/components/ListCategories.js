import React, { Component } from 'react';

import {
    List,
    ListItem,
    ListItemText,
    Divider
} from '@material-ui/core'

class ListCategories extends Component {


    render() {

        const { 
            categories, 
            handleClick,
            selectedCategory
        } = this.props;

        return (
            <div>
                <List>
                    {categories.map(category => (
                        <ListItem 
                            button 
                            key={category.name}
                            onClick={(e) => handleClick(e, category.name)}
                            selected={category.name === selectedCategory}
                        >
                            {category.name.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </div>
        );
    }
}

export default ListCategories;