import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { LibraryBooks } from '@material-ui/icons';

import { appName } from '../constants/shared';

class CustomizedNavbar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" className="app-navbar">
                    <Toolbar>
                        <LibraryBooks style={{marginRight: '0.2em'}} />
                        <Typography variant="h6" color="inherit">
                            {appName}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default CustomizedNavbar;