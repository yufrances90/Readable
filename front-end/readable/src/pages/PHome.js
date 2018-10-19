import React, { Component } from 'react';

import { connect } from 'react-redux';

import { Grid } from '@material-ui/core';

import { getInitialData } from '../api/shared';
import { getAllCategories } from '../actions/categories';
import { getAllPosts } from '../actions/posts';
import ListAll from '../components/ListAll';

class PHome extends Component {

    componentDidMount() {
        this.props.handleReceiveData();
    }

    render() {

        const { categories, posts } = this.props;

        return (
            
            <Grid container>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={8}>
                    <ListAll
                        categories={categories}
                        posts={posts}
                    />
                </Grid>
            </Grid>
        );
    }
}

function mapStatetoProps({ categories, posts}) {
    return {
        categories,
        posts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleReceiveData: () => {
            getInitialData()
            .then(({ categories, posts}) => {
                dispatch(getAllCategories(categories))
                dispatch(getAllPosts(posts));
            })
        }
    };
}

export default connect(mapStatetoProps, mapDispatchToProps)(PHome);