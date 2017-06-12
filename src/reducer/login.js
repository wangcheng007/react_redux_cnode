export function personalInfo(state = {
	loginname: "",
	uid: "",
	accesstoken: ""
}, action) {
	switch (action.type) {
		case "LOGIN":
			// window.localStorage.loginname = action.loginname;
			// window.localStorage.accesstoken = action.accesstoken;
			return {
				loginname: action.loginname,
				uid: action.uid,
				accesstoken: action.accesstoken
			};
		case "SIGNOUT":
			// window.localStorage.clear();
			return {
				loginname: "",
				uid: "",
				accesstoken: ""
			};
		default:
			return state;
	}
}