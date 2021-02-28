
export default {


  setUserPhrases(context, payload) {
    context.commit('setUserPhrases', {
      userPhrases: payload.userPhrases
    });
  },
  setFilePhrases(context, payload) {
    context.commit('setFilePhrases', {
      filePhrases: payload.filePhrases
    });
  },

  setNewPhrases(context, payload) {
    context.commit('setNewPhrases', {
      newPhrases: payload.newPhrases
    });
    console.log("aaaaaaaaa", context.state.newPhrasesCount)

    context.commit('setNewPhrasesSkipCount', {
      newPhrasesSkipCount: context.state.newPhrasesCount
    });
  },
  setNewPhrasesCount(context, payload) {
    context.commit('setNewPhrasesCount', {
      newPhrasesCount: payload.newPhrasesCount
    });
  },
  setNewPhrasesSkipCount(context, payload) {
    context.commit('setNewPhrasesSkipCount', {
      newPhrasesSkipCount: payload.newPhrasesSkipCount
    });
  },


  
  removeCurrentPhraseFromNewPhrases(context, payload) {
    context.commit('removeCurrentPhraseFromNewPhrases', payload);
  },

  loadNewPhrases(context, payload) {
    context.commit('loadNewPhrases', payload);
  },

  updateCurrentUserPhrase(context, payload) {
    context.commit('updateCurrentUserPhrase', payload);
  },

  currentPhrase(context, payload) {
    context.commit('setCurrentPhrase', payload);
  },
  
   lastKnownPhraseId(context, payload) {
     context.commit('lastKnownPhraseId', payload);
  },

};
