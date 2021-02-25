
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
  },

  updateNewPhrases(context, payload) {
    context.commit('updateNewPhrases', payload);
  },

  updateCurrentUserPhrase(context, payload) {
    context.commit('updateCurrentUserPhrase', payload);
  },

  currentPhrase(context, payload) {
    context.commit('setCurrentPhrase', payload);
  },

 
};
