import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class Main extends Component{
    
    render(){
        return(
            <div id="main">
				<div className="inner">
					<header>
						<h1>아토큰</h1>
						<p>아토큰은 제주 문화 예술인 후원을 위한 블록체인 플랫폼입니다.</p>
                    </header>
                    <section className="tiles">
						<article className="style1">
							<span className="image">
								<img src="/images/pic01.jpg" alt="" />
							</span>
							<Link to="/wallet">
								<h2>나의 지갑</h2>
								<div className="content">
									<p>전자지갑에 대한 정보를 열람합니다.</p>
								</div>
							</Link>
						</article>
						<article className="style2">
							<span className="image">
								<img src="/images/pic02.jpg" alt="" />
							</span>
							<a href="#">
								<h2>나의 활동</h2>
								<div className="content">
									<p>사용자의 활동에 대한 기록을 보여줍니다.</p>
								</div>
							</a>
						</article>
						<article className="style3">
							<span className="image">
								<img src="/images/pic03.jpg" alt="" />
							</span>
							<a href="#">
								<h2>설정</h2>
								<div className="content">
									<p>계정 설정화면으로 갑니다.</p>
								</div>
							</a>
						</article>				
					</section>
				</div>
			</div>
        )    
    }
}

export default Main;