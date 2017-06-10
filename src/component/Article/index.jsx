import React from 'react';
import Header from '../Header/index.jsx';
import TabIcon from '../TabIcon/index.jsx';
import { Tool } from '../../Tool.js';
import './style.css';

class Article extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
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
		} = this.props.data;
		const htm = this.props.data.content;

		return (
				<div>
					<Header target="xiangqing"></Header>
					<div className="user">
						<div className="headimg"><img src={author.avatar_url} /></div>
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
				</div>
		);
	}
}

export default Article;