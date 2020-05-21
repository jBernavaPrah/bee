import React from "react";
import {beePlugin} from "../../../utils";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Col, Row} from "reactstrap";
import Error from './Error'
import Actions from './Actions'
import BeeIntegration from './BeeIntegration'
import TitlePage from "../../common/TitlePage";

export default function () {

    const bp = useSelector(state => state.beePlugin);


    return (
        <Row>
            <Col md={12}>
                <TitlePage title='Create Email Template'/>
            </Col>

            {(() => {
                if (!bp.user_id || !bp.secret) {
                    return (<Error message={
                        <span>
                Please provide user_id and secret in <Link to={'/dashboard/config'}>config</Link>.
            </span>
                    }/>)
                }

                if (bp.token_redeemed === false) {
                    return (<Error
                        message={<p>
                            Please provide correct user_id and secret in <Link to={'/dashboard/config'}>config</Link>.
                        </p>}/>)
                }

                return (<Row>
                    <Col md={12} className='mt-3'>
                        <Actions beePlugin={beePlugin}/>
                    </Col>
                    <Col md={12} className='mt-5 vh-100'>
                        <BeeIntegration/>
                    </Col>
                </Row>)
            })()}

        </Row>
    )
}

