import React from "react";

class HeaderNavUnit extends React.Component {
	render() {
		const active = this.props.active;
		const onClick = this.props.onClick;
		const children = this.props.children;

		let objStyle = {
			'transform': 'rotate(10deg)'
		};

		if (active) {
			return <li><a href="#" onClick={onClick} style={objStyle}>{children}</a></li>
		} else {
			return <li><a href="#" onClick={onClick}>{children}</a></li>
		}

	}
}

export default HeaderNavUnit;