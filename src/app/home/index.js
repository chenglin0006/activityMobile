import React, {Component} from 'react';
import {Link, Redirect, Route,Switch} from 'react-router-dom';
import './index.less';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './index.action';
import * as Util from '../../util/';
import * as LoadComponent from './loadComponent'
const {
    Register
} = LoadComponent
let allRouterList = [
    {path:'/register',component:Register,isLeftMenu:true},
]
class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }


    componentWillUpdate (nextProps, nextState) {
    }

    componentDidMount(){
        // this.props.getUserInfo();
    }

    //切换路由时改变openKeys
    componentWillReceiveProps(nextProps){
    }

    render() {
        return (
            <div>
                <Switch>
                    {
                        allRouterList.map((ele,index)=>{
                            return <Route key={index} path={ele.path} component={ele.component}/>
                        })
                    }
                    {/*<Redirect to='/config-summary-list'/>*/}
                </Switch>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {Home: state.Home}
    },
    (dispatch) => bindActionCreators({...actions}, dispatch)
)(Home);
