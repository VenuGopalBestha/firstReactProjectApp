import React, { Component } from 'react'
import axios from 'axios'
export class JsonPlaceHolderGet extends Component {
  constructor(props){
    super(props)
    this.state={post:[]}
  }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response=>{this.setState({post:response.data})})
        .catch(error=>{console.log(error)})
    }
  render() {
    return (
      <div>
        {this.state.post.map(x=><div key={x.id}> {x.body}</div>)}
      </div>
    )
  }
}

export default JsonPlaceHolderGet
