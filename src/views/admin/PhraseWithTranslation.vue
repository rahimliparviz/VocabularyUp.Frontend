<template>
  <div class="row">
    <div class="col-md-5">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputState"> Language</label>
          <select
            id="inputState"
            class="form-control"
            v-model="phraseLanguageId"
          >
            <option
              v-for="language in languages"
              :key="language.id"
              v-bind:value="language.id"
            >
              {{ language.name }}
            </option>
          </select>
        </div>

        <div class="form-group col-md-6">
          <label for="inputCity">Phrase</label>
          <input
            type="text"
            class="form-control"
            id="inputCity"
            v-model="phrase"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-12">
          <button
            class="btn btn-success"
            @click="savePhrase"
            :disabled="!formStatus"
          >
            Save
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="row">
        <PhraseWithLanguage
          v-bind:language="language"
          v-for="language in translations"
          :key="language.id"
          v-on:on-translation-adding="addTranslationWord"
        >
        </PhraseWithLanguage>
      </div>
    </div>
    <div class="col-md-3">
      <div class="row">
        <label for="inputCity">Languages</label>
        <input
          class="form-control"
          id="myInput"
          type="text"
          placeholder="Search.."
          v-model="languageFilter"
        />
        <br />
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="language in filteredLanguages"
            :key="language.id"
            :class="{ 'list-group-item-success': language.selected }"
            @click="setTranslationLanguage(language)"
          >
            {{ language.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import PhraseWithLanguage from "../../components/form/phrase/PhraseWithLanguage";
export default {
  data() {
    return {
      phrase: "",
      phraseLanguageId: null,
      translations: [],
      languageFilter: "",
      languages: [],
    };
  },
  methods: {
    getLanguages() {
      this.$agent.Language.list()
        .then((data) => {
          this.languages = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    setTranslationLanguage(language) {
      this.$set(language, "selected", !language.selected);

      if (language.selected) {
        this.translations.push(language);
      } else {
        this.translations.splice(this.translations.indexOf(language), 1);
      }
    },
    addTranslationWord(e) {
      let translation = this.translations.find((tr) => {
        return tr.id == e.languageId;
      });
      this.$set(translation, "word", e.word);
    },

    savePhrase() {
      let translations = this.translations.map((tr) => {
        return { languageId: tr.id, word: tr.word };
      });

      let data = {
        phraseLanguageId: this.phraseLanguageId,
        phrase: this.phrase,
        translations:translations,
        // translations: "saa",
      };

      // let translations = [];

      console.log(data);

      this.$agent.Phrase.createWithTranslations(data)
        .then(() => {
          console.log("created");
          // this.createMode = false;
          // this.allLanguages();
          // this.errors = [];
        })
        .catch((errorData) => {
          this.errors = errorData.data.errors;
          console.log(errorData);
        });
    },
  },
  components: {
    PhraseWithLanguage,
  },
  computed: {
    filteredLanguages() {
      return this.languages.filter((language) => {
        if (language.id != this.phraseLanguageId) {
          return language.name.match(this.languageFilter);
        }
      });
    },

    formStatus() {
      let status = true;

      if (!(this.phraseLanguageId && this.phrase && this.translations.length)) {
        status = false;
      }

      if (this.translations.length) {
        for (let tr = 0; tr < this.translations.length; tr++) {
          const element = this.translations[tr];
          if (!element.word) {
            status = false;
            break;
          }
        }
      }
      return status;
    },
  },
  created() {
    this.getLanguages();
  },
};
</script>
<style scoped>
ul {
  width: 100%;
}
.list-group-item {
  cursor: pointer;
}
</style>
