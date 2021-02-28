import agent from '../../../api/agent'
import store from '../../../store/index'

export default class Forgotten {
  async showTranslationAction() {


    let data = {
      FromLanguageId: store.getters.fromLanguageId,
      ToLanguageId: store.getters.toLanguageId,
      PhraseId: store.getters.currentPhrase.phraseId,
    };

    return await agent.User.forgetTranslation(data);

  }

  updateCurrentUserPhrase(numberOfRemainingRepetitions) {
    let payload = {
      phraseId: store.getters.currentPhrase.phraseId,
      numberOfRemainingRepetitions: numberOfRemainingRepetitions,
    };
    store.dispatch("updateCurrentUserPhrase", payload);
  }

  async knownPhraseAction() {

    console.log(store.getters.currentPhrase)

    let data = {
      FromLanguageId: store.getters.fromLanguageId,
      ToLanguageId: store.getters.toLanguageId,
      PhraseId: store.getters.currentPhrase.phraseId,
    };

    console.log(data)

    let result = await agent.User.repeatPhrase(data);
    this.updateCurrentUserPhrase(result.data);

    return result


  }
}