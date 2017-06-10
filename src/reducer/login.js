export function personalInfo(state = {
	loginname: "",
	accesstoken: ""
}, action) {
	switch (action.type) {
		case "LOGIN":
			// window.localStorage.loginname = action.loginname;
			// window.localStorage.accesstoken = action.accesstoken;
			return {
				loginname: action.loginname,
				accesstoken: action.accesstoken
			};
		case "SIGNOUT":
			// window.localStorage.clear();
			return {
				loginname: "",
				accesstoken: ""
			};
		default:
			return state;
	}
}