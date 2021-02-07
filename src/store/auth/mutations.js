export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.didAutoLogout = false;

    console.log("8888888888888888888888888")
    console.log(state)
    console.log("8888888888888888888888888")
  },
  setAutoLogout(state) {
    state.didAutoLogout = true;
  }
};