import React from "react";
import HOC from './Hoc'
class Parent extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.change}>Clicked {this.props.count} times</button>
            </div>
        )
    }
}
export default HOC(Parent)