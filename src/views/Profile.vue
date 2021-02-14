<template>
  <div class="profile">
    <div class="card-deck">
      <base-panel
        header="Already Know"
        bg="bg-success"
        type="known"
      
      >
        <h5 class="card-title">Words user know <span>({{profile.knownPhrasesCount}})</span></h5>
      </base-panel>
      <base-panel
        header="Repeat"
        bg="bg-warning"
        type="forgotten"
      
      >
        <h5 class="card-title">Forgeten words <span>({{profile.forgottenPhrasesCount}})</span></h5>
      </base-panel>
      <base-panel
        header="Learn"
        bg="bg-info"
        type="new-words"
      >
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
      profile:{}
    }
  },
  methods: {
    getProfile(){
      // TODO: get languages id from user

      var profilePayload = {
        FromLanguageId : "167914a7-1ce0-4b93-8734-3e67283c0faf",
        ToLanguageId : "6405b79c-1b8c-4135-a7f2-129cb16030ca"
      }

      this.$agent.User.profile(profilePayload)
       .then((data) => {
          this.profile = data;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  created() {
    this.getProfile();
  },
};
</script>
<style scoped>
</style>
