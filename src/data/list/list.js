import {
	get
} from '../get';

export function getListData(tab, limit, page) {
	const result = get('https://cnodejs.org/api/v1/topics?tab=' + tab + '&limit=' + limit + '&page=' + page);
	return result
}