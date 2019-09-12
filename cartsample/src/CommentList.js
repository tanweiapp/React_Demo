import React, { Component, PureComponent } from '../node_modules/@types/react'

export default class CommentList extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments:[]
        }
    }
    componentDidMount () {
        setInterval(() => {
            // 性能优化点；
            // 1.immutable.js
            // 2.值传递，避免使用对象传递，需要多项比较是否发生变化
            this.setState({
                comments:[
                    {body:"react is very good",author:"facebook"},
                    {body:"vue is very good",author:"youyuxi"}
                ]
            })
        }, 1000);
    }
  render() {
    return (
      <div>
        {
            this.state.comments.map((c,i)=>(
                <Comment key={i} {...c}/>
                // <Comment key={i} data={c}/>
            ))
        }
      </div>
    )
  }
}

// 展示组件
//  function Comment ({data}){
//   return (
//     <div>
//       <p>{data.body}</p>
//       <p>------{data.author}</p>
//     </div>
//   )
// }


// class Comment extends PureComponent {
//     console.log("render comment")
//     shouldComponentUpdate(props){
//         if(props.body === this.props.body && props.author === this.props.author){
//             return false;
//         }
//         return true;
//     }
//     render(){  
//         const {body, author} = this.props;
//       return (
//         <div>
//           <p>{body}</p>
//           <p>------{author}</p>
//         </div>
//       )
//     }
//  }
// memo是一个高阶组件
const Comment= React.memo(function({body,author}) {
    console.log("render comment")
    return (
    <div>
        <p>{body}</p>
        <p>------{author}</p>
    </div>
    )
})


