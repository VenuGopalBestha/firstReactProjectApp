import React from 'react'
const conversionState ={
    USD:{
        EUR: 0.89,
        YUVN : 7.17,
        INR: 81.92,
        USD:1,
    },
    INR:{
        INR:1,
        USD: 0.012,
        EUR: 0.011,
        YUVN: 0.087,
    },
    YUVN:{
        YUVN:1,
        IND:11.43,
        EUR:0.12,
        USD:0.14,
    },
}
class RupeesConvertor extends React.Component{
    constructor(props){
        super(props)
        this.state ={initial:0,final:0,initialCurrency:"INR",finalCurrency:"USD"}
        
    }
    currencyChange1=(event)=>{
        this.setState({initialCurrency:event.target.value})
    }
    currencyChange2=(event)=>{
        this.setState({finalCurrency:event.target.value})
    }
    numChange1=(event)=>{
        const{initialCurrency,finalCurrency} = this.state
        const price = conversionState[initialCurrency][finalCurrency]
        this.setState({initial:event.target.value,
                        final:event.target.value*price})
    }
    numChange2=(event)=>{
        const{initialCurrency,finalCurrency} = this.state
        const price = conversionState[initialCurrency][finalCurrency]
        this.setState({initial:event.target.value/price,
                        final:event.target.value})
        
    }
    render(){
        const {initialCurrency,finalCurrency,initial,final}  =this.state
        return(
            <div>
                <select value={initialCurrency} onChange={this.currencyChange1}>
                    <option value="INR">INR</option>
                    <option value="USD">USD</option>
                    <option value="YUVN">Chinese Yuvan</option>
                </select>
                <input type="text" value={initial} onChange={this.numChange1}/>
                <br></br>
                <br></br>
                <select value={finalCurrency} onChange={(this.currencyChange2)}>
                    <option value="USD">USD</option>
                    <option value="INR">INR</option>
                    <option value="YUVN">Chinese Yuvan</option>
                </select>
                <input type="text" value={final} onChange={(this.numChange2)} />
            </div>
        )
    }
}
export default RupeesConvertor