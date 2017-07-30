// 引入全局通用样式
import './assets/css/reset.less';
import './assets/css/class.less';
import './assets/css/basic.less';
import './store/stateTree.js';
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Index from './pages/index/index.jsx';
import Login from './pages/login/login.jsx';
import Debug from './pages/debug/debug.jsx';


// app组件
const App = () => (
	<div id="app" className="h-100">
		<Index />
	</div>
);

// // app组件
// const App = () => (
// 	<div className="app flex h-100">
// 		<Debug />
// 	</div>
// );

// 渲染APP应用
render(
	<App />,
	document.getElementById('appEntry')
);