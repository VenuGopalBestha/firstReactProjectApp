import React from "react";
class Task9 extends React.Component{
    constructor(){
        super()
        this.state={
            inr:0,
            usd:0,
            euro:0,
            yuvn:0,
            australiandollar:0,
        }
    }
   
    inrChange=(event)=>{
       this.setState({
        inr:event.target.value,
        usd:event.target.value*0.012,
        euro:event.target.value*0.011,
        yuvn:event.target.value*0.087,
        australiandollar:event.target.value*0.018,
       })
        
    }
    usdChange=(event)=>{
        this.setState({
            usd:event.target.value,
            inr:event.target.value * 82.09,
            euro:event.target.value *0.90,
            yuvn:event.target.value *7.17,
            australiandollar:event.target.value*1.48,
           })
        
    }
    euroChange=(event)=>{
        this.setState({
            euro:event.target.value,
            usd:event.target.value*1.11,
            inr:event.target.value*91.37,
            yuvn:event.target.value*7.99,
            australiandollar:event.target.value*1.64,
           })
        
    }
    yuvnChange=(event)=>{
        this.setState({
            yuvn:event.target.value,
            euro:event.target.value*0.13,
            usd:event.target.value*0.14,
            inr:event.target.value*11.44,
            australiandollar:event.target.value*0.21,
           })
       
    }
    australiandollarChange=(event)=>{
        this.setState({
            australiandollar:event.target.value,
            yuvn:event.target.value*4.86,
            euro:event.target.value*0.61,
            usd:event.target.value*0.68,
            inr:event.target.value*55.58,
           })
        
    }
    render(){
        const{inr,usd,euro,yuvn,australiandollar} = this.state
        return(
            <div>
                <label>INR</label>
                <input type="text" value={inr} onChange={this.inrChange}></input><br></br>
                <label>USD</label>
                <input type="text" value={usd} onChange={this.usdChange}></input><br></br>
                <label>Euro</label>
                <input type="text" value={euro} onChange={this.euroChange}></input><br></br>
                <label>Chinese</label>
                <input type="text" value={yuvn} onChange={this.yuvnChange}></input><br></br>
                <label>Australian</label>
                <input type="text" value={australiandollar} onChange={this.australiandollarChange}></input><br></br>
            </div>
        )
    }
}
export default Task9