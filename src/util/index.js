import Toast from '../components/prompt/toast'
import $ from 'jquery'
const fetchCallback = (argus) => {
    const {status, code, message, params, updateStatus, successCallback, isShowToastSuccess, successText, isShowDialog,isNotReplaceState} = argus;
    if (status) {
        updateStatus();
        if (code && code !== 0) {
            if (code >= 500) {
                Toast.show('服务器异常');
            } else if (code >= 400) {
                if (code == 404) {
                    Toast.show('服务器找不到请求地址');
                } else if (code == 414) {
                    Toast.show('请求的 URI（通常为网址）过长，服务器无法处理');
                } else {
                    Toast.show('错误请求');
                }
            } else if (code >= 300) {
                Toast.show('网络异常');
            } else {
                Toast.show(message);
            }
        } else if (code === 0) {
            successCallback && successCallback();
        }
    }
}
function createUrl (request) {
    let url = request.url
    let param = request.param

    if(param) {
        url = !url.includes('?') && url + '?'
        for (let key of Object.keys(param)) {
            url = url + key + '=' + param[key] + '&'
        }
        if (url.endsWith('&')) {
            url = url.substring(0, url.length - 1)
        }
    }
    return url
}

function setCookie(name, value) {
    let days = 30;
    let exp = new Date();
    exp.setTime(exp.getTime() + days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()
}

function getCookie(name) {
    let arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'))
    return arr !== null ? unescape(arr[2]) : null
}

function getNumberRemoveDouble(num){
    let t1, r1;
    try{
        t1 = num.toString().split('.')[1].length;
    }catch(e){
        t1 = 0;
    }
    r1=Number(num.toString().replace(".",""));
    return  r1*Math.pow(10,-t1)
}

function getUrlArg(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var arg = window.location.search.substr(1).match(reg);
    if (arg) {
        return arg[2]
    } else {
        return ''
    }
}

function formatNum(str) {
    var newStr = "";
    var count = 0;
    // 当数字是整数
    if (str.indexOf(".") == -1) {
        for (var i = str.length - 1; i >= 0; i--) {
            if (count % 3 == 0 && count != 0) {
                newStr = str.charAt(i) + "," + newStr;
            } else {
                newStr = str.charAt(i) + newStr;
            }
            count++;
        }
        return newStr;
    }
    // 当数字带有小数
    else {
        for(var i=str.indexOf(".")-1; i >= 0; i--) {
            if (count % 3 == 0 && count != 0) {
                newStr = str.charAt(i) + "," + newStr;
            } else {
                newStr = str.charAt(i) + newStr; //逐个字符相接起来
            }
            count++;
        }
        str = newStr + (str + "00").substr((str + "00").indexOf("."), 3);
        let lineIndex = str.indexOf('-');
        let dIndex = str.indexOf(',');
        if(lineIndex !== -1 && lineIndex === (dIndex-1)) {
            str = str.replace(/-,/, '-');
        }
        return str;
    }
}

const getEnv = ()=>{
    // let ENV = window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost' || window.location.hostname.startsWith('192.168') || window.location.hostname.endsWith('.dev-zt.bnq.com.cn') ? 'development' : 'production';
    // if(ENV=='production'){
    //     if(window.location.hostname.indexOf('dev')>-1){
    //         ENV = 'productionDev';
    //     } else if (window.location.hostname.indexOf('uat')>-1){
    //         ENV = 'productionUat';
    //     } else {
    //         ENV = 'production';
    //     }
    // }
    let ENV = process.env.NODE_ENV;
    return ENV;
}

//微信分享初始化配置
function wxConfigFun(wxConfigObj) {
    //配置微信分享
    var wxData = {
        signature: '',
        appId: '',
        nonceStr: '',
        timestamp: ''
    };
    var url = location.href;
    $.ajax({
        url: "https://zt.api.bnq.com.cn/bnq_owner/apis/common/wechat/public/htmlSign.share?htmlUrl=" + encodeURIComponent(url),
        dataType: 'json',
        method: 'get',
        success: function (data) {
            if (data.response.code == 0) {
                wxData.signature = data.response.data.signature;
                wxData.appId = data.response.data.appId;
                wxData.nonceStr = data.response.data.noncestr;
                wxData.timestamp = data.response.data.timestamp;
                getChatData(wxData);
            } else {

            }
        },
        error: function (err) {
            console.log(err);
        }
    })

    function getChatData(wxData) {
        wx.config({
            debug: false,
            appId: wxData.appId,
            timestamp: wxData.timestamp,
            nonceStr: wxData.nonceStr,
            signature: wxData.signature,
            jsApiList: ['checkJsApi',
                'openLocation',
                'getLocation',
                'onMenuShareTimeline',
                'onMenuShareAppMessage'
            ]
        });
        wx.ready(function () {
            //分享朋友圈
            wx.onMenuShareTimeline({
                title: wxConfigObj.title,
                desc: wxConfigObj.desc,
                link: url,
                imgUrl: wxConfigObj.imgUrl,
                success: function () {
                },
                cancel: function () {
                }
            });
            //分享朋友
            wx.onMenuShareAppMessage({
                title: wxConfigObj.title,
                desc: wxConfigObj.desc,
                link: url,
                imgUrl: wxConfigObj.imgUrl,
                success: function () {
                },
                cancel: function () {
                }
            });
            wx.error(function (res) {
            });
            wx.checkJsApi({
                jsApiList: ['onMenuShareTimeline'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
                success: function (res) {
                    // 以键值对的形式返回，可用的api值true，不可用为false
                    // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
                }
            });
        });
    }
}

export {
    createUrl,
    setCookie,
    getCookie,
    getNumberRemoveDouble,
    getUrlArg,
    formatNum,
    fetchCallback,
    wxConfigFun,
    getEnv
}
