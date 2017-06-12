export function topicDetail(state = {
	data: {},
	loadMsg: false,
	loadTopicID: ""
}, action) {
	switch (action.type) {
		case "GET_TOPIC_DETAIL":
			return {
				data: action.data,
				loadMsg: action.loadMsg,
				loadTopicID: action.loadTopicID
			};
		case "UPDATE_TOPIC_DATA":
			return {
				data: action.data,
				loadMsg: state.loadMsg,
				loadTopicID: state.loadTopicID
			}
		default:
			return state;
	}
}