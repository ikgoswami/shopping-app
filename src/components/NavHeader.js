import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Sear
} from 'reactstrap';


import { MDBCol, MDBIcon } from "mdbreact";
export default class NavHeader extends React.Component {
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
    const { navigate } = this.props;
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand className='nav__button' onClick={()=>{navigate('/')}}>
          <img src='https://www.linkpicture.com/q/cmLargeLogo.png' width={180} height={60} alt='logo'></img>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink className='nav__button' onClick={()=>{navigate('/')}}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav__button' onClick={()=>{navigate('/checkout')}}>Cart</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav__button' onClick={()=>{navigate('/login')}}>Login</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <MDBCol md="12">
            <div className="input-group md-form form-sm form-1 pl-0">
              <div className="input-group-prepend">
                <span className="input-group-text purple lighten-3" id="basic-text1">
                  <MDBIcon className="text-white" icon="search" />
                </span>
              </div>
              <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" />
            </div>
          </MDBCol>
      </div>
    );
  }
}