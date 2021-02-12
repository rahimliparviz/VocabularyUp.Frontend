<template>
  <div class="profile">
    <div class="card-deck">
      <base-panel header="Already Know" bg="bg-success" type="known-words" @clickBtn="practice">
        <h5 class="card-title">Words user know <span>(156)</span></h5>
      </base-panel>
      <base-panel header="Repeate" bg="bg-warning" type="forgetten-words" @clickBtn="practice">
        <h5 class="card-title">Forgeten words <span>(156)</span></h5>
      </base-panel>
      <base-panel header="Learn" bg="bg-info" type="new-words" @clickBtn="practice">
        <h5 class="card-title">Learn new words</h5>
      </base-panel>
    </div>
  </div>
</template>

<script>
import BasePanel from "../components/ui/BasePanel.vue";
export default {
  components: { BasePanel },
  methods: {
    practice(e){
      console.log(e)
    }
  },
};
</script>
<style scoped>
</style>
