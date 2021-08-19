import cookie from "js-cookie";

export function handleLogin(user) {
  cookie.set("token", user);
}

export function handleLogout(user) {
  cookie.remove("token", user);
}
