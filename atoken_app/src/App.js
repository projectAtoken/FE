import React from 'react';
import logo from './logo.svg';
import './css/common.css';
import './css/custom.css';
import Login from './login.js'

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

     <Login/>

     <footer id="footer">
				<div class="inner">
          <strong>PROJECT ATOKEN</strong>
					<ul class="copyright">
						<li>&copy; All rights reserved 제주 블록체인 스터디 모임</li>
					</ul>
				</div>
			</footer>
    </div>
  );
}

export default App;
