import React from "react";
import { browserHistory } from 'react-router';
import { Tool } from '../../../Tool.js';
import { dianzanData } from '../../../data/dianzan/dianzan.js';
import { getTopicDetail } from '../../../data/topicdetail/topicdetail.js';
import { addReply } from '../../../data/reply/addReply.js';
import './ReplyList.css';

class ReplyList extends React.Component {
	constructor(props){
		super(props);
	}

	dianzan(){
		if(!this.props.accesstoken){
			alert("请先登录！！！");
			browserHistory.push('/personal');
			return ;
		}
		const dianzan = this.refs.dianzan;
		const paramsObj = {
			accesstoken: this.props.accesstoken
		};
		let result = dianzanData(paramsObj, this.props.data.id);

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
		if(!this.props.accesstoken){
			alert("请先登录！！！");
			browserHistory.push('/personal');
			return ;
		}
		let replyBox = this.refs.replyBox;
		if( "" === replyBox.style.display  || replyBox.style.display === "none"){
			replyBox.style.display = "block"
		}else if(replyBox.style.display === "block"){
			replyBox.style.display = "none"
		}
	}

	replySubmit(id){
		let replycontent = this.refs.content;

		const paramsObj = {
			accesstoken: this.props.accesstoken,
			content: replycontent.value,
			reply_id: id
		}

		const result = addReply(paramsObj, this.props.loadTopicID);
		result.then((res) => {
			return res.json();
		}).then((json) => {
			if(json.success){
				const topicDetailData = getTopicDetail(this.props.loadTopicID);
				topicDetailData.then((res) => {
					return res.json();
				}).then((json) => {
					this.props.loadTopicDetailFn(json.data, true, this.props.loadTopicID);
					this.reply();
				});
			}
		});
	}

	render(){
		return (
			<div className="comments">
				<div className="commentsheader">
					共{this.props.data.reply_count}回复
				</div>
				<div className="replaylist">
					{this.props.data.replies.map((item, index) =>{
								return (
									<div className="replayitem" key={index}>
										<div className="clear-fix replayerinfo">
											<div className="left-fix replayerimg">
												<img src={item.author.avatar_url} alt=""/>
											</div>
											<div className="right-fix">
												<span>#{index+1}</span>
											</div>
											<div className="replayinfo">
												<div className="replayername">
													<span>{item.author.loginname}</span> &nbsp;&nbsp;
													<span>{Tool.formatDate(item.create_at)}</span>
												</div>
												<div className="replaycontent markdown-body" dangerouslySetInnerHTML={{__html:  item.content}}>
												</div>
											</div>
										</div>
										<div className="replaybottom" >
											<div style={{padding:"0 10px 0 10px"}} onClick={this.dianzan.bind(this)}><i className="iconfont icon-dianzandian" style={{color:"gray"}} ref="dianzan"></i></div>
											<div style={{padding:"0 10px 0 10px"}} onClick={this.reply.bind(this)}><i className="iconfont icon-back"></i></div>
										</div>
										<div className="replyBox clear-fix" ref="replyBox">
											<div>
												<textarea ref="content" placeholder={`@${item.author.loginname}`}></textarea>
											</div>
											<div className="replySubmit" onClick={this.replySubmit.bind(this, item.id)}>
												回复
											</div>
										</div>
									</div>
								);
							})}
				</div>
			</div>
		);
	}
}

export default ReplyList;