import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutBox from './components/AboutComponent';
import WeatherBox from './components/MapComponent';

ReactDOM.render(
    <Router>
        <App>
            <Route exact  path="/" component={WeatherBox } ></Route>
            <Route path="/about" component={AboutBox} ></Route>
        </App>
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
