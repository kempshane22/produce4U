import React, {Component} from 'react';
import logo from './resources/noBngLogo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import PostProductPage from './components/PostProductPage';
import Header from './components/Header.js'
import Footer from './components/Footer.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




class App extends Component{
  constructor(props){
    super(props);
    this.state = {apiResponse: ["test failed no API"], value: "" };
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.callAPI();
  }

  callAPI(){
    fetch("http://localhost:9000/test")
      .then(res => res.text())
      .then(res => this.setState({apiResponse: JSON.parse(res)}))
      .catch(err => err);
  }

  handleSubmit(event){
    fetch("http://localhost:9000/test", { method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)
      }).then(function(response) {
        console.log(response)
        return response.json();
      });

  }


  getTestValues(){
    return this.state.apiResponse.map(item => {return <p> {item.value} </p>;});
  }

  handleValueChange(event){
    this.setState({value: event.target.value});
  }
  render() {
    return(
      <div className="App">
        <Header/>
        <img src={logo} />
        <Router>
          <div>


            <Switch>
              <Route path="/Login">
                <LoginPage />
              </Route>
              <Route path="/PostProduct">
                            <PostProductPage />
              </Route>
              <Route path="/">

              <ul> {this.getTestValues()} </ul>

              <form onSubmit = {this.handleSubmit}>
                  <label for="fname">Test Database: </label>
                  <input type="text" id="fname" name="fname"onChange={this.handleValueChange} />
                  <input type="submit" value="Submit" />
              </form>

              </Route>

            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}


export default App;
