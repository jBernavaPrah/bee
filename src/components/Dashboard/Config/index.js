import React, {useState} from 'react'
import TitlePage from "../../common/TitlePage";
import {Row, Col} from 'reactstrap'
import Navigation from './Navigation'
import BeePluginTab, {BEE_PLUGIN_CONFIG} from "./BeePluginTab";
import UserConfigTab from "./UserConfigTab";

export default function Config() {

    const [tab, setTab] = useState(BEE_PLUGIN_CONFIG);

    return (
        <div>
            <TitlePage title='Application Config'/>
            <Row className='mt-4'>

                <Col md={12}>

                    <Navigation tab={tab} setTab={setTab}/>

                </Col>

                <Col md={12} className='pt-3'>

                    {{
                        BEE_PLUGIN_CONFIG: <BeePluginTab/>,
                        USER_CONFIG_TAB: <UserConfigTab/>
                    }[tab]}


                </Col>
            </Row>
        </div>
    )
}