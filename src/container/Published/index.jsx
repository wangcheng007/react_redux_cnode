import React from "react";
import {
	connect
} from "react-redux";
import {
	hashHistory,
	Link
} from 'react-router';
import Header from '../../component/Header/index.jsx';
import { createTopic } from '../../data/createTopic/createTopic.js';
import './index.css';

class Published extends React.Component {
	constructor(props){
		super(props);
	}

	published(){
		const tab = this.refs.tab.value;
		const title = this.refs.title.value;
		const content = this.refs.content.value;
		const accesstoken = this.props.accesstoken;

		if (!tab) {
            return alert('请选择发表类型');
        } else if (title.length < 10) {
            return alert('标题字数10字以上');
        } else if (content.length < 30) {
            return alert('内容字数30字以上');
        }

        let obj = {
			accesstoken,
			title,
			tab,
			content
		}
		let result = createTopic(obj);
		result.then((res) => {
			return res.json();
		}).then((json) => {
			if(json.success){
				alert("发表成功！！！");
				hashHistory.push(`/topic/${json.topic_id}`)
			}
		});
	}

	render() {
		let content;
		if (this.props.loginname === "") {
			content = (
				<div>
					<Header target="published"></Header>
					<div id="no-login">你还未登录，请<Link to="/personal">登录</Link></div>
				</div>
			);
		}else{
			content = (
				<div className="topic-create">
					<Header  target="published"></Header>
					<div className="item">
	                    <select name="tab" ref="tab">
	                        <option value="">请选择发表类型</option>
	                        <option value="share">分享</option>
	                        <option value="ask">问答</option>
	                        <option value="job">招聘</option>
	                        <option value="dev">测试</option>
	                    </select>
	                </div>
	                <div className="item">
	                    <input type="text" ref="title" placeholder="标题字数 10 字以上" />
	                </div>
	                <div className="item">
	                    <textarea ref="content" placeholder="内容字数 30 字以上"></textarea>
	                </div>
	                <div className="item">
	                	<div className="published" onClick={this.published.bind(this)}>
	                		发表
	                	</div>
	                </div>
				</div>
			);
		}
		return content;
	}
}

const mapStateToProps = (state) => {
	return {
		loginname: state.personalInfo.loginname,
		accesstoken: state.personalInfo.accesstoken
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Published);