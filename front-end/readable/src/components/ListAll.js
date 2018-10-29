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

const jumbotronStyle = {
    paddingBottom: '150px',
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)"
}

const appName = "Readable";

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
                <div className="card-panel grey lighten-2" style={jumbotronStyle}>
                    <div className="container">
                        <h1>{appName}</h1>
                        <p>A content and comment web app using React & Redux</p>
                    </div>
                </div>
                <Divider />
            </div>
        );
    }
}

export default ListAll;