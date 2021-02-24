
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

  updateCurrentUserPhrase(context, payload) {
    context.commit('updateCurrentUserPhrase', payload);
  },

  currentPhrase(context, payload) {
    context.commit('setCurrentPhrase', payload);
  },

 
};
