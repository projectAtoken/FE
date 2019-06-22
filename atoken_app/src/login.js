import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Login extends Component{

    state = {
        isLogin: false,
      }

    constructor() {
        super();
        this.state={ userName:'', userPassword:'', securityKey:'' }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event =>{
        this.setState({ [event.target.name]:event.target.value })    
    }

    handleSubmit(event) {
        event.preventDefault();
        // const data = new FormData(event.target);
        const data = { userName:this.state.userName, userPassword:this.state.userPassword, securityKey:"Haveagoodday" }

        console.log("User userName : " + this.state.userName)
        console.log("User userPassword : " + this.state.userPassword)
        console.log("User securityKey : " + data.securityKey)
        console.log("User data : " + JSON.stringify(data))

        console.log("handleSubmit", data);
        
        fetch('http://54.180.81.141:4000/API/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
            },
          body: JSON.stringify(data),  
        //   JSON.stringify(data),
        })
        .then(response => { 
            console.log("response ok: ", response);
            console.log("response ok: ", response.json());
            // <Link to="/main">
            // <Link to='/main'/>
            // isLogin = true;
            this.setState(() => ({
                isLogin: true
              }))

            return response.json();
            // return <Link to='/main'/>
        })
        .then(responseData => {
            console.log(responseData); 
            return responseData;
        })
        .then(data => {
            this.setState({"questions" : data});
        })
        .catch(err => {
              console.log("fetch error: " + err);
        });
    }
    
    render(){
        if (this.state.isLogin === true) {
            return <Link to='/main' />
        } 

        return(
            <div id="main">
				<div className="inner">
					<header>
						<h1>아토큰</h1>
						<p>아토큰은 제주 문화 예술인 후원을 위한 블록체인 플랫폼입니다.</p>
                    </header>
                    <form onSubmit={this.handleSubmit}>
                    
                        <label htmlFor="username">Enter username</label>
                        <input id="userName" name="userName" type="email" onChange={this.handleChange} />

                        <label htmlFor="email">Enter your email</label>
                        <input id="userPassword" name="userPassword" type="password" onChange={this.handleChange} />

                        {/* <label htmlFor="birthdate">Enter your birth date</label> */}
                        
                        {/* <input id="securityKey" name="securityKey"  value="Haveagoodday" type="hidden" /> */}

                        <div className="col-12">
                            {/* <input type="hidden" id="securityKey" name="securityKey" defalutValue="Haveagoodday" ref="inputText" /> */}
                            <ul>
                            </ul>
                        </div>
                        <div className="col-12">
                        <button>Login</button>
                        </div>

                    </form>

                    <div className="col-12">
                                <ul className="actions fit">
                                    {/* <li><Link to="/main"><input type="submit" value="Login" className="primary" /></Link></li> */}
                                    <li><Link to="/signUp" className="button">회원 가입</Link></li>
                                </ul>
                            </div>
                    {/* <form method="post" action="http://54.180.81.141:3000/API/membernew">
                        <div className="row gtr-uniform">
                            <div className="col-6 col-12-xsmall">
                                <input type="email" name="userName" id="userName" placeholder="Email" />
                            </div>

                            <div className="col-6 col-12-xsmall">
                                 <input type="hidden" name="securityKey" value="Haveagoodday" />
                            </div>

                            <div className="col-6 col-12-xsmall">
                                <input type="password" name="userPassword" id="userPassword" placeholder="password" />
                            </div>
                            <div className="col-12">
                                <ul className="actions fit">
                                    <li><Link to="/main"><input type="submit" value="Login" className="primary" /></Link></li>
                                    <li><Link to="/signUp" className="button">회원 가입</Link></li>
                                </ul>
                            </div>
                        </div>
                    </form> */}
				</div>
			</div>
        )    // end of return
    
    }
}

export default Login;