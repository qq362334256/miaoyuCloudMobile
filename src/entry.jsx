// 引入全局通用样式
import './assets/css/reset.less';
import './assets/css/class.less';
import './assets/css/basic.less';
import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Header from './components/layout/header/header.jsx';
import LeftMenu from './components/layout/menu/leftMenu.jsx';


// app组件
const App = () => (
	<div className="app flex h-100">
		<LeftMenu></LeftMenu>
		<div className="right-main flex1" style={{background: 'green'}}>
			<Header></Header>
		</div>
	</div>
);

// 渲染APP应用
render(
	<App />,
	document.getElementById('appEntry')
);