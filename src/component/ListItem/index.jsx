import React from "react";
import UnitHeader from "../UnitHeader/index.jsx";
import UnitBody from "../UnitBody/index.jsx";
import {
	Link
} from "react-router";

class ListItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			id,
			title,
			visit_count,
			reply_count,
			create_at,
			loginname,
			last_reply_at,
			avatar_url,
			top,
			tab,
			good
		} = this.props;

		let author = this.props.author;
		return (
			<li>
				<Link to={`/topic/${id}`} >
					<UnitHeader tittle={title} top={top} tab={tab} good={good}></UnitHeader>
					<UnitBody authorURL={author.avatar_url} loginname={author.loginname} {...this.props}></UnitBody>
				</Link>
			</li>
		);
	}
}

export default ListItem;