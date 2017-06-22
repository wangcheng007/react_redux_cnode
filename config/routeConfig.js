import React from "react";
import {
	Route,
	IndexRoute,
	Router,
	browserHistory,
	hashHistory,
	applyRouterMiddleware
} from "react-router";
import {
	useScroll
} from 'react-router-scroll';
import FooterNav from "../src/component/FooterNav/index.jsx";
import App from "../src/component/App/index.jsx";
import Published from "../src/container/Published/index.jsx";
import Message from "../src/container/Message/index.jsx";
import UserInfo from "../src/container/UserInfo/index.jsx";
import TopicDetail from "../src/container/TopicDetail/index.jsx";
import UserView from "../src/container/UserView/index.jsx";
import Signout from "../src/container/Signout/index.jsx";

export const routeConfig = (
	<Router history={hashHistory} render={applyRouterMiddleware(useScroll())}>
		<Route path="/" component={FooterNav}>
			<IndexRoute component={App}></IndexRoute>
			<Route path="published" component={Published}></Route>
			<Route path="message" component={Message}></Route>
			<Route path="personal" component={UserInfo}></Route>
			<Route path="user/:loginname" component={UserView} />
		</Route>
		<Route path="topic/:id" component={TopicDetail}></Route>
		<Route path="signout" component={Signout}></Route>
	</Router>
);