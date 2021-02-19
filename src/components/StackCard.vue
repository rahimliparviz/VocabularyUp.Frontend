<template>
  <div>
    <span>{{ type }}</span>
    <div class="alert alert-primary" role="alert">
      {{ phrase }} -- {{ phraseId }}
    </div>
    <div v-if="showTranslation" class="alert alert-success" role="alert">
      {{ translation }}
    </div>
    <button v-if="!showTranslation && type != 'known'" class="btn btn-success">
      I know
    </button>
    <button
      v-if="!showTranslation"
      @click="shorTranslation"
      class="btn btn-warning"
    >
      Show
    </button>

    <div v-if="showTranslation" class="alert alert-info" role="alert">
      {{ message }}
    </div>
    <button
      v-if="showTranslation"
      @click="practiceAndNextPhrase"
      class="btn btn-warning"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  props: ["phrase", "translation", "phraseId"],
  data() {
    return {
      type: "",
      message: "",
      numberOfRemainingRepetitions: 0,
      showTranslation: false,
    };
  },
  methods: {
    shorTranslation() {
      this.showTranslation = true;

      let data = {
        FromLanguageId: this.$store.getters.fromLanguageId,
        ToLanguageId: this.$store.getters.toLanguageId,
        PhraseId: this.phraseId,
      };

      this.$agent.User.forgetTranslation(data).then((response) => {
        if (response.isSuccess) {
          this.message = response.message;
          this.numberOfRemainingRepetitions =
            response.numberOfRemainingRepetitions;
          this.showTranslation = true;
        }
      });
    },
    practiceAndNextPhrase() {
      this.showTranslation = false;

      let payload = {
        phraseId: this.phraseId,
        numberOfRemainingRepetitions: this.numberOfRemainingRepetitions,
      };
      this.$store.dispatch("forgetTranslation", payload);

      this.$emit("next");
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