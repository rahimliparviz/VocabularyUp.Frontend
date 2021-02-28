import Vue from 'vue'
export default {
  setUserPhrases(state, payload) {
    state.userPhrases = payload.userPhrases;

  },
  setFilePhrases(state, payload) {
    state.filePhrases = payload.filePhrases;
  },
  setNewPhrases(state, payload) {
    state.newPhrases = payload.newPhrases;

  },
  removeCurrentPhraseFromNewPhrases(state, payload) {
    let index = state.newPhrases.findIndex(x => x.phraseId === payload.phraseId);
    state.newPhrases.splice(index, 1)
  },
  setNewPhrasesCount(state, payload){
    state.newPhrasesCount = payload.newPhrasesCount;

  },
  setNewPhrasesSkipCount(state, payload) {
    state.newPhrasesSkipCount = payload.newPhrasesSkipCount;
  },

  loadNewPhrases(state, payload) {
    // let allNewPhrases = [...state.newPhrases,...payload.newPhrases]
    // console.log(allNewPhrases)
    // Vue.set(state, "newPhrases", allNewPhrases);
    state.newLoadedPhrases = payload.newLoadedPhrases;
  },
  updateCurrentUserPhrase(state, payload) {

    let index = state.userPhrases.findIndex(x => x.phraseId === payload.phraseId);
    Vue.set(state.userPhrases, index, { ...state.userPhrases[index], ...payload });

  }
  ,
  setCurrentPhrase(state, payload) {
    state.currentPhrase = payload;

  },
  lastKnownPhraseId(state, payload) {
    state.lastKnownPhraseId = payload.lastKnownPhraseId;

  }

  
};