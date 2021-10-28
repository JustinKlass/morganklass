import React from 'react'
import './Landing.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import LandingImage from '../../assets/images/Landing2.jpg'
// import LandingImage from '../../assets/images/test.jpg'

const Landing = () => {
    console.log(Math.random())
    return(
        // style={{background: 'pink', maxHeight: '4rem'}}
    <Container fluid style={{}}>
    <Row>
        <Col className='card'style={{padding: 0, margin: 0, position: 'relative'}}>
            <Image className='cardImage' src={LandingImage} fluid />
            <div className='textDiv'>
                <p className='cardText'>
                    Do you feel stuck, tired, unmotivated? Are you overwhelmed by daily life stressors? 
                    Are you ready to make a change? <br /><br />
                    If your answer is yes, then I am here to support you in this next step.
                </p>
                <Button variant='success' type='button' className='cardButton'>Learn More</Button>
            </div>
        </Col>
        {/* <Col style={{maxHeight: '25%'}}><img src={LandingImage} alt='Pink Clouds'/></Col> */}
    </Row>
    </Container>
        // </div>
    )
}

export default Landing