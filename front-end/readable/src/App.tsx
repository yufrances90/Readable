import * as React from 'react';
import './App.css';

import { add, getAll } from './api/categories';
import ICategory from './interfaces/ICategory';

class App extends React.Component {

    public componentDidMount() {

        const category: ICategory = {
            name: 'hello',
            path: 'hello'
        }

        add(category).then(() => {
            getAll();
        });

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
