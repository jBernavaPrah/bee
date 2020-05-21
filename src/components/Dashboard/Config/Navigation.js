import {Nav, NavItem, NavLink} from "reactstrap";
import React from "react";
import {BEE_PLUGIN_CONFIG} from "./BeePluginTab";
import {USER_CONFIG_TAB} from "./UserConfigTab";


export default function ({tab, setTab}) {


    return (
        <Nav tabs>
            <NavItem>
                <NavLink active={tab === BEE_PLUGIN_CONFIG} onClick={() => setTab(BEE_PLUGIN_CONFIG)}>Bee
                    Plugin</NavLink>
            </NavItem>
            <NavItem>
                <NavLink active={tab === USER_CONFIG_TAB} onClick={() => setTab(USER_CONFIG_TAB)}>User Config</NavLink>
            </NavItem>
        </Nav>
    )
}