import React from "react";
import FooterUnit from "./FooterUnit.jsx";
import { connect } from 'react-redux';
import { getUnreadMessage } from '../../data/message/message.js';
import "./style.css";

class FooterNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			unread:0
		}
	}

	componentDidMount(){
		if(this.props.accesstoken !== ""){
			let result = getUnreadMessage(this.props.accesstoken);
			result.then((res) =>{
				return res.json();
			}).then((json) =>{
				if(json.success){
					this.setState({
						unread: json.data
					})
				}
			});
		}
	}

	render() {
		return (
			<div>
				{this.props.children}
				<div className="footer">
					<ul className="footerNav">
						<FooterUnit targetTo="home">首页</FooterUnit>
						<FooterUnit targetTo="published">发表</FooterUnit>
						<FooterUnit targetTo="message" unread={this.state.unread}>消息</FooterUnit>
						<FooterUnit targetTo="personal">我的</FooterUnit>
					</ul>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) =>{
	return {
		accesstoken: state.personalInfo.accesstoken
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FooterNav);