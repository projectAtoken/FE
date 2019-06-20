import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './css/common.css';
import './css/custom.css';
import Login from './login.js'
import SignUp from './signUp.js'
import Main from './main.js'
import Wallet from './wallet.js'

function App() {
  return (
    <div id="wrapper" className="App atoken_login">
      <header id="header">
			<div className="inner">
				<a href="index.html" className="logo">
					<span className="title">프로젝트 아토큰</span>
				</a>
			</div>
		</header>
			<Router>
			<Switch>				
				<Route exact path="/" component={Login}/>
				<Route path="/main" component={Main}/>
				<Route path="/signUp" component={SignUp}/>
				<Route path="/wallet" component={Wallet}/>
				<Route component={Login}/>
			</Switch>
			</Router>
     <footer id="footer">
		<div className="inner">
			<strong>PROJECT ATOKEN</strong>
			<ul className="copyright">
				<li>&copy; All rights reserved 제주 블록체인 스터디 모임</li>
			</ul>
		</div>
	</footer>
    </div>
  );
}

export default App;
