import React from 'react';
import { Container, Col, Row, Button, Form } from 'react-bootstrap';

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
        location.pathname = "/todo";
    }


    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Button onClick={this.gotoHomePage}>
                            HOME
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={this.gotoMoviesPage}>
                            MOVIES
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={this.gotoTodoPage}>
                            TODO
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default NavbarComponent;