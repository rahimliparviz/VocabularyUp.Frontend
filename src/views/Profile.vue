<template>
  <div class="profile">
    <div class="card-deck">
      <base-panel header="Already Know" bg="bg-success" type="known">
        <h5 class="card-title">
          Words user know <span>({{ knownPhrases.length }})</span>
        </h5>
      </base-panel>
      <base-panel header="Repeat" bg="bg-warning" type="forgotten">
        <h5 class="card-title">
          Forgeten words <span>({{ forgottenPhrases.length }})</span>
        </h5>
      </base-panel>
      <base-panel header="Learn" bg="bg-info" type="new-words">
        <h5 class="card-title">Learn new words</h5>
      </base-panel>

      <base-panel header="Phrases from file" bg="bg-primary" type="new-words">
        <h5 class="card-title">Learn new words</h5>
      </base-panel>
    </div>
  </div>
</template>

<script>
import BasePanel from "../components/ui/BasePanel.vue";
export default {
  components: { BasePanel },
  data() {
    return {
      allPhrases: this.$store.getters.userPhrases,
      profile: {},
    };
  },
  computed: {
    fromLanguageId() {
      return this.$store.getters.fromLanguageId;
    },
    toLanguageId() {
      return this.$store.getters.toLanguageId;
    },
    knownPhrases() {
      return this.allPhrases.filter((phrase) => {
        if (phrase.numberOfRemainingRepetitions == 0) {
          return phrase;
        }
      });
    },

    forgottenPhrases() {
      return this.allPhrases.filter((phrase) => {
        if (phrase.numberOfRemainingRepetitions > 0) {
          return phrase;
        }
      });
    },
  },
  watch: {
    fromLanguageId() {
      this.getPhrases();
    },
    toLanguageId() {
      this.getPhrases();
    },
  },
  methods: {
    getPhrases() {
      let params = {
        FromLanguageId: this.fromLanguageId,
        ToLanguageId: this.toLanguageId,
      };

      this.$agent.User.userPhrases(params).then((data) => {
        console.log(data);
        this.allPhrases = data;
        this.$store.dispatch("setUserPhrases", { userPhrases: data });
      });
    },
  },

  created() {
    this.getPhrases();
  },
};
</script>
<style scoped>
</style>
