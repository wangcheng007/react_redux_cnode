import React from "react";
import {
	browserHistory
} from "react-router";
import './style.css';

class Header extends React.Component {
	constructor(props){
		super(props);
	}

	signOut(){
		browserHistory.push('/signout');
	}

	render() {
		let target = this.props.target;

		let content;
		switch(target){
			case "xiangqing":
				content = (
					<div className="header">
						<div className="icon" onClick={browserHistory.goBack}>
							<i className="iconfont icon-back"></i>
						</div>
						<div className="headerContent">详情</div>
						<div className="icon"></div>
					</div>
					);
				break;
			case "login":
				content = (
					<div className="header">
						<div className="icon" onClick={browserHistory.goBack}>
							<i className="iconfont icon-back"></i>
						</div>
						<div className="headerContent">登录</div>
						<div className="icon"></div>
					</div>
					);
				break;
			case "personal":
				content = (
					<div className="header">
						<div className="icon"></div>
						<div className="headerContent">个人中心</div>
						<div className="icon" onClick={this.signOut.bind(this)}>
							<i className="iconfont icon-kaiguan"></i>
						</div>
					</div>
					);
				break;
				case "signout":
					content = (
						<div className="header">
							<div className="icon" onClick={browserHistory.goBack}>
								<i className="iconfont icon-back"></i>
							</div>
							<div className="headerContent">退出</div>
							<div className="icon"></div>
						</div>
						);
					break;
		}

		return content;
	}
}

export default Header;