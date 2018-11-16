import React, { Component } from 'react';

import {
    Typography
} from '@material-ui/core';

class PNotFound extends Component {
    render() {
        return (
            <div>
                <div className="card-panel grey lighten-2 app-jumbotron" >
                    <div className="container" style={{textAlign: "center"}}>
                        <Typography variant="h3">404 Not Found</Typography>
                    </div>
                </div>
            </div>
        );
    }
}

export default PNotFound;