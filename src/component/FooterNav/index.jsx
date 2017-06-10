import React from "react";
import FooterUnit from "../FooterUnit/index.jsx";
import "./style.css";

class FooterNav extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{this.props.children}
				<div className="footer">
					<ul className="footerNav">
						<FooterUnit targetTo="home">首页</FooterUnit>
						<FooterUnit targetTo="published">发表</FooterUnit>
						<FooterUnit targetTo="message">消息</FooterUnit>
						<FooterUnit targetTo="personal">我的</FooterUnit>
					</ul>
				</div>
			</div>
		);
	}
}

export default FooterNav;