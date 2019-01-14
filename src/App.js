import React, { Component } from 'react';
import $ from 'jquery';
import './css/pure-min.css';
import './css/side-menu.css';


class App extends Component {
  
  constructor(){
    super();
    this.state = {};
  }

  componentWillMount(){
   
  }
  componentDidMount(){
    $.ajax({
      url: "http://localhost:8080/wheather/brasilia",
      dataType:'json',
        success: resposta => this.setState({wheatherData:resposta}) 
    });
  }

  
  
  render() {
    return (
<div id="layout">
    
    <a href="#menu" id="menuLink" className="menu-link">
       
        <span></span>
    </a>

    <div id="menu">
        <div className="pure-menu">
            <a className="pure-menu-heading" href="#">Menu</a>

            <ul className="pure-menu-list">
                <li className="pure-menu-item menu-item-divided pure-menu-selected">
                    <a href="#" className="pure-menu-link">Home</a>
                </li>

                <li className="pure-menu-item"><a href="#" className="pure-menu-link">About</a></li>
            </ul>
        </div>
    </div>

    <div id="main">
        <div className="header">
            <h1>Smart Wheather</h1>
            <h2>The better option to follow the wheather in your region</h2>
        </div>

        <div className="content">
              <br/>
              <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned">
                  <div className="pure-control-group">
                    <input id="location" placeholder="What is your location?" type="text" name="nome"   />  
                  </div>
                </form>        
{console.log(this.state)}
               
              </div>  
        </div>
    </div>
</div>

    );
  }
}

export default App;
