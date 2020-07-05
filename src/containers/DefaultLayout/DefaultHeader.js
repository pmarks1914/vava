import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo_main.svg'
import sygnet from '../../assets/img/brand/logo_main.svg'
import { connect } from 'react-redux';





const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  componentDidMount() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.setState({
      currentUser: currentUser
    })
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        {/* Font page logo display */}
        <AppNavbarBrand
          full={{ src: logo, paddingBottom: '15px', width: '100px', height: 65, alt: 'logo' }}
          minimized={{ src: sygnet, paddingBottom: '15px', width: '10px', height: 5, alt: 'logo' }}
          style={{ paddingLeft: '40px', paddingRight: '130px', paddingBottom: '4px' }}
        />

        <Nav className="ml-auto" navbar >
          <a style={{ color: '#ffffff', float: 'right', fontSize: '15px', textTransform: 'uppercase',marginRight: '10px'}}> Account </a>
          <a>|</a>  
          <a className="icon-user" style={{ marginLeft: '10px', color: '#ffffff', float: 'right', fontSize: '15px', textTransform: 'uppercase' }} onClick={e => this.props.onLogout(e)} > Logout </a>
        
        </Nav>

      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;


export default DefaultHeader;