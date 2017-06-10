import { connect } from "react-redux";
import List from "./subpage/List.jsx";
import { getListDataAction , loadMoreAction , initDataAction } from '../../action/getListDataAction';

const mapStateToProps = (state) => {
	return {
		tab: state.ShowContentOfHeader.chooseHeader,
		data: state.listData.data,
		loadMsg: state.listData.loadMsg,
		page: state.listData.page,
		limit: state.listData.limit,
		loadMore: state.listData.loadMore
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getListData: (data, loadMsg, loadMore) => {
			dispatch(getListDataAction(data, loadMsg, loadMore))
		},

		loadMoreData: (page, loadMore) => {
			dispatch(loadMoreAction(page, loadMore))
		},

		initData: (data, loadMsg, loadMore, page) => {
			dispatch(initDataAction(data, loadMsg, loadMore, page))
		}
	}
}

const ChooseContentList = connect(
	mapStateToProps,
	mapDispatchToProps)(List);

export default ChooseContentList;