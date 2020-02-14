import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Form, Input } from 'reactstrap';


export const NavbarComponent = (props: any) => {
    const [isOpen, setisOpen] = useState(false);

    const toggle = () => setisOpen(!isOpen);

    return (
        <div>
            <Navbar light expand="md" className="navstyler">
                <NavbarBrand href="/">Mens Rea</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Sign-In
                            </DropdownToggle>
                            <DropdownMenu left className="navdropdown">
                                <DropdownItem className="navdropitem">
                                    <Link to='/login'>Login</Link>
                                </DropdownItem>
                                <DropdownItem className="navdropitem">
                                    <Link to='/register'>Register</Link>
                                </DropdownItem>
                            </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink></NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Links
                                </DropdownToggle>
                                <DropdownMenu left className="navdropdown">
                                    <DropdownItem className="navdropitem">
                                        <Link to="/imdbsearch">IMDb Movies</Link>
                                    </DropdownItem>
                                    <DropdownItem className="navdropitem">
                                        <Link to="/submitnewmedia">Create a New Submission</Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <Form>
                                <Input type="text" id="search" placeholder="Search Titles"></Input>
                            </Form>
                    </Nav>
                        <NavbarText color="ae9e89">Mens Rea Mystery</NavbarText>
                </Collapse>
            </Navbar>
        </div>
            )
}