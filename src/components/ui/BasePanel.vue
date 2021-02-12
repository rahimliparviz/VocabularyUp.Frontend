<template>
  <div class="card text-white mb-3" :class="bg" style="max-width: 18rem">
    <div class="card-header">{{ header }}</div>
    <div class="card-body">
      <slot></slot>
      <router-link
        class="btn btn-light"
        :to="{ name: 'Practice', params: { type: type } }"
      >
        Start Practice</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "bg", "type"],
};
</script>

