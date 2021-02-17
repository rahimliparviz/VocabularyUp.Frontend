
export default {
 

  setFromLanguageId(context, payload) {
    context.commit('setFromLanguageId', {
      fromLanguageId: payload.fromLanguageId
    });
  },
  setToLanguageId(context, payload) {
    context.commit('setToLanguageId', {
      toLanguageId: payload.toLanguageId
    });
  },


 
 
};
