import * as React from 'react';
import './App.css';

import { connect } from 'react-redux';

class App extends React.Component {

    public componentDidMount() {
        console.log(this.props);
    }

    public render() {
        return (
            <div className="App">
                Hello World
            </div>
        );
    }
}

export default connect()(App);
