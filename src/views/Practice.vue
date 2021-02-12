<template>
  <div class="about">
    <h1>{{type}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "default",
    };
  },
  created() {
    this.type = this.$route.params.type;
  },
};
</script>