import React, {Component} from 'react'
import { Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import "./header.css";
import {connect} from 'react-redux';

class Header extends React.Component {
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
 componentDidMount(){
    this.props.getVendors()
  }
  
 render() {
   return (
     <div style={{marginBottom: "5px"}}>
       <Navbar color="light" light expand="md">
         <NavbarBrand href="/">Vida E Caffe</NavbarBrand>
         <NavbarToggler onClick={this.toggle} />
         <Collapse isOpen={this.state.isOpen} navbar>
           <Nav className="ml-auto" navbar>
             <NavItem>
               <NavLink href="#"></NavLink>
             </NavItem>
             {/* <UncontrolledDropdown nav inNavbar>
               <DropdownToggle nav caret>
                 Options
               </DropdownToggle> 
               <DropdownMenu right>
                 <DropdownItem>
                   Edit Menu
                 </DropdownItem>
                 <DropdownItem divider />
                 <DropdownItem>
                   Add Menu Item.
                 </DropdownItem>
                 <DropdownItem divider />
                 <DropdownItem>
                   DoNothing#
                 </DropdownItem>
               </DropdownMenu>
             </UncontrolledDropdown> */}
           </Nav>
         </Collapse>
       </Navbar>
     </div>
   );
  }
 }
 const mapStateToProps = (state) => {
  return {
    // cart : state.cart,
    vendor : state.vendor.vendors,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
