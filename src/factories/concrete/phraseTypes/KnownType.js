import agent from '../../../api/agent'
import store from '../../../store/index'



export default class KnownType {
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
}