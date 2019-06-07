
import { Table, Button, Icon, Col,Row } from 'antd';
import style from './index.scss'
import React, { Component } from 'react'

export default class index extends Component {

    renderMenusTable (){
    const colums = [
            {
                key:"size",
                title:"尺寸",
                dataIndex:"size",//
                render:(text,record)=>{
                    console.log(record)
                    return <span>{text}</span>
                }
            },
            {
                key:"price",
                title:"价格",
                dataIndex:"price",//price
                render:(text,record)=>{
                    return <span>{text}</span>
                }
            },
            {
                key:"action",
                title:"加入",
                render:(text,record)=>{
                    const obj = {
                        children:(
                            <Button className ={style["add-btn"]}>
                                <Icon type="plus"/>
                            </Button>
                        ),
                        props:[]     
                    };
                    if(!record.price){
                        obj.props.colSpan = 0;
                    }
                    return obj; 
                }
            }
        ]
    let data = {
        1: {
            name:"榴莲pizza",
            description:"最好吃的",
            options:[
                {
                    size:9,
                    price:38
                },
                {
                    size:12,
                    price:48
                },
            ]
            },
            2: {
                name:"意大利pizza",
                description:"最好吃的",
                options:[
                    {
                        size:9,
                        price:38
                    },
                    {
                    size:12,
                    price:48
                },
                ]
            },
            3: {
                name:"水果pizza",
                description:"最好吃的",
                options:[
                    {
                        size:9,
                        price:38
                    },
                    {
                    size:12,
                    price:48
                },
                ]
            }
    };

    //处理数据格式
    let dataSource = [];
    for (const key in data) {
        let item = data[key];
        dataSource.push({
            key:item.name,
            size:item.name,
        });
    
        item.options.forEach((ele,index)=>{
        
            dataSource.push({...ele,key:key+'-'+index})
        })
    }
    console.log(dataSource)
    return (
           <Table  pagination={false} className="menus-table" dataSource={dataSource} columns={colums}/>
         );
    }  
    render(){
        return <Row>
            <Col>{this.renderMenusTable()}</Col>
            </Row>
    }
 }




