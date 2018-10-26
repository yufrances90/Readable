import React, { Component } from 'react';

import {
    Typography,
    Divider,
    IconButton,
    Tooltip,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@material-ui/core';
import { Sort } from '@material-ui/icons';

import { sortMethodMenuItems } from '../constants/shared';

class ListPostsPC extends Component {

    state = {
        sortMethod: ''
    }

    handleChange(event) {

        this.setState({
            [event.target.name]: event.target.value
        });

        this.props.handleSelectSortMethod(event.target.value);
    }

    handleClick(event) {

        console.log(event.target);

        this.props.handleSelectSortMethod("timestamp");
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
                    <span>
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
                    </span>
                </Typography>
                <Divider />
            </div>
        );
    }
}

export default ListPostsPC;