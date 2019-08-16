import React from 'react';
import './App.css';
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"
import routes from './model/router'

import 'antd/dist/antd.css';

function App() {
  console.log(routes)
  return (
    <div className="App">
       <Router>
      <div>
        <Header />
				 {
              routes.map((route,key)=>{
									let ele=route.exact?<Route key={key} exact path={route.path}   render={props => (<route.component {...props} routes={route.routes} />)}/>:
                  <Route  key={key}  path={route.path} render={props => (<route.component {...props} routes={route.routes} />)}/>
									return ele
              })
            }    
      </div>
    </Router>
    </div>
  );
}

export default App;