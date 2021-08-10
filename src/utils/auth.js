import cookie from 'js-cookie'

export function handleLogin(token) {
    cookie.set('token', token)
}

export function handleLogout(token) {
    cookie.remove('token', token)
}