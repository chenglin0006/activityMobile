export default function(state={}, action) {
    switch(action.type) {
        case 'GET_DETAIL_DATA':
            return {
                ...state,
                detailStatus: true,
                detailCode: action.playload.code,
                detailMessage: action.playload.message,
                detailData: action.playload.data
            }
            break;
        case 'GET_DETAIL_DATA_FAIL':
            return {
                ...state,
                detailStatus: true,
                detailCode: action.playload.code,
                detailMessage: action.playload.message
            }
            break;
        case 'UPDATE_GET_DETAIL_DATA_STATUS':
            return {
                ...state,
                detailStatus: false
            }
            break;
        default:
            return state;
    }
}