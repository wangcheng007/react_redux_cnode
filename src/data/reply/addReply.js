import {
	post
} from '../post';

export function addReply(paramsObj, id) {
	const result = post(`https://cnodejs.org/api/v1/topic/${id}/replies`, paramsObj);
	return result
}