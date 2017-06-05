import React from "react";
import {
	markdown
} from 'markdown';
import Header from "../Header/index.jsx";
import Loading from "../Loading/index.jsx";
import CommentsList from '../CommentsList/index.jsx';
import TabIcon from '../TabIcon/index.jsx';
import ReplayList from '../ReplayList/index.jsx';
import { getTopicDetail } from '../../data/topicdetail/topicdetail.js';
import { Tool } from '../../Tool.js';

class Topic extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			loadMsg: false
		};
	}

	componentDidMount() {
		var result = getTopicDetail(this.props.params.id);

		result.then((res) => {
			return res.json();
		}).then((json) => {
			console.log(json);
			this.setState({
				data: json.data,
				loadMsg: true
			});
		});
	}

	render() {
		let message = "";

		const {
			title,
			top,
			tab,
			good,
			author,
			create_at,
			visit_count,
			reply_count,
			replies
		} = this.state.data;
		if (!this.state.loadMsg) {
			message = <Loading></Loading>
		} else {
			const htm = this.state.data.content;
			message = (
				<div>
					<Header target="xiangqing"></Header>
					<div className="user">
						<div className="headimg"><img src={this.state.data.author.avatar_url} /></div>
						<div className="topicinfo">
							<div>
								<span style={{fontSize:"20px"}}>{author.loginname}</span> &nbsp;&nbsp;
								<span style={{fontSize:"16px"}}>{Tool.formatDate(create_at)}</span>
							</div>
							<div>
								<span style={{fontSize:"16px"}}>阅读：{visit_count}</span>&nbsp;&nbsp;
								<span style={{fontSize:"16px"}}>回复：{reply_count}</span>
							</div>
						</div>
						<div className="topictab">
							<TabIcon tittle={title} top={top} tab={tab} good={good}></TabIcon>
						</div>
					</div>
					<div className="topictitle">
						<h2>{title}</h2>
					</div>
					<div className="content markdown-body" dangerouslySetInnerHTML={{__html:  htm}} />
					<div className="comments">
						<div className="commentsheader">
							<span>
								共{this.state.data.reply_count}回复
							</span>
						</div>
						<ReplayList list={replies} topicID={this.state.data.id}/>
					</div>
				</div>
			);
		}

		return message;
	}
}

export default Topic;