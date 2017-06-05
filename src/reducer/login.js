export function personalInfo(state = {
	loginname: "",
	accesstoken: ""
}, action) {
	switch (action.type) {
		case "LOGIN":
			window.localStorage.loginname = action.loginname;
			window.localStorage.accesstoken = action.accesstoken;
			return {
				loginname: action.loginname
			};
		case "SIGNOUT":
			window.localStorage.clear();
			return {
				loginname: ""
			};
		default:
			return state;
	}
}