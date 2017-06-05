import React from "react";
import {
	connect
} from "react-redux";
import Topic from "../../component/Topic/index.jsx";
import './style.css';

const mapStateToProps = (state) => {
	return {
		data: state.topicDetail.data
	}
}

const mapDispatchToProps = (dispatch, getState) => {
	return {}
}

const TopicDetail = connect(
	mapStateToProps,
	mapDispatchToProps
)(Topic);

export default TopicDetail;