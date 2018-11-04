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
import ListAllCategories from './ListAllCategories'
import ListAllPosts from './ListAllPosts';

class ListAll extends Component {

    render() {

        const { categories, posts } = this.props;

        const categoryList = categories.list;

        const postList = posts.list;

        if ( categoryList.length === 0)  {
            return <LinearProgress />
        }
       
        return (
            <div>
                <ListAllHeader />
                <div style={{marginTop: '7em'}}>
                    <ListAllCategories categories={categoryList} />
                </div>
                <div style={{marginTop: '7em'}}>
                    <ListAllPosts posts={postList} />
                </div>
                <br />
                <br />
                <br />
            </div>
        );
    }
}

export default ListAll;