export function getListDataAction(data, loadMsg, loadMore) {
	return {
		type: "GET_LIST_DATA",
		data,
		loadMsg,
		loadMore
	};
}

export function loadMoreAction(page, loadMore) {
	return {
		type: "LOAD_MORE",
		page,
		loadMore
	}
}

export function initDataAction(data, loadMsg, loadMore, page) {
	return {
		type: "INIT_DATA",
		data,
		loadMsg,
		loadMore,
		page
	}
}