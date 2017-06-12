export function getTopicDetailAction(data, loadMsg, loadTopicID) {
	return {
		type: "GET_TOPIC_DETAIL",
		data,
		loadMsg,
		loadTopicID
	};
}

export function updateDataAction(data) {
	return {
		type: "UPDATE_TOPIC_DATA",
		data
	};
}