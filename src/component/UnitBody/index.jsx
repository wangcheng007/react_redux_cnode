import React from "react";
import {
	Tool
} from '../../Tool';

class UnitBody extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="unitBody">
				<img className="headerIMG" src={this.props.authorURL}/>
				<div className="bodyInfo">
					<div className="personInfo">
						<span>{this.props.loginname}</span>
						<span>{this.props.reply_count}/{this.props.visit_count}</span>
					</div>
					<div className="timeInfo">
						<span>{Tool.formatDate(this.props.create_at)}</span>
						<span>{Tool.formatDate(this.props.last_reply_at)}</span>
					</div>
				</div>
			</div>
		);
	}
}

export default UnitBody;