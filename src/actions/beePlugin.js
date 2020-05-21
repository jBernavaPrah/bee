export const SET_BEE_PLUGIN_AUTH_CREDENTIALS = 'SET_BEE_PLUGIN_AUTH_CREDENTIALS';
export const SET_TOKEN_REDEEMED = 'SET_TOKEN_REDEEMED';
export const SET_INITIALIZED = 'SET_INITIALIZED';

export function setBeePluginAuthCredentials(user_id, secret) {
    return {
        type: SET_BEE_PLUGIN_AUTH_CREDENTIALS,
        user_id, secret
    }
}

export function setTokenRedeemed(result) {
    return {
        type: SET_TOKEN_REDEEMED,
        result
    }
}

export function setInitialized() {
    return {
        type: SET_INITIALIZED,
    }
}
