import React, { Component } from 'react';

import './App.css';
import CustomizedNavbar from './components/CustomizedNavbar';
import PCategory from './pages/PCategory';

class App extends Component {

    render() {
        return (
            <div className="App">
                <CustomizedNavbar />
                <div style={{marginTop: '2em'}}>
                    <PCategory />
                </div>
            </div>
        );
    }
}

export default App;
