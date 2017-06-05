export function login(loginname, accesstoken) {
	return {
		type: "LOGIN",
		loginname,
		accesstoken
	};
}