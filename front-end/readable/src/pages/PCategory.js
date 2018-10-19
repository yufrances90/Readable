import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Grid } from '@material-ui/core';

import { getByCategory } from '../api/posts';
import { getPostsByCategory } from '../actions/posts';

class PCategory extends Component {

    componentDidMount() {
        this.props.handleGetPostsByCategory(this.props.category);
    }


    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={2} style={{borderRight: '1px solid lightgray'}}>
                        Hello
                    </Grid>
                    <Grid item xs={8}>
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps({ posts }) {
    return {
        posts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleGetPostsByCategory: (category) => {
            getByCategory(category)
            .then(posts => {
                dispatch(getPostsByCategory(category, posts));
            })
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PCategory);