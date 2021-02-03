
<template>
  <div>
    <form>
      <input
        type="text"
        value=""
        v-model="projectName"
        placeholder="Please enter the project name"
      />
      <input type="file" v-on:change="getFile($event)" />
      <button v-on:click="submitForm($event)">Upload</button>
    </form>
  </div>
</template>
 
<script>
///This component is the component used to upload the bdls file
export default {
  data() {
    return {
      projectName: "",
      file: "",
    };
  },
  methods: {
    getFile(event) {
      this.file = event.target.files[0];
      console.log(this.file);
    },
    submitForm(event) {
      event.preventDefault();
      let formData = new FormData();
      formData.append("file", this.file);
      formData.append("name", this.projectName);

    //   let config = {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   };

    //   this.$http
    //     .post(this.uploadURL, formData, config)
    //     .then(function (response) {
    //       if (response.status === 200) {
    //         console.log(response.data);
    //       }
    //     });


        
      this.$agent.Phrase.upload(formData)
        .then(() => {
          this.reset();
        })
        .catch((errorData) => {
          this.errors = errorData.data.errors;
          console.log(errorData);
        });
    },
  },
};
</script>
 
<style lang="scss" scoped>
