import {SET_BEE_PLUGIN_AUTH_CREDENTIALS, SET_INITIALIZED, SET_TOKEN_REDEEMED} from "../actions/beePlugin";

const initialState = {
    user_id: '1987b105-04ec-423b-936e-5b6e6fb9725a',
    secret: 'owMFD2OKM5cssRHjmpKyx68NUp7hJIIxH8wbGMxOJWpv9Dx5IUd1',
    token_redeemed: null,
    initialized: false
};

export default function beePluginCredentials(state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN_REDEEMED:
            return {
                ...state,
                token_redeemed: action.result
            };
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            };

        case SET_BEE_PLUGIN_AUTH_CREDENTIALS:
            return {
                secret: action.secret,
                user_id: action.user_id,
                token_redeemed: null,
                initialized: false
            };
        default: {
            return {...state};
        }
    }
}