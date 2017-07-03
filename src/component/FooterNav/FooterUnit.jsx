import React from "react";
import {
	IndexLink,
	Link
} from "react-router";

class FooterUnit extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const to = "/" + this.props.targetTo;
		if (this.props.targetTo === "home") {
			return (
				<li>
					<IndexLink to="/" activeStyle={{backgroundColor: 'red'}}>
						<i className={'iconfont icon-' + this.props.targetTo}></i>
						{this.props.children}
					</IndexLink>
				</li>
			)
		} else if(this.props.targetTo === "message"){
			if(this.props.unread == 0){
				return (
					<li>
						<Link to={to} activeStyle={{backgroundColor: 'red'}}>
							<i className={'iconfont icon-' + this.props.targetTo}></i>
							{this.props.children}
						</Link>
					</li>
				)
			}else{
				return (
					<li>
						<Link to={to} activeStyle={{backgroundColor: 'red'}}>
							<i className={'iconfont icon-' + this.props.targetTo}></i>
							<div className="unread">{this.props.unread == 0?"":this.props.unread}</div>
							{this.props.children}
						</Link>
					</li>
				)
			}
		}else{
			return (
				<li>
					<Link to={to} activeStyle={{backgroundColor: 'red'}}>
						<i className={'iconfont icon-' + this.props.targetTo}></i>
						{this.props.children}
					</Link>
				</li>
			)
		}
	}
}

export default FooterUnit;