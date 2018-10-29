import React, { Component } from 'react';

import {
    Grid
} from '@material-ui/core';

import { connect } from 'react-redux';

import { add } from '../api/posts';
import { getAll } from '../api/categories';
import { addNewPost } from '../actions/posts';
import { getAllCategories } from '../actions/categories';
import { createNewPost } from '../utils/helpers';

import NewPostForm from '../components/NewPostForm';

class PCreate extends Component {

    componentDidMount() {
        
        const { categories } = this.props;
       
        if (categories.list.length === 0) {
            this.props.handleGetAllCategories();
        }
    }

    render() {

        const { categories } = this.props;

        return (
            <div>
                <Grid container>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={8}>
                        {console.log(categories)}
                        <NewPostForm />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps({ categories }) {
    return {
        categories
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleGetAllCategories: () => {
            getAll()
            .then((data) => {
                dispatch(getAllCategories(data));
            });
        },
        handleAddNewPost: (newPost) => {
            add(newPost)
            .then((post) => {
                dispatch(addNewPost(post))
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PCreate);