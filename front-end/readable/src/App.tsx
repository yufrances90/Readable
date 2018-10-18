import * as React from 'react';
import './App.css';

import {add, getById, deleteById, getByPostId } from './api/comments';
import IComment from './interfaces/IComment';

class App extends React.Component {

    public componentDidMount() {

        const comment: IComment = {
            id: "1",
            parentId: "8xf0y6ziyjabvozdd253nd",
            timestamp: 1,
            body: "hello world",
            author: "hello",
            voteScore: 1,
            deleted: false,
            parentDeleted: false
        }

        add(comment)
        .then(() => getById("1"))
        .then(data => console.log(data))

        deleteById("8tu4bsun805n8un48ve89")
        .then(() => getByPostId("8xf0y6ziyjabvozdd253nd"))
        .then(data => console.log(data))


    }

    public render() {
        return (
            <div className="App">
                Hello World
            </div>
        );
    }
}

export default App;
