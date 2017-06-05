import React from "react";
import TabIcon from "../TabIcon/index.jsx";

class UnitHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			title,
			top,
			tab,
			good
		} = this.props;

		return (
			<div className="unitHeader">
				<TabIcon {...this.props}></TabIcon>
				<h3 className="tittle">{this.props.tittle}</h3>
			</div>
		);
	}
}

export default UnitHeader;