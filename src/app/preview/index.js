import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './index.action';
import * as Util from '../../util/index';
import Toast from '../../components/prompt/toast';
import './index.less';
import LazyLoad from 'react-lazyload';

class Preview extends Component {
	constructor(props) {
		super(props);
		this.state={
            id:'',
			type:'',
			fromIndex:'',
			imgList:[],
			pageTitle:''
		}
	}

	componentWillUpdate(nextProps, nextState) {
        Util.fetchCallback({
            status: nextProps.Preview.detailStatus,
            code: nextProps.Preview.detailCode,
            message: nextProps.Preview.detailMessage,
            updateStatus: nextProps.updateGetDetailDataStatus,
            isShowDialog: true,
            successText: '操作成功',
            successCallback: () => {
            	let data = nextProps.Preview.detailData;
                let imgList = [];
				data.pictureList&&data.pictureList.length&&data.pictureList.forEach((ele,index)=>{
                    imgList.push(ele.url);
				});
				let title = data.title || '百安居';
				this.setState({
					imgList:imgList
				});
                if(this.state.type=='brand'){
                	document.title = '百安居品牌故事'
				} else {
                	document.title = title;
				}
            }
        });
	}

	componentDidMount(){
		let id = Util.getUrlArg('id');
		let type= Util.getUrlArg('type');
		let fromIndex = Util.getUrlArg('fromIndex');
		this.setState({
			id:id,
			type:type,
			fromIndex:fromIndex
		})
		this.props.getDetailData({id,type});
	}

	render() {
		let indexObj = {
			pc:'pc-index',
			mobile:'mobile-index'
		}
        const {imgList,fromIndex} = this.state;
        return (
            <div className={(indexObj[fromIndex]||'mobile-index')+' preview-index'}>
                <div className={'img-list-div'}>
                    {imgList.map((ele,i)=>{
                        return (<div key={i} className='img-item'>
                            <LazyLoad height={200}>
                            	<img src={ele}></img>
							</LazyLoad>
                        </div>)
                    })}
                </div>
            </div>
        );
	}
}

export default connect(
	(state) => {
		return {Preview:state.Preview}
	},
	(dispatch) => bindActionCreators({...actions}, dispatch)
)(Preview);
