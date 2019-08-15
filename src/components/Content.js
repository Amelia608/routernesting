import React, { Component } from 'react';
//import url from 'url'
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      page:'home'
     };
  }
  
  componentDidMount(){

  }
  componentDidUpdate(){
	console.log(this.props)
	
  }
  render() {
console.log(this.props)
//console.log(url.parse(this.props.location.search,true))
    return (
      <div className="page_detail">
       <h1>商品详情</h1>
      </div>
    );
  }
}

export default Detail;