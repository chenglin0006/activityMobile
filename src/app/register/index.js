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
		this.state={
            id:'',
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
        let wxConfigObj = {
            title:'会员积分超值兑换',
            desc:'年终会员感恩回馈',
            imgUrl:'http://action.m.bnq.com.cn/img/creditsExchange/share.png'
        }
        Util.wxConfigFun(wxConfigObj);
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
