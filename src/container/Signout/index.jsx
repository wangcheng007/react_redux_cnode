import React from "react";
import Header from '../../component/Header/index.jsx';
import './style.css';
import { signout } from "../../action/signout.js";
import { connect } from 'react-redux';
import { browserHistory } from "react-router";

class Signout extends React.Component {
	constructor(props){
		super(props);
	}

	signOut(){
		this.props.signout();
		browserHistory.push('/personal');
	}

	render() {
		return (
			<div>
				<Header target="signout"></Header>
				<div className="signout">
					<div className="signoutsubmit" onClick={this.signOut.bind(this)}>确定退出登录？</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch, getState) => {
	return {
		signout: () => {
			dispatch(signout());
		}
	}
}


export default  connect(
	mapStateToProps,
	mapDispatchToProps)(Signout);