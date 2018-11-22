export let getDetailData = (argus) => {
    let url = '/brandStory/preview.share';
    if(argus.type=='brand'){
        url = '/brandStory/preview.share'
    } else if(argus.type=='activity'){
        url = '/activity/preview.share'
    } else if(argus.type=='decoration'){
        url = '/decorationPackage/preview.share'
    } else if(argus.type=='advertisement'){
        url = '/adManagement/preview.share'
    } else if(argus.type=='business'){
        url = '/businessIntroduction/preview.share'
    }
    delete argus.type;
    return {
        type: 'GET_DETAIL_DATA',
        playload: {
            url: url,
            type: 'get',
            isPreview: true,
            param: {
                ...argus
            }
        }
    }
}

export let updateGetDetailDataStatus = () => {
    return {
        type: 'UPDATE_GET_DETAIL_DATA_STATUS'
    }
}
