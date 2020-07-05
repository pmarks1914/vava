import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./header.css";
// const logowhite = require('../../assets/img/brand/');





class FrontHeader extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div style={{ marginBottom: "5px" }}>
        <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-red fixed-top" >
          {/* <img src={logowhite} width="100px" /> */}
          {/* <a className="navbar-brand" href="#">{logowhite}</a> */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fa fa-envelope-o">
            <span className="badge badge-primary">11</span>
          </i>
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
            </ul>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
        </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
        </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
        </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <Link className="btn btn-danger" to='/login'>Login </Link>

            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default FrontHeader;
