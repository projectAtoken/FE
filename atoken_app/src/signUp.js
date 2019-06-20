import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class SignUp extends Component{
    
    render(){
        return(
			<div id="main">
				<div className="inner">
					<header>
						<h1>회원 가입</h1>
						<p>아토큰 서비스의 회원으로 등록합니다.</p>
                    </header>
                    <form method="post" action="#">
                        <div className="row gtr-uniform">
                            <div className="col-12 col-12-xsmall">
                                <input type="email" name="demo-email" id="demo-email" value="" placeholder="Email" />
                            </div>
                            <div className="col-12 col-12-xsmall">
                                <input type="password" name="password" id="password" value="" placeholder="password" />
                            </div>
                            <div className="col-12 col-12-xsmall">
                                <input type="password" name="password" id="password" value="" placeholder="비밀번호 확인" />
                            </div>
                            <div className="col-12">
                                <ul className="actions fit">
                                    <li><Link to="/main"><a href="#" className="button">회원 가입</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </form>
				</div>
			</div>
        )    
    }
}

export default SignUp;