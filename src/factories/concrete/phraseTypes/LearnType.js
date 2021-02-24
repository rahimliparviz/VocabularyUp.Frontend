import agent from '../../../api/agent'
export default class LearnType {
    async showTranslationAction(data) {
        return await agent.User.learnNewPhrase(data);
    }
}