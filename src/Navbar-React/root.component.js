import React from 'react';
import { Container, Col, Row, Button, Form, Navbar, Nav } from 'react-bootstrap';
import "../../App.scss"

class NavbarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    gotoHomePage() {
        location.pathname = "/home";
    }

    gotoMoviesPage() {
        location.pathname = "/movies";
    }

    gotoTodoPage() {
        location.pathname = "/gameMenu";
    }


    render() {
        return (
            <Navbar className="navbar-container" expand="md">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={this.gotoHomePage}>Home</Nav.Link>
                        <Nav.Link onClick={this.gotoMoviesPage}>Movies</Nav.Link>
                        <Nav.Link onClick={this.gotoTodoPage}>Trivia Game</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarComponent;