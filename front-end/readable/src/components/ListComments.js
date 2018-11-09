import React, { Component } from 'react';

import {
    Typography,
    Divider
} from '@material-ui/core';

class ListComments extends Component {
    render() {
        return (
            <div>
                <Typography variant="h5">
                    Comments
                </Typography>
                <Divider />
            </div>
        );
    }
}

export default ListComments;