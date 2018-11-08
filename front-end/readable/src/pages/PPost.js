import React, { Component } from 'react';

import { connect } from 'react-redux';

class PPost extends Component {

    render() {

        const { location } = this.props;

        const { postId } = location.state;

        console.log(postId);

        return (
            <div>
                Hello from PPost
            </div>
        );
    }
}

export default PPost;