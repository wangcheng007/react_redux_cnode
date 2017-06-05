import React from "react";
import ReplayItem from '../ReplayItem/index.jsx';

class ReplayList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="replaylist">
				{this.props.list.map((item, index) =>{
							return <ReplayItem key={index} {...item} count={index} topicID={this.props.topicID}></ReplayItem>
						})}
			</div>
		);
	}
}

export default ReplayList;