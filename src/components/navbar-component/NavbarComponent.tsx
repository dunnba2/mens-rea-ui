import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Form, Input } from 'reactstrap';


export const NavbarComponent = (props: any) => {
    const [isOpen, setisOpen] = useState(false);

    const toggle = () => setisOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Mens Rea</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Sign-In
                            </DropdownToggle>
                            <DropdownMenu center>
                                <DropdownItem>
                                    <Link to='/login'>Login</Link>
                                </DropdownItem>
                                <DropdownItem>
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
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <Link to="/imdbsearch">IMDb Movies</Link>
                                    </DropdownItem>
                                    <DropdownItem>

                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <Form>
                                <Input type="text" id="search" placeholder="Search Titles"></Input>
                            </Form>
                    </Nav>
                        <NavbarText>Mens Rea Mystery</NavbarText>
                </Collapse>
            </Navbar>
        </div>
            )
}