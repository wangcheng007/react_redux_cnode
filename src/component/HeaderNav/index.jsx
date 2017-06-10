import React from "react";
import HeaderList from "../../container/HeaderList/index.jsx";
import './style.css';

class HeaderNav extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="header">
				<ul className="headerNav">
					<HeaderList targetHeader="SHOW_ALL">全部</HeaderList>
					<HeaderList targetHeader="SHOW_GOOD">精华</HeaderList>
					<HeaderList targetHeader="SHOW_SHARE">分享</HeaderList>
					<HeaderList targetHeader="SHOW_ASK">问答</HeaderList>
					<HeaderList targetHeader="SHOW_JOB">招聘</HeaderList>
				</ul>
			</div>
		)
	}
}

export default HeaderNav;