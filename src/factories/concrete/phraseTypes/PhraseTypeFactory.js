import KnownType  from "./KnownType"
import Learntype from "./LearnType"
import ForgottenType from "./ForgottenType"

export class PhraseTypeFactory {
    constructor(type) {
        //TODO - typlari enumdan getir!
        if (type === "known")
            return new KnownType();
        if (type === "new-words")
            return new Learntype();
        if (type === "forgotten")
            return new ForgottenType();
    }

}