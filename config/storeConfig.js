import {
	createStore,
	applyMiddleware
} from "redux";
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../src/reducer';

export const store = createStore(
	rootReducer,
	(
		applyMiddleware(thunkMiddleware),
		window.devToolsExtension ? window.devToolsExtension() : undefined
	)
);