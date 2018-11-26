import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './index.action';
import * as Util from '../../util/index';
import $ from 'jquery';
import Toast from '../../components/prompt/toast';
import './index.less';
// import '../../util/wx'
import LazyLoad from 'react-lazyload';

var _hmt = _hmt || [];
class Register extends Component {
	constructor(props) {
		super(props);
		this.wxConfigFun = this.wxConfigFun.bind(this);
		this.state={
            id:'',
		}
	}

    wxConfigFun() {
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
                    title: '会员积分超值兑换',
                    desc: '年终会员感恩回馈',
                    link: url,
                    imgUrl: 'http://action.m.bnq.com.cn/img/creditsExchange/share.png',
                    success: function () {
                    },
                    cancel: function () {
                    }
                });
                //分享朋友
                wx.onMenuShareAppMessage({
                    title: '会员积分超值兑换',
                    desc: '年终会员感恩回馈',
                    link: url,
                    imgUrl: 'http://action.m.bnq.com.cn/img/creditsExchange/share.png',
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

	componentWillUpdate(nextProps, nextState) {
        Util.fetchCallback({
            status: nextProps.Register.registerStatus,
            code: nextProps.Register.registerCode,
            message: nextProps.Register.registerMessage,
            updateStatus: nextProps.updateGetRegisterDataStatus,
            isShowDialog: true,
            successText: '操作成功',
            successCallback: () => {

            }
        });
	}

	componentDidMount(){
		let id = Util.getUrlArg('id');
		// this.props.getRegisterData({id});
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?b97abba7bfaa491945543090c900c199";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
        this.wxConfigFun();
	}

	render() {
        return (
            <div className={'register-div'}>
                <div className="title_photo">
                    <img src="http://action.m.bnq.com.cn/measure.jpg"/>
                </div>

                <div className="submit_div">
                    <div>
                        <label>姓 名</label>
                        <input type="text" id="personName" className="register_name" />
                    </div>
                    <div>
                        <label>手 机</label>
                        <input type="text" id="register_phone" className="register_phone" />
                    </div>
                </div>
                <div className="submit_a">
                    <a className="submit" href="javascript:;">立即报名</a>
                </div>

                <div className="bottomMess">具体活动内容，详询全国门店</div>

                <div className="prompt">
                    <span></span>
                </div>
            </div>
        );
	}
}

export default connect(
	(state) => {
		return {Register:state.Register}
	},
	(dispatch) => bindActionCreators({...actions}, dispatch)
)(Register);
