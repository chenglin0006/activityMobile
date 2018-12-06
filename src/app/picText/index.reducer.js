export default function(state={}, action) {
    switch(action.type) {
        case 'GET_PIC_TEXT_DATA':
            return {
                ...state,
                picTextStatus: true,
                picTextCode: action.playload.code,
                picTextMessage: action.playload.message,
                picTextData: action.playload.data
            }
            break;
        case 'GET_PIC_TEXT_DATA_FAIL':
            return {
                ...state,
                picTextStatus: true,
                picTextCode: action.playload.code,
                picTextMessage: action.playload.message
            }
            break;
        case 'UPDATE_GET_PIC_TEXT_DATA_STATUS':
            return {
                ...state,
                picTextStatus: false
            }
            break;
        default:
            return state;
    }
}
