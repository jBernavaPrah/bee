import {Row, Button, Col, FormGroup, Input, Label} from "reactstrap";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setBeePluginAuthCredentials} from "../../../actions/beePlugin";

export const BEE_PLUGIN_CONFIG = 'BEE_PLUGIN_CONFIG';

export default function ({tab}) {

    const beePlugin = useSelector(state => state.beePlugin);
    const dispatch = useDispatch();

    function handleSaveBeePluginCredentials() {

        dispatch(setBeePluginAuthCredentials(user_id, secret));
        alert('Credential Saved');

    }

    const [user_id, setUserId] = useState(beePlugin.user_id);
    const [secret, setSecret] = useState(beePlugin.secret);
    return (
        <Row>
            <Col md={12}>
                <h4>Configure BeeFree Integration</h4>
                <Row form>
                    <Col md={6}>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="userId" className="mr-sm-2">User ID</Label>
                            <Input type="email" id="userId" value={user_id}
                                   onChange={e => setUserId(e.target.value)}/>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="secret" className="mr-sm-2">Secret</Label>
                            <Input type="text" id="secret" value={secret}
                                   onChange={e => setSecret(e.target.value)}/>
                        </FormGroup>
                    </Col>
                    <Button className='mt-2' disabled={!user_id || !secret}
                            onClick={handleSaveBeePluginCredentials}>Save</Button>
                </Row>
            </Col>

        </Row>)
}