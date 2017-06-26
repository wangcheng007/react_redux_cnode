import React from 'react';
import ReactDOM from 'react-dom';
import {
	Provider
} from 'react-redux';
import {
	routeConfig
} from "../config/routeConfig";
import {
	store
} from "../config/storeConfig.js";
import './iconfont/index.css';
import './iconfont/iconfont.css';

const rootEL = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		{routeConfig}
	</Provider>,
	rootEL
);