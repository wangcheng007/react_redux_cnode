import React from "react";

class TabIcon extends React.Component {
	render() {
		let {
			tab,
			top,
			good
		} = this.props;


		if (top) {
			tab = 'top';
		} else if (good) {
			tab = 'good';
		}

		return (
			<i className={'iconfont icon-' + tab}></i>
		);
	}
}

export default TabIcon;