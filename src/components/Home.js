import React, { Component } from 'react';
import { Card,Row, Col  } from 'antd';
const { Meta } = Card;
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      page:'home',
      list:[
      	{
      		id:'1',
      		title:'Europe Street beat',
      		set:'www.instagram.com'
      	},
      	{
      		id:'2',
      		title:'Europe Street beat',
      		set:'www.instagram.com'
      	},
      	{
      		id:'3',
      		title:'Europe Street beat',
      		set:'www.instagram.com'
      	},
      	{
      		id:'4',
      		title:'Europe Street beat',
      		set:'www.instagram.com'
      	},
      	{
      		id:'5',
      		title:'Europe Street beat',
      		set:'www.instagram.com'
      	},
      	{
      		id:'6',
      		title:'Europe Street beat',
      		set:'www.instagram.com'
      	},
      	{
      		id:'7',
      		title:'Europe Street beat',
      		set:'www.instagram.com'
      	}
      ],
     };
  }
  render() {
    return (
      <div className="page_home">
        <Row gutter={15}>
        {
        	this.state.list.map(el=>{
        		return (
        			<Col span={6} key={el.id}>
        				 <Card
								    hoverable
								    style={{ width: '100%',marginBottom:'20px' }}
								    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
								  >
								    <Meta title="Europe Street beat" description="www.instagram.com" />
  							</Card>
        			</Col>
        		)
        	})
        }
		    </Row>
      </div>
    );
  }
}

export default Home;