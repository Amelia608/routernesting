import React from 'react';
import './App.css';
import Home from './components/Home'
import News from './components/News'
import Header from './components/Header'
import Detail from './components/Detail'
import Products from './components/Products'
import Content from './components/Content'
import { BrowserRouter as Router, Route } from "react-router-dom"

import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
       <Router>
      <div>
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/news" component={News} />
        <Route path="/detail" component={Detail} />
        <Route path='/product' component={Products} />
        <Route path='/content/:id' component={Content}/>
      </div>
    </Router>
    </div>
  );
}

export default App;
