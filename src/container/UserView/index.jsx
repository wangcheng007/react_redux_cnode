import React from 'react';
import './style.css';
import Header from '../../component/Header/index.jsx';
import { getUserView } from '../../data/userview/userview.js';
import Loading from '../../component/Loading/index.jsx';
import { Tool } from '../../Tool';
import {
	Link
} from "react-router";

class UserView extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			loadMsg:false,
			data:{}
		}
	}

	componentDidMount(){
		const result = getUserView(this.props.params.loginname);
		result.then((res) => {
			return res.json();
		}).then((json) => {
			this.setState({
				loadMsg:true,
				data: json.data
			});
		});
	}

	choic(type){
		let topic = this.refs.topic;
		let replay = this.refs.replay;
		let topics = this.refs.topics;
		let replays = this.refs.replays;

		if(type === 0){
			topic.style.borderBottom = "5px solid #FFA07A";
			topics.style.display = "block";
			replay.style.borderBottom = "";
			replays.style.display = "none";
		}else{
			replay.style.borderBottom = "5px solid #FFA07A";
			replays.style.display = "block";
			topic.style.borderBottom = "";
			topics.style.display = "none";
		}
	}

	render() {
		let message;
		if(this.state.loadMsg === false){
			message = (
				<div>
					<Header target="personal"></Header>
					<Loading></Loading>
				</div>
			);
		}else{
			message = (
				<div>
					<Header target="personal"></Header>
					<div className="headerinfo">
						<div className="headerinfoimg">
							<img src={this.state.data.avatar_url} />
						</div>
						<div className="headerinfoname">
							<span style={{color:"white", fontSize:"18px"}}>{this.state.data.loginname}</span>
						</div>
						<div className="headerinfocount">
							<span style={{color:"white", fontSize:"16px"}}>积分：{this.state.data.score}  注册于：{Tool.formatDate(this.state.data.create_at)}</span>
						</div>
					</div>
					<div className="operationButton">
						<div style={{borderBottom:"5px solid #FFA07A"}} ref="topic" onClick={this.choic.bind(this, 0)}><span style={{fontSize:"20px"}}>主题</span></div>
						<div ref="replay" onClick={this.choic.bind(this, 1)}><span style={{fontSize:"20px"}}>回复</span></div>
					</div>
					<ul className="userlist" style={{display:"block"}} ref="topics">
						{this.state.data.recent_topics.map((topic, index) => {
							return (<li key={index}>
								<Link to={`/topic/${topic.id}`}>
									<div className="title">{topic.title}</div>
									<div>{Tool.formatDate(topic.last_reply_at)}</div>
								</Link>
							</li>)
						})}
					</ul>
					<ul className="userlist" style={{display:"none"}} ref="replays">
						{this.state.data.recent_replies.map((replay, index) => {
							return (<li key={index}>
								<Link to={`/topic/${replay.id}`}>
									<div className="title">{replay.title}</div>
									<div>{Tool.formatDate(replay.last_reply_at)}</div>
								</Link>
							</li>)
						})}
					</ul>
				</div>
			);
		}
		return message;
	}
}

export default UserView;