import React, { Component } from 'react';
import { Descriptions } from 'antd';
class Info extends Component{
	constructor(props){
		super(props);
		this.state={
			page:'个人信息页面'
		}
	}
	render(){
		return (
			<Descriptions title="User Info">
			    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
			    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
			    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
			    <Descriptions.Item label="Remark">empty</Descriptions.Item>
			    <Descriptions.Item label="Address">
			      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
			    </Descriptions.Item>
			 </Descriptions>
		)
	}
}

export default Info;