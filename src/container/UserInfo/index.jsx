import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { login } from "../../action/login.js";
import Header from '../../component/Header/index.jsx';
import { loginData } from '../../data/login/login.js';
import { hashHistory } from "react-router";

class UserInfo extends React.Component {
	constructor(props){
		super(props);
	}

	login(){
		const accesstoken = this.refs.accessToken.value;
		let obj = {
			accesstoken
		}
		let result = loginData(obj);
		result.then((res) => {
			if(res.ok){
				alert("登陆成功！！")
			}else{
				alert("登陆失败！！")
				return
			}
			return res.json();
		}).then((json) => {
			this.props.login(json.loginname, json.id, accesstoken);
		});
	}

	render() {
		let message;
		if(this.props.loginname){
			hashHistory.push('/user/' + this.props.loginname);
			message = <div></div>
		}else{
			message = (
				<div>
					<Header target="login"></Header>
					<div className="login">
						<input type="text" placeholder="accessToken" ref="accessToken"/>
						<div className="loginsubmit" onClick={this.login.bind(this)}>登录</div>
					</div>
				</div>
			);
		}
		return message;
	}
}


const mapStateToProps = (state) => {
	return {
		loginname: state.personalInfo.loginname
	}
}

const mapDispatchToProps = (dispatch, getState) => {
	return {
		login: (loginname, uid, accesstoken) => {
			dispatch(login(loginname, uid, accesstoken));
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps)(UserInfo);