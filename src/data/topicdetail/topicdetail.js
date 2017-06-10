import {
	get
} from '../get';

export function getTopicDetail(topicID) {
	const result = get('https://cnodejs.org/api/v1/topic/' + topicID);
	return result
}