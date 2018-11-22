export default function(state={}, action) {
    switch(action.type) {
        case 'GET_REGISTER_DATA':
            return {
                ...state,
                registerStatus: true,
                registerCode: action.playload.code,
                registerMessage: action.playload.message,
                registerData: action.playload.data
            }
            break;
        case 'GET_REGISTER_DATA_FAIL':
            return {
                ...state,
                registerStatus: true,
                registerCode: action.playload.code,
                registerMessage: action.playload.message
            }
            break;
        case 'UPDATE_GET_REGISTER_DATA_STATUS':
            return {
                ...state,
                registerStatus: false
            }
            break;
        default:
            return state;
    }
}
