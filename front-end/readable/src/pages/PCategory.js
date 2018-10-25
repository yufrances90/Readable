import React, { Component } from 'react';

import { connect } from 'react-redux';

import { 
    Grid,
    Typography,
    Divider,
    Button
} from '@material-ui/core';

import { add } from '../api/categories';
import { getByCategory } from '../api/posts';
import { getInitialData } from '../api/shared';
import { 
    getPostsByCategory,
    getAllPosts
} from '../actions/posts';
import { 
    getAllCategories,
    addNewCategory 
} from '../actions/categories';
import {
    createNewCategory
} from '../utils/helpers';

import ListCategories from '../components/ListCategories';
import NewCategoryModal from '../components/NewCategoryModal';
import ListPostsPC from '../components/ListPostsPC';

class PCategory extends Component {

    state = {
        selectedCategory: '',
        sortMethod: null
    }

    componentDidMount() {
        
        const { categories, handleGetAllData } = this.props;

        if (categories.list.length === 0) {
            handleGetAllData();
        } 
    }

    handleClick(event, category) {

        event.preventDefault();

        this.props.handleGetPostsByCategory(category);

        this.setState({
            selectedCategory: category
        });
    }

    handleClickCreateBtn(event, categoryName) {

        event.preventDefault();

        const newCategory = createNewCategory(categoryName, categoryName);

        this.props.handleAddNewCategory(newCategory);
    }

    handleSelectSortMethod(sortMethod) {
        this.setState({
            sortMethod: sortMethod
        });
    }

    render() {

        const { categories, posts } = this.props;

        const { selectedCategory } = this.state;

        return (
            <div>
                <Grid container>
                    <Grid item xs={2}>
                        <Divider />
                        <ListCategories 
                            categories={categories.list}
                            handleClick={this.handleClick.bind(this)}
                            selectedCategory={selectedCategory}
                        />
                        <NewCategoryModal 
                            categories={categories.list} 
                            handleClickCreateBtn={this.handleClickCreateBtn.bind(this)}
                        />
                        <Divider />
                        {this.state.sortMethod}
                    </Grid>
                    <Grid item xs={8} style={{borderLeft: '1px solid lightgray'}}>
                        { 
                            selectedCategory !== '' && 
                            <ListPostsPC 
                                selectedCategory={selectedCategory}
                                handleSelectSortMethod={this.handleSelectSortMethod.bind(this)}
                            /> 
                        }
                    </Grid>
                    <Grid item xs={2}>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps({ posts, categories }) {
    return {
        posts,
        categories
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleGetPostsByCategory: (category) => {
            getByCategory(category)
            .then(posts => {
                dispatch(getPostsByCategory(category, posts));
            })
        },
        handleGetAllData: () => {
            getInitialData()
            .then(({categories, posts}) => {
                dispatch(getAllCategories(categories));
                dispatch(getAllPosts(posts));
            })
        },
        handleAddNewCategory: (newCategory) => {
            add(newCategory)
            .then((data) => {
                dispatch(addNewCategory(data.category));
            })
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PCategory);