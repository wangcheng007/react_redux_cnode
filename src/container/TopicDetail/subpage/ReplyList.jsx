import React from "react";
import ReplyItem from './ReplyItem.jsx'
import { addReply } from '../../../data/reply/addReply.js';
import { getTopicDetail } from '../../../data/topicdetail/topicdetail.js';
import './ReplyList.css';

class ReplyList extends React.Component {
	constructor(props){
		super(props);
	}

	replySubmit(){
		let replycontent = this.refs.content;

		const paramsObj = {
			accesstoken: this.props.accesstoken,
			content: replycontent.value
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
				<div className="replyBox clear-fix" ref="replyBox">
					<div>
						<textarea ref="content"></textarea>
					</div>
					<div className="replySubmit" onClick={this.replySubmit.bind(this)}>
						回复
					</div>
				</div>
				<div className="replaylist">
					{this.props.data.replies.map((item, index) =>{
							return (
								<ReplyItem key={index} {...item} index={index}
									accesstoken={this.props.accesstoken} loadTopicID={this.props.loadTopicID}
									loadTopicDetailFn={this.props.loadTopicDetailFn} uid={this.props.uid}
									loginname={this.props.loginname} data={this.props.data}
								/>
							);
						})}
				</div>
			</div>
		);
	}
}

export default ReplyList;