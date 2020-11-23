<template>
  <div class="row">
    <div class="form-group col-md-6">
      <label for="inputState">Language</label>
      <span type="text" class="form-control" >{{language.name}}</span>
      <input type="hidden" value="language.id">
    </div>

    <div class="form-group col-md-6">
      <label for="inputCity">{{ label }}</label>
      <input type="text" class="form-control" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    language:Object
  },
};
</script>