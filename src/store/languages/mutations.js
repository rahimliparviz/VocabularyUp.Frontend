export default {
  setFromLanguageId(state, payload) {
    state.fromLanguageId = payload.fromLanguageId;

  },
  setToLanguageId(state, payload) {
    state.toLanguageId = payload.toLanguageId;
  }
};