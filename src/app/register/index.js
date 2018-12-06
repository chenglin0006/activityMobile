import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './index.action';
import * as Util from '../../util/index';
import $ from 'jquery';
import Toast from '../../components/prompt/toast';
import './index.less';
import LazyLoad from 'react-lazyload';
import 'antd-mobile/lib/date-picker/style/css';
import { PickerView, WhiteSpace } from 'antd-mobile';

const province = [
    {
        label: '北京',
        value: '01',
        children: [
            {
                label: '东城区',
                value: '01-1',
            },
            {
                label: '西城区',
                value: '01-2',
            },
            {
                label: '崇文区',
                value: '01-3',
            },
            {
                label: '宣武区',
                value: '01-4',
            },
        ],
    },
    {
        label: '浙江',
        value: '02',
        children: [
            {
                label: '杭州',
                value: '02-1',
                children: [
                    {
                        label: '西湖区',
                        value: '02-1-1',
                    },
                    {
                        label: '上城区',
                        value: '02-1-2',
                    },
                    {
                        label: '江干区',
                        value: '02-1-3',
                    },
                    {
                        label: '下城区',
                        value: '02-1-4',
                    },
                ],
            },
            {
                label: '宁波',
                value: '02-2',
                children: [
                    {
                        label: 'xx区',
                        value: '02-2-1',
                    },
                    {
                        label: 'yy区',
                        value: '02-2-2',
                    },
                ],
            },
            {
                label: '温州',
                value: '02-3',
            },
            {
                label: '嘉兴',
                value: '02-4',
            },
            {
                label: '湖州',
                value: '02-5',
            },
            {
                label: '绍兴',
                value: '02-6',
            },
        ],
    },
];

var _hmt = _hmt || [];
class Register extends Component {
	constructor(props) {
		super(props);
		this._submitFun = this._submitFun.bind(this);
		this._showPickerFun = this._showPickerFun.bind(this);
		this._hidePickerFun = this._hidePickerFun.bind(this);
		this._choosePickerFun = this._choosePickerFun.bind(this);
		this.onScrollChange = this.onScrollChange.bind(this);
		this.onChange = this.onChange.bind(this);
		this.state={
            id:'',
            value:[],
            changeValue:[],
            showPicker:false
		}
	}

    _showPickerFun(){
	    let value = this.state.value;
	    this.setState({showPicker:true,changeValue:value})
    }

    _hidePickerFun(){
        this.setState({showPicker:false})
    }

    _choosePickerFun(){
        let value = this.state.changeValue;
        this.setState({value})
        this.refs.areaInput.value = value.join(',');
        this._hidePickerFun();
    }

    _submitFun(){
	    let params = {
	        name:this.refs.nameInput.value,
            phone:this.refs.phoneInput.value,
            area:this.refs.areaInput.value,
        }
        if(Util.isNotNull(params.name)&&Util.isNotNull(params.phone)){
            if(!Util.checkPhone(params.phone)){
                Toast.show('请输入有效手机号')
            }
        } else {
            Toast.show('请输入完整信息')
        }
    }

    onScrollChange(value){
        console.log(value);
    }

    onChange(changeValue){
        console.log(changeValue,'----');
        this.setState({
            changeValue,
        });
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
                        <input type="text" ref="nameInput" id="personName" className="register_name" />
                    </div>
                    <div>
                        <label>手 机</label>
                        <input type="text" ref="phoneInput" id="register_phone" className="register_phone" />
                    </div>
                    <div>
                        <label>城市</label>
                        <input type="text" ref="areaInput" onClick={this._showPickerFun} id="area" className="register_area" />
                    </div>
                    <div className="submit_a">
                        <a className="submit" onClick={this._submitFun}>立即报名</a>
                    </div>
                </div>

                <div className="bottomMess">具体活动内容，详询全国门店</div>

                {this.state.showPicker?<div className={'choose-area-div'}>
                    <div className={'manu-div'}>
                        <span className={'cancel-span'} onClick={this._hidePickerFun}>取消</span>
                        <span className={'ok-span'} onClick={this._choosePickerFun}>确定</span>
                    </div>
                    <PickerView
                        data={province}
                        value={this.state.changeValue}
                        onChange={this.onChange}
                        // onScrollChange={this.onScrollChange}
                    />
                </div>:''}

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
