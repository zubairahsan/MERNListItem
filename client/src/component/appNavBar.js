import React, { Component } from 'react';
import {
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';


class AppNavBar extends Component {
    state = {
        isOpen: false,
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
    render() {
        return (
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/" >
                        ShoppingList
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://web.facebook.com/?stype=lo&jlou=AfcJ64PtSIiL5M7qKOGC_teF74MKeS584J6HrJWA7E-JcEHtYVUGJovttierDjZNx8lzsEovVYVA18DbUci5G7OtH9U4ARQPwmEth_d2BBXE3A&smuh=55690&lh=Ac_wInNcORaJhOpP">
                                    Facebook
                                 </NavLink>

                            </NavItem>
                            <NavItem>
                                <NavLink href="/">
                                    Google
                                 </NavLink>

                            </NavItem>
                            <NavLink href="/">
                                Twitter
                                 </NavLink>
                        </Nav>
                    </Collapse>
                </Container>

            </Navbar>
        )
    }
}
export default AppNavBar;
