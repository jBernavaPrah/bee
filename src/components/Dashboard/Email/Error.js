import React from "react";
import {Row, Col} from 'reactstrap'

export default function Error({message}) {
    return (
        <Row>
            <Col md={12} className='text-center'>
                <h3>{message}</h3>
            </Col>
        </Row>)
}