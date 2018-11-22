export let getRegisterData = (argus) => {
    return {
        type: 'GET_REGISTER_DATA',
        playload: {
            url: '/brandStory/preview.share',
            type: 'get',
            param: {
                ...argus
            }
        }
    }
}

export let updateGetRegisterDataStatus = () => {
    return {
        type: 'UPDATE_GET_REGISTER_DATA_STATUS'
    }
}
