import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

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
          <NavbarBrand className='nav__button' onClick={()=>{navigate('/')}}>ShoppingApp</NavbarBrand>
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
      </div>
    );
  }
}