import React, { Component } from 'react'

const cnStrings={
    submit:'提交',
    cancel:'取消'
}

const enStrings={
    submit:'submit',
    cancel:'cancel'
}

const LocaleContext = React.createContext(enStrings);

class LocaleProvider extends Component {
    state = {locatle:cnStrings};
    toggleLocale = () =>{
        const locatle = this.state.locatle === enStrings ? cnStrings : enStrings;
        this.setState({locatle})
    };
    render(){
        return(
            <LocaleContext.Provider value = {this.state.locatle}>
                <button onClick={this.toggleLocale}>切换语言</button>
                {/* 函数作为子组件 */}
                {this.props.children}
            </LocaleContext.Provider>
        );
    }
}

class LocaleButtons extends Component {
    render(){
        return(
            // <div style={{width:100,height:100,backgroundColor:'red'}}></div>
            <LocaleContext.Consumer>
                {

                    locale =>(
                        <div>
                            <button>{locale.cancel}</button>
                            &nbsp;<button>{locale.submit}</button>
                        </div>
                    )
                }
            </LocaleContext.Consumer>   
        );
    }
}

export default class ProviderContext extends Component {
    render() {
        return (
                <div>
                   <LocaleProvider>
                      <div>
                        <br/>
                        <LocaleButtons />
                       </div>
                   </LocaleProvider>    
                </div>
        )
    }
}