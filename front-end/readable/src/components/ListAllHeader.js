import React, { Component } from 'react';

import { Divider, Typography } from '@material-ui/core';

import { appName } from '../constants/shared';

class ListAllHeader extends Component {
    render() {
        return (
            <div>
                <div className="card-panel grey lighten-2 app-jumbotron" >
                    <div className="container">
                        <Typography variant="h3">{appName}</Typography>
                        <p>A content and comment web app using React &amp; Redux</p>
                    </div>
                </div>
                <Divider />
            </div>
        );
    }
}

export default ListAllHeader;