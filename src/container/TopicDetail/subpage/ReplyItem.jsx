import React from "react";
import { browserHistory } from 'react-router';
import { Tool } from '../../../Tool.js';
import { dianzanData } from '../../../data/dianzan/dianzan.js';
import { getTopicDetail } from '../../../data/topicdetail/topicdetail.js';
import { addReply } from '../../../data/reply/addReply.js';

class ReplyItem extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			display: this.props.display
		}

		this.isUp.bind(this);
	}

	dianzan(index){
		if(!this.props.accesstoken){
			alert("请先登录！！！");
			browserHistory.push('/personal');
			return ;
		}
		if(this.props.loginname === this.props.author.loginname){
			alert("不能给自己点赞！！！");
			return ;
		}
		const dianzan = this.refs.dianzan;
		const paramsObj = {
			accesstoken: this.props.accesstoken
		};
		let result = dianzanData(paramsObj, this.props.id);

		var ups = this.props.ups;
		result.then((res) =>{
			return res.json();
		}).then((json) => {
			if(json.action === "up"){
				dianzan.style.color = "red";
				ups.push(this.props.uid);
				this.props.loadTopicDetailFn(this.props.data, true, this.props.loadTopicID);
			}else if(json.action === "down"){
				dianzan.style.color = "gray";
				for (let i = 0; i < ups.length; i++) {
                    if (ups[i] === this.props.uid) {
                        ups.splice(i, 1);
                    };
                }
				this.props.loadTopicDetailFn(this.props.data, true, this.props.loadTopicID);
			}
		});
	}

	reply(){
		if(!this.props.accesstoken){
			alert("请先登录！！！");
			browserHistory.push('/personal');
			return ;
		}

		let display = this.state.display;
		if(display === "block"){
			display = 'none';
		}else{
			display = 'block';
		}
		this.setState({
			display: display
		});
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

	isUp(arr){
		const uid = this.props.uid;
		for (let i = 0; i < arr.length; i++) {
            if (arr[i] === uid){
              	return true;
            }
        }
        return false;
	}

	render(){
		const {
			author,
			index,
			create_at,
			content,
			id,
			ups
		} = this.props;
		const isUp = this.isUp(ups);

		return (
			<div className="replayitem">
				<div className="clear-fix replayerinfo">
					<div className="left-fix replayerimg">
						<img src={author.avatar_url} alt=""/>
					</div>
					<div className="right-fix">
						<span>#{index+1}</span>
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
					<div style={{padding:"0 10px 0 10px"}} onClick={this.dianzan.bind(this, index)}><i className="iconfont icon-dianzandian" style={isUp?{color:"red"}:{color:"gray"}} ref="dianzan"></i></div>
					<div style={{padding:"0 10px 0 10px"}} onClick={this.reply.bind(this)}><i className="iconfont icon-back"></i></div>
				</div>
				<div className="replyBox clear-fix" ref="replyBox" style={{display: this.state.display}}>
					<div>
						<textarea ref="content" placeholder={`@${author.loginname}`}></textarea>
					</div>
					<div className="replySubmit" onClick={this.replySubmit.bind(this, id)}>
						回复
					</div>
				</div>
			</div>
		);
	}
}

export default ReplyItem;