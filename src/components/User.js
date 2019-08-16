import React, {
	Component
} from 'react';
import {
	Layout,
	Menu,
	Icon
} from 'antd';

import {
	Link,
	Route
} from "react-router-dom"
const {
	Header,
	Content,
	Footer,
	Sider
} = Layout;
class User extends Component {
	constructor(props) {
		super(props);
		this.state = {
			page: '用户界面'
		}
	}
	componentWillMount() {
		console.log(this.props);
	}
	render() {
		return (
			<Layout>
			    <Sider
			      breakpoint="lg"
			      collapsedWidth="0"
			      onBreakpoint={broken => {
			        console.log(broken);
			      }}
			      onCollapse={(collapsed, type) => {
			        console.log(collapsed, type,'dfdfdf');
			      }}
			    >
			      <div className="logo" />
			      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
			        <Menu.Item key="1">
			          <Link to="/user/"> 
			          	<Icon type="account-book" /> 
						<span className="nav-text">个人信息</span> 
						</Link>
			        </Menu.Item>
			        <Menu.Item key="2">
			         <Link to="/user/edit"> 
			          	 <Icon type="highlight" />
			          	<span className="nav-text">编辑个人信息</span>
						</Link>
			        </Menu.Item>
			      </Menu>
			    </Sider>
			    <Layout>
			      <Header style={{ background: '#fff', padding: 0 }} ></Header>
			      <Content style={{ margin: '24px 16px 0' }}>
			        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
			        	{
			        		this.props.routes.map((route,key)=>{
			        			return (<Route exact path={route.path} component={route.component} key={key}/>)
			        		})
			        	}
			        </div>
			      </Content>
			      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
			    </Layout>
			  </Layout>
		)
	}
}
export default User;