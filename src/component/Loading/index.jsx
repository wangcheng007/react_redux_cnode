import React from "react";
import './style.css';

class Loading extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className="loading">
				<i className="iconfont icon-loading"></i>
				正在加载...
			</div>
		);
	}
}

export default Loading;