
export default {
  userPhrases(state) {
    return state.userPhrases;
  },
  filePhrases(state) {
    return state.filePhrases;
  },
  newPhrases(state) {
    return state.newPhrases;
  },
  currentPhrase(state){
    return state.currentPhrase
  },
  getNewPhrasesCount(state){
    return state.newPhrasesCount
  }
  ,
  getNewPhrasesSkipCount(state) {
    return state.newPhrasesSkipCount
  }
,
  getNewLoadedPhrases(state){
    return state.newLoadedPhrases
  },

  lastKnownPhraseId(state){
    return state.lastKnownPhraseId
  }

  
};