import React from 'react';
import ReactDOM from 'react-dom';
export  default class Item extends React.Component{
    render() {
        let data = this.props.data;
        return(
            <tr>
                <td>
                    <input
                        type="checkbox"
                        checked = {data.selected}
                        onChange={(e)=>{
                            this.props.setCheck(this.props.index,e.target.checked);
                        }}
                    />
                </td>
                <td>{data.title}</td>
                <td>{data.singer}</td>
                <td>
                    <input
                        type="checkbox"
                        onChange={(e)=>{
                            this.props.setLike(this.props.index,e.target.checked);
                        }}
                    />
                </td>
                <td>
                    <a onClick={()=>{
                        this.props.remove(this.props.index)
                    }}>X</a>
                </td>
            </tr>
        );
    }
}