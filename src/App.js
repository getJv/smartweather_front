import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import WeatherBox from './components/MapComponent';



class App extends Component {


    render() {
        return (
            <div id="layout">

                <a href="#menu" id="menuLink" className="menu-link">

                    <span></span>
                </a>

                <div id="menu">
                    <div className="pure-menu">
                        <a className="pure-menu-heading" href="http://teste">Menu</a>

                        <ul className="pure-menu-list">
                            <li className="pure-menu-item menu-item-divided pure-menu-selected">
                                <a href="http://teste" className="pure-menu-link">Home</a>
                            </li>

                            <li className="pure-menu-item"><a href="http://teste" className="pure-menu-link">About</a></li>
                        </ul>
                    </div>
                </div>

                <div id="main">
                    <div className="header">
                        <h1>Smart Wheather</h1>
                        <h2>The better option to follow the wheather in your region</h2>
                    </div>

                    <div className="content">
                        <br />
                        <WeatherBox />

                    </div>
                </div>
            </div>

        );
    }
}

export default App;
