import React, {useEffect, useCallback} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {baseTemplate, beePlugin, beePluginConfig, saveFile} from "../../../utils";

import {setInitialized, setTokenRedeemed} from "../../../actions/beePlugin";

beePluginConfig.onSave = (jsonFile, htmlFile) => {
    saveFile(htmlFile, 'template.html')
};
beePluginConfig.onSaveAsTemplate = (json) => {
    saveFile(json, 'template.json')
};
beePluginConfig.onLoad = (jsonFile) => {
    console.log('loading a new template...', jsonFile);
};
beePluginConfig.onError = (errorMessage) => {
    console.error('onError ', errorMessage)
};

export default function BeeIntegration() {
    const bp = useSelector(state => state.beePlugin);
    const dispatch = useDispatch();

    // keep function reference
    const getToken = useCallback(() => {

        // Get token only if not already redeemed!
        if (!bp.user_id || !bp.secret || bp.token_redeemed !== null) {
            return;
        }

        // Reset the token to permit user to change secret and user_id..
        beePlugin.token = null;
        beePlugin.getToken(bp.user_id, bp.secret).then(
            ({access_token}) => {
                // If the response is “access-token” then the token’s credentials are correct.
                // Otherwise, there is something wrong.
                access_token ? dispatch(setTokenRedeemed(true)) :
                    dispatch(setTokenRedeemed(false));
            }
        )
    }, [bp.user_id, bp.secret, bp.token_redeemed, dispatch]);

    useEffect(() => {
        getToken();
    }, [getToken]);

    const startBeePlugin = useCallback(() => {

        if (!bp.token_redeemed) {
            return;
        }

        beePlugin.start(beePluginConfig, baseTemplate).then(() => dispatch(setInitialized()))
    }, [bp.token_redeemed, dispatch]);

    useEffect(() => {

        startBeePlugin();

    }, [startBeePlugin]);

    return (
        <div id={beePluginConfig.container}/>
    )

}