import React from "react";
import HOC from './Hoc'
class Child extends React.Component{
    render(){
        return(
            <div>
                <button onMouseOver={this.props.change}>Hovered {this.props.count} times</button>
            </div>
        )
    }
}
export default HOC(Child)