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

        const { 
            categories, 
            posts, 
            history, 
            handleDeletePostByID 
        } = this.props;

        const categoryList = categories.list;

        if ( categoryList.length === 0 || !posts)  {
            return <LinearProgress />
        }

        const postList = (posts && posts.list.length > 0)? posts.list : [];
       
        return (
            <div>
                <ListAllHeader />
                <div style={{marginTop: '7em'}}>
                    <ListAllCategories categories={categoryList} />
                </div>
                <div style={{marginTop: '7em'}}>
                    <ListAllPosts 
                        posts={postList}
                        history={history}
                        handleDeletePostByID={handleDeletePostByID} 
                    />
                </div>
                <br />
                <br />
                <br />
            </div>
        );
    }
}

export default ListAll;