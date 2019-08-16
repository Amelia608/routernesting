import Home from '../components/Home'
import News from '../components/News'
import Detail from '../components/Detail'
import Products from '../components/Products'
import Content from '../components/Content'
import User from '../components/User'
import Info from '../components/user/Info'
import Edit from '../components/user/Edit'
const routes = [{
	path: '/',
	component: Home,
	exact: true
}, {
	path: '/news',
	component: News
}, {
	path: '/product',
	component: Products
}, {
	path: '/detail',
	component: Detail
}, {
	path: '/content/:id',
	component: Content
}, {
	path: '/user',
	component: User,
	routes: [{ //路由嵌套
		path: '/user/',
		component: Info
	}, {
		path: '/user/edit',
		component: Edit
	}]
}]
export default routes;