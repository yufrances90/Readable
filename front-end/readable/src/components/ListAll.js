import React, { Component } from 'react';

import { 
    LinearProgress,
    Grid,
    Divider,
    List,
    ListItem,
    ListItemText,
    Card,
    CardContent,
    Typography,
    CardActions,
    Button
} from '@material-ui/core';

import { formatDate } from '../utils/utility';

import ListAllHeader from './ListAllHeader';

class ListAll extends Component {

    render() {

        const { categories, posts } = this.props;

        const categoryList = categories.list;

        const postList = posts.list;

        if ( categoryList.length === 0 || postList.length === 0)  {
            return <LinearProgress />
        }
       
        return (
            <div>
                <ListAllHeader />
            </div>
        );
    }
}

export default ListAll;