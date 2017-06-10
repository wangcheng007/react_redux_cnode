import React from 'react';
import ReactDOM from 'react-dom';
import {
	Provider
} from 'react-redux';
import {
	routeConfig
} from "./config/routeConfig";
import {
	store
} from "./config/storeConfig.js";
import './src/iconfont/index.css';
import 'github-markdown-css';
import './src/iconfont/iconfont.css';

const rootEL = document.getElementById('content');
ReactDOM.render(
	<Provider store={store}>
		{routeConfig}
	</Provider>,
	rootEL
);