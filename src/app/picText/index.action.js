export let getPicTextData = (argus) => {
    return {
        type: 'GET_PIC_TEXT_DATA',
        playload: {
            url: '/brandStory/preview.share',
            type: 'get',
            param: {
                ...argus
            }
        }
    }
}

export let updateGetPicTextDataStatus = () => {
    return {
        type: 'UPDATE_GET_PIC_TEXT_DATA_STATUS'
    }
}
