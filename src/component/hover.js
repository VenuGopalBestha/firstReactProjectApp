import React from "react";
class Hover extends React.Component{
    render(){
        return(
            <div>
                <button onMouseHover={this.props.change}>Hovered {this.props.count}</button>
            </div>
        )
    }
}
export default Hover;