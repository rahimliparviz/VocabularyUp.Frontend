<template>
  <div>
    <div class="row">
      <button class="btn btn-success" @click="createMode = true">Create</button>
    </div>
    <div class="row">
      <ul class="list-group">
        <li
          class="list-group-item list-group-item-warning"
          v-for="error in errors"
          :key="error"
        >
          {{ error }}
        </li>
      </ul>
    </div>
    <div class="row">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Language</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="createMode">
            <th scope="row">#</th>
            <td>
              <input type="text" v-model="newLanguageName" />
            </td>
            <td>
              <div class="btn-group" role="group" aria-label="Basic example">
                <button
                  type="button"
                  class="btn btn-primary"
                  :disabled="!!!newLanguageName"
                  @click="add"
                >
                  Add
                </button>
                <button
                  type="button"
                  class="btn btn-warning"
                  @click="createMode = false"
                >
                  Cancel
                </button>
              </div>
            </td>
          </tr>

          <tr v-for="(language, key) in languages" :key="language.id">
            <th scope="row">{{ key + 1 }}</th>
            <td v-if="editMode && selectedLanguageId == language.id">
              <input type="text" v-model="selectedLanguage.name" />
            </td>
            <td v-else>{{ language.name }}</td>
            <td>
              <div class="btn-group" role="group" aria-label="Basic example">
                <button
                  type="button"
                  v-if="editMode && selectedLanguageId == language.id"
                  class="btn btn-primary"
                  @click="update()"
                >
                  Update
                </button>
                <button
                  type="button"
                  v-else
                  class="btn btn-success"
                  @click="edit(language.id)"
                >
                  Edit
                </button>

                <button
                  type="button"
                  class="btn btn-danger"
                  @click="remove(language.id)"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languages: [],
      editMode: false,
      createMode: false,
      selectedLanguage: null,
      selectedLanguageId: "",
      newLanguageName: "",
      errors: [],
    };
  },
  methods: {
    allLanguages() {
      this.$agent.Language.list()
        .then((data) => {
          console.log(data);
          this.languages = data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    edit(id) {
      (this.editMode = true), (this.selectedLanguageId = id);

      this.selectedLanguage = this.languages.find((l) => l.id == id);
    },
    update() {
      this.$agent.Language.update(this.selectedLanguage)
        .then((res) => {
          console.log(res);
          this.errors = [];
        })
        .catch((errorData) => {
          this.errors = errorData.data.errors;
          console.log(errorData);
        });

      this.selectedLanguage = null;
      this.selectedLanguageId = "";
    },
    remove(id) {
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        })
        .then((result) => {
          if (result.value) {
            this.$agent.Language.delete(id).then(() => {
              this.languages = this.languages.filter((item) => {
                return item.id != id;
              });
            });
          }
        });
    },
    add() {
      let newLanguage = { name: this.newLanguageName };
      this.$agent.Language.create(newLanguage)
        .then(() => {
          this.createMode = false;
          this.allLanguages();
          this.errors = [];
        })
        .catch((errorData) => {
          this.errors = errorData.data.errors;
          console.log(errorData);
        });
    },
  },
  created() {
    this.allLanguages();
  },
};
</script>