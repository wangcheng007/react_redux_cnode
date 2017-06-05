export function ShowContentOfHeader(state = {
	chooseHeader: "SHOW_ALL"
}, action) {
	switch (action.type) {
		case "CHOOSE_HEADER":
			return {
				chooseHeader: action.targetHeader
			};
		default:
			return state;
	}
}