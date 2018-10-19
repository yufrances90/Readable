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
            handleClick
        } = this.props;

        return (
            <div>
                <List>
                    {categories.map(category => (
                        <ListItem 
                            button 
                            key={category.name}
                            onClick={(e) => handleClick(e, category.name)}
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