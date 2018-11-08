import React, { Component } from 'react';

import {
    Typography,
    InputLabel,
    Select,
    MenuItem,
    Button
} from '@material-ui/core';

import { Link } from 'react-router-dom';

import { sortMethodMenuItems } from '../constants/shared';

class ListPostsPCHeader extends Component {

    state = {
        sortMethod: ''
    }

    handleChange(event) {

        this.setState({
            [event.target.name]: event.target.value
        });

        this.props.handleSelectSortMethod(event.target.value);
    }

    render() {

        const { selectedCategory } = this.props;

        const { sortMethod } = this.state;

        return (
            <div>
                <Typography 
                    variant="h3" 
                    style={{
                        paddingTop: '0.5em', 
                        paddingBottom: '0.5em',
                        paddingLeft: '0.5em'
                    }}
                >
                    {selectedCategory.toUpperCase()}
                    <span
                        style={{marginLeft: '0.5em'}}
                    >
                        <InputLabel 
                            htmlFor="sort-method"
                            style={{marginRight: '0.5em'}}
                        >
                            Sort by
                        </InputLabel>
                        <Select 
                            value={sortMethod}
                            onChange={this.handleChange.bind(this)}
                            inputProps={{
                                name: 'sortMethod',
                                id: 'sort-method',
                            }}
                        >
                            {sortMethodMenuItems.map(sMethod => (
                                <MenuItem key={sMethod.key} value={sMethod.key}>
                                    {sMethod.value}
                                </MenuItem>
                            ))}
                        </Select>
                        <Button 
                            variant="outlined"
                            style={{marginLeft: '1em'}} 
                            color="secondary"
                        >
                            <Link to="/post/new/add" className="app-link">
                                Create New Post
                            </Link>
                        </Button>
                    </span>
                </Typography>
            </div>
        );

    }
}

export default ListPostsPCHeader;