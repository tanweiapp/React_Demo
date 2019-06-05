import React, { Component } from 'react'
import { Tabs, Select } from 'antd';
import style from './index.scss'
import SubRoutes,{RedirectRoute} from '../../utils/SubRoutes'
import { Switch } from 'dva/router'


const { TabPane } = Tabs;
const { Option } = Select;

export default class About extends Component {
    handleChangeTab=(key)=>{
        // console.log(this);
        // window.location.href = '/#' + key;
        if(this.props.location.pathname !==key){
            this.props.history.push(key); 
        }
       
    }
    render() {
        const {routes, app} = this.props;
        return (
            <div className={style.about}>
                <Tabs 
                className={style.tabs} 
                tabPosition={'left'} 
                activeKey={this.props.location.pathname}
                onChange={this.handleChangeTab}>
                    <TabPane tab="历史订餐" key="/about/history" />
                    <TabPane tab="联系我们" key="/about/contact" />
                    <TabPane tab="点餐文档" key="/about/orderingguide" />
                    <TabPane tab="快递信息" key="/about/delivery" />
                </Tabs>
            <div className={style.route}>
                {/* 二级路由 */}
               <Switch >
                   {routes.map((route,i)=>(
                   //调用封装组件
                   <SubRoutes key={i} {...route} app={app}/>
                    ))}
                   <RedirectRoute exact={true} from={"/about"} routes={routes} />
                </Switch>
            </div>
       </div>
        )
    }
}
