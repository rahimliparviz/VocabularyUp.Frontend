
export default {
  userId(state) {
    return state.userId;
  },
  token(state) {
    return state.token;
  },
  role(state) {
    return state.role;
  },
  isAuthenticated(state) {
     !!state.token;
    return !!localStorage.getItem('token');
  },
  didAutoLogout(state) {
    return state.didAutoLogout;
  }
};