export function login(loginname, uid, accesstoken) {
	return {
		type: "LOGIN",
		loginname,
		uid,
		accesstoken
	};
}