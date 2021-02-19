
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

  forgetTranslation(context, payload) {
    context.commit('forgetTranslation', payload);
  },


 
 
};