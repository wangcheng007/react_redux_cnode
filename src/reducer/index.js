import {
	combineReducers
} from 'redux';

import {
	ShowContentOfHeader
} from './ShowContentOfHeader.js';
import {
	personalInfo
} from './login.js';

const rootReducer = combineReducers({
	ShowContentOfHeader,
	personalInfo
});

export default rootReducer;