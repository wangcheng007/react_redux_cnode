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
		default:
			return state;
	}
}