import {
	post
} from '../post';

export function loginData(paramsObj) {
	const result = post('https://cnodejs.org/api/v1/accesstoken', paramsObj);
	return result
}