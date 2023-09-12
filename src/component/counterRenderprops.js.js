import React from "react";
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={count:0}
    }
    change=()=>{
        this.setState({count:prev.count+1});

    }
    render(){
        return(
            <div>
                {this.props.render(this.props.count,this.props.change)}
            </div>
        )
    }
}
export default Counter 