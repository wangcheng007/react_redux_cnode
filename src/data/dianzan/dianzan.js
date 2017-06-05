import {
	post
} from '../post';

export function dianzanData(paramsObj, id) {
	const result = post(`https://cnodejs.org/api/v1/reply/${id}/ups`, paramsObj);
	return result
}