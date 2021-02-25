<template>
  <div>
    <span>{{ type }}</span>
    <div class="alert alert-primary" role="alert">
      {{ phrase.phrase }}
    </div>
    <div v-if="showTranslation" class="alert alert-success" role="alert">
      {{ phrase.translation }}
    </div>
    <button
      v-if="!showTranslation && type != 'known'"
      class="btn btn-success"
      @click="knownPhraseAction"
    >
      I know
    </button>
    <button
      v-if="!showTranslation"
      @click="showTranslationAction"
      class="btn btn-warning"
    >
      Show Translation
    </button>

    <div class="alert alert-info" role="alert">
      {{ message }}
    </div>
    <button
      v-if="showTranslation"
      @click="updateCurrentPhraseRepetitionCount"
      class="btn btn-warning"
    >
      Next
    </button>
  </div>
</template>

<script>
import { PhraseTypeFactory } from "../factories/concrete/phraseTypes/PhraseTypeFactory";
export default {
  props: ["phrase"],
  data() {
    return {
      type: "",
      message:
        "You will see this phrase " +
        this.phrase.numberOfRemainingRepetitions +
        " more times",
      numberOfRemainingRepetitions: 0,
      showTranslation: false,
    };
  },
  computed: {
    phraseType() {
      return new PhraseTypeFactory(this.type);
    },
  },
  methods: {
    async showTranslationAction() {
      this.showTranslation = true;

      let result = await this.phraseType.showTranslationAction();
      if (result.isSuccess) {
        this.message = result.message;
        this.numberOfRemainingRepetitions = result.data;
      }
    },
    updateCurrentPhraseRepetitionCount() {
      this.showTranslation = false;

      this.phraseType.updateCurrentPhraseRepetitionCount(
        this.numberOfRemainingRepetitions
      );

      this.$emit("next");
    },
    async knownPhraseAction() {
      let result = await this.phraseType.knownPhraseAction();
      if (result.isSuccess) {
        this.$emit("next");
      }

    },
  },
  created() {
    this.type = this.$route.params.type;
  },
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.frontend {
  background-color: #3d008d;
  color: white;
}

.backend {
  background-color: #71008d;
  color: white;
}

.career {
  background-color: #8d006e;
  color: white;
}
</style>