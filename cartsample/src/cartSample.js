import React, { Component } from '../node_modules/@types/react'


 function Cart(props) {
    return (
        <table>
            <tbody>
               {props.data.map(d => (
                    <tr key ={d.text} onClick={()=>props.onSelect(d.text)}>
                    <td>{d.text}</td>
                    <td>{d.count}</td>
                    <td>¥{d.price * d.count}</td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}


export default class cartSample extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            title:'',
            // showTitle:true,
            goods:[
                {text:'百万架构师',price:100,id:1},
                {text:'全栈架构师',price:80,id:1},
                {text:'python爬虫',price:60,id:1},
            ],
            cart:[]
        }
        setTimeout(() => {
            this.setState({title:'React-购物车'})
        }, 2000);
    }

    handleCHange=(e)=>{
        this.setState({name:e.target.value})
    }

    addGood = (e) => {
        this.setState({
            goods:[...this.state.goods,{text:this.state.name,price:666}]
        })
    }
    addCart = (good) => {
        const item = this.state.cart.find(c => c.text === good.text);
        if(item) {
            item.count += 1;
            this.setState({cart:[...this.state.cart]})
        }else{
            this.setState({cart:[...this.state.cart,{...good,count:1}]})
        }
    }
    onSelect = (name) => {
        console.log(name)
    }
    render() {
        const good = this.state.goods.map((good)=>(
            <li key={good.text}>
            {good.text}
            <button onClick={()=>this.addCart(good)}>加构</button>
            </li>
        ))
        return (
            <div>
                {this.state.title && <h1>{this.state.title}</h1>}
                <div>
                    <input 
                    type="text"
                    value ={this.state.name}
                    onChange={(e)=>this.handleCHange(e)}
                    />
                    <button onClick={(e)=>this.addGood(e)}>添加</button>
                </div>
                <ul>{good}</ul>
                <Cart data ={this.state.cart} onSelect={this.onSelect}></Cart>

            </div>
        )
    }
}
