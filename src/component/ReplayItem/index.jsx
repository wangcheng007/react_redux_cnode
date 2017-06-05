import React from "react";
import { Tool } from '../../Tool';
import { dianzanData } from '../../data/dianzan/dianzan.js';
import { addReply } from '../../data/reply/addReply.js';

class ReplayItem extends React.Component {
	constructor(props) {
		super(props);
	}

	dianzan(){
		const dianzan = this.refs.dianzan;
		const paramsObj = {
			accesstoken: window.localStorage.accesstoken
		};
		let result = dianzanData(paramsObj, this.props.id);

		console.log(this.props);
		result.then((res) =>{
			return res.json();
		}).then((json) => {
			console.log(json);
			if(json.action === "up"){
				dianzan.style.color = "red";
			}else if(json.action === "down"){
				dianzan.style.color = "gray";
			}
		});
	}

	reply(){
		let replyBox = this.refs.replyBox;

		if(replyBox.style.display === "none" || replyBox.style.display === ""){
			replyBox.style.display = "block"
		}else{
			replyBox.style.display = "none"
		}
	}

	replySubmit(id){
		let replycontent = this.refs.content;

		const paramsObj = {
			accesstoken: window.localStorage.accesstoken,
			content: replycontent.value,
			reply_id: id
		}

		const result = addReply(paramsObj, this.props.topicID);
		result.then((res) => {
			return res.json();
		}).then((json) => {
			console.log(json);
		});
	}

	render() {
		const {
			author,
			create_at,
			count,
			content
		} = this.props;

		return (
			<div className="replayitem">
				<div className="clear-fix replayerinfo">
					<div className="left-fix replayerimg">
						<img src={author.avatar_url} alt=""/>
					</div>
					<div className="right-fix">
						<span>#{count+1}</span>
					</div>
					<div className="replayinfo">
						<div className="replayername">
							<span>{author.loginname}</span> &nbsp;&nbsp;
							<span>{Tool.formatDate(create_at)}</span>
						</div>
						<div className="replaycontent markdown-body" dangerouslySetInnerHTML={{__html:  content}}>
						</div>
					</div>
				</div>
				<div className="replaybottom" >
					<div style={{padding:"0 10px 0 10px"}} onClick={this.dianzan.bind(this)}><i className="iconfont icon-dianzandian" style={{color:"gray"}} ref="dianzan"></i></div>
					<div style={{padding:"0 10px 0 10px"}} onClick={this.reply.bind(this)}><i className="iconfont icon-back"></i></div>
				</div>
				<div className="replyBox clear-fix" ref="replyBox">
					<div>
						<textarea ref="content" placeholder={`@${author.loginname}`}></textarea>
					</div>
					<div className="replySubmit" onClick={this.replySubmit.bind(this, this.props.id)}>
						回复
					</div>
				</div>
			</div>
		);
	}
}

export default ReplayItem;