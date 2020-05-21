import React, {useRef, useState} from 'react'
import {Button, ButtonGroup, Col, Row} from "reactstrap";

export default function Actions({beePlugin}) {

    const [inPreview, setInPreview] = useState(false);

    function loadTemplate(template) {
        beePlugin.load(template);
    }

    function showPreview() {

        beePlugin.preview();
        setInPreview(!inPreview)
    }

    function saveHtml() {
        beePlugin.save();
    }

    const inputFile = useRef(null);

    function saveJson() {
        beePlugin.saveAsTemplate();
    }

    return (
        <Row>
            <Col md={12}>
                <h5>Actions:</h5>
            </Col>
            <Col md={12}>
                <Row className='justify-content-between'>
                    <Col md={'auto'}>
                        <input
                            type="file"
                            ref={inputFile}
                            style={{display: 'none'}}
                            onChange={async e => {
                                const reader = new FileReader();
                                reader.onload = function () {
                                    loadTemplate(JSON.parse(reader.result));
                                };
                                if(e.target.files){
                                    reader.readAsText(e.target.files[0]);
                                }
                            }}
                            accept=".json,application/json"
                        />
                        <Button onClick={() => {
                            inputFile.current.click();
                        }} size={'sm'} color='primary'>Load template</Button>
                    </Col>
                    <Col md={'auto'}>
                        <Button size={'sm'} color='info'
                                onClick={showPreview}>{inPreview ? 'Hide' : 'Show'} Preview</Button>
                    </Col>
                    <Col md={'auto'}>
                        <ButtonGroup size={'sm'}>
                            <Button color='success' onClick={saveHtml}>Save HTML</Button>
                            <Button color='success' onClick={saveJson}>Save JSON</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}