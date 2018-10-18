import React, { Component } from 'react';

import { connect } from 'react-redux';

import './App.css';
import { getInitialData } from './api/shared';
import { getAllCategories } from './actions/categories';
import { getAllPosts } from './actions/posts';

class App extends Component {

    componentDidMount() {
        this.props.handleReceiveData();
    }

    render() {
        return (
            <div className="App">
                Hello World
            </div>
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

export default connect(mapStatetoProps, mapDispatchToProps)(App);
