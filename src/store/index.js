import Vue from 'vue'
import Vuex from 'vuex'
import authModule from './auth/index.js'
import languageModule from './languages/index.js'
import phrasesModule from './phrases/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {
  },
  actions: {
    
  },
  modules: {
    auth:authModule,
    language:languageModule,
    phrase: phrasesModule
  }
})
