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

    handleSubmitForm(
        title, 
        body, 
        author, 
        category) {

        const newPost = createNewPost(
                title,
                body,
                author,
                category
            );

        this.props.handleAddNewPost(newPost);
    } 

    render() {

        const { categories } = this.props;

        return (
            <div>
                <Grid container>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                        <NewPostForm 
                            categories={categories.list} 
                            handleSubmitForm={this.handleSubmitForm.bind(this)}
                        />
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