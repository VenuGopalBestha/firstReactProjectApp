import React, { Component } from 'react'
import axios from 'axios'
export class SearchingJsonData extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         input:'', post:[]
      }
    }
    submit=()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.state.input}`)
        .then(response=>{this.setState({post:response.data})})
        .catch(error=>{console.log(error)})
    }
    change=(event)=>{
        this.setState({input:event.target.value})
    }
  render() {
    return (
      <div>
        <input type='text' value={this.state.input} onChange={this.change}/>
        <button onClick={this.submit}>Search</button>
        <br></br>
        {this.state.post.title}
      </div>
    )
  }
}

export default SearchingJsonData
