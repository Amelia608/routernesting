import React, { Component } from 'react';
import { Rate,Input } from 'antd';
const { TextArea } = Input;
class Edit extends Component{
	constructor(props){
		super(props);
		this.state={
			page:'个人信息页面'
		}
	}
	render(){
		return (
			<div>
				<TextArea placeholder="Autosize height based on content lines" autosize />
				<br/><br/>
				<TextArea
				      placeholder="Autosize height with minimum and maximum number of lines"
				      autosize={{ minRows: 2, maxRows: 6 }}/>
				<Rate allowHalf defaultValue={2.5} />
			</div>
		)
	}
}

export default Edit;