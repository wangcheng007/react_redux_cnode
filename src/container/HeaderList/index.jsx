import React from "react";
import { connect } from "react-redux";
import HeaderNavUnit from "../../component/HeaderNavUnit/index.jsx";
import { chooseHeader } from "../../action/chooseHeader.js";

const mapStateToProps = (state, ownPros) => {
	return {
		active: ownPros.targetHeader === state.ShowContentOfHeader.chooseHeader,
		targetHeader: ownPros.targetHeader
	}
}

const mapDispatchToProps = (dispacth, ownPros) => {
	const targetHeader = chooseHeader(ownPros.targetHeader);
	return {
		onClick: () => {
			dispacth(targetHeader);
		}
	}
}

const HeaderList = connect(
	mapStateToProps,
	mapDispatchToProps)(HeaderNavUnit);

export default HeaderList;