<template>
  <div class="mid-center">
    <h1>{{ type }}</h1>
    <router-link :to="{ name: 'Profile' }"> Back to Profile</router-link>

    <div class="stack-wrapper">
      <stack ref="stack" :pages="phrasesList" :stackinit="stackinit"></stack>
    </div>
    <div class="controls">
      <button @click="prev" class="button">
        <i class="prev"></i><span class="text-hidden">prev</span>
      </button>
      <span>{{ phrasesList.length }}</span>
      <button @click="next" class="button">
        <i class="next"></i> <span class="text-hidden">next</span>
      </button>
    </div>
  </div>
</template>
<script>
import stack from "../components/Stack";
export default {
  components: {
    stack,
  },
  data() {
    return {
      type: "",
      phrasesList: [],
      stackinit: {
        visible: 3,
      },
    };
  },

  watch: {
    userPhrases() {
      this.getPhrases(this.type);
    },
    newLoadedPhrases(current) {
      let lastKnownPhraseId = this.$store.getters.lastKnownPhraseId;

      console.log(lastKnownPhraseId);
      let phrasesWithoutLastKnown = this.phrasesList.filter((phrase) => {
        return phrase.phraseId != lastKnownPhraseId;
      });

      this.phrasesList = [...phrasesWithoutLastKnown, ...current];
    },
  },
  computed: {
    userPhrases() {
      return this.$store.getters.userPhrases;
    },
    newLoadedPhrases() {
      return this.$store.getters.getNewLoadedPhrases;
    },
  },

  methods: {
    prev() {
      this.$refs.stack.$emit("prev");
    },
    next() {
      this.$refs.stack.$emit("next");
    },
    async getPhrases(filter) {
      console.log(filter);
      switch (filter) {
        case "known": {
          this.phrasesList = this.userPhrases.filter((phrase) => {
            if (phrase.numberOfRemainingRepetitions == 0) {
              return phrase;
            }
          });
          this.$store.dispatch("currentPhrase", this.phrasesList[0]);

          break;
        }
        case "forgotten": {
          this.phrasesList = this.userPhrases.filter((phrase) => {
            if (phrase.numberOfRemainingRepetitions > 0) {
              return phrase;
            }
          });
          this.$store.dispatch("currentPhrase", this.phrasesList[0]);

          break;
        }
        case "file":
          this.phrasesList = this.$store.getters.filePhrases;
          this.$store.dispatch("currentPhrase", this.phrasesList[0]);
          break;
        default: {
          let params = {
            FromLanguageId: this.$store.getters.fromLanguageId,
            ToLanguageId: this.$store.getters.toLanguageId,
            PhrasesCount: this.$store.getters.getNewPhrasesCount,
          };
          let newPhrases = await this.$agent.User.phrasesToLearn(params);
          this.phrasesList = newPhrases;
          this.$store.dispatch("currentPhrase", this.phrasesList[0]);
        }
      }
    },
  },
  created() {
    this.type = this.$route.params.type;
    this.getPhrases(this.type);
  },
};
</script>
<style>
.stack-wrapper {
  margin: 0 auto;
  position: relative;
  z-index: 1000;
  width: 520px;
  height: 320px;
  padding: 0;
  list-style: none;
  pointer-events: none;
}
.controls {
  position: relative;
  width: 200px;
  text-align: center;
  display: flex; /*Flex布局*/
  display: -webkit-flex; /* Safari */
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 50px;
}
.controls .button {
  border: none;
  background: none;
  position: relative;
  display: inline-block;
  cursor: pointer;
  font-size: 16px;
  width: 50px;
  height: 50px;
  z-index: 100;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border-radius: 50%;
  background: #fff;
}
.button .next {
  display: inline-block;
  width: 10px;
  height: 5px;
  background: rgb(129, 212, 125);
  line-height: 0;
  font-size: 0;
  vertical-align: middle;
  left: -5px;
  top: 2px;
  position: relative;
}
.button .next:after {
  content: "/";
  display: block;
  width: 20px;
  height: 5px;
  background: rgb(129, 212, 125);
}
.button .prev {
  display: inline-block;
  width: 20px;
  height: 5px;
  background: rgb(230, 104, 104);
  line-height: 0;
  font-size: 0;
  vertical-align: middle;
}
.button .prev:after {
  content: "/";
  display: block;
  width: 20px;
  height: 5px;
  background: rgb(230, 104, 104);
}
.controls .text-hidden {
  position: absolute;
  overflow: hidden;
  width: 0;
  height: 0;
  color: transparent;
  display: block;
}
</style>