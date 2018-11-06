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
        sortMethod: null,
        sortedPosts: {
            list: []
        }
    }

    componentDidMount() {
        
        const { 
            categories, 
            handleGetAllData,
            location
        } = this.props;

        if (categories.list.length === 0) {
            handleGetAllData();
        } 

        if (location && location.state) {
            this.setState({
                selectedCategory: location.state.selectedCategory
            })
        }
    }

    setSortedPosts() {
        this.setState({
            sortedPosts: this.props.posts
        })
    }

    handleClick(event, category) {

        event.preventDefault();

        this.props.handleGetPostsByCategory(category, this.setSortedPosts.bind(this));

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

    getSortedPosts() {

        const {
            posts,
            sortedPostsByTimestamp,
            sortedPostsByVoteScore
        } = this.props;

        const { sortMethod } = this.state;

        switch(sortMethod) {
            case "voteScore":
                return sortedPostsByVoteScore;
            case "timestamp": 
                return sortedPostsByTimestamp;
            default:
                return posts;
        }
    }

    render() {

        const { categories } = this.props;

        const { 
            selectedCategory,
            sortedPosts
        } = this.state;

        return (
            <div>
                <Grid container>
                    <Grid item xs={1}>
                    </Grid>
                    <Grid 
                        item 
                        xs={2}
                        style={{
                            border: '1px solid lightgray'
                        }}
                    >
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
                    </Grid>
                    <Grid item xs={8}>
                        { 
                            selectedCategory !== '' && 
                            <ListPostsPC 
                                selectedCategory={selectedCategory}
                                handleSelectSortMethod={this.handleSelectSortMethod.bind(this)}
                                posts={this.getSortedPosts().list.filter(post => post.category === selectedCategory)}
                            /> 
                        }
                    </Grid>
                    <Grid item xs={1}>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps({ posts, categories }) {

    const postList = Array.from(posts.list);

    return {
        posts,
        categories,
        sortedPostsByVoteScore: {
            list: postList.map(post => {
                return {
                    id: post.id,
                    category: post.category,
                    title: post.title,
                    author: post.author,
                    commentCount: post.commentCount,
                    deleted: post.deleted,
                    voteScore: post.voteScore,
                    timestamp: post.timestamp
                }
            }).sort((a, b) => b.voteScore - a.voteScore)
        },
        sortedPostsByTimestamp: {
            list: postList.map(post => {
                return {
                    id: post.id,
                    category: post.category,
                    title: post.title,
                    author: post.author,
                    commentCount: post.commentCount,
                    deleted: post.deleted,
                    voteScore: post.voteScore,
                    timestamp: post.timestamp
                }
            }).sort((a, b) => b.timestamp - a.timestamp)
        }
    };
}

function mapDispatchToProps(dispatch) {
    return {
        handleGetPostsByCategory: (category, setSortedPosts) => {
            getByCategory(category)
            .then(posts => {
                dispatch(getPostsByCategory(category, posts));
            }).then(() => setSortedPosts());
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