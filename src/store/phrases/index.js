import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  state() {
    return {
      userPhrases: [],
      filePhrases:[],
      currentPhrase:{}
    };
  },
  mutations,
  actions,
  getters
};