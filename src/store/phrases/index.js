import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  state() {
    return {
      userPhrases: [],
      newPhrases: [],
      newPhrasesCount: 15,
      newPhrasesSkipCount:15,
      lastKnownPhraseId:null,
      newLoadedPhrases:[],
      filePhrases:[],
      currentPhrase:{},
      
    };
  },
  mutations,
  actions,
  getters
};