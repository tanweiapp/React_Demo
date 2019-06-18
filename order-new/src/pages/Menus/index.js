
import { Table, Button, Icon, Col, Row } from 'antd';
import style from './index.scss'
import React, { Component } from 'react'

export default class index extends Component {

    state={
        cart:[]
    }
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
                    if(record.price){
                        return <span>{text}</span>
                    }
                    return {
                        children:<strong>{text}</strong>,
                        props:{
                            colSpan:2
                        }
                    }
                }
            },
            {
                key:"action",
                title:"加入",
                render:(text,record)=>{
                    console.log(record);
                    const obj = {
                        children:(
                            <Button onClick={()=>handleAddMenus(record)} className ={style["add-btn"]}>
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
        const handleAddMenus = obj => {
           
            // const {name, price, size} = obj;
            // console.log(obj);
            let { cart } = this.state;
            const index = cart.findIndex(item => item.key === obj.key);
            // console.log(index);
            index >= 0 ? cart.splice(index,1,{
                ...cart[index],
                count:cart[index].count+1
            }):
            (
                cart=[
                    ...cart,{
                        ...obj,
                        count:1
                    }
                ]
            )
            // 存储到状态中去
            this.setState({cart})
        //     this.setState({cart:[...this.state.cart,{
        //         ...obj,
        //         count:1
        //     }
        //   ]
        // })
        }
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
            dataSource.push({...ele,name: item.name,key:key+'-'+index})
        })
    }
    return (
           <Table  pagination={false} className="menus-table" dataSource={dataSource} columns={colums}/>
         );
    }  

    renderCartTable (){
        const colums = [
            {
                key:"count",
                title:"数量",
                dataIndex:"count",
                render:(text,record)=>(
                    <span>
                        <Button 
                        onClick={()=> handleDecrease(record)}
                        className={style["cart-btn"]}>-</Button>
                        <span>{record.count}</span>
                        <Button 
                        onClick={()=> handleIncrease(record)}
                        className={style["cart-btn"]}>+</Button>
                    </span>
                )
            },
            {
                key:"name", 
                title:"菜单",
                dataIndex:'name'
            },{
                key:"price",
                title:"价格",
                dataIndex:'price'
            }
        ];
        //减
       const handleDecrease = record=> {
            let {cart} = this.state;
            const index = cart.findIndex(item => item.key === record.key);
            const current = cart[index];
            // console.log(current); 
            //档期数量小于等于1，购物车商品移除，否则商品数量减1
            if(current.count <= 1){
                cart.splice(index,1);
            }else{
                cart.splice(index,1,{
                    ...current,
                    count:current.count - 1
                });
            }
            this.setState({cart});
        }

        //加
        const handleIncrease = record => {
            let {cart} = this.state;
            const index = cart.findIndex(item => item.key === record.key);
            const current = cart[index];
            cart.splice(index,1,{
                ...current,
                count:current.count + 1
            });
            this.setState({cart});
        }
        return (
            <Table 
                className="menus-table cart" 
                pagination={false} 
                dataSource={this.state.cart} 
                columns={colums}
                locale={{ 
                    emptyText:'购物车暂无商品！'
                }}
            />
        );
    }
    render(){
        const totalPrice = this.state.cart.reduce((total,item)=> (total += item.price * item.count),0);
        return <Row>
            <Col sm={24} md={16}>{this.renderMenusTable()}</Col>
            <Col sm={24} md={8}>
            {this.renderCartTable()}
            <p className={style['total-price']}>总价:{totalPrice}</p>
            <Button type="primary" className={style['submit-btn']}>提交</Button>
            </Col>
            </Row>
    }
 }




