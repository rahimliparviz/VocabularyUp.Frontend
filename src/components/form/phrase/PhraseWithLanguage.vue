<template>
  <div class="row">
    <div class="form-group col-md-6">
      <label for="inputState">Language</label>
      <span type="text" class="form-control">{{ language.name }}</span>
      <input type="hidden" value="language.id" />
    </div>

    <div class="form-group col-md-6">
      <label for="inputCity">Translation</label>
      <input type="text" class="form-control" v-model="word" @keyup="setTranslation"  />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    language: Object,
  },
  data() {
    return {
      word: "",
    };
  },
  methods: {
    setTranslation() {
      this.$emit("on-translation-adding", {word:this.word,languageId:this.language.id});
    },
  },
};
</script>