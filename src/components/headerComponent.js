import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark sticky="top" expand="md" className="nav-bar">  
                    <div className="container">  
                        <NavbarBrand href="/" className="NavbarBrand"><ion-icon name="leaf" /> P S</NavbarBrand> 
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home" onClick={this.toggleNav}>
                                    <ion-icon name="home" />  &nbsp;HOME
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/projects" onClick={this.toggleNav}>
                                    <ion-icon name="documents" /> &nbsp;PROJECTS
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact" onClick={this.toggleNav}>
                                    <ion-icon name="call" /> &nbsp;CONTACT
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse> 
                    </div>  
                </Navbar> 
            </React.Fragment>
        )
    }
}

export default Header;