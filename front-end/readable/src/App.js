import React, { Component } from 'react';

import './App.css';
import CustomizedNavbar from './components/CustomizedNavbar';
import PCreate from './pages/PCreate';

class App extends Component {

    render() {
        return (
            <div className="App">
                <CustomizedNavbar />
                <div style={{marginTop: '2em'}}>
                    <PCreate />
                </div>
            </div>
        );
    }
}

export default App;
