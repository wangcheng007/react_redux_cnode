export function getTopicDetailAction(data, loadMsg, loadTopicID) {
	return {
		type: "GET_TOPIC_DETAIL",
		data,
		loadMsg,
		loadTopicID
	};
}