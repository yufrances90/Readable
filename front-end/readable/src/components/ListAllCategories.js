import React, { Component } from 'react';

import {
    Grid,
    Typography,
    Divider
} from '@material-ui/core';

class ListAllCategories extends Component {
    render() {

        const { categories } = this.props;

        return (
            <div>
                <div className="card-panel grey lighten-2 app-jumbotron" >
                    <div className="container">
                        <Grid container spacing={8}>
                            <Grid item xs={12} style={{textAlign: "center"}} >
                                <Typography variant="h4">
                                    { "Categories".toUpperCase() }
                                </Typography>
                                <Divider />
                            </Grid>
                            { categories.map(category => (
                                 <Grid 
                                    item 
                                    xs={4} 
                                    style={{textAlign: "center"}} 
                                    key={category.name}
                                >
                                    <Typography variant="h6">
                                        {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListAllCategories;