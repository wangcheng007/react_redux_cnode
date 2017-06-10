import React from "react";
import { connect } from "react-redux";
import Article from '../../component/Article/index.jsx';
import Loading from '../../component/Loading/index.jsx';
import ReplyList from './subpage/ReplyList.jsx';
import { getTopicDetailAction } from '../../action/getTopicDetailAction.js';
import { getTopicDetail } from '../../data/topicdetail/topicdetail.js';

class TopicDetail extends React.Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		if(!this.props.loadTopicID || this.props.loadTopicID !== this.props.params.id){
			var result = getTopicDetail(this.props.params.id);
			result.then((res) => {
				return res.json();
			}).then((json) => {
				this.props.getTopicDetailData(json.data, true, this.props.params.id)
			});
		}
	}

	render(){
		let message;
		if (!this.props.loadMsg) {
			message = <Loading></Loading>
		}else{
			message = (
				<div>
					<Article data={this.props.data}></Article>
					<ReplyList
						data={this.props.data}
						accesstoken={this.props.accesstoken}
						loadTopicID={this.props.loadTopicID}
						loadTopicDetailFn={this.props.getTopicDetailData}
						/>
				</div>
			);
		}
		return message;
	}
}




const mapStateToProps = (state) => {
	return {
		data: state.topicDetail.data,
		loadMsg: state.topicDetail.loadMsg,
		loadTopicID: state.topicDetail.loadTopicID,
		accesstoken: state.personalInfo.accesstoken
	}
}

const mapDispatchToProps = (dispatch, getState) => {
	return {
		getTopicDetailData: (data, loadMsg, loadTopicID) => {
			dispatch(getTopicDetailAction(data, loadMsg, loadTopicID))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TopicDetail);