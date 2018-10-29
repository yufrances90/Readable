import React, { Component } from 'react';

import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button
} from '@material-ui/core';

import { formatDate } from '../utils/utility';

class PCPost extends Component {
    render() {

        const { post } = this.props;
        
        return (
            <div>
                <Card 
                    style={{ 
                        width: 450, 
                        height: 140,
                        borderLeft: "3px solid blue" 
                    }} 
                >
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
            </div>
        );
    }
}

export default PCPost;