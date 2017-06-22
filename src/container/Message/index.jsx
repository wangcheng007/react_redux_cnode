import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Header from '../../component/Header/index.jsx';
import { getMessageList } from '../../data/message/message.js';
import { Tool } from '../../Tool';
import './index.css';

class Message extends React.Component {
	constructor(props){
		super(props);
		this.state={
			data:{}
		}
	}

	componentDidMount(){
		if(this.props.accesstoken){
			let result = getMessageList(this.props.accesstoken);
			result.then((res) => {
				return res.json();
			}).then((json) => {
				this.setState({
					data:json.data
				})
			})
		}
	}

	render() {
		let content;
		if (this.props.loginname === "" || !this.state.data.hasnot_read_messages || !this.state.data.has_read_messages) {
			content = (
				<div>
					<Header target="message"></Header>
					<div id="no-login">你还未登录，请<Link to="/personal">登录</Link></div>
				</div>
			);
		}else{
			content=(
				<div>
					<Header target="message"></Header>
					<div className="messageList">
						{
							this.state.data.hasnot_read_messages.map((item, index) =>{
								return(
									<div className="unreadmessage" key={index}>
										<div className="imgContent">
											<img src={item.author.avatar_url}/>
										</div>
										<div className="unreadmark"></div>
										<div className="replyContent">
											<div><Link to={`/user/${item.author.loginname}`}>{item.author.loginname}</Link>&nbsp;&nbsp;&nbsp;{Tool.formatDate(item.reply.create_at)}</div>
											<div>回复了你的话题<Link to={`/topic/${item.topic.id}`} >{item.topic.title}</Link></div>
										</div>
									</div>
								);
							})
						}
						{
							this.state.data.has_read_messages.map((item, index) =>{
								return(
									<div className="readedmessage" key={index}>
										<div className="imgContent">
											<img src={item.author.avatar_url}/>
										</div>
										<div className="replyContent">
											<div><Link to={`/user/${item.author.loginname}`}>{item.author.loginname}</Link>&nbsp;&nbsp;&nbsp;{Tool.formatDate(item.reply.create_at)}</div>
											<div>回复了你的话题<Link to={`/topic/${item.topic.id}`} >{item.topic.title}</Link></div>
										</div>
									</div>
								);
							})
						}
					</div>
				</div>
			);
		}
		return content;
	}
}

const mapStateToProps = (state) =>{
	return {
		loginname: state.personalInfo.loginname,
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
)(Message);