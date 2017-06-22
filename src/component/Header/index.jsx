import React from "react";
import {
	hashHistory
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
						<div className="icon" onClick={hashHistory.goBack}>
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
						<div className="icon" onClick={hashHistory.goBack}>
							<i className="iconfont icon-back"></i>
						</div>
						<div className="headerContent">登录</div>
						<div className="icon"></div>
					</div>
					);
				break;
			case "personal":
				if(this.props.tit === ""){
					content = (
						<div className="header">
							<div className="icon"></div>
							<div className="headerContent">个人中心</div>
							<div className="icon" onClick={this.signOut.bind(this)}>
								<i className="iconfont icon-kaiguan"></i>
							</div>
						</div>
					);
				}else{
					content = (
						<div className="header">
							<div className="icon" onClick={hashHistory.goBack}>
								<i className="iconfont icon-back"></i>
							</div>
							<div className="headerContent">{this.props.tit}个人中心</div>
							<div className="icon"></div>
						</div>
					);
				}
				break;
				case "signout":
					content = (
						<div className="header">
							<div className="icon" onClick={hashHistory.goBack}>
								<i className="iconfont icon-back"></i>
							</div>
							<div className="headerContent">退出</div>
							<div className="icon"></div>
						</div>
					);
				break;
				case "published":
					content=(
						<div className="header">
							<div className="icon" onClick={hashHistory.goBack}>
								<i className="iconfont icon-back"></i>
							</div>
							<div className="headerContent">发表主题</div>
							<div className="icon"></div>
						</div>
					);
				break;
				case "message":
				content=(
						<div className="header">
							<div className="icon" onClick={hashHistory.goBack}>
								<i className="iconfont icon-back"></i>
							</div>
							<div className="headerContent">消息</div>
							<div className="icon"></div>
						</div>
					);
				break;
		}

		return content;
	}
}

export default Header;