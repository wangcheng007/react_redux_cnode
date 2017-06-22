import {
	get
} from '../get';

export function getUnreadMessage(accesstoken) {
	const result = get('https://cnodejs.org/api/v1/message/count?accesstoken=' + accesstoken);
	return result;
}

export function getMessageList(accesstoken) {
	const result = get('https://cnodejs.org/api/v1/messages?accesstoken=' + accesstoken);
	return result;
}