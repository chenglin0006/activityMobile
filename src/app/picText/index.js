import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './index.action';
import * as Util from '../../util/index';
import './index.less';
import LazyLoad from 'react-lazyload';

var _hmt = _hmt || [];
class PixText extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:''
        }
    }

    componentWillUpdate(nextProps, nextState) {
        Util.fetchCallback({
            status: nextProps.PixText.picTextStatus,
            code: nextProps.PixText.picTextCode,
            message: nextProps.PixText.picTextMessage,
            updateStatus: nextProps.updateGetPicTextDataStatus,
            isShowDialog: true,
            successText: '操作成功',
            successCallback: () => {

            }
        });
    }

    componentDidMount(){
        let id = Util.getUrlArg('id');
        // this.props.getPixTextData({id});
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?b97abba7bfaa491945543090c900c199";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
        let wxConfigObj = {
            title:'图文',
            desc:'图文',
            imgUrl:'http://action.m.bnq.com.cn/img/creditsExchange/share.png'
        }
        Util.wxConfigFun(wxConfigObj);
    }

    render() {
        let data = [{
            type:'img',
            img:'http://action.m.bnq.com.cn/measure.jpg'
        },{
            type:'text',
            text:'金沙江还是给大家啊帅哥阿会计核算的空间啊还是进口的阿手机壳电话卡金黄色的空间里看电视剧啦的'
        }]
        return (
            <div className={'pic-text-div'}>
                {
                    data.map((ele,index)=>{
                        return (
                            ele.type=='img'?
                                <div key={index}>
                                    <LazyLoad>
                                        <img src={ele.img} />
                                    </LazyLoad>
                                </div>:
                                <div key={index}>
                                    {ele.text}
                                </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {PixText:state.PixText}
    },
    (dispatch) => bindActionCreators({...actions}, dispatch)
)(PixText);
