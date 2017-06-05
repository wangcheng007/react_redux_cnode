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
		if (this.props.targetTo == "home") {
			return (
				<li>
					<IndexLink to="/" activeStyle={{backgroundColor: 'red'}}>
						<i className={'iconfont icon-' + this.props.targetTo}></i>
						<a>{this.props.children}</a>
					</IndexLink>
				</li>
			)
		} else {
			return (
				<li>
					<Link to={to} activeStyle={{backgroundColor: 'red'}}>
						<i className={'iconfont icon-' + this.props.targetTo}></i>
						<a>{this.props.children}</a>
					</Link>
				</li>
			)
		}
	}
}

export default FooterUnit;