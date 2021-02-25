import agent from '../../../api/agent'
import store from '../../../store/index'

export default class LearnType {
    async showTranslationAction() {
        
        let data = {
            FromLanguageId: store.getters.fromLanguageId,
            ToLanguageId: store.getters.toLanguageId,
            PhraseId: store.getters.currentPhrase.phraseId,
        };
        
        return await agent.User.learnNewPhrase(data);
        
    }

    //TODO metodun adini deyis
    updateCurrentPhraseRepetitionCount(numberOfRemainingRepetitions) {
       
        store.dispatch("updateCurrentUserPhrase", {
            phraseId: store.getters.currentPhrase.phraseId,
            numberOfRemainingRepetitions: numberOfRemainingRepetitions,
        });
        store.dispatch("updateNewPhrases", {
            phraseId: store.getters.currentPhrase.phraseId,
        });
        
    }


    async knownPhraseAction() {


        let data = {
            FromLanguageId: store.getters.fromLanguageId,
            ToLanguageId: store.getters.toLanguageId,
            PhraseId: store.getters.currentPhrase.phraseId,
        };

        let result = await agent.User.alreadyKnownPhrase(data);
        store.dispatch("updateNewPhrases", {
            phraseId: store.getters.currentPhrase.phraseId,
        });

        return result


    }


}