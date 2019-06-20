import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Login extends Component{
    
    render(){
        return(
            <div id="main">
				<div className="inner">
					<header>
						<h1>아토큰</h1>
						<p>아토큰은 제주 문화 예술인 후원을 위한 블록체인 플랫폼입니다.</p>
                    </header>
                    <form method="post" action="http://54.180.81.141:3000/API/membernew">
                        <div className="row gtr-uniform">
                            <div className="col-6 col-12-xsmall">
                                <input type="email" name="demo-email" id="demo-email" placeholder="Email" />
                            </div>
                            <div className="col-6 col-12-xsmall">
                                <input type="password" name="password" id="password" placeholder="password" />
                            </div>
                            <div className="col-12">
                                <ul className="actions fit">
                                    <li><Link to="/main"><input type="submit" value="Login" className="primary" /></Link></li>
                                    <li><Link to="/signUp" className="button">회원 가입</Link></li>
                                </ul>
                            </div>
                        </div>
                    </form>
				</div>
			</div>
        )    
    }
}

export default Login;