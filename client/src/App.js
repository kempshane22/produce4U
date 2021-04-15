import React, {Component} from 'react';
import logo from './resources/noBngLogo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ProductPage from './components/ProductPage.js';
import ReservePage from './components/ReservePage.js';
import ConfirmationPage from './components/ConfirmationPage.js';
import MyReservationsPage from './components/MyReservationsPage.js'
import PostProductPage from './components/PostProductPage';
import myproductsPage from './components/myproductsPage';
import ProducerProfilePage from './components/ProducerProfilePage.js';


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
        <Router>
          <div style={{minHeight:"90vh", paddingBottom:"180px", paddingTop:"50px"}}>


            <Switch>
              <Route path="/Login">
                <LoginPage />
              </Route>
              <Route path="/PostProduct">
                            <PostProductPage />
              </Route>
              <Route path="/MyProduct">
                            <myproductsPage />
              </Route>

              <Route path="/reserve">
                <ReservePage />
              </Route>

              <Route path="/Product">
                  <ProductPage />
              </Route>

              <Route path="/Confirmation">
                  <ConfirmationPage />
              </Route>

              <Route path="/myReservations">
                  <MyReservationsPage />
              </Route>

              <Route path="/ProducerProfilePage">
                <ProducerProfilePage />
              </Route>

              <Route path="/">
              <div>

                <ul> {this.getTestValues()} </ul>

                <form onSubmit = {this.handleSubmit}>
                    <label for="fname">Test Database: </label>
                    <input type="text" id="fname" name="fname"onChange={this.handleValueChange} />
                    <input type="submit" value="Submit" />
                  </form>

                  <ul>
                    <li><a href="/Login">Login</a></li>
                    <li><a href="/PostProduct">Post Product</a></li>
                    <li><a href="/MyProduct">My Products</a></li>
                    <li><a href="/reserve">Reserve a Product</a></li>
                    <li><a href="/Product">View a Product</a></li>
                    <li><a href="/Confirmation">Confirmation Page</a></li>
                    <li><a href="/myReservations">my Reservations</a></li>
                    <li><a href="/ProducerProfilePage">My Profile</a></li>
                  </ul>
              </div>
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
