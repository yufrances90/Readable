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
import PPost from './pages/PPost';
import PNotFound from './pages/PNotFound';

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <CustomizedNavbar />
                    <div style={{marginTop: '2em'}}>
                        <Route exact path="/" component={PHome} />
                        <Route exact path="/:category/:post_id" component={PPost} />
                        <Route exact path="/:category" component={PCategory} />
                        <Route exact path="/post/new/add" component={PCreate} />
                        <Route exact path="/post/not/found" component={PNotFound} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
