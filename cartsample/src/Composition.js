import React,{ component } from 'react'

function Dialog(props) {
    const color = props.color || 'blue'
    return <div style={{border:`4px solid ${color}`}}>
        {/*     children 是固定的名称 匿名插槽   是一个合法的jsx表达式*/}
    {props.children}
    <div>{props.foo('这个内容是dialog传递过来的')}</div>
    <div>
        {/* 具名插槽 */}
        {props.footer}
    </div>
    </div>
}

function WelcomeDialog(){
    const footer = <button onClick={()=>alert('react')}> 确定 </button>
    return (
        <Dialog color="red" footer={footer} foo={(c)=><p>{c}</p>}>
            <h1>欢迎光临</h1>
            <p>感谢使用react</p>
        </Dialog>
    );
}

function FilterP(props) {
    return (
        <div>
            {React.Children.map(props.children,child => {
                console.log(child);
                if(child.type !== 'p'){
                    return
                }
                return child;
            })}
        </div>
    )
}

function RadioGroup(props) {
    // 将name属性赋值给Radio
    // {/* 遍历所有子元素并添加name属性并将外部传入的name属性赋值给子元素 */}
    return (
        <div> 
            {React.Children.map(
                props.children,
                child => React.cloneElement(child,{name:props.name}))}
        </div>
    );
}

function Radio(props) {
    return (
        <label>
            <input type="radio" name={props.name}/>
            {/* 匿名插槽相当于占位 在使用是开始标签与闭合标签中间的合法jsx模块 */}
            {props.children} 
        </label>
    );
}

export default function Composition(){
    return (
        <div>
            <WelcomeDialog/>
            <FilterP>
                <h1>foo</h1>
                <p>bar</p>
                <h1>mike</h1>
                <p>jerry</p>
            </FilterP>

            <RadioGroup name="mvvm">
                <Radio value="vue">vue </Radio>
                <Radio value="react">react</Radio>
                <Radio value="angular">angular</Radio>
            </RadioGroup>
        </div>
    )
}