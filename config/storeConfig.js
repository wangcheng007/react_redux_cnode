import {
	createLogger
} from 'redux-logger';
import {
	createStore,
	applyMiddleware
} from "redux";
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../src/reducer';

const loggerMiddleware = createLogger();
export const store = createStore(
	rootReducer,
	(
		applyMiddleware(thunkMiddleware, loggerMiddleware),
		window.devToolsExtension ? window.devToolsExtension() : undefined
	)
);