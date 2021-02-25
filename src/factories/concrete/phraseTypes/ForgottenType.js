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

  updateCurrentPhraseRepetitionCount(numberOfRemainingRepetitions) {
    let payload = {
      phraseId: store.getters.currentPhrase.phraseId,
      numberOfRemainingRepetitions: numberOfRemainingRepetitions,
    };
    store.dispatch("updateCurrentUserPhrase", payload);
  }

  async knownPhraseAction() {


    let data = {
      FromLanguageId: store.getters.fromLanguageId,
      ToLanguageId: store.getters.toLanguageId,
      PhraseId: store.getters.currentPhrase.phraseId,
    };

    let result = await agent.User.repeatPhrase(data);
    this.updateCurrentPhraseRepetitionCount(result.data);

    return result


  }
}