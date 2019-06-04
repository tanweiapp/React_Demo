import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {createPost} from '../actions/postAction'

class Formpost extends Component {
    constructor(props){
        super(props);
        this.state={
            title:'',
            body:''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit(e){
        e.preventDefault();

        const post = {
            title:this.state.title,
            body:this.state.body
        };

        this.props.createPost(post)
       
    }
    render() {

        return (
            <div>
                <h2>添加内容</h2>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label >title</label>
                        <br/>
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
                    </div>
                    <div>
                        <label >body</label>
                        <br/>
                        <textarea name="body" onChange={this.onChange} value={this.state.body} ></textarea>
                    </div>
                    <br/>
                    <button type="submit">添加</button>

                </form>
            </div>
        )
    }
}

Formpost.propTypes = {
    // createPost:PropTypes.func.isRequired,
    // item:PropTypes.array.isRequired
}

const mapStateToProps = state => ({

    posts:state.posts.item 
})

export default connect(mapStateToProps,{createPost})(Formpost);
