import React from "react";
const HOC=(original)=>{
    class NewComponent extends React.Component{
        constructor(props){
            super(props)
            this.state ={count:0}
        }
        change =()=>{
            this.setState(prev=>({
                count:prev.count+1
            }))
        }
        render(){
            return <original count={this.state.count} change={this.change}/>
        }
    }
    return NewComponent
    
}
export default HOC