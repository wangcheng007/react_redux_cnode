import {
	post
} from '../post';

export function createTopic(paramsObj) {
	const result = post(`https://cnodejs.org/api/v1/topics`, paramsObj);
	return result
}