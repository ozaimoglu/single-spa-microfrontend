import React from 'react';
import { Container, Col, Row, Button, Form } from 'react-bootstrap';
import Lottie from 'react-lottie';
import animationData from './assets/movie.json';

class MoviesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          };
        return (
            <Container className="mainContainer">
                <Lottie options={defaultOptions}
                                height="50%"
                                width="50%"/>
            </Container>
        );
    }
}

export default MoviesComponent;