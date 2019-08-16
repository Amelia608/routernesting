import React, {
  Component
} from 'react';
import {
  Link
} from "react-router-dom"
import {
  Menu,
  Icon
} from 'antd';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'header'
    };
  }
  render() {
    return (
      <Menu  mode="horizontal">
    	 <Menu.Item key="home">
          <Link to="/"> <Icon type="home" />首页</Link>
        </Menu.Item>
         <Menu.Item key="news">
          <Link to="/news"><Icon type="global" />新闻</Link>
        </Menu.Item>
         <Menu.Item key="pro">
          <Link to="/product"><Icon type="account-book" />产品</Link>
        </Menu.Item>
          <Menu.Item key="user">
          <Link to="/user"><Icon type="account-book" />个人中心</Link>
        </Menu.Item>
    	</Menu>
    );
  }
}

export default Header;