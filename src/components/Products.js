import React, { Component } from 'react';
import {  Link} from "react-router-dom"
import { Row, Col, Card} from 'antd';
const { Meta } = Card;

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      page:'News',
      list:[
      	{
      		id:'1',
      		title:'商品0001'
      	},
      	{
      		id:'2',
      		title:'商品0002'
      	},
      	{
      		id:'3',
      		title:'商品0003'
      	},
      	{
      		id:'4',
      		title:'商品0004'
      	},
      	{
      		id:'5',
      		title:'商品0005'
      	}
      ]
     };
  }
  render() {
    return (
      <div className="page_news">
       <Row gutter={16}>
        	{
        		this.state.list.map(el=>{
        			return (
        			  <Col className="gutter-row" span={4} key={el.id}>
						        <div className="gutter-box">
						        	<Link to={`/content/${el.id}`}>
						        		 <Card
													    hoverable
													    style={{ width: '100%',marginBottom:'20px' }}
													    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
													  >
													    <Meta title="Europe Street beat" description="www.instagram.com" />
					  							</Card>
						        	</Link>
						        </div>
						    </Col>
        			)
        		})
        	}
         </Row>
      
      </div>
    );
  }
}

export default Products;