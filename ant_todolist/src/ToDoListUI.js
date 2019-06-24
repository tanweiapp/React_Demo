import React, { Component } from "react";
import 'antd/dist/antd.css';
import { Input, Button, List, Typography  } from 'antd';


const ToDoListUI = (props) => {
  return (
    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
              <div>
                <Input
                  value={props.inputValue}
                  placeholder="todo info"
                  style={{ width: 300, marginRight: 10 }}
                  onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleOnclick}>
                  {" "}
                  提交
                </Button>
              </div>
              <List
                style={{ width: "300px", marginTop: "10px" }}
                bordered
                dataSource={props.list}
                renderItem={(item,index)=>(
                <List.Item onClick={()=>{props.handelItemClick(index)}}>
                    {item}
                  </List.Item>
                )}
              />
            </div>
  )
}

// export default class ToDoListUI extends Component {
//     render(){
//         return (
            
//           );
//     }
// };

export default ToDoListUI;
