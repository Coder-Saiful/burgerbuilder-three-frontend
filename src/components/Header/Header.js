import React from 'react';
import './Header.css';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import Logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

const Header = (props) => {
    let links = null;
    if (props.token === null) {
        links = (
            <Nav className='me-md-5'>
                <NavItem>
                    <NavLink to='/login' exact className='NavLink'>Login</NavLink>
                </NavItem>
            </Nav>
        )
    } else {
        links = (
            <Nav className='me-md-5'>
                <NavItem>
                    <NavLink to='/' exact className='NavLink'>BurgerBuilder</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to='/orders' exact className='NavLink'>Orders</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to='/logout' exact className='NavLink'>Logout</NavLink>
                </NavItem>
            </Nav>
        )
    }
    return (
        <div className='Navigation'>
            <Navbar style={{ 
                backgroundColor: "#D70F64",
                height: "70px"
             }}>
                <NavbarBrand href='/' className='me-auto ms-md-5 Brand'>
                    <img src={Logo} alt="Logo" width="80px" />
                </NavbarBrand>
                {links}
            </Navbar>
        </div>
        
    );
};

export default connect(mapStateToProps)(Header);