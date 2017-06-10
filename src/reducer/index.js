import {
	combineReducers
} from 'redux';
import {
	ShowContentOfHeader
} from './ShowContentOfHeader.js';
import {
	personalInfo
} from './login.js';
import {
	topicDetail
} from './topicDetail.js';
import {
	listData
} from './listData.js';

const rootReducer = combineReducers({
	ShowContentOfHeader,
	personalInfo,
	topicDetail,
	listData
});

export default rootReducer;