import {
	connect
} from "react-redux";
import {
	fetchData
} from "../../action/chooseHeader.js";
import List from "../../component/List/index.jsx";
import './style.css';

const mapStateToProps = (state) => {
	return {
		tab: state.ShowContentOfHeader.chooseHeader
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

const ChooseContentList = connect(
	mapStateToProps,
	mapDispatchToProps)(List);

export default ChooseContentList;