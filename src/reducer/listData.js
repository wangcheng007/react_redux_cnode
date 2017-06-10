export function listData(state = {
	data: {},
	loadMsg: false,
	page: 1,
	limit: 10,
	loadMore: false
}, action) {
	switch (action.type) {
		case "GET_LIST_DATA":
			return {
				data: action.data,
				loadMsg: action.loadMsg,
				page: state.page,
				limit: state.limit,
				loadMore: action.loadMore
			};
		case "LOAD_MORE":
			return {
				data: state.data,
				loadMsg: state.loadMsg,
				page: action.page,
				limit: state.limit,
				loadMore: action.loadMore
			};
		case "INIT_DATA":
			return {
				data: action.data,
				loadMsg: action.loadMsg,
				page: action.page,
				limit: state.limit,
				loadMore: action.loadMore
			};
		default:
			return state;
	}
}