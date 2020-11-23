<template>
  <div class="row">
    <div class="col-md-5">
      <form>
        <div class="form-row">
          <div class="form-group  col-md-6">
            <label for="inputState"> Language</label>
            <select id="inputState" class="form-control">
              <option v-for="language in languages" :key="language.id">{{language.name}}</option>
            </select>
          </div>

          <div class="form-group col-md-6">
            <label for="inputCity">Phrase</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
        </div>
      </form>
    </div>
    <div class="col-md-4">
      <div class="row">
        <PhraseWithLanguage
          v-bind:language='language'
          v-for="language in languages"
          :key="language.id"
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
          >
            {{ language.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import PhraseWithLanguage from "../../components/form/phrase/PhraseWithLanguage";
export default {
  data() {
    return {
      translations: [],
      languageFilter: "",
      languages: [],
    };
  },
  methods: {
    removeTranslations() {},
    getLanguages() {
      this.$agent.Language.list()
        .then((data) => {
          console.log(data);
          this.languages = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addTranslationLanguage(){

    }
  },
  // components: {
  //   PhraseWithLanguage,
  // },
  computed: {
    filteredLanguages() {
      return this.languages.filter((language) => {
        return language.name.match(this.languageFilter);
      });
    },

    // selectedTranslations(){
    //   this.translations
    // }
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
