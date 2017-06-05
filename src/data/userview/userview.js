import {
	get
} from '../get';

export function getUserView(loginname) {
	const result = get('https://cnodejs.org/api/v1/user/' + loginname);
	return result
}