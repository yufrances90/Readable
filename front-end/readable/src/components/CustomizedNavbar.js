import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { LibraryBooks } from '@material-ui/icons';

import { NavLink } from 'react-router-dom';

import { appName } from '../constants/shared';

class CustomizedNavbar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" className="app-navbar">
                    <Toolbar>
                        <ul>
                            <li>
                                <NavLink to='/' exact activeClassName='active' className="app-link">
                                    <Typography variant="h6" color="inherit">
                                        <LibraryBooks style={{marginRight: '0.2em'}} />
                                        {appName}
                                    </Typography>
                                </NavLink>
                            </li>
                        </ul>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default CustomizedNavbar;