import * as React from 'react';
import './App.css';

import { deleteById } from './api/posts';

class App extends React.Component {

    public componentDidMount() {

        deleteById("8xf0y6ziyjabvozdd253nd").then(data => console.log(data))

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
