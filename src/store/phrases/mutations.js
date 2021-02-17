export default {
  setUserPhrases(state, payload) {
    state.userPhrases = payload.userPhrases;

  },
  setFilePhrases(state, payload) {
    state.filePhrases = payload.filePhrases;
  }
};