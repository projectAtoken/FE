import React, {Component} from 'react';

class Wallet extends Component{
    
    render(){
        return(
            <div id="main">
				<div class="inner">
					<header>
						<h1>나의 전자지갑</h1>
						<p>사용자의 현재 지갑 상태입니다.</p>
                    </header>
                    <h3>현재 잔액</h3>
                    <ul class="alt">
                        <li>0<span> coin.</span></li>
                    </ul>
                    <h3>이체 내역</h3>
                    <div class="table-wrapper">
                            <table class="alt">
                                <thead>
                                    <tr>
                                        <th>보낸 사람</th>
                                        <th>받는 사람</th>
                                        <th>금액</th>
                                        <th>거래 날짜</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>evan</td>
                                        <td>billy</td>
                                        <td>23 coin</td>
                                        <td>2019.02.22</td>
                                    </tr>
                                    <tr>
                                        <td>evan</td>
                                        <td>billy</td>
                                        <td>23 coin</td>
                                        <td>2019.02.22</td>
                                    </tr>
                                    <tr>
                                        <td>evan</td>
                                        <td>billy</td>
                                        <td>23 coin</td>
                                        <td>2019.02.22</td>
                                    </tr>
                                    <tr>
                                        <td>evan</td>
                                        <td>billy</td>
                                        <td>23 coin</td>
                                        <td>2019.02.22</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    <div class="col-12 col-12-medium">
                        <ul class="actions stacked">
                            <li><a href="#" class="button primary fit">후원하러가기</a></li>
                            <li><a href="#" class="button fit">충전하기</a></li>
                        </ul>
                    </div>
				</div>
			</div>
        )    
    }
}

export default Wallet;