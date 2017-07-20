import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Debug extends Component {
	constructor(props) {
		super(props)
	};

	render = () => (
		<Router>
			<div id="page-degbug">
				<ul>
					<li><Link to="/">Index</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/loock">Loock</Link></li>
				</ul>
				<Route path="/" exact component={ Index }></Route>
				<Route path="/about" component={ About }></Route>
				<Route path="/loock" component={ Loock }></Route>
			</div>
		</Router>
	);
};



const Index = () => (
	<div>首页</div>
);

const About = () => (
	<div>关于我们</div>
);

const Loock = () => (
	<div>锁</div>
);


export default Debug;