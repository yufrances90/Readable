import React, { Component } from 'react';

import './App.css';
import CustomizedNavbar from './components/CustomizedNavbar';
import PCategory from './pages/PCategory';

class App extends Component {

    render() {
        return (
            <div className="App">
                <CustomizedNavbar />
                <PCategory category={"redux"}/>
            </div>
        );
    }
}

export default App;
