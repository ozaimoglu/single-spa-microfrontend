import React from 'react';
import { Container, Col, Row, Button, Form } from 'react-bootstrap';
import "../../App.scss";
import Lottie from 'react-lottie';
import animationData from './assets/stay-home.json';

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
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
                                height={450}
                                width={450}/>
            </Container>
        );
    }
}

export default HomeComponent;