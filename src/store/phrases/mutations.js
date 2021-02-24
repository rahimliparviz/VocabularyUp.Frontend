import Vue from 'vue'
export default {
  setUserPhrases(state, payload) {
    state.userPhrases = payload.userPhrases;

  },
  setFilePhrases(state, payload) {
    state.filePhrases = payload.filePhrases;
  },
  updateCurrentUserPhrase(state,payload){

    let index = state.userPhrases.findIndex(x => x.phraseId === payload.phraseId);
    Vue.set(state.userPhrases, index, { ...state.userPhrases[index], numberOfRemainingRepetitions: payload.numberOfRemainingRepetitions });

  }
,
  setCurrentPhrase(state,payload){
    // console.log(payload)
    state.currentPhrase = payload;

  }
};