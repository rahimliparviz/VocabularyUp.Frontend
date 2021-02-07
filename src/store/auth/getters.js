export default {
  userId(state) {
    return state.userId;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
     !!state.token;
    return !!localStorage.getItem('token');
  },
  didAutoLogout(state) {
    return state.didAutoLogout;
  }
};