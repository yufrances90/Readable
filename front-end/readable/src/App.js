import React, { Component } from 'react';

import './App.css';
import CustomizedNavbar from './components/CustomizedNavbar';
import PHome from './pages/PHome';

class App extends Component {

    render() {
        return (
            <div className="App">
                <CustomizedNavbar />
                <div style={{marginTop: '2em'}}>
                    <PHome />
                </div>
            </div>
        );
    }
}

export default App;
