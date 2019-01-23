import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import { Link } from 'react-router-dom';





class App extends Component {


    render() {
        return (
            <div id="layout">

                <a href="#menu" id="menuLink" className="menu-link">

                    <span></span>
                </a>

                <div id="menu">
                    <div className="pure-menu">
                        <Link className="pure-menu-heading" to="/">Menu</Link>

                        <ul className="pure-menu-list">
                            <li className="pure-menu-item menu-item-divided pure-menu-selected">
                                <Link to="/" className="pure-menu-link">Home</Link>
                            </li>

                            <li className="pure-menu-item"><Link to="/about" className="pure-menu-link">About</Link></li>
                        </ul>
                    </div>
                </div>

                <div id="main">
                    <div className="header">
                        <h1>Smart Wheather</h1>
                        <h2>The better way to follow the wheather in your region</h2>
                    </div>

                    <div className="content">
                        <br />
                        {this.props.children}
                        

                    </div>
                </div>
            </div>

        );
    }
}

export default App;
