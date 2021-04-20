import React, {Component} from 'react';
import logo from '../resources/headerLogo.png';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/header.css';

class Header extends Component{
  constructor(props){
    super(props);
    this.logoutifLoggedin = this.logoutifLoggedin.bind(this);

  }


  logoutifLoggedin(){

    if(this.props.user != null){

        localStorage.removeItem('user')
        this.props.onLogout()
        window.location.href = "http://localhost:3000/Login";
      }
    window.location.href = "http://localhost:3000/Login";
  }

  render() {
    console.log(this.props.user)
    if(this.props.user == null){
      return(
        <Navbar className="navbar ">

            <div className="header-left">
              <a href="/Home" className="header-item">
                <p>Home</p>
              </a>
              <a className="header-item" href="/myReservations">
                    <p>About Us</p>
              </a>

            </div>
            <div className="header-center">
              <img className="header-logo" src={logo} />
            </div>
            <div className="header-right">
              <a className="header-item" href="/Signup">
                <p>Sign Up</p>
              </a>
              <a class="btn header-button" onClick={this.logoutifLoggedin} >
                {this.props.user == null? "Log In" : "Log Out"}
              </a>
            </div>

        </Navbar>
      );
    }else if (this.props.user.type == "USER") {
      return(
        <Navbar className="navbar ">

            <div className="header-left">
              <a href="/Home" className="header-item">
                <p>Home</p>
              </a>
              <a className="header-item" href="/myReservations">
                    <p>My Reservations</p>
              </a>

            </div>
            <div className="header-center">
              <img className="header-logo" src={logo} />
            </div>
            <div className="header-right">
              <a className="header-item" href="/myProfile">
                <p>My Profile</p>
              </a>
              <a class="btn header-button" onClick={this.logoutifLoggedin} >
                {this.props.user == null? "Log In" : "Log Out"}
              </a>
            </div>

        </Navbar>
      );
    }else if(this.props.user.type == "PRODUCER"){
      return(
        <Navbar className="navbar ">

            <div className="header-left">
              <a href="/Home" className="header-item">
                <p>Home</p>
              </a>
              <a className="header-item" href="/MyProduct">
                    <p>My Produce</p>
              </a>

            </div>
            <div className="header-center">
              <img className="header-logo" src={logo} />
            </div>
            <div className="header-right">
              <a className="header-item" href="/PostProduct">
                <p>Add Product</p>
              </a>
              <a className="header-item" href="/myProfile">
                <p>My Profile</p>
              </a>
              <a class="btn header-button" onClick={this.logoutifLoggedin}>
                {this.props.user == null? "Log In" : "Log Out"}
              </a>
            </div>

        </Navbar>

      );
    }else {
      return(
        <Navbar className="navbar ">
        <a class="btn header-button" onClick={this.logoutifLoggedin}>
          {this.props.user == null? "Log In" : "Log Out"}
        </a>
        </Navbar>
      );
    }

  }

}

export default Header;
