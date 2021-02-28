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
    updateCurrentUserPhrase(numberOfRemainingRepetitions) {

        store.dispatch("lastKnownPhraseId", { lastKnownPhraseId: store.getters.currentPhrase.phraseId });
        this.loadNewPhrases();


        store.dispatch("updateCurrentUserPhrase", {
            phraseId: store.getters.currentPhrase.phraseId,
            numberOfRemainingRepetitions: numberOfRemainingRepetitions,
        });

       
    
    }


    async knownPhraseAction() {


        let data = {
            FromLanguageId: store.getters.fromLanguageId,
            ToLanguageId: store.getters.toLanguageId,
            PhraseId: store.getters.currentPhrase.phraseId,
        };

        let result = await agent.User.alreadyKnownPhrase(data);
        // store.dispatch("removeCurrentPhraseFromNewPhrases", {
        //     phraseId: store.getters.currentPhrase.phraseId,
        // });

        store.dispatch("lastKnownPhraseId", { lastKnownPhraseId: store.getters.currentPhrase.phraseId });
        this.loadNewPhrases();
        return result


    }


    async loadNewPhrases() {

        let newPhrasesSkipCount = store.getters.getNewPhrasesSkipCount;

        let params = {
            FromLanguageId: store.getters.fromLanguageId,
            ToLanguageId: store.getters.toLanguageId,
            PhrasesCount: 1,
            SkipPhrases: newPhrasesSkipCount
        };
        let newLoadedPhrases = await agent.User.phrasesToLearn(params);
        store.dispatch("loadNewPhrases", { newLoadedPhrases: newLoadedPhrases });
        store.dispatch("setNewPhrasesSkipCount", { newPhrasesSkipCount: newPhrasesSkipCount += 1 });

    }


}