import React from 'react';
import { Container, Col, Row, Button, Form } from 'react-bootstrap';
import '../../App.css';

const username = "admin";
const password = "admin"

class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            password : ""
        }

        this.onNameChanged = this.onNameChanged.bind(this);
        this.onPasswordChanged = this.onPasswordChanged.bind(this);
        this.gotoHomePage = this.gotoHomePage.bind(this);
    }

    onNameChanged(e) {
        this.setState({ name: e.target.value });
    }

    onPasswordChanged(e) {
        this.setState({ password: e.target.value });
    }


    gotoHomePage (){
        if(this.state.name === username && this.state.password === password) {
            location.pathname = "/home";
            sessionStorage.setItem('layout', "home");
        }
    }

    render() {
        return (
            <Container>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control onChange={this.onNameChanged} type="email" placeholder="Enter Username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={this.onPasswordChanged} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" onClick={this.gotoHomePage}>
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default HeaderComponent;