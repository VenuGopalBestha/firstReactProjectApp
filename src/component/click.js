import React from "react";
class Click extends React.Component{
    render(){
        return(
            <div>
                <button onClick = {this.props.change}>Clicked {this.props.count}</button>
            </div>
        )
    }
}
export default Click;