import React from 'react'
import {Link} from "react-router-dom";
import {Container, Row, Col} from 'reactstrap';

export default function Home() {
    return (
        <Container>
            <Row className=" align-items-center justify-content-md-center min-vh-100">
                <Col md='auto'>
                    <h1>Hello! This is SPA Application!</h1>

                    <Row className='row justify-content-md-center'>

                        <Col md='auto'>
                            <Link className='btn btn-info btn-lg' to={`/dashboard`}>Open Your Dashboard</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}