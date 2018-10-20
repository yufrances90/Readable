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
                {categoryList.map(category => (
                    <div key={category.name}>
                        <h1> {category.name.toUpperCase()}  </h1>
                        <Divider />
                        <List>
                            { postList
                                .filter(post => post.category === category.name)
                                .map(post => (
                                    <ListItem key={post.id}>
                                        <Card style={{width: 800, height: 120}}>
                                            <CardContent>
                                                <Typography variant="h6">
                                                    {post.title}
                                                </Typography>
                                                <Typography variant="body1" color="textSecondary">
                                                    {post.author} |  {formatDate(post.timestamp)} | 
                                                    comments: {post.commentCount} | 
                                                    votes: {post.voteScore}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">Learn More</Button>
                                            </CardActions>
                                        </Card>
                                    </ListItem>
                                ))}
                        </List>
                    </div>
                ))}
            </div>
        );
    }
}

export default ListAll;