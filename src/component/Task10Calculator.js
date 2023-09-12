import React from "react";
class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state={ input:""

        }
    }

    // click1=()=>{
    //     this.setState({
    //             input:this.state.input+"1"
    //     })
        
    // }
    // click2=()=>{
    //     this.setState({
    //             input:this.state.input+"2"
    //     })
        
    // }
    // click3=()=>{
    //     this.setState({
    //             input:this.state.input+"3"
    //     })
        
    // }
    // click4=()=>{
    //     this.setState({
    //             input:this.state.input+"4"
    //     })
        
    // }
    // click5=()=>{
    //     this.setState({
    //             input:this.state.input+"5"
    //     })
        
    // }
    // click6=()=>{
    //     this.setState({
    //             input:this.state.input+"6"
    //     })
        
    // }
    // click7=()=>{
    //     this.setState({
    //             input:this.state.input+"7"
    //     })
        
    // }
    // click8=()=>{
    //     this.setState({
    //             input:this.state.input+"8"
    //     })
        
    // }
    // click9=()=>{
    //     this.setState({
    //             input:this.state.input+"9"
    //     })
        
    // }
    // click0=()=>{
    //     this.setState({
    //             input:this.state.input+"0"
    //     })
        
    // }
    // click123=()=>{
    //     this.setState({
    //             input:this.state.input+"+"
    //     })
        
    // }
    // click456=()=>{
    //     this.setState({
    //             input:this.state.input+"-"
    //     })
        
    // }
    // click789=()=>{
    //     this.setState({
    //             input:this.state.input+"*"
    //     })
        
    // }
    // clickc0=()=>{
    //     this.setState({
    //             input:this.state.input+"/"
    //     })
        
    // }
    // clickc=()=>{
    //     this.setState({
    //             input:""
    //     })
        
    // }
    // clickfinal=()=>{
    //     this.setState({
    //             input:eval(this.state.input)
    //     })
        
    // }

    render(){
        return(
            <div>
            <input type='text' value={this.state.input}/><br></br>
            {/* <button onClick={this.click1}>1</button>
            <button onClick={this.click2}>2</button>
            <button onClick={this.click3}>3</button>
            <button onClick={this.click123}>+</button><br></br>
            <button onClick={this.click4}>4</button>
            <button onClick={this.click5}>5</button>
            <button onClick={this.click6}>6</button>
            <button onClick={this.click456}>-</button><br></br>
            <button onClick={this.click7}>7</button>
            <button onClick={this.click8}>8</button>
            <button onClick={this.click9}>9</button>
            <button onClick={this.click789}>*</button><br></br>
            <button onClick={this.clickc}>C</button>
            <button onClick={this.click0}>0</button>
            <button onClick={this.clickc0}>/</button>
            <button onClick={this.clickfinal}>=</button> */}
            
            {/* <button onClick={()=>{this.setState({input:this.state.input+'1'})}}>1</button>
            <button onClick={()=>{this.setState({input:this.state.input+'2'})}}>2</button>
            <button onClick={()=>{this.setState({input:this.state.input+'3'})}}>3</button>
            <button onClick={()=>{this.setState({input:this.state.input+'+'})}}>+</button><br></br>
            <button onClick={()=>{this.setState({input: this.state.input+'4'})}}>4</button>
            <button onClick={()=>{this.setState({input:this.state.input+'5'})}}>5</button>
            <button onClick={()=>{this.setState({input:this.state.input+'6'})}}>6</button>
            <button onClick={()=>{this.setState({input:this.state.input+'-'})}}>-</button><br></br>
            <button onClick={()=>{this.setState({input:this.state.input+'7'})}}>7</button> 
            <button onClick={()=>{this.setState({input:this.state.input+'8'})}}>8</button> 
            <button onClick={()=>{this.setState({input:this.state.input+'9'})}}>9</button>
            <button onClick={()=>{this.setState({input:this.state.input+'*'})}}>*</button><br></br>
            <button onClick={()=>{this.setState({input:""})}}>C</button> 
            <button onClick={()=>{this.setState({input:this.state.input+'0'})}}>0</button> 
            <button onClick={()=>{this.setState({input:this.state.input+'/'})}}>/</button>
            <button onClick={()=>{this.setState({input:eval(this.state.input)})}}>=</button>  */}
            <button onClick={()=>{this.setState({input:this.state.input+'1'})}}>1</button>
            <button onClick={()=>{this.setState({input:this.state.input+'2'})}}>2</button>
            <button onClick={()=>{this.setState({input:this.state.input+'3'})}}>3</button>
            <button onClick={()=>{this.setState({input:this.state.input+'+'})}}>+</button><br></br>
            <button onClick={()=>{this.setState({input: this.state.input+'4'})}}>4</button>
            <button onClick={()=>{this.setState({input:this.state.input+'5'})}}>5</button>
            <button onClick={()=>{this.setState({input:this.state.input+'6'})}}>6</button>
            <button onClick={()=>{this.setState({input:this.state.input+'-'})}}>-</button><br></br>
            <button onClick={()=>{this.setState({input:this.state.input+'7'})}}>7</button> 
            <button onClick={()=>{this.setState({input:this.state.input+'8'})}}>8</button> 
            <button onClick={()=>{this.setState({input:this.state.input+'9'})}}>9</button>
            <button onClick={()=>{this.setState({input:this.state.input+'*'})}}>*</button><br></br>
            <button onClick={()=>{this.setState({input:""})}}>C</button> 
            <button onClick={()=>{this.setState({input:this.state.input+'0'})}}>0</button> 
            <button onClick={()=>{this.setState({input:this.state.input+'/'})}}>/</button>
            <button onClick={()=>{this.setState({input:eval(this.state.input)})}}>=</button>
       
            </div>
        )
    }
}
export default Calculator