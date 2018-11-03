import React, { Component } from 'react';

import { 
    BrowserRouter as Router, 
    Route 
} from 'react-router-dom';

import './App.css';
import CustomizedNavbar from './components/CustomizedNavbar';
import PHome from './pages/PHome';
import PCategory from './pages/PCategory';
import PCreate from './pages/PCreate';

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <CustomizedNavbar />
                    <div style={{marginTop: '2em'}}>
                        <Route exact path="/" component={PHome} />
                        <Route path="/:category" component={PCategory} />
                        <Route path="/add" component={PCreate} />
                        {/* TODO:  */}
                        {/* <Route path="/:category/:post_id" component={PPost} /> */}
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
